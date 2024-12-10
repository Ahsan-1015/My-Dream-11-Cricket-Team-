import SubscribeForm from './SubscribeForm/SubscribeForm';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 pt-36 ">
      <div className="flex flex-col gap-5 justify-center items-center py-20">
        <div>
          <img src="logo-footer.png" alt="" />
        </div>
        <div className="w-11/12 2xl:w-10/12 mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h2 className="font-semibold text-lg mb-4">About Us</h2>
            <p className="text-gray-400">
              We are a passionate team <br /> dedicated to providing the best
              <br />
              services to our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
            <ul
              className="space-y-2 text-gray-400"
              style={{ listStyleType: '"•  "' }}
            >
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Subscribe</h2>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <SubscribeForm></SubscribeForm>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 ">
        <p>@2024 Your Company All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
