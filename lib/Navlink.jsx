"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link href={href} className={path.startsWith(href) ? "text-red-400" : ""}>
      {children}
    </Link>
  );
};
export default Navlink;
