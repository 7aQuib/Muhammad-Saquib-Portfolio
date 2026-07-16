import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

export async function GET() {
  const rssUrl = process.env.NEXT_PUBLIC_BEHANCE_RSS_URL;
  
  if (!rssUrl) {
    // If no RSS feed is provided, return an empty array gracefully
    return NextResponse.json({ projects: [] });
  }

  try {
    const parser = new Parser();
    const feed = await parser.parseURL(rssUrl);

    // Map RSS items to our project format
    const projects = feed.items.map((item, index) => {
      // Try to extract an image from the content if available (RSS.app usually provides this)
      const imgMatch = item.content?.match(/<img[^>]+src="([^">]+)"/);
      const imageUrl = imgMatch ? imgMatch[1] : 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop';
      
      return {
        id: `behance-${index}-${Date.now()}`,
        title: item.title || 'Behance Project',
        category: 'Behance',
        image: imageUrl,
        client: 'Personal / Client',
        year: new Date(item.pubDate || Date.now()).getFullYear().toString(),
        link: item.link, // Used to link out directly to Behance
        overview: item.contentSnippet || 'Check out my latest project on Behance.',
        challenge: 'See full details on Behance.',
        solution: 'See full details on Behance.',
        results: ['Viewed on Behance'],
        gallery: [imageUrl]
      };
    });

    return NextResponse.json({ projects });
  } catch (error) {
    console.error('Error fetching Behance RSS:', error);
    return NextResponse.json({ projects: [], error: 'Failed to fetch Behance projects' }, { status: 500 });
  }
}
