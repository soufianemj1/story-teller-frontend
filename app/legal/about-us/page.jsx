"use client";

import Head from "next/head";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-customGray p-6">
      <Head>
        <title>About Us | StoryNest Kids</title>
        <meta
          name="description"
          content="Discover the magic behind StoryNest Kids! Learn about our mission to create personalized bedtime stories that spark imagination and joy in children's hearts."
        />
        <link rel="canonical" href="https://www.storynestkids.com/about" />
      </Head>



      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
        Welcome to StoryNest Kids!
      </h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-4">
          At StoryNest Kids, our mission is to ignite the imagination of children by providing personalized bedtime stories that are as unique as they are. We believe that every child deserves a story tailored just for them, helping to create magical moments that last a lifetime.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
        <ul className="list-disc pl-6 mb-4 text-lg text-gray-700">
          <li><strong>Creativity:</strong> We foster creativity in every story we create.</li>
          <li><strong>Personalization:</strong> Each story is crafted to reflect the child's individuality.</li>
          <li><strong>Quality:</strong> We ensure high-quality content that engages and inspires.</li>
          <li><strong>Family:</strong> We believe in the power of stories to bring families closer together.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
        <p className="text-lg text-gray-700 mb-4">
          Founded by a team of passionate storytellers and educators, StoryNest Kids was born out of a love for reading and a desire to make storytelling more interactive and engaging for children. We understand that every child has a unique imagination, and our goal is to cater to that by allowing parents to create custom stories that will delight their little ones.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Join Us on This Journey!</h2>
        <p className="text-lg text-gray-700 mb-4">
          We invite you to explore the enchanting world of personalized storytelling. Join us in nurturing the joy of reading and imagination in your child's life. Together, we can create unforgettable moments and cherished memories, one story at a time!
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-4">
          We love hearing from our community! If you have any questions, feedback, or suggestions, please feel free to contact us at{" "}
          <a href="mailto:support@storynestkids.com" className="text-blue-600 hover:underline">
            support@storynestkids.com
          </a>.
        </p>
      </div>
    </div>
  );
}
