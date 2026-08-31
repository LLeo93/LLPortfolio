import http from 'node:http';
import { URL } from 'node:url';

const PORT = Number(process.env.PORT || 3001);
const token = process.env.GITHUB_TOKEN;

if (!token) {
  console.error('[GitHub Proxy] Missing GITHUB_TOKEN in environment');
  process.exit(1);
}

const server = http.createServer(async (req, res) => {
  try {
    const requestUrl = new URL(req.url || '/', 'http://localhost:3001');
    const type = requestUrl.searchParams.get('type');
    const username = requestUrl.searchParams.get('username') || 'LLeo93';

    console.log('[GitHub Proxy] request:', {
      url: req.url,
      type,
      username,
      hasToken: Boolean(token),
    });

    if (!type || (type !== 'activity' && type !== 'languages')) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid type' }));
      return;
    }

    const headers = {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `Bearer ${token}`,
      'User-Agent': 'LLPortfolio-App-Local',
    };

    const targetUrl =
      type === 'activity'
        ? `https://api.github.com/users/${username.trim()}/events/public`
        : `https://api.github.com/users/${username.trim()}/repos?sort=updated&per_page=10`;

    console.log('[GitHub Proxy] forwarding to:', targetUrl);

    const githubRes = await fetch(targetUrl, { headers });
    const raw = await githubRes.text();
    const payload = raw ? JSON.parse(raw) : null;

    console.log('[GitHub Proxy] GitHub status:', githubRes.status);

    if (!githubRes.ok) {
      const errorMessage = payload?.message || 'GitHub API error';
      res.writeHead(githubRes.status, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      });
      res.end(JSON.stringify({ error: errorMessage }));
      return;
    }

    let mapped;

    if (type === 'activity') {
      if (!Array.isArray(payload) || payload.length === 0) {
        mapped = { activity: null };
      } else {
        const events = payload;
        const pushEvent = events.find(
          (event) => event.type === 'PushEvent' && event.payload?.commits?.length > 0,
        );
        const event = pushEvent || events[0];
        mapped = {
          activity: {
            repoName:
              event.repo?.name?.split('/')[1] || event.repo?.name || 'Unknown',
            message:
              event.type === 'PushEvent' && event.payload?.commits?.[0]?.message
                ? event.payload.commits[0].message
                : `Activity: ${event.type?.replace('Event', '') || 'Update'}`,
            date: event.created_at || new Date().toISOString(),
            url: `https://github.com/${event.repo?.name || username}`,
            limitRemaining: githubRes.headers.get('x-ratelimit-remaining') || '0',
            limitReset: githubRes.headers.get('x-ratelimit-reset') || '0',
          },
        };
      }
    } else {
      const repos = Array.isArray(payload) ? payload : [];
      const langCounts = {};

      for (const repo of repos) {
        if (repo.language) {
          langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
        }
      }

      const total = Object.values(langCounts).reduce((a, b) => a + b, 0);
      const languages = total
        ? Object.keys(langCounts)
            .map((lang) => ({
              name: lang,
              percentage: Math.round((langCounts[lang] / total) * 100),
              color:
                {
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
            .sort((a, b) => b.percentage - a.percentage)
        : [];

      mapped = { languages };
    }

    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'x-ratelimit-remaining': githubRes.headers.get('x-ratelimit-remaining') || '0',
      'x-ratelimit-reset': githubRes.headers.get('x-ratelimit-reset') || '0',
    });
    res.end(JSON.stringify(mapped));
  } catch (error) {
    console.error('[GitHub Proxy] unexpected error:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
    );
  }
});

server.listen(PORT, () => {
  console.log(`[GitHub Proxy] running on http://localhost:${PORT}`);
});
