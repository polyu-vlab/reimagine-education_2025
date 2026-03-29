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
  elderly1: getImagePath("elderly1.png"),
  elderly2: getImagePath("elderly2.png"),
  elderly3: getImagePath("elderly3.png"),
  robot1: getImagePath("robot1.png"),
  robot2: getImagePath("robot2.jpg"),
  robot3: getImagePath("robot3.jpg"),
  warehouse1: getImagePath("warehouse1.png"),
  warehouse2: getImagePath("warehouse2.png"),
  ic1: getImagePath("ic1.jpg"),
};

const studentReflections = [
  {
    title: "Physiotherapy Student",
    quote:
      "As a future physiotherapist, working in an elderly home is one of my career choices. During the visit, I learned how to integrate AI and robotics into my field. The interactive AI setup and robots collected and used data as a reference for developing treatment plans. Moreover, it is important to respect patient privacy, avoiding any exploitation of their personal information.",
    color: "blue",
  },
  {
    title: "Radiography Student",
    quote:
      "The demonstration of medical robots opened my eyes to how technology can transform patient care and the work environment for healthcare professionals. These experiences have motivated me to continue developing my skills and knowledge in radiography.",
    color: "green",
  },
  {
    title: "Applied Biology & Chemical Technology Student",
    quote:
      "I see strong potential for integrating AI and robotics into my field. The immersive VR setups and robotic demonstrations during the IC visit broadened my understanding of how these technologies can enhance lab safety, data analysis, and experimental accuracy.",
    color: "purple",
  },
  {
    title: "Building & Real Estate Student",
    quote:
      "My visit to the smart elderly home provided valuable insights into the future of living spaces for seniors. It will inform my approach to designing environments that meet the needs of an aging population.",
    color: "orange",
  },
  {
    title: "Occupational Therapy Student",
    quote:
      "When working with elderly individuals or people with disabilities, robots can communicate with them and assist in their daily lives. They can also serve as companions, providing support and happiness — which is essential for my future practice in occupational therapy.",
    color: "red",
  },
  {
    title: "Social Sciences Student",
    quote:
      "I believe the development of humanoid robots may change the way we interact with technology. My career aspiration is to work in the hospitality industry, and the insights from this visit have greatly inspired my future studies and career goals.",
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

export default function AILiteracyPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, rgb(217, 238, 255) 0%, rgb(238, 255, 248) 40%, rgb(255, 255, 255) 100%)",
      }}
    >
      <SiteHeader activePage="ai-literacy" />

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
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-2">
            COMP1004 · University-Wide AI Education
          </p>
          <Title
            order={1}
            className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight mb-8"
          >
            AI Literacy Education with Experiential Learning
          </Title>
          <Text
            size="md"
            c="gray.6"
            style={{ lineHeight: 1.75 }}
          >
            Since the 2022/23 academic year, PolyU has made AI education compulsory
            for all undergraduate students, regardless of discipline. PolyU is among
            the first universities in Hong Kong to make AI a university-wide
            requirement for a large and diverse student population across disciplines.

            In COMP1004, a subject serving over{" "}
                  <strong>1,600 Year 1 students annually</strong> from more than{" "}
                  <strong>20 programmes</strong>, students are introduced to emerging
                  generative AI technologies, their applications, and their implications
                  for society and professional practice. 
          </Text>
        </motion.div>

        {/* COMP1004 overview + IC video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Grid gutter="xl" align="start">
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack gap="md">
                <Text size="sm" c="gray.7" style={{ lineHeight: 1.75 }}>
                  Students visit the{" "}
                  <span style={{ color: "#228be6", fontWeight: 600 }}>
                    PolyU Industrial Centre
                  </span>
                  , where they explore smart homes for elderly care, rehabilitation
                  technologies, robotics, smart logistics, and other AI-enabled
                  applications. Following these activities, students submit a{" "}
                  <strong>reflection report</strong> that connects their theoretical
                  learning with real-world contexts and relates AI to their own
                  disciplines and future professional roles.
                </Text>
                <Text size="sm" c="gray.7" style={{ lineHeight: 1.75 }}>
                  Disciplines represented include Occupational Therapy, Radiography,
                  Physiotherapy, Computing &amp; AI, Land Surveying, Applied Social
                  Sciences, Fashion &amp; Textiles, Chinese History &amp; Culture,
                  Biotechnology, Food Safety &amp; Technology, Hotel &amp; Tourism
                  Management, and Building &amp; Real Estate, among others.
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 8 }}>
              <div className="rounded-xl overflow-hidden shadow-md">
                <div className="relative" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src="https://www.youtube.com/embed/Yblj9QsRI3k"
                    title="PolyU IC Visit Activities"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
              <Text size="xs" c="gray.5" ta="center" mt="xs">
                PolyU Industrial Centre — Experiential Learning Visit
              </Text>
            </Grid.Col>
          </Grid>
        </motion.div>

        {/* IC Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div
              className="flex-shrink-0 rounded-xl overflow-hidden shadow-md"
              style={{ width: "100%", maxWidth: 360 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images.ic1}
                alt="PolyU Industrial Centre"
                className="w-full h-52 object-cover"
              />
            </div>
            <div className="flex-1">
              <Title order={2} size="h3" className="text-xl font-bold text-blue-800 mb-3">
                About the PolyU Industrial Centre (IC)
              </Title>
              <Text size="sm" c="gray.7" style={{ lineHeight: 1.75 }}>
                The{" "}
                <span style={{ color: "#228be6", fontWeight: 600 }}>
                  PolyU Industrial Centre (IC)
                </span>{" "}
                serves as PolyU&apos;s central technical facility and
                Innovation &amp; Technology Hub, distinguished by its
                comprehensive range of engineering facilities, advanced equipment,
                and expert support spanning multiple disciplines. As the only
                establishment of its kind among the eight UGC-funded universities
                in Hong Kong, IC provides a unique, multidisciplinary, hands-on
                learning environment that bridges academic study with real-world
                application. Supported by nine specialised technical teams and
                approximately 100 staff, IC supports more than{" "}
                <strong>70+ academic programmes</strong> at PolyU each year.
              </Text>
            </div>
          </div>
        </motion.div>

        {/* Smart Elderly Home */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Title order={2} size="h3" className="text-xl font-bold text-blue-600 mb-4">
            Smart Elderly Home
          </Title>
          <Text size="sm" c="gray.7" style={{ lineHeight: 1.75 }} className="mb-6">
            During the course, students visit the Smart Elderly Home activity, where
            they experience a system of interconnected appliances, IoT sensors, and
            video analytics designed to improve safety and enhance the quality of
            life for senior citizens. Students control automated windows and
            cupboards, operate AI-controlled lighting systems, and experiment with
            assistive tools — gaining firsthand insight into how AI and smart systems
            can support independent living and healthcare for the elderly.
          </Text>
          <Grid gutter="md">
            {[
              { src: images.elderly1, caption: "Students learning about control panels" },
              { src: images.elderly2, caption: "Students trying to control automated cupboards" },
              { src: images.elderly3, caption: "The teacher presenting assistive tools for seniors" },
            ].map((item) => (
              <Grid.Col span={{ base: 12, md: 4 }} key={item.caption}>
                <div className="flex flex-col items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full rounded-lg object-cover"
                    style={{ height: 200 }}
                  />
                  <Text size="xs" fw={500} c="gray.5" ta="center" mt="xs">
                    {item.caption}
                  </Text>
                </div>
              </Grid.Col>
            ))}
          </Grid>
        </motion.div>

        {/* Robotics Interaction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Title order={2} size="h3" className="text-xl font-bold text-blue-600 mb-4">
            Robotics Interaction
          </Title>
          <Text size="sm" c="gray.7" style={{ lineHeight: 1.75 }} className="mb-6">
            Students interact with various types of robots, exploring human-robot
            interaction and seeing how AI is applied in education, customer service,
            and entertainment. They also work with robots designed for rehabilitation
            and healthcare — including robotic arms that assist with physical therapy —
            gaining practical experience in how robotics can support recovery and
            improve patient care.
          </Text>
          <Grid gutter="md">
            {[
              { src: images.robot1, caption: "Students operating Kuka Robot" },
              { src: images.robot2, caption: "Students chatting with NAO bot" },
              { src: images.robot3, caption: "Students controlling the robot dog via remote panel" },
            ].map((item) => (
              <Grid.Col span={{ base: 12, md: 4 }} key={item.caption}>
                <div className="flex flex-col items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full rounded-lg object-cover"
                    style={{ height: 200 }}
                  />
                  <Text size="xs" fw={500} c="gray.5" ta="center" mt="xs">
                    {item.caption}
                  </Text>
                </div>
              </Grid.Col>
            ))}
          </Grid>
        </motion.div>

        {/* Smart Warehouse */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Title order={2} size="h3" className="text-xl font-bold text-blue-600 mb-4">
            Smart Warehouse &amp; Autonomous Vehicles
          </Title>
          <Text size="sm" c="gray.7" style={{ lineHeight: 1.75 }} className="mb-6">
            During the Smart Warehouse session, students manage a smart delivery
            system by sending orders, tracking items, and directing robots to pick
            up and deliver goods autonomously. This hands-on experience shows them
            how AI and robotics are transforming logistics and supply chains. Students
            also plan routes, operate drones and autonomous vehicles, and use these
            technologies for deliveries, monitoring, last-mile logistics, and
            surveillance tasks.
          </Text>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {[
              { src: images.warehouse1, caption: "Smart Delivery System" },
              { src: images.warehouse2, caption: "QLab Autonomous Car and Drone" },
            ].map((item) => (
              <div
                key={item.caption}
                className="flex flex-col items-center w-full md:w-auto"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.caption}
                  className="rounded-lg object-cover"
                  style={{ width: "100%", maxWidth: 440, height: 260 }}
                />
                <Text size="xs" fw={500} c="gray.5" ta="center" mt="xs">
                  {item.caption}
                </Text>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Closing remark */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Text size="sm" c="gray.7" style={{ lineHeight: 1.75 }}>
            Through all these hands-on activities, students build confidence in
            using new technology, understand how AI is applied in real jobs, and
            see how it connects to their own fields.
          </Text>
        </motion.div>

        {/* Impact & Survey Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Title order={2} size="h3" className="text-xl font-bold text-blue-900 mb-4">
            Reach &amp; Impact
          </Title>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 mb-8">
            <Text size="sm" c="gray.7" style={{ lineHeight: 1.8 }} mb="md">
              These experiential learning activities have reached over{" "}
              <strong>1,600 students</strong> from more than{" "}
              <strong>20 different programmes</strong>, including Occupational
              Therapy, Radiography, Physiotherapy, Computing &amp; AI, Land
              Surveying &amp; Geo-Informatics, Applied Social Sciences, Fashion
              &amp; Textiles, Chinese History &amp; Culture, Biotechnology &amp;
              Chemical Technology, Food Safety &amp; Technology, Hotel &amp;
              Tourism Management, and Building &amp; Real Estate.
            </Text>
            <Text size="sm" c="gray.7" style={{ lineHeight: 1.8 }}>
              Our recent survey results show that{" "}
              <strong>89% of students agree or strongly agree</strong> that the
              experiential learning activity at PolyU IC is useful to help them
              better connect AI with their disciplines and future careers. From
              students&apos; reflection reports, the activities enable students
              to make meaningful connections to their future professions.
            </Text>
          </div>

          {/* Student reflections */}
          <Title order={3} size="h4" className="text-lg font-semibold text-blue-800 mb-5">
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
      </main>
    </div>
  );
}
