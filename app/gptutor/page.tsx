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
  gpthomepage: getImagePath("gpthomepage.png"),
  selfDirectedLearning: getImagePath("self-directed-learning.png"),
  gptutorQuiz1: getImagePath("gptutor-quiz1.png"),
  simulation: getImagePath("simulation.png"),
  simIcon: getImagePath("sim-icon.png"),
  simBg: getImagePath("sim-bg.png"),
  simActions: getImagePath("sim-actions.png"),
  simEditact: getImagePath("sim-editact.png"),
  achievement1: getImagePath("achievement1.png"),
  achievement2: getImagePath("achievement2.png"),
  achievement3: getImagePath("achievement3.png"),
  event1: getImagePath("event1.png"),
  event2: getImagePath("event2.png"),
  student1: getImagePath("student1.png"),
  student2: getImagePath("student2.png"),
};

export default function GPTutorPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, rgb(220, 255, 245) 0%, rgb(238, 255, 248) 35%, rgb(255, 255, 255) 100%)",
      }}
    >
      <SiteHeader activePage="gptutor" />

      <main
        className="container mx-auto px-6 py-12"
        style={{ maxWidth: "1100px" }}
      >
        {/* Page title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-2">
            GenAI-Powered · Scenario-Based Learning
          </p>
          <Title
            order={1}
            className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight mb-5"
          >
            GPTutor: A GenAI-Powered Learning Platform
          </Title>
          <Text size="md" c="gray.6" style={{ lineHeight: 1.75 }}>
            To engage students in self-directed learning, we developed{" "}
            <a
              href="https://gptutor.comp.polyu.edu.hk"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#228be6", fontWeight: 700 }}
            >
              GPTutor
            </a>
            , a GenAI-powered learning platform, and integrated it into
            different courses. The platform allows instructors to design
            scenario-based learning activities and simulations that facilitate
            the transfer of classroom knowledge into professional practice and
            workplace settings.
          </Text>
        </motion.div>

        {/* Platform overview + screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Grid gutter="xl" align="center">
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Stack gap="md">
                <Title order={2} size="h3" className="text-xl font-bold text-blue-800">
                  Platform Overview
                </Title>
                <Text size="sm" c="gray.7" style={{ lineHeight: 1.8 }}>
                  GPTutor is used by over{" "}
                  <strong>3,000 students</strong> across{" "}
                  <strong>15+ courses</strong> and more than{" "}
                  <strong>20 departments and schools</strong> at PolyU. It was
                  shortlisted for the{" "}
                  <strong>2024 QS Reimagine Education Awards</strong> in the AI
                  in Education category.
                </Text>
                <Text size="sm" c="gray.7" style={{ lineHeight: 1.8 }}>
                  The platform features three core learning modes:
                </Text>
                <ul className="space-y-2">
                  {[
                    "Knowledge-Grounded Question Answering",
                    "Self-Quiz Generation",
                    "Scenario-Based Simulation Learning",
                  ].map((f) => (
                    <li key={f} className="flex gap-3 items-start">
                      <span className="mt-1.5 flex-shrink-0 w-2 h-2 bg-emerald-500 rounded-full" />
                      <Text size="sm" c="gray.8" fw={500}>
                        {f}
                      </Text>
                    </li>
                  ))}
                </ul>
                <div>
                  <a
                    href="https://gptutor.comp.polyu.edu.hk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                  >
                    Visit GPTutor Platform
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 7 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images.gpthomepage}
                alt="GPTutor Platform Screenshot"
                className="w-full rounded-xl shadow-lg object-contain"
                style={{ background: "#f0f4ff" }}
              />
            </Grid.Col>
          </Grid>
        </motion.div>

        {/* Knowledge-Grounded QA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Title order={2} size="h3" className="text-xl font-bold text-blue-600 mb-5">
            Knowledge-Grounded Question Answering
          </Title>
          <Grid gutter="xl" align="start">
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Text size="sm" c="gray.7" style={{ lineHeight: 1.8 }}>
                Instructors can upload course content to the asset library and
                create learning modules. Students engage in self-directed
                learning by asking questions and navigating concepts to deepen
                their understanding at their own pace.
              </Text>
              <Text size="sm" c="gray.7" style={{ lineHeight: 1.8 }} mt="md">
                Based on each question, the relevant learning content is
                retrieved for the AI model to provide an answer. Reference
                links to source materials are provided so students can validate
                the factuality of AI-generated responses.
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 8 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images.selfDirectedLearning}
                alt="Knowledge-Grounded Q&A Interface"
                className="w-full rounded-xl shadow-md object-contain"
                style={{ maxHeight: 380, background: "#f8fafc" }}
              />
            </Grid.Col>
          </Grid>
        </motion.div>

        {/* Self-Quiz Generation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Title order={2} size="h3" className="text-xl font-bold text-blue-600 mb-5">
            Self-Quiz Generation
          </Title>
          <Grid gutter="xl" align="start">
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Text size="sm" c="gray.7" style={{ lineHeight: 1.8 }}>
                Students often face tight review schedules before exams,
                especially when understanding complex concepts. GPTutor
                automatically generates practice questions of varying
                difficulty levels from course material.
              </Text>
              <Text size="sm" c="gray.7" style={{ lineHeight: 1.8 }} mt="md">
                Immediate feedback and explanations provide timely reinforcement
                and help students correct misunderstandings efficiently.
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 8 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images.gptutorQuiz1}
                alt="Self-Quiz Generation Interface"
                className="w-full rounded-xl shadow-md object-contain"
                style={{ maxHeight: 420, background: "#f8fafc" }}
              />
            </Grid.Col>
          </Grid>
        </motion.div>

        {/* Simulation-Based Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Title order={2} size="h3" className="text-xl font-bold text-blue-600 mb-5">
            Scenario-Based Simulation Learning
          </Title>
          <Text size="sm" c="gray.7" style={{ lineHeight: 1.8 }} className="mb-6">
            For healthcare students, clinical reasoning training is crucial but
            costly to arrange physically. In{" "}
            <strong>Optometry education</strong>, virtual patient simulations
            allow students to practise gathering information, making diagnoses
            and management plans, and communicating professionally in authentic
            settings. The AI also provides immediate feedback on and assessment
            of students&apos; performance.
          </Text>

          <Grid gutter="xl" align="start" className="mb-10">
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Stack gap="md">
                <Text size="sm" c="gray.7" style={{ lineHeight: 1.8 }}>
                  By incorporating Generative AI, 3D avatars, and lip-sync
                  technology, the platform provides an engaging environment for
                  students to apply knowledge and analytical skills in realistic
                  settings. Students can practise taking case histories, selecting
                  appropriate tests, analysing results, and arriving at diagnosis
                  and management plans.
                </Text>
                <Text size="sm" c="gray.7" style={{ lineHeight: 1.8 }}>
                  Compared to the clinic, it's a{" "}
                  <strong>low-stress environment</strong> where students can
                  learn from mistakes. Unlike other virtual patient platforms
                  where scenarios are pre-defined, we provide a{" "}
                  <strong>scenario builder</strong> for instructors to create
                  customised simulations for their own courses.
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 7 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images.simulation}
                alt="Virtual Patient Simulation"
                className="w-full rounded-xl shadow-md object-contain"
                style={{ maxHeight: 380, background: "#f8fafc" }}
              />
            </Grid.Col>
          </Grid>

          {/* Scenario builder screenshots */}
          <Title order={3} size="h4" className="text-base font-semibold text-blue-800 mb-4">
            Scenario Builder for Instructors
          </Title>
          <Text size="sm" c="gray.7" style={{ lineHeight: 1.8 }} className="mb-5">
            Our platform stands out by providing customisable GenAI-powered
            patient simulation scenarios. We are not aware of any comparable
            scenario builder currently available in the market for optometry
            education. The scenario builder lets instructors define patient
            profiles, background scenes, clinical actions, and AI response
            parameters — all without programming.
          </Text>
          <div className="grid grid-cols-2 gap-3">
            {[
              { src: images.simIcon, alt: "Patient Profile Icon" },
              { src: images.simBg, alt: "Simulation Background Scene" },
              { src: images.simActions, alt: "Actions Panel" },
              { src: images.simEditact, alt: "Edit Action Interface" },
            ].map((img) => (
              <div key={img.alt} className="rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-contain"
                  style={{ height: 380 }}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Title order={2} size="h3" className="text-xl font-bold text-blue-900 mb-6">
            Recognition & Reach
          </Title>

          <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
            {[
              {
                img: images.achievement1,
                title: "Shortlisted: 2024 QS Reimagine Education Awards",
                desc: "GPTutor was shortlisted for the 2024 QS Reimagine Education Awards in the AI in Education category.",
              },
              {
                img: images.achievement2,
                title: "Proven Effectiveness",
                desc: "Our studies demonstrated a positive correlation between GPTutor usage and improved academic performance. 95.8% of students found the platform easy to use and 87.5% agreed it was useful for their learning.",
              },
              {
                img: images.achievement3,
                title: "International Showcase",
                desc: "The project was featured at the Times Higher Education (THE) Global AI Forum 2024 and other international conferences.",
              },
            ].map((a) => (
              <div key={a.title} className="flex-1 min-w-0">
                <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100 mb-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.img} alt={a.title} className="w-full object-cover" style={{ height: 180 }} />
                </div>
                <Text size="sm" fw={600} c="blue.9" mb={4}>{a.title}</Text>
                <Text size="xs" c="gray.6" style={{ lineHeight: 1.6 }}>{a.desc}</Text>
              </div>
            ))}
          </div>

          {/* Activity Highlights */}
          <Title order={2} size="h3" className="text-xl font-bold text-blue-900 mb-6">
            Activity Highlights
          </Title>

          {/* GPTutor Sharing Session */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-blue-700 to-purple-700 mb-10">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 flex flex-col justify-center">
                <Title order={3} size="h4" c="white" mb="sm">
                  GPTutor & Virtual Patient Simulation Sharing
                </Title>
                <Text c="blue.1" size="sm" style={{ lineHeight: 1.75 }}>
                  A recording of our sharing session on the GenAI-powered learning
                  platform and the use of virtual patient simulation for optometry
                  students.
                </Text>
              </div>
              <div className="p-6 flex items-center">
                <div className="w-full rounded-xl overflow-hidden shadow-lg">
                  <div className="relative" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      src="https://www.youtube.com/embed/Uih2wjuIEjk"
                      title="GPTutor and Virtual Patient Simulation Sharing"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AIHED Symposium */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-blue-700 to-purple-700">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 flex flex-col justify-center">
                <Title order={3} size="h4" c="white" mb="sm">
                  Generative AI-Powered Virtual Patient Simulations at AIHED Symposium
                </Title>
                <Text c="blue.1" size="sm" style={{ lineHeight: 1.75 }}>
                  The project was showcased at the{" "}
                  <strong style={{ color: "white" }}>
                    "Transformation of Higher Education in the AI Era" (AIHED) Symposium
                  </strong>{" "}
                  on 21 May. In a session showcasing exemplary GenAI use across eight
                  UGC-funded universities in Hong Kong, we shared how the platform
                  creates virtual patient simulations for Optometry students.
                  A student from the School of Optometry also shared his learning
                  experience in SO4009 General and Ocular Pharmacology.
                </Text>
                <div className="mt-5">
                  <a
                    href="https://events.polyu.edu.hk/aihed/highlights"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    See Event Highlights
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-6 flex items-center">
                <div className="w-full rounded-xl overflow-hidden shadow-lg">
                  <div className="relative bg-black" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/ecRPWmNyC9o"
                      title="Virtual Patient Simulation"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Event photos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Text size="sm" c="gray.7" style={{ lineHeight: 1.8 }} className="mb-5">
            During the forum, students in the School of Optometry shared their
            experiences, highlighting how the virtual patient simulation in
            GPTutor brings clinical scenarios to life, boosts confidence, and
            offers a safe environment for practising complex cases.
          </Text>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { src: images.event1, alt: "Student presenting at AIHED Symposium" },
              { src: images.event2, alt: "Conference group photo" },
            ].map((img) => (
              <div key={img.alt} className="rounded-xl overflow-hidden shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.alt} className="w-full object-cover" style={{ height: 260 }} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Student Voices */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Title order={2} size="h3" className="text-xl font-bold text-blue-900 mb-6">
            Student Voices
          </Title>
          <div className="grid md:grid-cols-2 gap-7">
            {[
              {
                img: images.student1,
                name: "Optometry Student",
                quote: "Using GPTutor feels like having a patient right in front of me which really brings the clinical experience to life. It's helped me connect what I've learned in pharmacology and pathology to real cases, making the learning process more meaningful. As I am still in clinical placements, I find it very reassuring to practice with rare and tricky eye conditions that I might not see throughout my clinical rotations. GPTutor has definitely boosted my confidence and made me feel more prepared to care for real patients.",
              },
              {
                img: images.student2,
                name: "Optometry Student",
                quote: "Chatting with virtual patients is less stressful than being in the clinic because if I make a mistake, I can try again. I can also talk to the AI assistant to learn more about the conditions, so I feel better prepared when I encounter the same conditions in real patients.",
              },
            ].map((s) => (
              <div key={s.name + s.quote.slice(0, 20)} className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm flex flex-col">
                <div className="flex items-center gap-4 mb-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-100"
                  />
                  <Text fw={600} c="gray.9" size="sm">{s.name}</Text>
                </div>
                <Text size="sm" c="gray.6" fs="italic" style={{ lineHeight: 1.75 }}>
                  &quot;{s.quote}&quot;
                </Text>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Title order={2} size="h3" className="text-xl font-bold text-blue-900 mb-5">
            Publications
          </Title>
          <div className="space-y-4">
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <Text size="sm" c="gray.8" style={{ lineHeight: 1.7 }}>
                Lui, R. W. C., Bai, H., Zhang, A. W. Y., & Chu, E. T. H. (2024). 
                GPTutor: A Generative AI-powered Intelligent Tutoring System to Support 
                Interactive Learning with Knowledge-Grounded Question Answering. 
                In 2024 International Conference on Advances in Electrical Engineering 
                and Computer Applications (AEECA) (pp. 702–707). IEEE.{" "}
                [
                <a
                  href="https://ieeexplore.ieee.org/document/10898626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Available at
                </a>
                ]
              </Text>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <Text size="sm" c="gray.8" style={{ lineHeight: 1.7 }}>
                Bai, H., Lui, W. C., & Khiatani, P. V. (2025). 
                Promoting student engagement with GPTutor: An intelligent tutoring 
                system powered by generative AI. 
                International Journal of Educational Technology in Higher Education, 
                22(1), 77.{" "}
                [
                <a
                  href="https://link.springer.com/article/10.1186/s41239-025-00571-9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Available at
                </a>
                ]
              </Text>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
