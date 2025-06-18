// app/page.tsx
import HeroSection from "./components/hero-section";
import BibleVerseCarousel from "./components/bible-verse-carousel";
import AboutMeSection from "./components/about-me-section";
import YouTubeCarousel from "./components/youtube-video-carousel";

export default function Home() {
  const bookData = {
    title: "Loved, Called, and Chosen",
    summary: `Discover your God-given identity and purpose. This book will take you on a journey of healing, truth, and freedom — reminding you of who you are and who God says you are.`,
    coverSrc: "/images/book-cover.png",
    epubLink: "/downloads/loved-called-chosen.epub",
    pdfLink: "/downloads/loved-called-chosen.pdf",
  };

  const kikelomoProfileImage = "/images/kikelomo-profile.JPEG";

  // --- NEW: Social Media Links ---
  const kikelomoSocials = {
    youtube: "http://www.youtube.com/channel/UCSpO4gKeq3llQVq7-2BWJyw",
    instagram:
      "https://www.instagram.com/kikelomobalo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    facebook: "https://www.facebook.com/kikelomobalogun",
  };

  return (
    <div>
      <section id="home">
        {" "}
        {/* Add ID for Home/Hero section */}
        <HeroSection
          bookTitle={bookData.title}
          bookSummary={bookData.summary}
          bookCoverSrc={bookData.coverSrc}
          epubDownloadLink={bookData.epubLink}
          pdfDownloadLink={bookData.pdfLink}
        />
      </section>

      <section id="encouragements">
        {" "}
        {/* Add ID for Encouragements section */}
        <BibleVerseCarousel />
      </section>

      <section id="about">
        {" "}
        {/* Add ID for About Me section */}
        <AboutMeSection
          kikelomoImageSrc={kikelomoProfileImage}
          youtubeLink={kikelomoSocials.youtube} // Pass new props
          instagramLink={kikelomoSocials.instagram}
          facebookLink={kikelomoSocials.facebook}
        />
      </section>

      <section id="youtube">
        <YouTubeCarousel />
      </section>

      {/* A simple footer to end the page */}
      <footer className="bg-kikelomo-purple-dark text-kikelomo-text-light text-center py-8">
        <p>
          &copy; {new Date().getFullYear()} Kikelomo Balogun. All rights
          reserved.
        </p>
        <p className="mt-2 text-sm opacity-80">Built with purpose and grace.</p>
      </footer>
    </div>
  );
}
