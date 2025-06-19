// app/components/bible-verse-carousel.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"; // Import the Autoplay plugin

interface BibleVerse {
  id: string;
  verse: string;
  reference: string;
  backgroundImg: string;
}

const bibleVerses: BibleVerse[] = [
  {
    id: "1",
    verse: `“I already knew you before I made you inside your mother's body. I chose you to be special before you were born…”`,
    reference: "Jeremiah 1:5 (MSG)",
    backgroundImg: "/images/garden-bg.jpg",
  },
  {
    id: "2",
    verse: `“Then God said, ‘We will make humans so that they are very much like us… They will rule over the fish in the sea, the birds in the sky, the farm animals, and all the animals that move along the ground.’"`,
    reference: "Genesis 1:26 (ESV)",
    backgroundImg: "/images/waterfall.jpg",
  },
  {
    id: "3",
    verse: `“Satan’s greatest threat is not your talent, your beauty, or your potential — it is your identity."`,
    reference: "Kikelomo O. Balogun",
    backgroundImg: "/images/book-cover.jpg",
  },
  {
    id: "4",
    verse: `“Every child is born with a clean slate. Yet, with time, society, pain, trauma, and false narratives scribble on it — etching confusion, rejection, and fear into their identity."`,
    reference: "Kikelomo O. Balogun",
    backgroundImg: "/images/waterfall2.jpg",
  },
];

const BibleVerseCarousel: React.FC = () => {
  // We no longer need useEmblaCarousel directly if Autoplay plugin handles it.
  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }); // No longer needed for this specific setup

  // For Autoplay plugin, we pass the plugin instance to the Carousel component
  const pluginRef = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }) // Autoplay every 3 seconds, doesn't stop if user interacts
  );

  return (
    <section className="relative w-full py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-kikelomo-purple-dark text-center mb-12">
          Encouragements for Your Journey
        </h2>

        <Carousel
          className="w-full relative rounded-xl shadow-2xl overflow-hidden border-2 border-kikelomo-gold-primary"
          opts={{ loop: true }}
          plugins={[pluginRef.current]} // Pass the Autoplay plugin here
          // We don't need `setEmblaApi` or `emblaRef` on Carousel itself with this approach
        >
          {/* The CarouselContent directly contains CarouselItems */}
          <CarouselContent>
            {bibleVerses.map((verseData, index) => (
              <CarouselItem
                key={verseData.id}
                className="relative h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden"
              >
                {/* Background Image for each slide */}
                <Image
                  src={verseData.backgroundImg}
                  alt={`Background for verse ${index + 1}`}
                  fill
                  objectFit="cover"
                  quality={70}
                  className="absolute inset-0 z-0 opacity-80" // Adjust opacity as needed
                />
                {/* Purple Overlay for readability */}
                <div className="absolute inset-0 z-10 bg-kikelomo-purple-dark opacity-20"></div>

                {/* Verse Content */}
                <div className="relative z-20 flex flex-col items-center justify-center h-full text-center p-6 md:p-10">
                  <p className="text-kikelomo-text-light text-2xl md:text-3xl lg:text-4xl font-semibold italic mb-4 drop-shadow-md max-w-4xl">
                    &quot;{verseData.verse}&quot;
                  </p>
                  <p className="text-kikelomo-gold-primary text-xl md:text-2xl font-bold drop-shadow-lg">
                    — {verseData.reference}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute top-1/2 left-4 -translate-y-1/2 z-30">
            <CarouselPrevious
              className="
                bg-kikelomo-gold-primary text-kikelomo-purple-dark
                hover:bg-kikelomo-gold-accent
                disabled:opacity-50
                h-12 w-12
                flex justify-center items-center 
              "
            />
          </div>
          <div className="absolute top-1/2 right-4 -translate-y-1/2 z-30">
            <CarouselNext
              className="
                bg-kikelomo-gold-primary text-kikelomo-purple-dark
                hover:bg-kikelomo-gold-accent
                disabled:opacity-50
                h-12 w-12
                flex justify-center items-center
              "
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default BibleVerseCarousel;
