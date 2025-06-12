// app/components/hero-section.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  bookTitle: string;
  bookSummary: string;
  bookCoverSrc: string;
  epubDownloadLink: string;
  pdfDownloadLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  bookTitle,
  bookSummary,
  bookCoverSrc,
  epubDownloadLink,
  pdfDownloadLink,
}) => {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Blurred Background Image */}
      <Image
        src="/images/flowers.jpg"
        alt="Beautiful serene garden background"
        layout="fill"
        objectFit="cover"
        quality={80}
        priority // Prioritize loading for LCP
        className="absolute inset-0 z-0 opacity-40 md:opacity-50"
      />
      {/* Optional: Overlay to darken background image and improve text contrast */}
      <div className="absolute inset-0 z-10 bg-kikelomo-purple-dark opacity-30"></div>{" "}
      {/* Adjusted opacity as needed */}
      <div className="relative z-20 container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Book Cover */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-96 md:w-80 md:h-[480px] lg:w-96 lg:h-[540px] shadow-2xl rounded-lg overflow-hidden border-4 border-kikelomo-gold-primary">
            <Image
              src={bookCoverSrc}
              alt={bookTitle}
              layout="fill"
              objectFit="cover"
              quality={90}
              className="rounded-md"
            />
          </div>
        </div>

        {/* Right Column: Title, Summary, Download Buttons */}
        <div className="text-center md:text-left text-kikelomo-text-light">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            {bookTitle}
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-xl mx-auto md:mx-0 drop-shadow-md">
            {bookSummary}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href={epubDownloadLink} download>
              <Button className="w-full sm:w-auto bg-kikelomo-gold-primary text-kikelomo-purple-dark hover:bg-kikelomo-gold-accent px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-colors duration-300">
                Download EPUB
              </Button>
            </a>
            <a href={pdfDownloadLink} download>
              <Button
                variant="outline"
                className="w-full sm:w-auto border-2 border-kikelomo-gold-primary text-kikelomo-gold-primary hover:bg-kikelomo-gold-primary hover:text-kikelomo-purple-dark px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-colors duration-300"
              >
                Download PDF
              </Button>
            </a>
          </div>
          <p className="mt-6 text-sm text-kikelomo-text-light opacity-80">
            *Free for a limited time!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
