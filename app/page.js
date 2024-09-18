"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Head from 'next/head';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 p-6">
      <Head>
        <title>Best Personalized Stories for Kids | StoryNest Kids</title>
        <meta
          name="description"
          content="Create personalized bedtime stories for kids with StoryNest. Choose names and themes to craft unique adventures that will delight your children!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://yourwebsite.com" />
        <meta property="og:title" content="Best Personalized Stories for Kids | StoryNest Kids" />
        <meta property="og:description" content="Create personalized bedtime stories for kids with StoryNest. Choose names and themes to craft unique adventures that will delight your children!" />
        <meta property="og:image" content="/images/kid-story.png" />
        <meta property="og:url" content="https://yourwebsite.com" />
      </Head>

      <div className="flex flex-col lg:flex-row items-stretch justify-center w-full max-w-5xl mx-auto gap-8">
        {/* First Div: Heading and Image */}
        <div className="flex flex-col justify-between bg-white p-6 rounded-lg shadow-lg w-full lg:w-1/2">
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4 text-center">
              ✨ Create Magical Memories with Personalized Stories ✨
            </h1>
            <Image
              src="/images/kid-story.png"
              alt="Personalized bedtime story for kids"
              width={500}
              height={300}
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
          {/* This div makes sure the content stretches to the full height */}
          <div className="flex-grow"></div>
        </div>

        {/* Second Div: Description and Button */}
        <div className="flex flex-col items-center bg-white p-8 lg:p-12 rounded-lg shadow-xl text-center w-full lg:w-1/2">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
            Why Choose Our Personalized Stories?
          </h2>
          <p className="text-lg text-gray-800 mb-8 leading-relaxed">
            Spark your child's imagination with personalized stories crafted
            just for them! Choose their name and favorite themes to create a
            unique adventure they'll treasure forever. Whether it’s bedtime
            tales or exciting learning adventures, our custom stories make every
            moment special. Ideal for parents who want to offer a story as
            unique as their little ones!
          </p>
          <button
            type="button"
            onClick={() => router.push("/selectstory")}
            className="transition-transform transform hover:scale-105 focus:outline-none bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-semibold rounded-lg text-white text-lg px-8 py-4"
          >
            Create A Story
          </button>
        </div>
      </div>
    </div>
  );
}
