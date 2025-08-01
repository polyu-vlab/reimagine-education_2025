"use client";

import { motion } from "framer-motion";
import {
  Button,
  Card,
  Text,
  Title,
  Group,
  Stack,
  Grid,
  List,
  Image,
} from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Image paths for GitHub Pages compatibility
const images = {
  polyuLogo: "/images/polyu-logo.png",
  gmailGroups: "/images/gmail_groups.png",
  bookOpen: "/images/book-open.png",
  gpthomepage: "/images/gpthomepage.png",
  bookOpen2: "/images/book-open2.png",
  edit3: "/images/edit3.png",
  comment: "/images/comment.png",
  selfDirectedLearning: "/images/self-directed-learning.png",
  gptutorQuiz1: "/images/gptutor-quiz1.png",
  simulation: "/images/simulation.png",
  simIcon: "/images/sim-icon.png",
  simBg: "/images/sim-bg.png",
  simActions: "/images/sim-actions.png",
  simEditact: "/images/sim-editact.png",
  elderly1: "/images/elderly1.png",
  elderly2: "/images/elderly2.png",
  elderly3: "/images/elderly3.png",
  robot1: "/images/robot1.png",
  robot2: "/images/robot2.jpg",
  robot3: "/images/robot3.jpg",
  warehouse1: "/images/warehouse1.png",
  warehouse2: "/images/warehouse2.png",
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function HomePage() {
  const router = useRouter();

  return (
    <div
      className="min-h-screen"
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
              src={images.polyuLogo}
              alt="The Hong Kong Polytechnic University"
              width={200}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          <nav className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1"
            >
              Innovation Highlights
            </Link>
            <Link
              href="/impact"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Impacts
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main
        className="container mx-auto px-6 py-12"
        style={{ maxWidth: "1300px" }}
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Title
            order={1}
            size="h1"
            className="text-2xl md:text-3xl font-bold text-blue-900 mb-4"
          >
            AI Literacy to Workplace Excellence: Transforming Education for
            Next-Generation Professionals
          </Title>
        </motion.div>

        {/* Hero Section with Video and Stats */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-16"
        >
          <Grid gutter="md">
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Stack className="items-center justify-center h-full">
                <div className="relative flex items-center justify-center h-[400px] bg-gray-900 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/xZC59Ulg3hg"
                    title="AI Literacy to Workplace Excellence"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 5 }}>
              <Stack gap="md">
                <Grid gutter="xs">
                  <Grid.Col span={6}>
                    <Card
                      shadow="sm"
                      padding="md"
                      radius={6}
                      className="bg-blue-50 text-center"
                    >
                      <Image
                        src={images.gmailGroups}
                        alt="Students"
                        w={32}
                        h={32}
                        className="mx-auto mb-2"
                      />
                      <Text size="xl" fw={700} c="blue.7">
                        3000+
                      </Text>
                      <Text size="sm" c="gray.6">
                        Students
                      </Text>
                    </Card>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Card
                      shadow="sm"
                      padding="md"
                      radius={6}
                      className="bg-green-50 text-center"
                    >
                      <Image
                        src={images.bookOpen}
                        alt="Departments"
                        w={32}
                        h={32}
                        className="mx-auto mb-2"
                      />
                      <Text size="xl" fw={700} c="green.7">
                        20+
                      </Text>
                      <Text size="sm" c="gray.6">
                        Departments
                      </Text>
                    </Card>
                  </Grid.Col>
                </Grid>

                <Card shadow="sm" padding="lg" radius={6} withBorder>
                  <Text size="sm" c="gray.7" style={{ lineHeight: 1.6 }}>
                    Our project equips students with workplace skills and
                    empowers them to apply AI effectively in their future
                    careers. GPTutor is a GenAI-powered learning platform we
                    developed at HK PolyU. Used by over 3,000 students in the
                    past year, it facilitates self-directed learning, allowing
                    students to explore course content, ask questions, and
                    receive instant feedback through personalized review
                    questions. To bridge online learning with real-world AI
                    applications, we integrate experiential learning activities
                    tailored for students from 20+ programmes in PolyU&apos;s
                    Industrial Centre. Our immersive 3D simulation helps
                    students connect theoretical knowledge with practical
                    application and prepares them to become career-ready
                    professionals.
                  </Text>
                </Card>

                <Button
                  color="blue"
                  radius={6}
                  size="sm"
                  fullWidth
                  onClick={() => {
                    router.push("/impact");
                  }}
                >
                  View Our Impacts
                </Button>
              </Stack>
            </Grid.Col>
          </Grid>
        </motion.div>

        {/* GPTutor System Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Grid gutter="xl">
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Stack gap="md">
                <Title
                  order={2}
                  size="h3"
                  className="text-xl font-bold text-blue-900 mb-4"
                >
                  GPTutor: A Generative AI-powered Intelligent Tutoring System
                </Title>

                <Text size="sm" c="gray.7" style={{ lineHeight: 1.6 }}>
                  <a
                    href="https://gptutor.comp.polyu.edu.hk"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#228be6", fontWeight: "700" }}
                  >
                    GPTutor
                  </a>{" "}
                  is a Generative AI-powered learning platform designed to
                  enhance the learning experiences of students and improve their
                  employability by leveraging state-of-the-art AI technologies
                  to deliver self-directed, personalized and simulation-based
                  learning.
                </Text>
                <Text size="sm" c="gray.7" style={{ lineHeight: 1.6 }} mt="sm">
                  To bridge online learning with real-world AI applications, we
                  integrate{" "}
                  <Text
                    component="span"
                    size="sm"
                    style={{ color: "#228be6", fontWeight: "600" }}
                  >
                    experiential, learning activities
                  </Text>{" "}
                  tailored for students from 20+ programmes in PolyU&apos;s
                  Industrial Centre. Our{" "}
                  <Text
                    component="span"
                    size="sm"
                    style={{ color: "#228be6", fontWeight: "600" }}
                  >
                    immersive 3D simulation
                  </Text>{" "}
                  helps students connect theoretical knowledge with practical
                  application and prepares them to become career-ready
                  professionals.
                </Text>
                <Text size="sm" c="gray.7" style={{ lineHeight: 1.6 }} mt="sm">
                  The platform features include:
                </Text>

                <Stack gap="xs">
                  <Group gap="sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <Text size="sm" c="gray.9">
                      Self-Directed Learning
                    </Text>
                  </Group>
                  <Group gap="sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <Text size="sm" c="gray.9">
                      Self-Quizzes
                    </Text>
                  </Group>
                  <Group gap="sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <Text size="sm" c="gray.9">
                      Simulation-Based Learning
                    </Text>
                  </Group>
                </Stack>

                <Button
                  color="blue"
                  radius={6}
                  size="sm"
                  className="w-fit"
                  onClick={() => {
                    window.open(
                      "https://gptutor.comp.polyu.edu.hk",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  Visit GPTutor Platform
                </Button>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 7 }} pr="0" pl="20px">
              <Image
                src={images.gpthomepage}
                alt="GPTutor Interface Screenshot"
                fit="contain"
              />
            </Grid.Col>
          </Grid>
        </motion.div>

        {/* Innovation & Technology Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Title
            order={2}
            size="h3"
            className="text-xl font-bold text-blue-900 mb-6 text-center"
          >
            Innovation & Technology
          </Title>
          <Text ta="center" c="gray.6" size="sm" mb="lg">
            Cutting-edge solutions that revolutionize the learning experience
            through advanced technology.
          </Text>

          <Grid gutter="md" style={{ alignItems: "stretch" }}>
            <Grid.Col span={{ base: 12, md: 4 }} style={{ display: "flex" }}>
              <Card
                shadow="sm"
                padding="lg"
                radius={6}
                withBorder
                style={{
                  flex: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "normal",
                }}
              >
                <Image
                  src={images.bookOpen2}
                  alt="Self-Directed Learning"
                  w={32}
                  h={32}
                  className="mx-auto mb-4"
                />
                <Title
                  order={3}
                  size="h4"
                  fw={600}
                  c="gray.9"
                  mb="sm"
                  ta="center"
                >
                  Self-Directed Learning
                </Title>
                <List
                  size="xs"
                  c="gray.6"
                  spacing="xs"
                  p={4}
                  center={false}
                  listStyleType="disc"
                >
                  <List.Item>
                    Enables personalized exploration of course content at
                    students&apos; own pace
                  </List.Item>
                  <List.Item>
                    AI-driven answers linked to verified learning materials for
                    reliable support
                  </List.Item>
                  <List.Item>
                    Visual navigation of concepts deepens understanding and
                    engagement
                  </List.Item>
                  <List.Item>
                    Instructors can easily upload and organize course materials
                    in the asset library
                  </List.Item>
                </List>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }} style={{ display: "flex" }}>
              <Card
                shadow="sm"
                padding="lg"
                radius={6}
                withBorder
                style={{
                  flex: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "normal",
                }}
              >
                <Image
                  src={images.edit3}
                  alt="Self-Quizzes"
                  w={32}
                  h={32}
                  className="mx-auto mb-4"
                />
                <Title
                  order={3}
                  size="h4"
                  fw={600}
                  c="gray.9"
                  mb="sm"
                  ta="center"
                >
                  Self-Quizzes
                </Title>
                <List
                  size="xs"
                  c="gray.6"
                  spacing="xs"
                  p={4}
                  center={false}
                  listStyleType="disc"
                >
                  <List.Item>
                    Automatically generates practice questions of varying
                    difficulty from course content
                  </List.Item>
                  <List.Item>
                    Provides instant feedback and clear explanations to
                    reinforce learning
                  </List.Item>
                  <List.Item>
                    Helps students efficiently review and correct
                    misunderstandings before exams
                  </List.Item>
                  <List.Item>
                    Supports targeted preparation for complex subjects with
                    personalized quizzes
                  </List.Item>
                </List>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }} style={{ display: "flex" }}>
              <Card
                shadow="sm"
                padding="lg"
                radius={6}
                withBorder
                style={{
                  flex: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "normal",
                }}
              >
                <Image
                  src={images.comment}
                  alt="Simulation-Based Learning"
                  w={32}
                  h={32}
                  className="mx-auto mb-4"
                />
                <Title
                  order={3}
                  size="h4"
                  fw={600}
                  c="gray.9"
                  mb="sm"
                  ta="center"
                >
                  Simulation-Based Learning
                </Title>
                <List
                  size="xs"
                  c="gray.6"
                  p={6}
                  spacing="xs"
                  center={false}
                  listStyleType="disc"
                >
                  <List.Item>
                    Immersive 3D virtual patient scenarios powered by generative
                    AI and lip-sync technology
                  </List.Item>
                  <List.Item>
                    Customizable simulations tailored for optometry and other
                    healthcare courses
                  </List.Item>
                  <List.Item>
                    Safe, low-stress environment for practicing clinical
                    reasoning and decision-making
                  </List.Item>
                  <List.Item>
                    Bridges theory and practice, enhancing readiness for
                    real-world professional challenges
                  </List.Item>
                </List>
              </Card>
            </Grid.Col>
          </Grid>
        </motion.div>

        {/* Self-Directed Learning Detail Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Title
            order={2}
            size="h3"
            className="text-xl font-bold text-blue-600 mb-6"
          >
            Self-Directed Learning
          </Title>

          <Text size="sm" c="gray.7" style={{ lineHeight: 1.6 }} mb="lg">
            Instructors can upload their course contents to the asset library
            and create learning modules based on the learning content. Students
            may engage in self-directed learning by asking questions about their
            learning content and navigating and visualising the concepts to
            explore and deepen their understandings of the learning content at
            their own pace. Based on users&apos; questions, the relevant
            learning content will be retrieved for the generative AI models to
            provide the answer. Reference links to the learning content will be
            provided so that students can validate the factuality of the
            AI-generated content.
          </Text>

          <div className="flex justify-center w-full">
            <Image
              src={images.selfDirectedLearning}
              alt="Self-Directed Learning Interface Screenshot"
              w={700}
              h={400}
              fit="contain"
              radius={6}
              className="rounded-lg "
            />
          </div>
          <div className="text-blue-600 text-sm font-semibold text-center pt-4">
            Self-Directed Learning
          </div>
        </motion.div>

        {/* Self-Quizzes Detail Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Title
            order={2}
            size="h3"
            className="text-xl font-bold text-blue-600 mb-6"
          >
            Self-Quizzes
          </Title>

          <Text size="sm" c="gray.7" style={{ lineHeight: 1.6 }} mb="lg">
            Students often face tight review schedules before exams, especially
            when understanding complex concepts. GPTutor includes features for
            students to generate practice questions of varying difficulty levels
            based on the course material, helping students reinforce their
            understanding. The immediate feedback and explanations provide
            students with timely reinforcement and correction of
            misunderstandings.
          </Text>

          <div className="flex justify-center w-full">
            <Image
              src={images.gptutorQuiz1}
              alt="Self-Directed Learning Interface Screenshot"
              w={700}
              h={480}
              fit="contain"
              radius={6}
              className="rounded-lg "
            />
          </div>
          <div className="text-blue-600 text-sm font-semibold text-center pt-4">
            Self-Quizzes
          </div>
        </motion.div>

        {/* Simulation-Based Learning Detail Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Title
            order={2}
            size="h3"
            className="text-xl font-bold text-blue-600 mb-6"
          >
            Simulation-Based Learning
          </Title>

          <Text size="sm" c="gray.7" style={{ lineHeight: 1.6 }} mb="lg">
            For healthcare students, clinical reasoning training is crucial for
            their career practice, but costly to arrange physically. Our
            simulation-based training tackles our students&apos; need for
            case-based experience. By incorporating Generative AI, 3D avatars
            and lip-sync technology, the platform provides an engaging
            environment for students to apply knowledge and analytical skills in
            realistic settings, better preparing students for professional
            challenges after graduation.
          </Text>

          <Group gap="xl" className="mb-6" align="flex-start" wrap="wrap">
            <Stack gap={24} className="w-full lg:w-auto lg:flex-1 min-w-96">
              <div className="bg-yellow-100 p-4 rounded-lg shadow">
                <Text fw={600} size="sm" c="gray.9">
                  Immersive 3D Virtual Patient Scenarios
                </Text>
                <Text size="xs" c="gray.7">
                  Convenient Scenario Builder for Instructors
                </Text>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg shadow">
                <Text fw={600} size="sm" c="gray.9">
                  Generative AI & Lip-Sync Technology
                </Text>
                <Text size="xs" c="gray.7">
                  Safe, low-stress practice environment
                </Text>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg shadow">
                <Text fw={600} size="sm" c="gray.9">
                  Customizable Case Simulations
                </Text>
                <Text size="xs" c="gray.7">
                  Realistic, practical skill development; Clinical reasoning &
                  decision-making
                </Text>
              </div>
            </Stack>
            <div className="w-full lg:w-auto lg:flex-1 min-w-96 flex justify-center">
              <Image
                src={images.simulation}
                alt="Simulation-Based Learning Interface Screenshot"
                h={350}
                className="w-full max-w-lg rounded-lg "
                radius={6}
                fit="contain"
              />
            </div>
          </Group>
        </motion.div>

        {/* Scenario Builder Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Text size="sm" c="gray.7" style={{ lineHeight: 1.6 }} mb="lg">
            Our platform stands out by providing customizable GenAI-powered
            patient simulation scenarios specifically designed for optometry
            students, and we are not aware of any comparable scenario currently
            available in the market. Students can practice taking case
            histories, selecting appropriate tests and analysing the results,
            and then they have to come up with the diagnosis and management
            plans. Compared to the clinic, it&apos;s a low-stress environment
            where they can learn from mistakes. Unlike other existing virtual
            patient platforms where the scenarios are pre-defined, we provide a
            scenario builder for instructors to build their customized
            simulation scenarios for their own courses.
          </Text>

          <Grid gutter="0" className="mb-6">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="0">
                <Image
                  src={images.simIcon}
                  alt="Jackson L. Profile Icon"
                  h={400}
                  fit="contain"
                  className="rounded-lg"
                />

                <Image
                  src={images.simBg}
                  alt="Background Image for Simulation"
                  fit="contain"
                  h={400}
                  className="rounded-lg"
                />
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="0">
                <Image
                  src={images.simActions}
                  alt="Actions Panel Interface"
                  fit="contain"
                  h={400}
                  className="rounded-lg"
                />

                <Image
                  src={images.simEditact}
                  alt="Edit Action Interface"
                  fit="contain"
                  h={400}
                  className="rounded-lg"
                />
              </Stack>
            </Grid.Col>
          </Grid>
        </motion.div>

        {/* PolyU Industrial Centre Visit Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Title
            order={2}
            size="h3"
            className="text-xl font-bold text-blue-600 pb-4"
          >
            PolyU Industrial Centre (IC) Visit
          </Title>

          <Grid gutter="xl">
            <Grid.Col span={{ base: 12, md: 5 }}>
              <div className="relative h-60 md:h-80 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/Yblj9QsRI3k"
                  title="PolyU IC Visit Activities"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Stack gap="md" className="pb-4">
                <Text size="sm" c="gray.7" style={{ lineHeight: 1.6 }}>
                  The{" "}
                  <span style={{ color: "#228be6", fontWeight: "600" }}>
                    PolyU Industrial Center (IC)
                  </span>{" "}
                  serves as PolyU&apos;s central technical facility and
                  Innovation & Technology Hub, distinguished by its
                  comprehensive range of engineering facilities, advanced
                  equipment, and expert support spanning multiple disciplines.
                  As the only establishment of its kind among the eight
                  UGC-funded universities in Hong Kong, IC provides a unique,
                  multidisciplinary, hands-on learning environment that bridges
                  academic study with real-world application. Supported by nine
                  specialized technical teams and approximately 100 engineering,
                  technical, and support staff, IC offers an extensive array of
                  expertise and resources. Each year, the PolyU IC supports more
                  than 70+ academic programmes at PolyU.
                </Text>

                <Text size="sm" c="gray.7" style={{ lineHeight: 1.6 }}>
                  In our AI literacy course{" "}
                  <span style={{ color: "#228be6", fontWeight: "600" }}>
                    COMP1004 (Introduction to AI and data analytics)
                  </span>
                  , we help students build real, practical skills they can use
                  in their future jobs. More than 1,600 students from over 20
                  programmes and diverse disciplines—including healthcare, hotel
                  management, social science, and engineering—have participated
                  in the course. We go beyond traditional lectures by
                  incorporating experiential learning through practical
                  workshops and field visits. With support from the HK PolyU
                  Industrial Centre, we develop hands-on workshops that allow
                  students to experience how AI works in real-world settings,
                  making what they learn directly relevant to their future
                  professions.
                </Text>
              </Stack>
            </Grid.Col>
          </Grid>

          <motion.div className="mb-12">
            <Text size="sm" c="gray.7" style={{ lineHeight: 1.6 }} mb="lg">
              During the course, students visit the Smart Elderly Home activity,
              where they experience a system of interconnected appliances, IoT
              sensors, and video analytics designed to improve safety and
              enhance the quality of life for senior citizens. During the visit,
              students have the opportunity to try out the smart devices
              themselves. They control automated windows and cupboards, operate
              AI-controlled lighting systems, and experiment with assistive
              tools that make daily life safer and easier for seniors. By
              actively engaging with these technologies, students gain firsthand
              insight into how AI and smart systems can support independent
              living and healthcare for the elderly.
            </Text>
            <Grid gutter="md">
              <Grid.Col span={{ base: 12, md: 4 }}>
                <div className="flex flex-col items-center">
                  <Image
                    src={images.elderly1}
                    alt="Students learning about control panels"
                    w={400}
                    h={200}
                    radius={6}
                    className="w-full h-48 object-cover"
                  />
                  <Text size="xs" fw={500} c="gray.6" ta="center" mt="sm">
                    Students learning about control panels
                  </Text>
                </div>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 4 }}>
                <div className="flex flex-col items-center">
                  <Image
                    src={images.elderly2}
                    alt="Students trying to control automated cupboards"
                    w={400}
                    h={200}
                    radius={6}
                    className="w-full h-48 object-cover"
                  />
                  <Text size="xs" fw={500} c="gray.6" ta="center" mt="sm">
                    Students trying to control automated cupboards
                  </Text>
                </div>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 4 }}>
                <div className="flex flex-col items-center">
                  <Image
                    src={images.elderly3}
                    alt="The teacher presenting assistive tools for seniors"
                    w={400}
                    h={200}
                    radius={6}
                    className="w-full h-48 object-cover"
                  />
                  <Text size="xs" fw={500} c="gray.6" ta="center" mt="sm">
                    The teacher presenting assistive tools for seniors
                  </Text>
                </div>
              </Grid.Col>
            </Grid>
          </motion.div>

          {/* Robotics Interaction */}
          <motion.div className="mb-12">
            <Title order={3} size="h4" fw={600} c="gray.9" mb="md">
              Robotics Interaction
            </Title>
            <Text size="sm" c="gray.7" style={{ lineHeight: 1.6 }} mb="lg">
              Students also have opportunities to interact with various types of
              robots, allowing them to explore human-robot interaction and see
              how AI is applied in fields such as education, customer service,
              and entertainment. They also work with robots designed for
              rehabilitation and healthcare, including robotic arms and
              equipment that assist with physical therapy, gaining practical
              experience in how robotics can support recovery and improve
              patient care.
            </Text>
            <Grid gutter="md">
              <Grid.Col span={{ base: 12, md: 4 }}>
                <div className="flex flex-col items-center">
                  <Image
                    src={images.robot1}
                    alt="Students operating Kuka Robot"
                    w={400}
                    h={200}
                    radius={6}
                    className="w-full h-48 object-cover"
                  />
                  <Text size="xs" fw={500} c="gray.6" ta="center" mt="sm">
                    Students operating Kuka Robot
                  </Text>
                </div>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 4 }}>
                <div className="flex flex-col items-center">
                  <Image
                    src={images.robot2}
                    alt="Students chatting with NAO bot"
                    w={400}
                    h={200}
                    radius={6}
                    className="w-full h-48 object-cover"
                  />
                  <Text size="xs" fw={500} c="gray.6" ta="center" mt="sm">
                    Students chatting with NAO bot
                  </Text>
                </div>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 4 }}>
                <div className="flex flex-col items-center">
                  <Image
                    src={images.robot3}
                    alt="Students trying to control the robot dog through remote panel"
                    w={400}
                    h={200}
                    radius={6}
                    className="w-full h-48 object-cover"
                  />
                  <Text size="xs" fw={500} c="gray.6" ta="center" mt="sm">
                    Students trying to control the robot dog through remote
                    panel
                  </Text>
                </div>
              </Grid.Col>
            </Grid>
          </motion.div>

          {/* Smart Warehouse */}
          <motion.div className="mb-8">
            <Title order={3} size="h4" fw={600} c="gray.9" mb="md">
              Smart Warehouse
            </Title>
            <Text size="sm" c="gray.7" style={{ lineHeight: 1.6 }} mb="lg">
              During the Smart Warehouse session, students manage a smart
              delivery system by sending orders, tracking items, and directing
              robots to pick up and deliver goods autonomously. This hands-on
              experience shows them firsthand how AI and robotics are
              transforming logistics and supply chains. Students also work
              directly with drones and autonomous vehicles, planning routes,
              operating controls, and using these technologies for deliveries,
              monitoring, last-mile logistics, and surveillance tasks.
            </Text>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex flex-col items-center w-full md:w-auto">
                <Image
                  src={images.warehouse1}
                  alt="Smart Delivery System"
                  w={400}
                  h={250}
                  radius={6}
                  className="w-full max-w-md h-64 object-cover"
                />
                <Text size="xs" fw={500} c="gray.6" ta="center" mt="sm">
                  Smart Delivery System
                </Text>
              </div>
              <div className="flex flex-col items-center w-full md:w-auto">
                <Image
                  src={images.warehouse2}
                  alt="QLab Autonomous Car and Drone"
                  w={400}
                  h={250}
                  radius={6}
                  className="w-full max-w-md h-64 object-cover"
                />
                <Text size="xs" fw={500} c="gray.6" ta="center" mt="sm">
                  QLab Autonomous Car and Drone
                </Text>
              </div>
            </div>
          </motion.div>

          <Text size="sm" c="gray.7" style={{ lineHeight: 1.6 }}>
            Through all these hands-on activities, students build confidence in
            using new technology, understand how AI is applied in real jobs, and
            see how it connects to their own fields.
          </Text>
        </motion.div>
      </main>
    </div>
  );
}
