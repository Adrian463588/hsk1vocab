# 🏮 HSK 1 Vocabulary Master
> **"Ink & Paper" Edition** — A minimalist, high-performance Chinese vocabulary companion.

![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js&logoColor=white) 
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white) 
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16-black?style=for-the-badge&logo=framer&logoColor=white)

A modern, aesthetically refined web application designed to help beginners master the **HSK Level 1** Chinese vocabulary. Built with a strict "Modern Chinese Minimalist" design philosophy, focusing on clarity, typography, and performance.

---

## ✨ Features

### 🎨 Ink & Paper Design System
- **Pure Black (`#000000`)** primary color for high contrast.
- **Warm Stone (`#FAFAF9`)** backgrounds mimicking traditional Xuan paper.
- **Imperial Red (`#EE1C25`)** accents for active states and feedback.
- **Typography**: `Outfit` (Geometric Sans) for English, `Noto Serif SC` for majestic Hanzi.

### 📚 Interactive Learning
*   **Smart Search**: Instant filtering by Hanzi, Pinyin, English, or Category with accent-insensitive matching (type "ni" to find "nǐ").
*   **Flashcard Mode**: 3D flip animations with "Swipe" navigation gestures for immersive study.
*   **Micro-Interactions**: Tactile hover lifts, hard shadows, and physics-based spring animations.

### 🚀 High Performance
*   **Instant Load**: Optimized with `next/image` and route-based code splitting.
*   **Skeleton Loading**: Custom shimmer effects matching the design system.
*   **Lag-Free**: Debounced inputs (300ms) and memoized rendering for heavy lists.

---

## 🛠️ Tech Stack

*   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Custom Config)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/) + Native CSS Transitions
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Fonts**: `next/font` (Google Fonts: Outfit & Noto Serif SC)

---

## 🚀 Getting Started

Follow these steps to run the application locally.

### Prerequisites
*   Node.js 18+ installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/hsk1vocab.git
    cd hsk1vocab
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in Browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to start learning!

---

## 📂 Project Structure

The project follows the **Atomic Design** methodology for components, ensuring scalability and reusability.

```bash
d:\SEMESTER12\hsk1vocab
├── 📁 app/                    # Next.js App Router Pages
│   ├── layout.tsx             # Root layout (Fonts, Providers)
│   ├── page.tsx               # Home Page (Landing)
│   ├── globals.css            # Global Styles & Tailwind Directives
│   ├── 📁 vocabulary/         # Vocabulary Browse Page
│   └── 📁 study/              # Flashcard Study Mode
│
├── 📁 components/             # Atomic Design Architecture
│   ├── 📁 atoms/              # Base UI (Buttons, Inputs, Cards, Typography)
│   ├── 📁 molecules/          # Complex UI (SearchBar, VocabCard, FlashCard)
│   ├── 📁 organisms/          # Section UI (VocabularyGrid, FlashcardContainer)
│   └── Navigation.tsx         # Main Navigation Bar
│
├── 📁 context/                # React Context API
│   └── VocabularyContext.tsx  # Global State (Search, Filtering, Pagination)
│
├── 📁 data/
│   └── hsk1-vocabulary.json   # 250+ Vocabulary Words Database
│
└── 📁 types/                  # TypeScript Interfaces
    └── vocabulary.ts          # Word & Data Definitions
```

---

## 📝 Usage Guide

### Browsing Vocabulary
*   Go to the **Vocabulary** page.
*   Use the search bar to filter by **Character**, **Pinyin**, **Meaning**, or **Category**.
*   Hover over cards to see interactive focus states.

### Study Mode
*   Go to the **Study** page.
*   Cards present the **Chinese Character** first.
*   **Click** the card to reveal Pinyin, Translation, and Example Sentences.
*   Use **Next/Previous** buttons to swipe through the deck.

---

## 🤝 Contributing

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Built with ❤️ in Shenzhen using <a href="https://nextjs.org">Next.js</a>
</p>
