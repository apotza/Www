import React from "react";
import Link from "next/link";

type Props = {};

// TODO: Add Nested Links for Hover Navigation

const links = [
  { href: "/", label: "Features" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
  { href: "/security", label: "Security" },
  { href: "/contact", label: "Talk to Us" },
];

const Navigations = (props: Props) => {
  return (
    <nav className="flex items-center justify-between space-x-10">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="text-lg hover:text-blue-500 duration-100"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigations;
