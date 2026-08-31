export default async function handler(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const username = searchParams.get('username') || 'LLeo93';
  const token = process.env.GITHUB_TOKEN;

  console.log('[Vercel GitHub proxy] request received:', {
    type,
    username,
    hasToken: Boolean(token),
    url: request.url,
  });

  if (!token) {
    console.error('[Vercel GitHub proxy] Missing GITHUB_TOKEN');
    return Response.json(
      {
        error: 'Missing GITHUB_TOKEN',
      },
      { status: 500 },
    );
  }

  const headers = {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `Bearer ${token}`,
    'User-Agent': 'LLPortfolio-App',
  };

  try {
    if (type === 'activity') {
      console.log('[Vercel GitHub proxy] fetching activity for:', username);
      const activityResponse = await fetch(
        `https://api.github.com/users/${username.trim()}/events/public`,
        { headers },
      );

      console.log('[Vercel GitHub proxy] activity status:', activityResponse.status);

      if (!activityResponse.ok) {
        const errorData = await activityResponse.json().catch(() => ({}));
        console.error('[Vercel GitHub proxy] activity failed:', errorData);
        return Response.json(
          { error: errorData.message || 'GitHub API error' },
          { status: activityResponse.status },
        );
      }

      const events = await activityResponse.json();
      if (!events?.length) {
        return Response.json({ activity: null }, { status: 200 });
      }

      const pushEvent = events.find(
        (event: any) => event.type === 'PushEvent' && event.payload?.commits?.length > 0,
      );

      const event = pushEvent || events[0];

      return Response.json(
        {
          activity: {
            repoName:
              event.repo?.name?.split('/')[1] || event.repo?.name || 'Unknown',
            message:
              event.type === 'PushEvent' && event.payload?.commits?.[0]?.message
                ? event.payload.commits[0].message
                : `Activity: ${event.type?.replace('Event', '') || 'Update'}`,
            date: event.created_at || new Date().toISOString(),
            url: `https://github.com/${event.repo?.name || username}`,
            limitRemaining: activityResponse.headers.get('x-ratelimit-remaining') || '0',
            limitReset: activityResponse.headers.get('x-ratelimit-reset') || '0',
          },
        },
        { status: 200 },
      );
    }

    if (type === 'languages') {
      console.log('[Vercel GitHub proxy] fetching languages for:', username);
      const reposResponse = await fetch(
        `https://api.github.com/users/${username.trim()}/repos?sort=updated&per_page=10`,
        { headers },
      );

      console.log('[Vercel GitHub proxy] languages status:', reposResponse.status);

      if (!reposResponse.ok) {
        const errorData = await reposResponse.json().catch(() => ({}));
        console.error('[Vercel GitHub proxy] languages failed:', errorData);
        return Response.json(
          { error: errorData.message || 'GitHub API error' },
          { status: reposResponse.status },
        );
      }

      const repos = await reposResponse.json();
      const langCounts: Record<string, number> = {};

      repos.forEach((repo: any) => {
        if (repo.language) {
          langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
        }
      });

      const total = Object.values(langCounts).reduce((a, b) => a + b, 0);
      if (!total) {
        return Response.json({ languages: [] }, { status: 200 });
      }

      const languages = Object.keys(langCounts)
        .map((lang) => ({
          name: lang,
          percentage: Math.round((langCounts[lang] / total) * 100),
          color: {
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
          }[lang] || '#06b6d4',
        }))
        .sort((a, b) => b.percentage - a.percentage);

      return Response.json({ languages }, { status: 200 });
    }

    console.warn('[Vercel GitHub proxy] invalid type:', type);
    return Response.json({ error: 'Invalid type' }, { status: 400 });
  } catch (error: any) {
    console.error('[Vercel GitHub proxy] Unexpected error:', error);
    return Response.json(
      { error: error?.message || 'Unexpected GitHub proxy error' },
      { status: 500 },
    );
  }
}
