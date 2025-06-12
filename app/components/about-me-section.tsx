// app/components/about-me-section.tsx
import Image from "next/image";

interface AboutMeSectionProps {
  kikelomoImageSrc: string; // Path to Kikelomo's picture
}

const AboutMeSection: React.FC<AboutMeSectionProps> = ({
  kikelomoImageSrc,
}) => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-kikelomo-purple-light overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-kikelomo-purple-dark text-center mb-12">
          About Kikelomo O. Balogun
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Kikelomo's Picture */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl border-4 border-kikelomo-gold-primary">
              <Image
                src={kikelomoImageSrc}
                alt="Kikelomo O. Balogun"
                layout="fill"
                objectFit="cover"
                quality={90}
                className="transition-transform duration-300 hover:scale-105" // Subtle hover effect
              />
            </div>
          </div>

          {/* Right Column: About Me Text */}
          <div className="text-center md:text-left text-kikelomo-text-dark max-w-xl mx-auto md:mx-0">
            <p className="text-lg mb-4 leading-relaxed">
              Kikelomo O. Balogun is a passionate voice dedicated to sharing
              profound encouragements, timeless wisdom, and rich biblical
              content. Through her insightful teachings and powerful messages,
              she helps individuals discover their true identity in Christ and
              walk boldly in their divine purpose.
            </p>
            <p className="text-lg leading-relaxed">
              With a heart committed to uplifting and empowering, Kikelomo's
              work, including her latest book "Loved, Called, and Chosen,"
              serves as a guiding light for those seeking clarity, strength, and
              a deeper connection with God. Join her on a journey of spiritual
              growth and profound revelation.
            </p>
            {/* Optional: Add a link to her YouTube or other social media if desired */}
            {/*
            <Button variant="outline" className="mt-6 border-2 border-kikelomo-purple-dark text-kikelomo-purple-dark hover:bg-kikelomo-purple-dark hover:text-kikelomo-text-light px-6 py-3 rounded-full">
              Connect with Kikelomo
            </Button>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
