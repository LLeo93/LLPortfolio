export const config = {
  runtime: 'nodejs',
};

export default async function handler(request: Request) {
  const { searchParams } = new URL(
    request.url,
    `https://${request.headers.get('host') || 'localhost:3000'}`,
  );

  const type = searchParams.get('type');
  const username = searchParams.get('username') || 'LLeo93';

  const runtimeEnv = (
    globalThis as typeof globalThis & {
      process?: {
        env?: Record<string, string | undefined>;
      };
    }
  ).process?.env;

  const token = runtimeEnv?.GITHUB_TOKEN;

  console.log('[Vercel GitHub proxy] request received:', {
    type,
    username,
    hasToken: Boolean(token),
    url: request.url,
  });

   const headers: Record<string, string> = {
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': 'LLPortfolio-App',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  } else {
    console.warn('[Vercel GitHub proxy] GITHUB_TOKEN missing, using public GitHub API fallback');
  }

  try {
    if (type === 'activity') {
      console.log('[Vercel GitHub proxy] fetching latest repo activity for:', username);

      const reposResponse = await fetch(
        `https://api.github.com/users/${username.trim()}/repos?sort=updated&per_page=10`,
        { headers },
      );

      console.log('[Vercel GitHub proxy] repos status:', reposResponse.status);

      if (!reposResponse.ok) {
        const errorData = await reposResponse.json().catch(() => ({}));
        console.error('[Vercel GitHub proxy] repos failed:', errorData);
        return Response.json(
          { error: errorData.message || 'GitHub API error' },
          { status: reposResponse.status },
        );
      }

      const repos = await reposResponse.json();
      const repo = repos?.find((item: any) => item?.name) || repos?.[0];

      if (!repo) {
        return Response.json({ activity: null }, { status: 200 });
      }

      const commitsResponse = await fetch(
        `https://api.github.com/repos/${repo.full_name}/commits?per_page=1`,
        { headers },
      );

      console.log('[Vercel GitHub proxy] commits status:', commitsResponse.status);

      if (!commitsResponse.ok) {
        return Response.json(
          {
            activity: {
              repoName: repo.name,
              message: 'Repository updated',
              date: repo.updated_at || new Date().toISOString(),
              url: repo.html_url || `https://github.com/${repo.full_name}`,
              limitRemaining: reposResponse.headers.get('x-ratelimit-remaining') || '0',
              limitReset: reposResponse.headers.get('x-ratelimit-reset') || '0',
            },
          },
          { status: 200 },
        );
      }

      const commits = await commitsResponse.json();
      const commit = commits?.[0];

      return Response.json(
        {
          activity: {
            repoName: repo.name,
            message: commit?.commit?.message?.split('\n')[0] || 'Repository updated',
            date:
              commit?.commit?.author?.date ||
              repo.updated_at ||
              new Date().toISOString(),
            url: repo.html_url || `https://github.com/${repo.full_name}`,
            limitRemaining: reposResponse.headers.get('x-ratelimit-remaining') || '0',
            limitReset: reposResponse.headers.get('x-ratelimit-reset') || '0',
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
