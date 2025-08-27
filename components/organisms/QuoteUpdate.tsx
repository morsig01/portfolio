"use client";

import { useState } from "react";

type QuoteType = {
  quote: string;
  origin?: string;
};

export default function QuotesClient({ initialQuote }: { initialQuote: QuoteType }) {
  const [quote, setQuote] = useState<QuoteType>(initialQuote);

  const fetchQuote = async () => {
    const res = await fetch("/api/randomQuote");
    const data = await res.json();
    setQuote(data);
  };

  return (
    <div className="w-full flex flex-col gap-4 text-center items-center justify-center py-20 md:py-40 px-10 border-b border-neutral-300 dark:border-neutral-700">
      <div
        className='p-6 cursor-pointer hover:outline outline-neutral-300 rounded-xl shadow dark:outline-neutral-700 select-none transition-all'
        onClick={fetchQuote}
        title="Click to shuffle quote"
      >
        <div className='text-4xl'>
          "{quote.quote}"
        </div>
        {quote.origin && <div className='text-xl'>- {quote.origin}</div>}
        <div className="mt-4 text-neutral-400 text-sm">(Click to shuffle)</div>
      </div>
    </div>
  );
}