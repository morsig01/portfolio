import { quoteCountQuery, randomQuoteQuery } from '@/sanity/queries/query';
import { client } from "../../sanity/lib/client";
import { quoteType } from '@/types/QuoteType';
import { unstable_noStore as noStore } from 'next/cache';


export default async function Quotes() {
    noStore();
    const count: number = await client.fetch(quoteCountQuery);
    if (!count) {
        return (
            <div className="w-full flex items-center justify-center py-20 border-b border-neutral-300 dark:border-neutral-700">
                <div className="flex items-center justify-center min-h-[60vh]">No quotes?.</div>
            </div>
        );
    }

    const idx = Math.floor(Math.random() * count);
    const quote: quoteType = await client.fetch(randomQuoteQuery, { idx });

    if (!quote) {
        return (
            <div className="w-full flex items-center justify-center py-20 border-b border-neutral-300 dark:border-neutral-700">
                <div className="flex items-center justify-center min-h-[60vh]">No quotes?.</div>
            </div>
        );
    }
    return (
        <div className="w-full flex flex-col gap-4 text-center items-center justify-center py-20 md:py-40 px-10 border-b border-neutral-300 dark:border-neutral-700">
            <div className='text-4xl'>"{quote.quote}"</div>
            <div className='text-xl'>- {quote.origin}</div>
        </div>
    );
}