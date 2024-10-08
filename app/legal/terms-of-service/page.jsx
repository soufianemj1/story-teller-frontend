export const metadata = {
  title: 'Terms of Service | StoryNest Kids - Personalized Stories for Children',
  description: 'Review the Terms of Service for StoryNest Kids, including guidelines on the use of our personalized storytelling platform, user responsibilities, and liability.',
};

export default function TermsOfService() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-customGray p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">Terms of Service for StoryNestKids.com</h1>

        <p className="mb-4 text-lg text-gray-700">
          Welcome to StoryNestKids.com. These Terms of Service outline the rules and regulations for the use of our website. By accessing or using StoryNestKids.com, you agree to comply with and be bound by these Terms of Service.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Acceptance of Terms</h2>
        <p className="mb-4 text-lg text-gray-700">
          By using our website, you agree to these Terms of Service. If you do not agree with any part of these terms, please do not use our site. We reserve the right to change, modify, or revise these terms at any time, and your continued use of the site signifies your acceptance of any changes.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Use of Our Website</h2>
        <p className="mb-4 text-lg text-gray-700">
          You are granted a limited, non-exclusive, non-transferable license to access and use StoryNestKids.com for personal use. You agree not to:
        </p>
        <ul className="list-disc pl-6 mb-4 text-lg text-gray-700">
          <li>Copy, reproduce, modify, or distribute any content from the site without permission.</li>
          <li>Engage in any activity that disrupts or interferes with the operation of the site.</li>
          <li>Use the site for any illegal or unauthorized purpose.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">User Responsibilities</h2>
        <p className="mb-4 text-lg text-gray-700">
          You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Limitation of Liability</h2>
        <p className="mb-4 text-lg text-gray-700">
          In no event shall StoryNestKids.com, its affiliates, or their respective officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, whether in an action in contract or tort, arising out of or in connection with your use of the site.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Indemnification</h2>
        <p className="mb-4 text-lg text-gray-700">
          You agree to indemnify, defend, and hold harmless StoryNestKids.com and its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, or expenses arising out of or in any way connected with your use of the site or violation of these Terms of Service.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Governing Law</h2>
        <p className="mb-4 text-lg text-gray-700">
          These Terms of Service are governed by and construed in accordance with the laws of the jurisdiction in which StoryNestKids.com operates, without regard to its conflict of law principles.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Changes to Terms</h2>
        <p className="mb-4 text-lg text-gray-700">
          We may update these Terms of Service from time to time. We will notify you of any changes by posting the new Terms of Service on this page. You are advised to review this page periodically for any changes.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Contact Us</h2>
        <p className="mb-4 text-lg text-gray-700">
          If you have any questions about these Terms of Service, please contact us at{' '}
          <a href="mailto:support@storynestkids.com" className="text-blue-600 hover:underline">
            support@storynestkids.com
          </a>.
        </p>
      </div>
    </div>
  );
}
