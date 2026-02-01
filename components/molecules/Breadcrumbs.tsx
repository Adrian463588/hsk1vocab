"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  if (pathname === "/") return null;

  const segments = pathname.split("/").filter((item) => item !== "");

  return (
    <nav aria-label="Breadcrumb" className="py-4 container mx-auto px-4 sm:px-6 lg:px-8">
      <ol className="flex items-center space-x-2 text-sm text-slate-500">
        <li>
          <Link href="/" className="hover:text-imperial-red transition-colors flex items-center">
            <Home size={16} />
          </Link>
        </li>
        {segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join("/")}`;
          const isLast = index === segments.length - 1;
          const title = segment.charAt(0).toUpperCase() + segment.slice(1);

          return (
            <li key={segment} className="flex items-center">
              <ChevronRight size={14} className="mx-1 text-slate-400" />
              {isLast ? (
                <span className="font-semibold text-imperial-red" aria-current="page">
                  {title}
                </span>
              ) : (
                <Link href={href} className="hover:text-imperial-red transition-colors">
                  {title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
