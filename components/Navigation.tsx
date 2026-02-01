"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";


const navItems = [
  { name: "Home", href: "/" },
  { name: "Vocabulary", href: "/vocabulary" },
  { name: "Study", href: "/study" },

];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-40 transition-all duration-300">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <motion.h1
              className="text-xl md:text-2xl font-serif font-bold text-ink-black tracking-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              HSK 1 Master
            </motion.h1>
          </Link>
          
          <div className="flex gap-6 md:gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  className={`relative group py-1 text-sm md:text-base font-medium transition-colors duration-300 ${isActive ? "text-imperial-red" : "text-slate-600 hover:text-imperial-red"}`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-imperial-red"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                    />
                  )}
                  {!isActive && (
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-imperial-red/50 group-hover:w-full transition-all duration-300" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
