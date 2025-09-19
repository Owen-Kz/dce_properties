// components/HashLink.tsx
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

interface HashLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
}

const HashLink = ({ to, children, onClick, ...rest }: HashLinkProps) => {
  const navigate = useNavigate();
  const linkRef = useRef<HTMLAnchorElement>(null);

  // Check if the link is a hash link (e.g., #about)
  const isHashLink = to.startsWith('#');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHashLink) {
      // For hash links, use native behavior for instant scroll
      // Let the browser handle the click natively
      if (onClick) onClick(e);
      return; // Exit early, let the native <a> tag do its job
    }

    // For regular links, use React Router to prevent full page reload
    e.preventDefault();
    navigate(to);
    if (onClick) onClick(e);
  };

  // Optional: If the page loads with a hash in the URL (e.g., from a direct link or refresh), scroll to it
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1); // Remove the '#'
      const element = document.getElementById(id);
      if (element) {
        // A tiny delay ensures the page is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  if (isHashLink) {
    // For hash links, render a native <a> tag for instant, smooth scrolling
    return (
      <a
        {...rest}
        href={to} // This is the key: href="#about"
        onClick={handleClick}
        ref={linkRef}
      >
        {children}
      </a>
    );
  }

  // For all other links, use React Router's Link
  return (
    <Link to={to} {...rest} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default HashLink;