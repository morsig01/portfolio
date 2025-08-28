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
    <div className="w-full flex flex-col gap-4 text-center items-center justify-center py-20 md:py-40 px-10 border-b"
    style={{ borderColor: 'var(--border-color)' }}
    >
      <div
        className='p-6 cursor-pointer rounded-xl hover:shadow select-none transition'
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