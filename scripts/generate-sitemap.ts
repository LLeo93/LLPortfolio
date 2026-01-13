#!/usr/bin/env node
import { writeFileSync } from 'node:fs';
import { SitemapStream, streamToPromise } from 'sitemap';

const hostname = 'https://portfolio-psi-lilac-74.vercel.app';

const projects = [
  'spotify',
  'pixelpals',
  'llmeteo',
  'applemusic',
  'llnetflix',
  'prompt-ai',
];

const certifications = [
  'master-epicode',
  'frontend-synergie',
  'digital-skills-edo',
];

async function buildSitemap() {
  const sitemap = new SitemapStream({ hostname });

  ['/', '/about', '/projects', '/certificationsList'].forEach((path) => {
    sitemap.write({
      url: path,
      changefreq: 'monthly',
      priority: 0.8,
    });
  });

  projects.forEach((id) => {
    sitemap.write({
      url: `/projects/${id}`,
      changefreq: 'monthly',
      priority: 0.9,
    });
  });

  certifications.forEach((id) => {
    sitemap.write({
      url: `/certifications/${id}`,
      changefreq: 'monthly',
      priority: 0.9,
    });
  });

  sitemap.end();

  try {
    const data = await streamToPromise(sitemap);
    writeFileSync('./public/sitemap.xml', data.toString());
    console.log('✅ sitemap.xml generata in public/sitemap.xml');
  } catch (err) {
    console.error('Errore durante la generazione della sitemap:', err);
    process.exit(1);
  }
}

buildSitemap();
