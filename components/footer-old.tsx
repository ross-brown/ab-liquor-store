






const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; {new Date().getFullYear()} A&B Liquor, Inc. All rights reserved.
        </p>
        <p className="text-center text-xs text-black">
          Created by <a href="http://linkedin.com/in/ross-brown-" target="_blank">
            Ross Brown
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
