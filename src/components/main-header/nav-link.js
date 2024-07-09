"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import classes from "./nav-link.module.css";

export default function NavLink({ href, children }) {
  const path = usePathname();
  const router = useRouter();
  const { locale } = router;
  const localizedHref = `/${locale}${href}`;

  console.log("localizedHref", localizedHref);

  return <Link href={href}>{children}</Link>;
}
