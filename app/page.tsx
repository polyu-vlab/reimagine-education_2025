"use client";

import { motion } from "framer-motion";
import { Text, Title } from "@mantine/core";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

const getImagePath = (imageName: string) => {
  let basePath = "";
  if (process.env.NODE_ENV === "production") {
    basePath = process.env.BASE_PATH !== undefined ? process.env.BASE_PATH : "";
  }
  return `${basePath}/images/${imageName}`;
};

const sections = [
  {
    href: "/ai-literacy",
    label: "AI Literacy Education",
    sublabel: "with Experiential Learning & IC Visit",
    description:
      "Since 2022/23, PolyU has made AI education compulsory for all undergraduates. In COMP1004, over 1,600 students annually explore real-world AI applications at PolyU's Industrial Centre, ranging from smart elderly care and robotics to autonomous warehouses, and reflect on how AI connects to their own disciplines and future careers.",
    image: getImagePath("robot1.png"),
    accent: "from-blue-600 to-cyan-500"
  },
  {
    href: "/project-based-learning",
    label: "Project-Based Learning",
    sublabel: "with Redesigned Assessment",
    description:
      "As AI can now complete many conventional assignments with high accuracy, we shift the emphasis to authentic project-based learning in which students use GenAI to identify and solve real problems in their own fields, spanning from ideation to working software prototypes. Assessment focuses on what students uniquely contribute: problem framing, critical evaluation, creativity, and judgment.",
    image: getImagePath("capstone.png"),
    accent: "from-purple-600 to-pink-500"
  },
  {
    href: "/gptutor",
    label: "GenAI-Powered Learning Platform",
    sublabel: "GPTutor with Virtual Patient Simulation",
    description:
      "GPTutor is our GenAI-powered learning platform used by over 3,000 students across 15+ courses. It supports knowledge-grounded question answering, self-quiz generation, and immersive virtual patient simulations, which enables students to practise clinical reasoning, diagnosis, and professional communication in authentic, low-stress settings.",
    image: getImagePath("simulation.png"),
    accent: "from-emerald-600 to-teal-500",
  },
];

export default function HomePage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, rgb(217, 238, 255) 0%, rgb(238, 255, 248) 40%, rgb(255, 255, 255) 100%)",
      }}
    >
      <SiteHeader activePage="home" />

      <main className="container mx-auto px-6 py-14" style={{ maxWidth: "1100px" }}>
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="mb-20"
        >
          <Title
            order={1}
            className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight mb-10"
            style={{ paddingBottom: '30px' }}
          >
            Nurturing Workplace-Ready Professionals in the Age of AI
          </Title>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left: text */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <Text
                  size="sm"
                  c="gray.6"
                  style={{ lineHeight: 1.8 }}
                >
                  Our project transforms university education by preparing students for
                  professional life in an age increasingly shaped by artificial intelligence.
                  At The Hong Kong Polytechnic University, students develop AI literacy through
                  experiential learning that connects AI concepts with real-world applications
                  in their own disciplines. Students undertake authentic project-based learning
                  by using AI to develop solutions to real-world problems, while assessment is
                  redesigned to value critical thinking, creativity, judgment, and meaningful
                  human contributions. We have developed a GenAI-powered learning platform
                  that supports interactive, scenario-based learning experiences and enables
                  students to apply what they have learned in professional and workplace
                  contexts.
                </Text>
              </div>
            </div>

            {/* Right: video */}
            <div className="w-full md:w-2/3 flex-shrink-0">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <div className="relative" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src="https://www.youtube.com/embed/xZC59Ulg3hg"
                    title="AI Literacy to Workplace Excellence"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Three section links */}
        <div className="space-y-10">
          {sections.map((section, idx) => (
            <motion.div
              key={section.href}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <Link href={section.href} className="group block">
                <div
                  className={`flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white`}
                >
                  {/* Image panel */}
                  <div
                    className="md:w-80 flex-shrink-0 relative overflow-hidden"
                    style={{ minHeight: 220 }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={section.image}
                      alt={section.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ minHeight: 220 }}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${section.accent} opacity-30 group-hover:opacity-20 transition-opacity duration-300`}
                    />
                  </div>

                  {/* Text panel */}
                  <div className="flex-1 p-7 flex flex-col justify-center">
                    <p className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-2">
                      {section.tag}
                    </p>
                    <Title
                      order={2}
                      className="text-xl font-bold text-blue-900 mb-1 group-hover:text-blue-600 transition-colors"
                      style={{ paddingBottom: '5px' }}
                    >
                      {section.label}
                    </Title>
                    <p className="text-sm font-medium text-gray-500 mb-3">
                      {section.sublabel}
                    </p>
                    <Text size="sm" c="gray.6" style={{ lineHeight: 1.7 }}>
                      {section.description}
                    </Text>
                    <div className="mt-5">
                      <span
                        className={`inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:gap-3 transition-all`}
                      >
                        Read more
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
