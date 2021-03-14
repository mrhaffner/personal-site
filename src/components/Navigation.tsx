import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="flex justify-between text-white text-lg font-medium">
      <div>
        <Link href="/">
          <a>MHaffner!</a>
        </Link>
      </div>
      <ul className="flex space-x-3">
        <li>
          <Link href="/works">
            <a>Works</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
