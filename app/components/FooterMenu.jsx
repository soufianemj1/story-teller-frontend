import Link from 'next/link';

const FooterMenu = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 border-t border-gray-700">
      <nav className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
          <li>
            <Link 
              className="text-gray-300 hover:text-gray-200 transition-colors duration-200 text-base md:text-lg" 
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              className="text-gray-300 hover:text-gray-200 transition-colors duration-200 text-base md:text-lg" 
              href="/legal/disclaimer"
            >
              Disclaimer
            </Link>
          </li>
          <li>
            <Link 
              className="text-gray-300 hover:text-gray-200 transition-colors duration-200 text-base md:text-lg" 
              href="/legal/privacy-policy"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link 
              className="text-gray-300 hover:text-gray-200 transition-colors duration-200 text-base md:text-lg" 
              href="/legal/terms-of-service"
            >
              Terms of Service
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default FooterMenu;
