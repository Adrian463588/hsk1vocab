"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedPageWrapper from "@/components/AnimatedPageWrapper";
import { Heading, BodyText } from "@/components/atoms/Typography";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";

export default function Home() {
  return (
    <AnimatedPageWrapper>
      <main className="min-h-screen bg-stone-50 selection:bg-black selection:text-white">
        
        {/* HERO SECTION: Asymmetric Layout (40/60) */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left: Typography & Action */}
            <motion.div 
              className="w-full lg:w-5/12 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 border border-black text-xs font-bold uppercase tracking-widest bg-white">
                  HSK Level 1
                </span>
                <Heading level={1} className="text-5xl md:text-7xl font-bold leading-tight text-ink-black">
                  Master the <br /> Language
                </Heading>
                <BodyText className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-md">
                  Essential Chinese vocabulary for travel and life in Shenzhen. 
                  Minimalist. Focused. Effective.
                </BodyText>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/vocabulary">
                  <Button size="lg" variant="primary">
                    Browse Words <ArrowRight className="inline ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/study">
                  <Button size="lg" variant="outline">
                    Practice Mode
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right: Abstract Graphic / Illustration */}
            <motion.div 
              className="w-full lg:w-7/12 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] w-full">
                {/* Abstract Composition: Mondrian-ish but Chinese Ink */}
                <div className="absolute inset-0 border border-black bg-white p-2 shadow-hard-lg">
                  <div className="w-full h-full border border-black flex items-center justify-center bg-stone-100 overflow-hidden relative">
                    {/* Decorative Character */}
                    <span className="text-[12rem] md:text-[20rem] font-serif text-black opacity-10 absolute -right-10 -bottom-10 pointer-events-none select-none leading-none">
                      词
                    </span>
                    
                    {/* Hero Image / Content Placeholder */}
                    <div className="relative z-10 text-center space-y-2">
                       <span className="block text-9xl font-serif">学</span>
                       <span className="block text-sm uppercase tracking-[0.5em] border-t border-black pt-2 mt-2">Study</span>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-rose-50 border border-black shadow-hard-sm"></div>
                <div className="absolute -z-10 -top-6 -right-6 w-24 h-24 bg-emerald-50 border border-black shadow-hard-sm rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: Value Prop (Grid) */}
        <section className="border-t border-black bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Curated", desc: "150 essential words selected mainly for tourist needs.", bg: "bg-stone-50" },
                { title: "Audio", desc: "Native pronunciation and pinyin for every character.", bg: "bg-rose-50" },
                { title: "Context", desc: "Real-world example sentences for daily usage.", bg: "bg-emerald-50" }
              ].map((item, i) => (
                <Card key={i} className={`h-full flex flex-col justify-between ${item.bg}`}>
                  <div className="mb-8">
                    <span className="text-4xl font-serif block mb-2">{i + 1}.</span>
                    <h3 className="text-xl font-bold uppercase tracking-wider border-b border-black pb-2 inline-block">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600">
                    {item.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </main>
    </AnimatedPageWrapper>
  );
}