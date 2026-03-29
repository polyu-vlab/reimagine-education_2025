"use client";

import { motion } from "framer-motion";
import { Text, Title, Stack } from "@mantine/core";
import { SiteHeader } from "@/components/site-header";

const getImagePath = (imageName: string) => {
  let basePath = "";
  if (process.env.NODE_ENV === "production") {
    basePath = process.env.BASE_PATH !== undefined ? process.env.BASE_PATH : "";
  }
  return `${basePath}/images/${imageName}`;
};

const images = {
  event1: getImagePath("event1.png"),
  event2: getImagePath("event2.png"),
  student1: getImagePath("student1.png"),
  student2: getImagePath("student2.png"),
  achievement1: getImagePath("achievement1.png"),
  achievement2: getImagePath("achievement2.png"),
  achievement3: getImagePath("achievement3.png"),
};

const studentReflections = [
  {
    title: "Physiotherapy Student",
    quote:
      "As a future physiotherapist, working in an elderly home is one of my career choices. During the visit, I learned how to integrate AI and robotics into my field. The interactive AI setup and robots collected and used data as a reference for developing treatment plans. Moreover, it is ethically important to respect patient privacy, avoiding any exploitation of their personal information.",
    color: "blue",
  },
  {
    title: "Radiography Student",
    quote:
      "The demonstration of medical robots opened my eyes to how technology can transform patient care and the work environment for healthcare professionals. These experiences have motivated me to continue developing my skills and knowledge in radiography.",
    color: "green",
  },
  {
    title: "Applied Biology and Chemical Technology Student",
    quote:
      "As a student in Applied Biology and Chemical Technology, I see strong potential for integrating AI and robotics into my field. The immersive VR setups and robotic demonstrations during the IC visit broadened my understanding of how these technologies can enhance lab safety, data analysis, and experimental accuracy.",
    color: "purple",
  },
  {
    title: "Building and Real Estate Student",
    quote:
      "As a student in the Building and Real Estate program, my visit to the smart elderly home provided valuable insights into the future of living spaces for seniors. It will inform my approach to designing environments that meet the needs of an aging population.",
    color: "orange",
  },
  {
    title: "Occupational Therapy Student",
    quote:
      "When working with elderly individuals or people with disabilities, robots can communicate with them and assist in their daily lives. They can also serve as companions, providing support and happiness, which is essential for my future practice in occupational therapy.",
    color: "red",
  },
  {
    title: "Social Sciences Student",
    quote:
      "As a social science student, I believe the development of humanoid robots may change the way we interact with technology. My career aspiration is to work in the hospitality industry, and the insights from this visit have greatly inspired my future studies and career goals.",
    color: "teal",
  },
];

const accentColors: Record<string, string> = {
  blue: "border-blue-300 bg-blue-50",
  green: "border-green-300 bg-green-50",
  purple: "border-purple-300 bg-purple-50",
  orange: "border-orange-300 bg-orange-50",
  red: "border-red-300 bg-red-50",
  teal: "border-teal-300 bg-teal-50",
};
const labelColors: Record<string, string> = {
  blue: "text-blue-700",
  green: "text-green-700",
  purple: "text-purple-700",
  orange: "text-orange-700",
  red: "text-red-700",
  teal: "text-teal-700",
};

export default function ImpactPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, rgb(217, 238, 255) 0%, rgb(238, 255, 248) 40%, rgb(255, 255, 255) 100%)",
      }}
    >
      <SiteHeader />

      <main
        className="container mx-auto px-6 py-12"
        style={{ maxWidth: "1100px" }}
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <Title order={1} className="text-3xl font-bold text-blue-900 mb-6">
            Project Impact
          </Title>
          <Text size="md" c="gray.7" style={{ lineHeight: 1.75, maxWidth: 820 }}>
            Our innovative GPTutor platform was shortlisted for the{" "}
            <strong>2024 QS Reimagine Education Awards</strong> in the AI in
            Education category. Since then, we have made significant progress in
            enhancing platform features, developing new simulation scenarios,
            promoting the platform both within and beyond PolyU, and adopting it
            for learning by students from diverse disciplines. In the past year,
            over <strong>3,000 students</strong> from more than{" "}
            <strong>20 departments and schools</strong> have used GPTutor to
            support their learning across 15+ courses.
          </Text>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Title order={2} size="h2" className="text-xl font-bold text-blue-900 mb-6">
            Our Achievements
          </Title>
          <div className="flex flex-col md:flex-row gap-7">
            {[
              {
                title: "Shortlisted for 2024 QS Reimagine Education Awards",
                description:
                  "Our GPTutor platform was shortlisted for the 2024 QS Reimagine Education Awards in the AI in Education category.",
                image: images.achievement1,
              },
              {
                title: "User-Friendly and Effective",
                description:
                  "Our studies demonstrated a positive correlation between GPTutor usage and improved academic performance, with 95.8% of students finding the platform easy to use and 87.5% of students agreeing that it was useful for their learning.",
                image: images.achievement2,
              },
              {
                title: "Showcase at International Conferences",
                description:
                  "Our project was featured at various international conferences, including the Times Higher Education (THE) Global AI Forum 2024.",
                image: images.achievement3,
              },
            ].map((a) => (
              <div
                key={a.title}
                className="flex-1 min-w-0 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full object-cover"
                  style={{ height: 180 }}
                />
                <div className="p-5">
                  <Text fw={600} c="blue.9" size="sm" mb={6}>
                    {a.title}
                  </Text>
                  <Text size="xs" c="gray.6" style={{ lineHeight: 1.6 }}>
                    {a.description}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Activity Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Title order={2} size="h2" className="text-xl font-bold text-blue-900 mb-6">
            Activity Highlights
          </Title>

          <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-blue-700 to-purple-700 mb-8">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 flex flex-col justify-center">
                <Title order={3} size="h4" c="white" mb="sm">
                  Generative AI-Powered Virtual Patient Simulations for
                  Optometry Students
                </Title>
                <Text c="blue.1" size="sm" style={{ lineHeight: 1.75 }}>
                  The project was showcased at the{" "}
                  <strong style={{ color: "white" }}>
                    &quot;Transformation of Higher Education in the AI Era&quot;
                    (AIHED) Symposium
                  </strong>{" "}
                  on 21 May. We shared how the platform creates virtual patient
                  simulations for students in the School of Optometry. A student
                  from the School of Optometry also shared his learning
                  experience in the course SO4009 General and Ocular
                  Pharmacology.
                </Text>
                <div className="mt-5">
                  <a
                    href="https://events.polyu.edu.hk/aihed/highlights"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    See Event Highlights
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
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

          <Text size="sm" c="gray.7" style={{ lineHeight: 1.75 }} className="mb-5">
            During the forum, students in the School of Optometry shared their
            experiences, highlighting how the virtual patient simulation in
            GPTutor brings clinical scenarios to life, boosts confidence, and
            offers a safe environment for practising complex cases.
          </Text>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { src: images.event1, alt: "Student presenting at conference" },
              { src: images.event2, alt: "Conference group photo" },
            ].map((img) => (
              <div key={img.alt} className="rounded-xl overflow-hidden shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover"
                  style={{ height: 250 }}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Student Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Title order={2} size="h2" className="text-xl font-bold text-blue-900 mb-6">
            Student Voices
          </Title>
          <div className="grid md:grid-cols-2 gap-7">
            {[
              {
                img: images.student1,
                name: "Optometry Student",
                quote:
                  "Using GPTutor feels like having a patient right in front of me which really brings the clinical experience to life. It's helped me connect what I've learned in pharmacology and pathology to real cases, making the learning process more meaningful. As I am still in clinical placements, I find it very reassuring to practice with rare and tricky eye conditions that I might not see throughout my clinical rotations. GPTutor has definitely boosted my confidence and made me feel more prepared to care for real patients.",
              },
              {
                img: images.student2,
                name: "Optometry Student",
                quote:
                  "Chatting with virtual patients is less stressful than being in the clinic because if I make a mistake, I can try again. I can also talk to the AI assistant to learn more about the conditions, so I feel better prepared when I encounter the same conditions in real patients.",
              },
            ].map((s) => (
              <div
                key={s.name + s.quote.slice(0, 20)}
                className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-100"
                  />
                  <Text fw={600} c="gray.9" size="sm">
                    {s.name}
                  </Text>
                </div>
                <Text size="sm" c="gray.6" fs="italic" style={{ lineHeight: 1.75 }}>
                  &quot;{s.quote}&quot;
                </Text>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Impacts of Experiential Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Title order={2} size="h2" className="text-xl font-bold text-blue-900 mb-5">
            Impacts of Experiential Learning
          </Title>
          <Stack gap="md" className="mb-7">
            <Text size="sm" c="gray.7" style={{ lineHeight: 1.75 }}>
              We have complemented online learning with experiential learning
              activities at the PolyU Industrial Centre for AI literacy
              education. These activities have reached over{" "}
              <strong>1,600 students</strong> from more than{" "}
              <strong>20 different programmes</strong>, including Occupational
              Therapy, Radiography, Physiotherapy, Computing &amp; AI, Land
              Surveying &amp; Geo-Informatics, Applied Social Sciences, Fashion
              &amp; Textiles, Chinese History &amp; Culture, Biotechnology &amp;
              Chemical Technology, Food Safety &amp; Technology, Hotel &amp;
              Tourism Management, Building &amp; Real Estate, among others.
            </Text>
            <Text size="sm" c="gray.7" style={{ lineHeight: 1.75 }}>
              Our recent survey results show that{" "}
              <strong>89% of students agree or strongly agree</strong> that the
              experiential learning activity at PolyU IC is useful to help them
              better connect AI with their disciplines and future careers. From
              students&apos; reflection reports, the experiential learning
              activities enable students to connect to their future careers.
            </Text>
          </Stack>

          <Title order={3} size="h4" className="text-base font-semibold text-blue-800 mb-5">
            Student Reflections
          </Title>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {studentReflections.map((r) => (
              <div
                key={r.title}
                className={`rounded-xl border-l-4 p-5 ${accentColors[r.color]}`}
              >
                <p className={`text-xs font-semibold mb-2 ${labelColors[r.color]}`}>
                  {r.title}
                </p>
                <Text size="xs" c="gray.7" fs="italic" style={{ lineHeight: 1.6 }}>
                  &quot;{r.quote}&quot;
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
          <Title order={2} size="h2" className="text-xl font-bold text-blue-900 mb-5">
            Publications
          </Title>
          <div className="space-y-4">
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <Text fw={400} c="gray.8" size="sm" style={{ lineHeight: 1.7 }}>
                Richard Wing Cheung Lui, Haoran Bai, Aiden Wen Yi Zhang, and
                Elvin Tsun Him Chu, &quot;GPTutor: A Generative AI-powered
                Intelligent Tutoring System to Support Interactive Learning with
                Knowledge-Grounded Question Answering,&quot; in 2024
                International Conference on Advances in Electrical Engineering
                and Computer Applications (AEECA), pp. 702–707, IEEE, 2024.{" "}
                [
                <a
                  href="https://ieeexplore.ieee.org/document/10898626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Paper
                </a>
                ]
              </Text>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <Text fw={400} c="gray.8" size="sm" style={{ lineHeight: 1.7 }}>
                Haoran Bai, Richard Wing Cheung, and Paul Vinod Khiatani,
                &quot;Promoting Student Engagement with GPTutor: An Intelligent
                Tutoring System Powered by Generative AI,&quot; manuscript
                submitted for publication.
              </Text>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
