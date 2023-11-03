import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/experience">Experience</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;