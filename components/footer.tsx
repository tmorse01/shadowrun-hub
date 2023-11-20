// components/Footer.js

import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4">
      <div className="container flex items-center justify-center gap-12 mx-auto prose dark:prose-invert">
        <Link
          className="no-underline hover:text-blue-600"
          href="/docs/introduction"
        >
          About
        </Link>
        <Link className="no-underline hover:text-blue-600" href="/contact">
          Contact
        </Link>
        <Link
          className="no-underline hover:text-blue-600"
          href="https://discord.com/servers/this-is-shadowrun-930362820627943495"
          target="_blank"
        >
          Discord
        </Link>
      </div>
      <div className="container mx-auto mt-4 prose text-center dark:prose-invert">
        <p>&copy; {currentYear} Shadowrun FPS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
