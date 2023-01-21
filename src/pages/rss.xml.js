import rss from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'AJOngaro | Blog',
    description: 'Software Engineering & Intentional Learning',
    site: 'https://ajongaro.com',
    items: import.meta.glob('./**/*.md'),
  });
}