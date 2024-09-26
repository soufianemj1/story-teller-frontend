export const metadata = {
  title: 'Privacy Policy | StoryNest Kids - Personalized Stories for Children',
  description: 'Learn about how StoryNest Kids handles privacy, the information we collect, and how we use it on our personalized storytelling platform.',
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-customGray p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">Privacy Policy for StoryNestKids.com</h1>

        <p className="mb-4 text-lg text-gray-700">
          At StoryNestKids.com, accessible from{' '}
          <a href="https://storynestkids.com" className="text-blue-600 hover:underline">
            https://storynestkids.com
          </a>, one of our main priorities is the privacy of our visitors. This Privacy Policy explains what information is collected and how it is used.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Information We Collect</h2>
        <p className="mb-4 text-lg text-gray-700">We collect various types of information in connection with your use of our website, including:</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="text-gray-700">
            <strong>Personal Identification Information:</strong> When you use our site, we may collect personal information that you provide voluntarily, such as your name and email address.
          </li>
          <li className="text-gray-700">
            <strong>Usage Data:</strong> We may also collect information on how you access and use the site, including your IP address, browser type, and the pages you visit.
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
        <p className="mb-4 text-lg text-gray-700">The information we collect is used in the following ways:</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="text-gray-700">To provide and maintain our website.</li>
          <li className="text-gray-700">To notify you about changes to our website.</li>
          <li className="text-gray-700">To monitor the usage of our website.</li>
          <li className="text-gray-700">To provide customer support.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Cookies and Tracking Technologies</h2>
        <p className="mb-4 text-lg text-gray-700">
          We use cookies and similar tracking technologies to track the activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Third-Party Links</h2>
        <p className="mb-4 text-lg text-gray-700">
          Our website may contain links to third-party websites that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Security</h2>
        <p className="mb-4 text-lg text-gray-700">
          The security of your personal information is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Changes to This Privacy Policy</h2>
        <p className="mb-4 text-lg text-gray-700">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
        <p className="mb-4 text-lg text-gray-700">
          If you have any questions about this Privacy Policy, please contact us at{' '}
          <a href="mailto:support@storynestkids.com" className="text-blue-600 hover:underline">
            support@storynestkids.com
          </a>.
        </p>
      </div>
    </div>
  );
}
