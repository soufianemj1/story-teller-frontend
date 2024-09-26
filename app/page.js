"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Head from "next/head";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    document.body.classList.add("bg-gradient-to-r", "from-blue-200", "via-purple-200", "to-pink-200");
    return () => {
      document.body.classList.remove("bg-gradient-to-r", "from-blue-200", "via-purple-200", "to-pink-200");
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <Head>
        <title>Best Personalized Stories for Kids | StoryNest Kids</title>
        <meta
          name="description"
          content="Create magical personalized bedtime stories for your children at StoryNest. Choose names, themes, and unique adventures to make every story special!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.storynestkids.com/" />
        <meta property="og:title" content="Best Personalized Stories for Kids | StoryNest Kids" />
        <meta property="og:description" content="Create magical personalized bedtime stories for your children at StoryNest. Choose names, themes, and unique adventures to make every story special!" />
        <meta property="og:image" content="/images/kid-story.png" />
        <meta property="og:url" content="https://www.storynestkids.com/" />
      </Head>

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-10 p-6">
  {/* Left Section: Headline & Visual */}
  <div className="flex flex-col justify-center w-full lg:w-1/2 bg-white rounded-lg p-8 shadow-lg transition-transform transform hover:shadow-2xl">
    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 text-center leading-snug">
      ✨ Magical Personalized Stories for Your Kids ✨
    </h1>
    <p className="text-lg md:text-xl text-gray-700 mb-6 text-center leading-relaxed">
      Give your child a story that’s uniquely theirs! Customize every adventure with their name and favorite themes.
    </p>
    <div className="flex justify-center mb-6">
      <Image
        src="/images/home.png"
        alt="Magical personalized stories for kids"
        width={500}
        height={300}
        className="rounded-xl shadow-2xl w-full h-auto"
      />
    </div>
  </div>

  {/* Right Section: CTA and Features */}
  <div className="flex flex-col justify-between items-center w-full lg:w-1/2 bg-white rounded-lg p-10 shadow-xl transition-transform transform hover:shadow-2xl">
    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6 text-center">
      Why Choose StoryNest?
    </h2>
    <ul className="text-lg text-gray-700 space-y-5 mb-8 leading-relaxed">
      <li className="flex items-center">
        <span className="text-2xl mr-3">📚</span>
        <span>Personalized adventures crafted just for your child.</span>
      </li>
      <li className="flex items-center">
        <span className="text-2xl mr-3">🌈</span>
        <span>Unique themes tailored to spark imagination.</span>
      </li>
      <li className="flex items-center">
        <span className="text-2xl mr-3">💖</span>
        <span>Create lasting memories with bedtime stories they'll love.</span>
      </li>
      <li className="flex items-center">
        <span className="text-2xl mr-3">🌟</span>
        <span>Easy-to-use platform designed for parents & kids alike.</span>
      </li>
    </ul>
    <button
      onClick={() => router.push("/selectstory")}
      className="transition-transform transform hover:scale-105 focus:outline-none bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-bold rounded-lg text-white text-xl px-8 py-4 shadow-md hover:shadow-lg"
    >
      Start Your Adventure
    </button>
  </div>
</div>



      {/* Call-to-Action Section for Parents */}
      <div className="w-full max-w-7xl mt-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Every Child Deserves Their Own Story
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          Create a bedtime routine they’ll cherish forever with personalized stories that celebrate your child’s individuality.
        </p>
        <button
          onClick={() => router.push("/selectstory")}
          className="transition-transform transform hover:scale-105 focus:outline-none bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-white text-lg px-8 py-3"
        >
          Create a Story Now
        </button>
      </div>

      {/* New Section: How It Works */}
      <div className="w-full max-w-7xl mt-16 p-6 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">How It Works</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our easy-to-use platform allows you to create magical stories in just a few simple steps:
        </p>
        <ol className="text-left mx-auto max-w-lg space-y-4">
          <li className="flex items-center">
            <span className="font-bold text-blue-500">1.</span>
            <p className="ml-2">Choose your child's name and favorite themes.</p>
          </li>
          <li className="flex items-center">
            <span className="font-bold text-blue-500">2.</span>
            <p className="ml-2">Customize the adventure with unique elements.</p>
          </li>
          <li className="flex items-center">
            <span className="font-bold text-blue-500">3.</span>
            <p className="ml-2">Create and enjoy the story together at bedtime!</p>
          </li>
        </ol>
      </div>

      {/* New Section: Testimonials */}
      <div className="w-full max-w-7xl mt-16 p-6 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">What Parents Are Saying</h2>
        <div className="space-y-4">
          <blockquote className="text-lg text-gray-700 italic border-l-4 border-blue-500 pl-4">
            "My daughter loves her personalized story! She asks for it every night!"
          </blockquote>
          <blockquote className="text-lg text-gray-700 italic border-l-4 border-blue-500 pl-4">
            "Such a wonderful idea! The kids are so engaged, and it makes bedtime fun!"
          </blockquote>
        </div>
      </div>

      {/* New Section: FAQs */}
      <div className="w-full max-w-7xl mt-16 p-6 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4 text-left mx-auto max-w-lg">
          <h3 className="font-semibold text-gray-800">How long does it take to create a story?</h3>
          <p className="text-gray-700">Creating a story takes less than a minute!</p>

          <h3 className="font-semibold text-gray-800">Can I customize multiple stories?</h3>
          <p className="text-gray-700">Absolutely! You can create as many stories as you like.</p>

          <h3 className="font-semibold text-gray-800">What themes are available?</h3>
          <p className="text-gray-700">We have a wide range of themes, from adventure to fantasy and more!</p>
        </div>
      </div>
    </div>
  );
}
