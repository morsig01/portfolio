import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

const allQuotesQuery = `
  *[_type == "quote"]{
    quote,
    origin
  }
`;

export async function GET() {
  try {
    const quotes = await client.fetch(allQuotesQuery);
    if (!quotes || quotes.length === 0) {
      return NextResponse.json(null);
    }
    const idx = Math.floor(Math.random() * quotes.length);
    return NextResponse.json(quotes[idx]);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}