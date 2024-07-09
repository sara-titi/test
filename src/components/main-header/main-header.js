// import Link from "next/link";
// import NavLink from "./nav-link";
import LocalSwitcher from "../local-switcher";
import { Link } from "../../navigation";

export default function MainHeader() {
  return (
    <>
      <header className="flex justify-between items-center py-8 px-4 text-white font-bold">
        <Link href="/">NextJs App</Link>
        <nav className="flex justify-between items-center py-8 px-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/meals">First test</Link>
            </li>
            <li>
              <Link href="/community">Second test</Link>
            </li>
            <li>
              <LocalSwitcher />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
