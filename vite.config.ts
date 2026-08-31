import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: 5173,
      strictPort: false,
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url || '/';

        if (!url.startsWith('/api/github')) {
          next();
          return;
        }

        const requestUrl = new URL(url, 'http://localhost');
        const type = requestUrl.searchParams.get('type');
        const username = requestUrl.searchParams.get('username') || 'LLeo93';
        const token = env.GITHUB_TOKEN || process.env.GITHUB_TOKEN;

        console.log('[Local GitHub proxy] request received:', {
          url,
          type,
          username,
          hasToken: Boolean(token),
        });

        if (!token) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(
            JSON.stringify({
              error: 'Missing GITHUB_TOKEN in local environment.',
              details: 'Add GITHUB_TOKEN to a .env.local file or your shell env.',
            }),
          );
          return;
        }

        try {
          const headers = {
            Accept: 'application/vnd.github.v3+json',
            Authorization: `Bearer ${token}`,
            'User-Agent': 'LLPortfolio-App-Local',
          };

          const targetUrl =
            type === 'activity'
              ? `https://api.github.com/users/${username.trim()}/events/public`
              : `https://api.github.com/users/${username.trim()}/repos?sort=updated&per_page=10`;

          console.log('[Local GitHub proxy] fetching GitHub URL:', targetUrl);

          const response = await fetch(targetUrl, { headers });
          const payload = await response.text();

          console.log('[Local GitHub proxy] GitHub response status:', response.status);

          res.statusCode = response.status;
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('x-ratelimit-remaining', response.headers.get('x-ratelimit-remaining') || '0');
          res.setHeader('x-ratelimit-reset', response.headers.get('x-ratelimit-reset') || '0');
          res.end(payload);
        } catch (error) {
          console.error('[Local GitHub proxy] fetch failed:', error);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(
            JSON.stringify({
              error: 'GitHub proxy failed',
              details: error instanceof Error ? error.message : 'Unknown error',
            }),
          );
        }
      });
    },
  };
});
