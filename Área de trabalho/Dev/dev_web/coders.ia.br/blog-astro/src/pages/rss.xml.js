import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => {
    const now = new Date();
    return data.draft !== true && data.date <= now;
  });

  const sortedPosts = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'Coders.ia.br',
    description: 'Blog sobre desenvolvimento, inteligência artificial e tecnologias modernas',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      author: post.data.author,
      link: `/blog/${post.slug}/`,
      categories: [post.data.category],
    })),
    customData: `<language>pt-BR</language>`,
  });
}