export interface GitHubActivityData {
  repoName: string;
  message: string;
  date: string;
  url: string;
  limitRemaining: string;
  limitReset: string;
}

export interface LanguageData {
  name: string;
  percentage: number;
  color: string;
}

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Python: '#3572A5',
  'C#': '#178600',
  PHP: '#4F5D95',
  Ruby: '#701516',
  'C++': '#f34b7d',
  C: '#555555',
  Go: '#00ADD8',
  Vue: '#2c3e50',
  Svelte: '#ff3e00',
  Shell: '#89e051',
  SCSS: '#c6538c',
  Dart: '#00B4AB',
};

const checkResponse = async (response: Response): Promise<boolean> => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error(
      `GitHub API Error: ${response.status} - ${errorData.message || 'Unknown'}`,
    );
    if (response.status === 403) {
      console.warn(
        'RATE LIMIT: Le chiamate API sono temporaneamente bloccate.',
      );
    }
    return false;
  }
  return true;
};

export const getLatestPush = async (
  username: string,
): Promise<GitHubActivityData | null> => {
  try {
    const url = `https://api.github.com/users/${username.trim()}/events/public`;
    const response = await fetch(url, {
      headers: { Accept: 'application/vnd.github.v3+json' },
    });

    const remaining = response.headers.get('x-ratelimit-remaining') || '0';
    const resetTime = response.headers.get('x-ratelimit-reset') || '0';

    if (!(await checkResponse(response))) return null;

    const events = await response.json();
    if (!events?.length) return null;

    const pushEvent = events.find(
      (e: any) => e.type === 'PushEvent' && e.payload?.commits?.length > 0,
    );

    const event = pushEvent || events[0];

    return {
      repoName:
        event.repo?.name?.split('/')[1] || event.repo?.name || 'Unknown',
      message:
        event.type === 'PushEvent' && event.payload?.commits?.[0]?.message
          ? event.payload.commits[0].message
          : `Activity: ${event.type?.replace('Event', '') || 'Update'}`,
      date: event.created_at || new Date().toISOString(),
      url: `https://github.com/${event.repo?.name || username}`,
      limitRemaining: remaining,
      limitReset: resetTime,
    };
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
};

export const getUserLanguages = async (
  username: string,
): Promise<LanguageData[]> => {
  try {
    const url = `https://api.github.com/users/${username.trim()}/repos?sort=updated&per_page=10`;
    const response = await fetch(url);

    if (!(await checkResponse(response))) return [];

    const repos = await response.json();
    const langCounts: Record<string, number> = {};

    repos.forEach((repo: any) => {
      if (repo.language) {
        langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
      }
    });

    const total = Object.values(langCounts).reduce((a, b) => a + b, 0);
    if (total === 0) return [];

    return Object.keys(langCounts)
      .map((lang) => ({
        name: lang,
        percentage: Math.round((langCounts[lang] / total) * 100),
        color: LANGUAGE_COLORS[lang] || '#06b6d4',
      }))
      .sort((a, b) => b.percentage - a.percentage);
  } catch (e) {
    return [];
  }
};
