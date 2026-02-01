"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-8 mt-auto border-t border-black/10 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="flex items-center justify-center gap-2 text-stone-500 font-mono text-sm uppercase tracking-widest">
          Made with <Heart className="w-4 h-4 text-imperial-red fill-current" /> by Adrian Syah Abidin
        </p>
      </div>
    </footer>
  );
}
