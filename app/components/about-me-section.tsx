// app/components/about-me-section.tsx
"use client"; // Needs to be a client component for Framer Motion hooks

import Image from "next/image";
import { motion, Variants } from "framer-motion"; // Import Variants type
import {
  Lightbulb,
  Heart,
  BookOpen,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface AboutMeSectionProps {
  kikelomoImageSrc: string; // Path to Kikelomo's picture
  youtubeLink: string; // Existing YouTube link
  instagramLink: string; // New Instagram link
  facebookLink: string;
}

const AboutMeSection: React.FC<AboutMeSectionProps> = ({
  kikelomoImageSrc,
  youtubeLink,
  instagramLink,
  facebookLink,
}) => {
  // Define Variants explicitly
  const containerVariants: Variants = {
    // Added type annotation
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut", // Keep as string literal. TypeScript should now correctly infer this with Variants type.
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    // Added type annotation
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full py-16 md:py-24 bg-kikelomo-purple-light/10 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-kikelomo-purple-dark text-center mb-12">
          About Kikelomo O. Balogun
        </h2>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Left Column: Kikelomo's Picture */}
          <motion.div
            className="flex justify-center md:justify-end"
            variants={itemVariants}
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl border-4 border-kikelomo-gold-primary">
              <Image
                src={kikelomoImageSrc}
                alt="Kikelomo O. Balogun"
                fill
                objectFit="cover"
                quality={90}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right Column: About Me Text */}
          <motion.div
            className="text-center md:text-left text-kikelomo-text-dark max-w-xl mx-auto md:mx-0"
            variants={containerVariants} // Apply container variants here for staggered text
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.p
              className="text-lg mb-4 leading-relaxed"
              variants={itemVariants}
            >
              Kikelomo O. Balogun is a passionate voice dedicated to sharing
              profound{" "}
              <span className="font-semibold text-kikelomo-purple-dark">
                encouragements
              </span>
              , timeless{" "}
              <span className="font-semibold text-kikelomo-purple-dark">
                wisdom
              </span>
              , and rich{" "}
              <span className="font-semibold text-kikelomo-purple-dark">
                biblical content
              </span>
              .
            </motion.p>

            <motion.p
              className="text-lg mb-6 leading-relaxed"
              variants={itemVariants}
            >
              Through her insightful teachings and powerful messages, she helps
              individuals discover their true{" "}
              <span className="font-bold text-kikelomo-purple-dark">
                identity in Christ
              </span>{" "}
              and walk boldly in their{" "}
              <span className="font-bold text-kikelomo-gold-accent">
                divine purpose
              </span>
              .
            </motion.p>

            <motion.ul
              className="space-y-3 text-left max-w-md mx-auto md:mx-0"
              variants={itemVariants}
            >
              <motion.li
                className="flex items-center gap-3 text-lg"
                variants={itemVariants}
              >
                <Heart className="h-6 w-6 text-kikelomo-gold-accent flex-shrink-0" />
                <span>
                  Empowering others to live a life rooted in God's love.
                </span>
              </motion.li>
              <motion.li
                className="flex items-center gap-3 text-lg"
                variants={itemVariants}
              >
                <Lightbulb className="h-6 w-6 text-kikelomo-gold-accent flex-shrink-0" />
                <span>Unveiling spiritual insights for daily challenges.</span>
              </motion.li>
              <motion.li
                className="flex items-center gap-3 text-lg"
                variants={itemVariants}
              >
                <BookOpen className="h-6 w-6 text-kikelomo-gold-accent flex-shrink-0" />
                <span>
                  Guiding journeys of spiritual growth and profound revelation.
                </span>
              </motion.li>
            </motion.ul>

            {/* Social Media Connect Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
            >
              {/* YouTube Button */}
              <Link
                href={youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-kikelomo-gold-primary text-kikelomo-purple-dark hover:bg-kikelomo-gold-accent px-6 py-3 text-lg font-semibold rounded-full shadow-lg transition-colors duration-300 flex items-center gap-2">
                  <Youtube className="h-5 w-5" /> Connect on YouTube
                </Button>
              </Link>
              {/* Instagram Button */}
              <Link
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-kikelomo-gold-primary text-kikelomo-purple-dark hover:bg-kikelomo-gold-accent px-6 py-3 text-lg font-semibold rounded-full shadow-lg transition-colors duration-300 flex items-center gap-2">
                  <Instagram className="h-5 w-5" /> Connect on Instagram
                </Button>
              </Link>
              {/* Facebook Button (or other social media) */}
              <Link
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-kikelomo-gold-primary text-kikelomo-purple-dark hover:bg-kikelomo-gold-accent px-6 py-3 text-lg font-semibold rounded-full shadow-lg transition-colors duration-300 flex items-center gap-2">
                  <Facebook className="h-5 w-5" /> Connect on Facebook
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMeSection;
