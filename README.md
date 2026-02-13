# Gridhouse

A minimalist, interactive 3x3 grid game built with Next.js and Tailwind CSS. The grid features "Brutalist" aesthetics and complex ripple-effect logic.

## 🎮 Game Rules

Click on any box to increment its value. However, watch out for the ripple effects!

1.  **Direct Interaction**: Clicking a box increases its value by **1**.
2.  **Ripple (Right)**: If a box's value becomes divisible by **3**, the box to its **right** decreases in value by **1**.
3.  **Ripple (Down)**: If a box's value becomes divisible by **5**, the box **below** it increases in value by **2**.
4.  **Locking System**: Once a box reaches a value of **15 or higher**, it becomes **Locked**.
    *   Locked boxes turn **Red**.
    *   They cannot be clicked.
    *   They are immune to ripple effects from neighbors.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: React `useState` with immutable updates
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to play.

## 📂 Project Structure

- `app/page.tsx`: Contains the core logic, state management, and the main grid component.
- `app/globals.css`: Minimalist CSS setup with Tailwind imports and light/dark mode support.
- `app/layout.tsx`: Root layout configured with the Inter font.
