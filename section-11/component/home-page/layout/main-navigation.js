import Link from "next/link";

function MainNavigation() {
  return (
    <header>
      <Link href="/">
        <a>
        <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts" />
            Posts
          </li>
          <li>
            <Link href="/contact" />
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
