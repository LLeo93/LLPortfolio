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

const getLanguageColor = (name: string): string =>
  LANGUAGE_COLORS[name] || '#06b6d4';

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

const getGitHubApiBaseUrl = (): string => {
  const host = typeof window !== 'undefined' ? window.location.hostname : '';
  if (host === 'localhost' || host === '127.0.0.1') {
    return 'http://localhost:3001';
  }
  return '';
};

const fetchGitHubEndpoint = async <T>(
  type: 'activity' | 'languages',
  username: string,
): Promise<T | null> => {
  try {
    const baseUrl = getGitHubApiBaseUrl();
    const url = `${baseUrl}/api/github?type=${type}&username=${encodeURIComponent(username.trim())}`;
    console.log('[GitHubService] calling endpoint:', url);

    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
    });

    console.log('[GitHubService] response status:', response.status, 'url:', url);

    if (!(await checkResponse(response))) return null;
    const data = (await response.json()) as T;
    console.log('[GitHubService] parsed payload:', data);
    return data;
  } catch (error) {
    console.error('[GitHubService] Fetch error:', error);
    return null;
  }
};

export const getLatestPush = async (
  username: string,
): Promise<GitHubActivityData | null> => {
  const data = await fetchGitHubEndpoint<{ activity: GitHubActivityData | null }>(
    'activity',
    username,
  );

  if (data?.activity) {
    return data.activity;
  }

  return {
    repoName: 'GitHub',
    message: 'No public activity yet',
    date: new Date().toISOString(),
    url: `https://github.com/${username.trim() || 'LLeo93'}`,
    limitRemaining: '0',
    limitReset: '0',
  };
};

export const getUserLanguages = async (
  username: string,
): Promise<LanguageData[]> => {
  const data = await fetchGitHubEndpoint<{ languages: LanguageData[] }>(
    'languages',
    username,
  );

  return (data?.languages ?? []).map((language) => ({
    ...language,
    color: language.color || getLanguageColor(language.name),
  }));
};
