// app/components/youtube-video-carousel.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const videoUrlsWithTitles = [
  {
    url: "https://youtu.be/2FFGde5SlhQ?si=3HXhQYBkqFfgGebl", // Example URL
    title: "Trust God To Take Care of You ✨Listen Every Day", // Example title
  },
  {
    url: "https://youtu.be/WBzLgi1p6RM?si=y7A0_yurE4n4JLik", // Example URL
    title: "LIFE IS SHORT - Inspirational & Motivational Video", // Example title
  },
  {
    url: "https://youtu.be/VWK4fv4rG50?si=_vleIcPqoqtWV7M9", // Example URL
    title: "Wisdom for Your Walk: The Walk", // Example title
  },
  {
    url: "https://youtu.be/eI2lMUgPtqU?si=GhyOo8jeEo5FLGUU", // Example URL
    title: "3 Things God cannot do", // Example title
  },
];

function extractYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") {
      return u.pathname.substring(1);
    } else if (u.hostname.includes("youtube.com")) {
      return u.searchParams.get("v");
    }
  } catch (e) {
    console.error("Invalid YouTube URL:", url);
    return null;
  }
  return null;
}

const YouTubeCarousel = () => {
  const videos = videoUrlsWithTitles
    .map(({ url, title }) => {
      const id = extractYouTubeId(url);
      if (!id) return null;
      // Use maxresdefault for the best quality thumbnail, falling back to hqdefault if not available
      const thumbnail = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
      const fallbackThumbnail = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
      return {
        id,
        title,
        thumbnail,
        fallbackThumbnail,
        link: url, // Use the original URL
      };
    })
    .filter(Boolean) as {
    id: string;
    title: string;
    thumbnail: string;
    fallbackThumbnail: string;
    link: string;
  }[];

  const plugin = React.useRef(
    Autoplay({
      delay: 5000, // Slightly slower autoplay for better readability
      stopOnInteraction: true,
      rootNode: (emblaRoot) => emblaRoot.parentElement,
    })
  );

  return (
    <section className="relative w-full py-16 md:py-24  text-kikelomo-text-light overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-kikelomo-purple-dark text-center mb-12">
          Watch More Encouragements
        </h2>

        <Carousel
          className="w-full relative rounded-xl shadow-2xl overflow-hidden border-2 "
          plugins={[plugin.current]}
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.play()}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {videos.map((video) => (
              <CarouselItem
                key={video.id}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="bg-kikelomo-purple-dark rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02]">
                  <Link
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-video"
                  >
                    {/* Use the primary thumbnail, and fallback to hqdefault if maxresdefault fails */}
                    <Image
                      src={video.thumbnail}
                      alt={`YouTube thumbnail for ${video.title}`}
                      fill
                      objectFit="cover"
                      className="rounded-t-lg transition-opacity duration-300 hover:opacity-80"
                      onError={(e) => {
                        e.currentTarget.onerror = null; // Prevent infinite loop
                        e.currentTarget.src = video.fallbackThumbnail; // Use fallback thumbnail
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </Link>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold mb-3 leading-tight text-kikelomo-text-light">
                      {video.title}
                    </h3>
                    <Link
                      href={video.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-kikelomo-gold-primary text-kikelomo-purple-dark hover:bg-kikelomo-gold-accent px-6 py-2 rounded-full font-semibold">
                        Watch Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2 z-30 hidden sm:block">
            <CarouselPrevious className="bg-kikelomo-gold-primary text-kikelomo-purple-dark hover:bg-kikelomo-gold-accent disabled:opacity-50 h-10 w-10 flex justify-center items-center" />
          </div>
          <div className="absolute top-1/2 right-4 -translate-y-1/2 z-30 hidden sm:block">
            <CarouselNext className="bg-kikelomo-gold-primary text-kikelomo-purple-dark hover:bg-kikelomo-gold-accent disabled:opacity-50 h-10 w-10 flex justify-center items-center" />
          </div>
        </Carousel>
        {/* Button to visit entire channel */}
        <div className="text-center mt-12">
          <Link
            href="https://img.youtube.com/vi/1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-kikelomo-gold-primary text-kikelomo-purple-dark hover:bg-kikelomo-gold-accent px-10 py-4 text-xl font-bold rounded-full shadow-lg transition-colors duration-300">
              Visit Kikelomo's YouTube Channel
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default YouTubeCarousel;
