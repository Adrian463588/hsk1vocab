"use client";

import Link from "next/link";
import { BookOpen, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import Card from "../atoms/Card";
import { Heading, BodyText } from "../atoms/Typography";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function StudyModeSelector() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto"
    >
      <motion.div variants={itemVariants}>
        <Link href="/vocabulary">
          <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Card
              background="emerald"
              padding="lg"
              className="h-full cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <motion.div
                  className="p-5 bg-black rounded-2xl"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <BookOpen size={56} color="white" strokeWidth={1.5} />
                </motion.div>
                <Heading level={3} className="text-2xl">
                  Vocabulary List
                </Heading>
                <BodyText className="text-gray-700 text-base leading-relaxed">
                  Browse all HSK 1 vocabulary with searchable cards. Perfect for
                  reference and review.
                </BodyText>
              </div>
            </Card>
          </motion.div>
        </Link>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Link href="/study">
          <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Card
              background="rose"
              padding="lg"
              className="h-full cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <motion.div
                  className="p-5 bg-black rounded-2xl"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <GraduationCap size={56} color="white" strokeWidth={1.5} />
                </motion.div>
                <Heading level={3} className="text-2xl">
                  Study Mode
                </Heading>
                <BodyText className="text-gray-700 text-base leading-relaxed">
                  Practice with interactive flashcards. Click to flip and test your
                  knowledge.
                </BodyText>
              </div>
            </Card>
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
