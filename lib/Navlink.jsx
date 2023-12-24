"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={"py-2 px-4 rounded-lg"}
      style={{
        background: path.startsWith(href)
          ? "linear-gradient(90deg, #ff8a05, #f9b331)"
          : "",
      }}
    >
      {children}
    </Link>
  );
};
export default Navlink;
