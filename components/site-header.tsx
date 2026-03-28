"use client";
import Link from "next/link";

const getLogoPath = () => {
  let basePath = "";
  if (process.env.NODE_ENV === "production") {
    basePath = process.env.BASE_PATH !== undefined ? process.env.BASE_PATH : "";
  }
  return `${basePath}/images/polyu-logo.png`;
};

interface SiteHeaderProps {
  activePage?: "home" | "ai-literacy" | "project-based-learning" | "gptutor";
}

export function SiteHeader({ activePage = "home" }: SiteHeaderProps) {
  const navLinks = [
    { href: "/ai-literacy", label: "AI Literacy & IC Visit", key: "ai-literacy" },
    { href: "/project-based-learning", label: "Project-Based Learning", key: "project-based-learning" },
    { href: "/gptutor", label: "GPTutor Platform", key: "gptutor" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div
        className="container mx-auto px-6 py-3 flex items-center justify-between"
        style={{ maxWidth: "1200px" }}
      >
        <Link href="/" className="flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getLogoPath()}
            alt="The Hong Kong Polytechnic University"
            className="h-9 w-auto"
          />
        </Link>
        <nav className="flex items-center gap-6 flex-wrap justify-end">
          {navLinks.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`text-sm font-medium transition-colors pb-0.5 whitespace-nowrap ${
                activePage === item.key
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
