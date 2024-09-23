"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

function StoryPageContent() {
  const searchParams = useSearchParams();
  const [storyContent, setStoryContent] = useState('');
  const [loading, setLoading] = useState(true); // To show loading state

  // Get name and type from query parameters
  const name = searchParams.get('name');
  const type = searchParams.get('type');

  useEffect(() => {
    if (!name || !type) {
      setStoryContent('Please provide both a name and a story type.');
      setLoading(false);
      return;
    }

    // Send a POST request to the backend
    async function fetchStory() {
      setLoading(true);
      try {
        const response = await fetch('http://127.0.0.1:8000/api/story', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            type: type,
          }),
        });

        const data = await response.text(); // Assuming the backend returns text content
        setStoryContent(data);
      } catch (error) {
        console.error("Error fetching the story:", error);
        setStoryContent('Oops! Something went wrong while creating the story.');
      } finally {
        setLoading(false);
      }
    }

    fetchStory();
  }, [name, type]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 p-6">
      <title>Best Personalized Stories for Kids | StoryNest Kids</title>

      <div className="w-full max-w-md mx-auto mb-8">
        <h1 className="text-4xl text-center font-extrabold text-gray-800 mb-6">
          ✨ {name ? `${name}'s` : 'Your'} Personalized Story ✨
        </h1>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        {loading ? (
          <div className="flex flex-col items-center">
            <div style={{ width: '100%', height: 0, paddingBottom: '75%', position: 'relative' }}>
              <iframe
                src="https://giphy.com/embed/xT1Ra4cvaUz0KSKFvG"
                width="100%"
                height="100%"
                style={{ position: 'absolute' }}
                className="giphy-embed"
                allowFullScreen
              ></iframe>
              <p className="mt-2">
                <a href="https://giphy.com/gifs/splat-nicksplat-as-told-by-ginger-xT1Ra4cvaUz0KSKFvG" className="text-blue-600 hover:underline">via GIPHY</a>
              </p>
            </div>
            <p className="text-lg text-gray-600 mt-4">Loading your story...</p>
          </div>
        ) : (
          <p className="text-lg text-gray-700 mb-6">{storyContent}</p>
        )}

        {storyContent && (
          <button
            onClick={() => window.history.back()}
            className="w-full text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-semibold rounded-lg text-lg px-6 py-3 transition-transform transform hover:scale-105"
          >
            Back to Create Another Story
          </button>
        )}
      </div>
    </div>
  );
}

export default function StoryPage() {
  return (
    <Suspense fallback={<div>Loading search parameters...</div>}>
      <StoryPageContent />
    </Suspense>
  );
}
