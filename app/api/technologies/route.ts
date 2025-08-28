import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';
import { technologiesQuery } from '@/sanity/queries/query';

export async function GET() {
  try {
    const technologies = await client.fetch(technologiesQuery);
    return NextResponse.json(technologies);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
