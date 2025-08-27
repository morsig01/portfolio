import { quoteCountQuery, randomQuoteQuery } from '@/sanity/queries/query';
import { client } from "../../sanity/lib/client";
import { quoteType } from '@/types/QuoteType';
import { unstable_noStore as noStore } from 'next/cache';
import UpdateQuote from '../organisms/QuoteUpdate';

export default async function Quotes() {
    noStore();
    const count: number = await client.fetch(quoteCountQuery);
    if (!count) {
        return (
            <div className="w-full flex items-center justify-center py-20 border-b border-neutral-300 dark:border-neutral-700">
                <div className="flex items-center justify-center min-h-[60vh]">No quotes.</div>
            </div>
        );
    }

    const idx = Math.floor(Math.random() * count);
    const quote: quoteType = await client.fetch(randomQuoteQuery, { idx });

    return (
        <UpdateQuote initialQuote={quote} />
    );
}