"use client";

import { motion } from "framer-motion";
import { Button, Card, Text, Title, Badge, Group, Stack } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function ImpactPage() {
  return (
    <div
      className="min-h-screen from-cyan-50 to-blue-100"
      style={{
        background:
          "linear-gradient(360deg, rgb(255, 255, 255) 0%, rgb(238, 255, 248) 21.15%, rgb(217, 238, 255) 100%)",
      }}
    >
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/polyu-logo.png"
              alt="The Hong Kong Polytechnic University"
              width={200}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          <nav className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Innovation Highlights
            </Link>
            <Link
              href="/impact"
              className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1"
            >
              Impacts
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main
        className="container mx-auto px-6 py-12"
        style={{ maxWidth: "1200px" }}
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <Title
            order={1}
            size="h1"
            className="text-3xl font-bold text-blue-700 "
          >
            Project Impact
          </Title>
        </motion.div>

        {/* Project Overview */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-12 "
        >
          <Text size="sm" c="gray.7" style={{ lineHeight: 1.6 }}>
            Our innovative GPTutor project was shortlisted for{" "}
            <strong>2024 QS Reimagine Education Awards</strong> in the AI in
            Education category. Since then, we have made significant progress in
            enhancing the platform features, developing new simulation
            scenarios, promoting the platform both within and beyond PolyU, and
            adopting the platform for learning by students from diverse
            disciplines. In the past year, over 3,000 students from more than 20
            departments and schools have used GPTutor to support their learning
            across 15+ courses.
          </Text>
        </motion.div>

        {/* Our Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Title
            order={2}
            size="h2"
            className="text-xl font-bold text-blue-700 pb-4"
          >
            Our Achievements:
          </Title>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Shortlisted for 2024 QS Reimagine Education Awards",
                description:
                  "In the past year, over 3,000 students from more than 20 departments and schools have used GPTutor to support their learning across 15+ courses.",
                image: "/images/achievement1.png",
              },
              {
                title: "User-Friendly and Effective",
                description:
                  "Our studies demonstrated a positive correlation between GPTutor usage and improved academic performance, with 95.8% of students finding the platform easy to use and 87.5% of students agreeing that it was useful for their learning.",
                image: "/images/achievement2.png",
              },
              {
                title: "Showcase at International Conferences",
                description:
                  "Our project was featured at various international conferences, including the Times Higher Education (THE) Global AI Forum 2024.",
                image: "/images/achievement3.png",
              },
            ].map((achievement, index) => (
              <Card
                key={index}
                shadow="sm"
                padding={0}
                radius={6}
                withBorder
                className="bg-white overflow-hidden"
              >
                <Card.Section className="relative h-48">
                  <Image
                    src={achievement.image || "/placeholder.svg"}
                    alt={achievement.title}
                    fill
                    className="object-cover"
                  />
                </Card.Section>
                <div className="p-4">
                  <Title
                    order={3}
                    size="h5"
                    fw={600}
                    c="blue.9"
                    mb="xs"
                    style={{ fontSize: "0.875rem" }}
                  >
                    {achievement.title}
                  </Title>
                  <Text size="xs" c="gray.6" style={{ lineHeight: 1.5 }}>
                    {achievement.description}
                  </Text>
                </div>
              </Card>
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
          <Title
            order={2}
            size="h2"
            className="text-xl font-bold text-blue-700 pb-4"
          >
            Activity Highlights
          </Title>

          <Card
            shadow="sm"
            padding="lg"
            radius={6}
            className="bg-gradient-to-r from-blue-600 to-purple-600 mb-8"
          >
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="flex items-center justify-center h-full">
                <Stack gap="md" className="max-w-md">
                  <Title order={3} size="h4" c="white">
                    Generative AI-Powered Virtual Patient Simulations for
                    Optometry Students
                  </Title>

                  <Text c="blue.1" size="sm" style={{ lineHeight: 1.6 }}>
                    The project was showcased in the &quot;Transformation of
                    Higher Education in the AI Era: Innovation, Best Practices,
                    and Impact&quot; (AIHED) Symposium on 21 May. In the session
                    &quot;Learning and teaching show and tell: Showcasing
                    exemplary use of GenAI in learning, teaching, and assessment
                    practices by students and teachers from the eight UGC-funded
                    universities in Hong Kong&quot;, we shared how we use the
                    platform to create virtual patient simulation for the
                    students in School of Optometry and a student from the
                    School of Optometry also shared his learning experience with
                    the platform in the course SO4009 General and Ocular
                    Pharmacology.
                  </Text>
                </Stack>
              </div>
              <Card shadow="sm" padding="md" radius={6} className="bg-black">
                <div className="relative  h-80 bg-gray-900 rounded overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/ecRPWmNyC9o"
                    title="Virtual Patient Simulation"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded"
                  ></iframe>
                </div>
              </Card>
            </div>
          </Card>

          <div className="text-center">
            <Button
              color="blue"
              radius={6}
              size="sm"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => {
                window.open(
                  "https://events.polyu.edu.hk/aihed/highlights",
                  "_blank"
                );
              }}
            >
              Click to See the Event Highlights
            </Button>
          </div>
        </motion.div>

        {/* Event Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Title
            order={2}
            size="h2"
            className="text-xl font-bold text-blue-700 pb-4"
          >
            Event Details
          </Title>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Image
              src="/images/event1.png"
              alt="Student presenting at conference"
              width={400}
              height={250}
              className="rounded-lg shadow-sm w-full"
              style={{ borderRadius: "6px" }}
            />
            <Image
              src="/images/event2.png"
              alt="Conference group photo"
              width={400}
              height={250}
              className="rounded-lg shadow-sm w-full"
              style={{ borderRadius: "6px" }}
            />
          </div>

          <Card
            shadow="sm"
            padding="lg"
            radius={6}
            withBorder
            className="bg-white"
          >
            <Text size="sm" c="gray.7" style={{ lineHeight: 1.6 }}>
              During the forum, students in the School of Optometry shared their
              experiences, highlighting how the virtual patient simulation in
              GPTutor brings clinical scenarios to life, boosts confidence, and
              offers a safe environment for practicing complex cases.
            </Text>
          </Card>
        </motion.div>

        {/* Student Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Group justify="center" mb="lg">
            <Title
              order={2}
              size="h2"
              className="text-xl font-bold text-blue-700"
            >
              Student Voices
            </Title>
          </Group>

          <div className="grid md:grid-cols-2 gap-8">
            <Card
              shadow="sm"
              padding="lg"
              radius={6}
              withBorder
              className="bg-white"
            >
              <Stack align="center" mb="md">
                <Image
                  src="/images/student1.png"
                  alt="Male optometry student"
                  width={64}
                  height={64}
                  className="w-28 h-28 rounded-full object-cover"
                  style={{ borderRadius: "50%" }}
                />
                <Text fw={600} c="gray.9">
                  Optometry Student
                </Text>
              </Stack>
              <Text
                size="sm"
                c="gray.7"
                fs="italic"
                style={{ lineHeight: 1.6 }}
              >
                "Using GPTutor feels like having a patient right in front of me
                which really brings the clinical experience to life. It's helped
                me connect what I've learned in pharmacology and pathology to
                real cases, making the learning process more meaningful. As I am
                still in clinical placements, I find it very reassuring to
                practice with rare and tricky eye conditions that I might not
                see throughout my clinical rotations. GPTutor has definitely
                boosted my confidence and made me feel more prepared to care for
                real patients."
              </Text>
            </Card>

            <Card
              shadow="sm"
              padding="lg"
              radius={6}
              withBorder
              className="bg-white"
            >
              <Stack align="center" mb="md">
                <Image
                  src="/images/student2.png"
                  alt="Female optometry student"
                  width={64}
                  height={64}
                  className="w-28 h-28 rounded-full object-cover"
                  style={{ borderRadius: "50%" }}
                />
                <Text fw={600} c="gray.9">
                  Optometry Student
                </Text>
              </Stack>
              <Text
                size="sm"
                c="gray.7"
                fs="italic"
                style={{ lineHeight: 1.6 }}
              >
                "Chatting with virtual patients is less stressful than being in
                the clinic because if I make a mistake, I can try again. I can
                also talk to the AI assistant to learn more about the
                conditions, so I feel better prepared when I encounter the same
                conditions in real patients."
              </Text>
            </Card>
          </div>
        </motion.div>

        {/* Impacts of Experimental Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Title
            order={2}
            size="h2"
            className="text-xl font-bold text-blue-700 pb-4"
          >
            Impacts of Experimental Learning
          </Title>

          <Stack className=" mb-4">
            <Text size="sm" c="gray.7" style={{ lineHeight: 1.6 }}>
              We have complemented online learning with experiential learning
              activities at the PolyU Industrial Centre for AI literacy
              education. These activities have reached over 1,600 students from
              more than 20 different programmes, including Occupational Therapy,
              Radiography, Physiotherapy, Computing & AI, Land Surveying &
              Geo-Informatics, Applied Social Sciences, Fashion & Textiles,
              Chinese History & Culture, Biotechnology & Chemical Technology,
              Food Safety & Technology, Hotel & Tourism Management, Building &
              Real Estate, among others.
            </Text>
            <Text size="sm" c="gray.7" style={{ lineHeight: 1.6 }}>
              For the experiential learning activities, our recent survey
              results show that 89% of the students agree/strongly agree that
              the experiential learning activity at PolyU IC is useful to help
              them better connect AI with their disciplines and future careers.
              From the students' reflection reports, the experiential learning
              activities enable the students to connect to their future careers.
            </Text>
          </Stack>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Physiotherapy Student",
                quote:
                  "As a future physiotherapist, working in an elderly home is one of my career choices. During the visit, I learned how to integrate AI and robotics into my field. The interactive AI setup and robots collected and used data as a reference for developing treatment plans. Moreover, it is ethically and to respect patient privacy, avoiding any exploitation of their personal information.",
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
            ].map((testimonial, index) => (
              <Card
                key={index}
                shadow="sm"
                padding="md"
                radius={6}
                withBorder
                className="bg-white"
              >
                <Badge
                  color={testimonial.color}
                  radius={6}
                  size="sm"
                  mb="sm"
                  className={`bg-${testimonial.color}-100 text-${testimonial.color}-800`}
                >
                  {testimonial.title}
                </Badge>
                <Text
                  size="xs"
                  c="gray.7"
                  fs="italic"
                  style={{ lineHeight: 1.5 }}
                >
                  "{testimonial.quote}"
                </Text>
              </Card>
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
          <Title
            order={2}
            size="h2"
            className="text-xl font-bold text-blue-700 pb-4"
          >
            Publications
          </Title>

          <Stack gap="md">
            <Card
              shadow="sm"
              padding="lg"
              radius={6}
              withBorder
              className="bg-white"
            >
              <Text fw={400} c="gray.9" size="sm">
                Richard Wing Cheung Lui, Haoran Bai, Aiden Wen Yi Zhang, and
                Elvin Tsun Him Chu, "GPTutor: A Generative AI-powered
                Intelligent Tutoring System to Support Interactive Learning with
                Knowledge-Grounded Question Answering," in 2024 International
                Conference on Advances in Electrical Engineering and Computer
                Applications (AEECA), pp. 702-707, IEEE, 2024. [
                <a
                  href="https://ieeexplore.ieee.org/document/10898626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  View Paper
                </a>
                ]
              </Text>
            </Card>

            <Card
              shadow="sm"
              padding="lg"
              radius={6}
              withBorder
              className="bg-white"
            >
              <Text fw={400} c="gray.9" size="sm">
                Haoran Bai, Richard Wing Cheung, and Paul Vinod Khiatani,
                "Promoting Student Engagement with GPTutor: An Intelligent
                Tutoring System Powered by Generative AI," manuscript submitted
                for publication.
              </Text>
            </Card>
          </Stack>
        </motion.div>
      </main>
    </div>
  );
}
