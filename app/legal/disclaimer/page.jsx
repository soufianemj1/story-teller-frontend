export const metadata = {
    title: 'Disclaimer | StoryNest Kids - Personalized Stories for Children',
    description: 'Disclaimer for StoryNest Kids. Learn about the terms of use, limitations, and external links related to our personalized storytelling platform.',
  };
  
  export default function Disclaimer() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-customGray p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">Disclaimer for StoryNestKids.com</h1>
  
          <p className="mb-4 text-lg text-gray-700">
            Welcome to StoryNest Kids. The information provided on this website is for general informational purposes only. While we strive to ensure the accuracy and reliability of the content, StoryNestKids.com makes no guarantees or warranties regarding the completeness, reliability, or accuracy of any information on this site.
          </p>
  
          <p className="mb-4 text-lg text-gray-700">
            By using this site, you acknowledge that any reliance on the provided information is at your own risk. We disclaim any liability for any loss or damage that may arise from the use of the content on this site.
          </p>
  
          <p className="mb-4 text-lg text-gray-700">
            Our website may contain links to third-party websites or services. We do not control or monitor the content of these external sites and cannot guarantee their accuracy, reliability, or availability. StoryNest Kids is not responsible for any interactions or damages arising from your engagement with third-party content.
          </p>
  
          <p className="mb-4 text-lg text-gray-700">
            Please note that the presence of third-party links or advertisements on our site does not imply endorsement or responsibility for their content. Any dealings with third parties linked through our platform are strictly between you and the respective party.
          </p>
  
          <p className="mb-4 text-lg text-gray-700">
            If you have any questions about this disclaimer or our website, feel free to contact us at{' '}
            <a href="mailto:support@storynestkids.com" className="text-blue-600 hover:underline">
              support@storynestkids.com
            </a>.
          </p>
        </div>
      </div>
    );
  }
  