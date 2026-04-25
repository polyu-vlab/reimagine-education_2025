"use client";

import { motion } from "framer-motion";
import { Text, Title, Grid, Stack } from "@mantine/core";
import { SiteHeader } from "@/components/site-header";

const getImagePath = (imageName: string) => {
  let basePath = "";
  if (process.env.NODE_ENV === "production") {
    basePath = process.env.BASE_PATH !== undefined ? process.env.BASE_PATH : "";
  }
  return `${basePath}/images/${imageName}`;
};

const images = {
  capstone: getImagePath("capstone.png"),
  hackathon1: getImagePath("hackathon1.png"),
  hackathon2: getImagePath("hackathon2.png"),
};

export default function ProjectBasedLearningPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, rgb(245, 230, 255) 0%, rgb(238, 255, 248) 40%, rgb(255, 255, 255) 100%)",
      }}
    >
      <SiteHeader activePage="project-based-learning" />

      <main
        className="container mx-auto px-6 py-12"
        style={{ maxWidth: "1100px" }}
      >
        {/* Page title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >

          <Title
            order={1}
            className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight mb-6"
            style={{ paddingBottom: '30px' }}
          >
            Project-Based Learning 
          </Title>
          <Text size="md" c="gray.6" style={{ maxWidth: 1100, lineHeight: 1.75 }}>
            As AI can now complete a wide variety of assignments with a high
            degree of accuracy, such assignments are no longer sufficient
            indicators of student learning. We therefore shift the emphasis from
            conventional assignments to authentic project-based learning, in
            which students work <em>with</em> Generative AI. Students from diverse disciplines engage in  projects in which they use GenAI to identify and solve problems in their own fields
          </Text>
        </motion.div>

        {/* GenAI-Integrated Projects + Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Title order={2} size="h3" className="text-xl font-bold text-purple-800 mb-6 pb-[5px]">
            GenAI-Integrated Software Development Projects
          </Title>
          <Grid gutter="xl" align="start">
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack gap="lg">

                <Text size="sm" c="gray.7" style={{ lineHeight: 1.8 }}>

                  With the rise of agentic coding platforms, technological barriers
                  have been reduced, enabling students with limited coding knowledge
                  to develop software solutions that address workplace and real-world
                  problems.
                </Text>
                <Text size="sm" c="gray.7" style={{ lineHeight: 1.8 }}>
                  We integrate software development projects that make purposeful
                  use of AI, from ideation to prototyping. Students are introduced
                  to foundational knowledge including version control with Git, as
                  well as emerging skills such as prompt engineering and context
                  engineering for agentic coding.
                </Text>
                <Text size="sm" c="gray.7" style={{ lineHeight: 1.8 }}>
                  We also invite{" "}
                  <strong>industry practitioners</strong> to share emerging trends
                  related to the use of AI in software development.
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 8 }}>
              <div className="rounded-xl overflow-hidden shadow-md">
                <div className="relative" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src="https://www.youtube.com/embed/r_YQUC0LQvI"
                    title="Agentic Coding Sharing Session"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
              <Text size="xs" c="gray.5" ta="center" mt="xs">
                Agentic Coding Sharing Session, PolyU 2026
              </Text>
              <div className="mt-6">
                <a
                  href="https://polyurichard.github.io/classex-2526/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                >
                  Project Details, Survey & Student Feedback
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </Grid.Col>
          </Grid>
        </motion.div>

        {/* Industry Capstone Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Title order={2} size="h3" className="text-xl font-bold text-purple-800 mb-6 pb-[5px]">
            Industry Capstone Projects
          </Title>

          <Grid gutter="xl" align="start">
            {/* Left: Intro + Outcome in one box */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 h-full">
                <Title order={3} size="h4" className="text-base font-semibold text-blue-800 mb-3 pb-[5px]">
                  Aviation Weather Visualisation & Go-Around Risk Prediction
                </Title>
                <Text size="sm" c="gray.7" style={{ lineHeight: 1.8 }} mb="md">
                  A notable example is our aviation collaboration with the{" "}
                  <strong>Hong Kong Observatory (HKO)</strong>,{" "}
                  <strong>Cathay Pacific (CX)</strong>, and the{" "}
                  <strong>Hong Kong Youth Aviation Academy (HKYAA)</strong>, in which
                  students developed an interactive weather-visualisation platform and
                  explored machine learning models for predicting go-around risks during
                  landing. Such projects require students to integrate technical
                  knowledge with domain understanding, stakeholder communication,
                  teamwork, and solution design under real-world constraints.
                </Text>
                <Text size="sm" c="gray.7" style={{ lineHeight: 1.8 }}>
                  The outcome includes an interactive platform that visualises complex
                  meteorological data through an intuitive, user-friendly interface.
                  By leveraging HKO data and tools like Pydeck, pilots can access
                  critical weather information in a cognitively efficient, hands-free
                  format. A complementary machine learning model was developed to
                  predict the probability of go-around during landing, offering a
                  proactive layer of risk assessment, which showcases the synergy of AI
                  and data science in solving high-stakes aviation problems.
                </Text>
              </div>
            </Grid.Col>

            {/* Right: Real-World Exposure + Image */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <div className="rounded-xl overflow-hidden shadow-md bg-gray-50 flex flex-col justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images.capstone}
                  alt="Industrial capstone project with HKO and HKYAA"
                  className="w-full object-contain"
                  style={{ height: 520 }}
                />
              </div>
              <Text size="xs" c="gray.5" ta="center" mt="xs">
                Through industry partnerships with HKO, Cathay Pacific & HKYAA, students gained real-world aviation experience, accessing authoritative meteorological data, professional flight simulation training, and firsthand insight into pilot workflows and cockpit operations
              </Text>
              

            </Grid.Col>
          </Grid>
        </motion.div>

        {/* Hackathons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <Title order={2} size="h3" className="text-xl font-bold text-purple-800 mb-4 pb-[5px]">
              Outreach: Hackathons for High School Students
            </Title>
            <Text size="sm" c="gray.7" style={{ lineHeight: 1.8 }} mb="md">
              In March 2026, we co-organised a one-day hackathon that brought
              together more than <strong>170 secondary school student participants</strong>,
              together with parents and experts from academia and industry. The
              event was designed to lower barriers to technology participation by
              welcoming students of all coding backgrounds.
            </Text>
            <Text size="sm" c="gray.7" style={{ lineHeight: 1.8 }} mb="md">
              In the <strong>AI Track</strong>, teams transformed their ideas into
              real working projects with AI tools, supported by mentors and on-site
              workshops. These hackathon experiences mirror the principles of
              authentic project-based learning: students learn through challenge,
              experimentation, collaboration, and rapid iteration.
            </Text>
            <div className="mt-5">
              <a
                href="https://www.polyu.edu.hk/comp/news-and-events/news/2026/0318_hack852"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                View Event Details
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Hackathon photos */}
          <div className="grid md:grid-cols-2 gap-5 mt-6">
            {[
              { src: images.hackathon1, alt: "High school hackathon participants" },
              { src: images.hackathon2, alt: "Teams working on AI projects" },
            ].map((img) => (
              <div key={img.alt} className="rounded-xl overflow-hidden shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover"
                  style={{ height: 260 }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
