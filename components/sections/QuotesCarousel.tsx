import React, { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";
import { allQuotesQuery } from "../../sanity/queries/query";
import { quoteType } from "../../types/QuoteType";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";

const QuotesCarousel: React.FC = () => {
  const [quotes, setQuotes] = useState<quoteType[]>([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const data = await client.fetch(allQuotesQuery);
      setQuotes(data);
    };
    fetchQuotes();
  }, []);

  return (
    <div className="flex items-center justify-center h-[400px] w-full">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={10}
        mousewheel={true}
        freeMode={true}
        grabCursor={true}
        modules={[Mousewheel]}
        style={{ height: "100%", width: "100%", minHeight: "400px" }}
      >
        {quotes.map((q, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col justify-center items-center h-full w-full text-xl text-center border-b border-gray-200 select-none cursor-grab">
              <div className="font-semibold">{q.quote}</div>
              <div className="text-gray-500 mt-2">— {q.origin}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default QuotesCarousel;
