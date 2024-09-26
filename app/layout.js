import { Inter } from "next/font/google";
import "./globals.css";
import FooterMenu from "./components/FooterMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Personalized Stories for Kids | StoryNest Kids",
  description: "Create magical personalized bedtime stories for your children at StoryNest. Choose names, themes, and unique adventures to make every story special!",
  openGraph: {
    title: "Best Personalized Stories for Kids | StoryNest Kids",
    description: "Create magical personalized bedtime stories for your children at StoryNest. Choose names, themes, and unique adventures to make every story special!",
    url: "https://www.storynestkids.com/",
    images: [
      {
        url: "https://www.storynestkids.com/images/kid-story.png",
        width: 800,
        height: 600,
        alt: "Magical personalized stories for kids",
      },
    ],
  },
  alternates: {
    canonical: "https://www.storynestkids.com/",
  },
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.storynestkids.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.storynestkids.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "StoryNest Kids",
    "url": "https://www.storynestkids.com",
    "logo": "https://www.storynestkids.com/images/kid-story.png",
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <main className="min-h-screen">{children}</main>
        <FooterMenu />
      </body>
    </html>
  );
}
