#!/usr/bin/env node
import { writeFileSync } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';

const hostname = 'https://tuo-sito.com';
const projects = [
  'spotify',
  'pixelpals',
  'llmeteo',
  'applemusic',
  'llnetflix',
  'prompt-ai',
];
const sitemap = new SitemapStream({ hostname });
['/', '/about', '/projects', '/certifications'].forEach((path) => {
  sitemap.write({ url: path, changefreq: 'monthly', priority: 0.8 });
});
projects.forEach((id) => {
  sitemap.write({
    url: `/projects/${id}`,
    changefreq: 'monthly',
    priority: 0.9,
  });
});
sitemap.end();
streamToPromise(sitemap)
  .then((data) => writeFileSync('./public/sitemap.xml', data.toString()))
  .catch((err) => console.error(err));
