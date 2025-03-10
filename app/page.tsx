"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ChevronDown, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]

      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="bg-gradient-to-b from-sky-100 to-sky-50 min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="#home" className="text-2xl font-bold text-blue-600">
              Assem Malgazhdarova 
            </Link>
            <nav className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase() ? "text-sky-500" : "text-gray-600 hover:text-sky-500"
                  }`}
                >
                  {item}
                </Link>
              ))}
            </nav>
            <div className="md:hidden">{/* Mobile menu button would go here */}</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-full overflow-hidden z-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-sky-200"
              initial={{
                x: Math.random() * window.innerWidth,
                y: -20,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: window.innerHeight + 20,
                rotate: Math.random() * 360,
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                left: `${Math.random() * 100}%`,
              }}
            >
              <Star className="h-4 w-4 md:h-6 md:w-6" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2 text-center md:text-left"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-sky-900 mb-4">
                Hi! <br />I am <span className="text-sky-600">Assem</span>
              </h1>
              <p className="text-xl text-sky-700 mb-6">Computer Science Student</p>
              <p className="text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
                Currently seeking co-op internship roles in software development, machine learning, and data science.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button asChild className="bg-sky-500 hover:bg-sky-600 text-white">
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button asChild variant="outline" className="border-sky-500 text-sky-600 hover:bg-sky-50">
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
              <div className="flex mt-8 gap-4 justify-center md:justify-start">
                <motion.a
                  href="https://github.com/assem449"
                  target="_blank"
                  whileHover={{ y: -5 }}
                  className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all"
                  rel="noreferrer"
                >
                  <Github className="h-5 w-5 text-sky-500" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/assemmalgazhdarova/"
                  target="_blank"
                  whileHover={{ y: -5 }}
                  className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all"
                  rel="noreferrer"
                >
                  <Linkedin className="h-5 w-5 text-sky-500" />
                </motion.a>
                <motion.a
                  href="mailto:assem4491@gmail.com"
                  whileHover={{ y: -5 }}
                  className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  <Mail className="h-5 w-5 text-sky-500" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <div className="relative w-[280px] h-[280px] md:w-[900px] md:h-[400px]">
                <Image
                  src="/images/phone-background.png"
                  alt="3D Avatar"
                  width={400}
                  height={400}
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <Link href="#about">
              <ChevronDown className="h-8 w-8 text-blue-600" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-sky-400 mx-auto"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full md:w-1/3"
            >
              <div className="relative w-full aspect-square max-w-[300px] mx-auto rounded-full overflow-hidden border-4 border-blue-200">
                <Image src="/images/user.png" alt="Profile" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full md:w-2/3"
            >
              <p className="text-lg text-gray-700 mb-6">
                Hello! I'm Assem,I’m a third-year Computer Science student at York University, actively seeking co-op and 
                internship opportunities in the software development field. I’m passionate about building creative digital 
                solutions and excited to bring my skills to a team where I can learn, collaborate, and make a real impact.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Education</h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="mr-4 mt-1">
                        <div className="h-4 w-4 rounded-full bg-sky-400"></div>
                      </div>
                      <div>
                        <div className="font-medium">BSc in Computer Science</div>
                        <div className="text-sm text-gray-500">York University, 2022-2026</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Interests</h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="mr-4 mt-1">
                        <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                      </div>
                      <div>
                        <div className="font-medium">Machine Learning</div>
                        <div className="text-sm text-gray-500">Neural networks, computer vision</div>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-4 mt-1">
                        <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                      </div>
                      <div>
                        <div className="font-medium">Data Science</div>
                        <div className="text-sm text-gray-500">Data visualization, predictive modeling</div>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-4 mt-1">
                        <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                      </div>
                      <div>
                        <div className="font-medium">Software Development</div>
                        <div className="text-sm text-gray-500">Web applications, mobile apps</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-sky-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <Tabs defaultValue="technical" className="w-full max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>

            <TabsContent value="technical" className="bg-white rounded-xl p-6 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "JavaScript", level: 90 },
                  { name: "Python", level: 100 },
                  { name: "TypeScript", level: 80 },
                  { name: "HTML/CSS", level: 100 },
                  { name: "Java", level: 75 },
                  {name: "C", level: 75},
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-blue-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-sky-100 rounded-full h-2.5">
                      <motion.div
                        className="bg-sky-400 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="frameworks" className="bg-white rounded-xl p-6 shadow-md">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {["React", "Next.js", "Node.js", "Express", "Flask", "Tailwind CSS"].map(
                  (framework, index) => (
                    <motion.div
                      key={framework}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                      className="bg-sky-50 rounded-lg p-4 text-center shadow-sm"
                    >
                      <div className="font-medium text-sky-700">{framework}</div>
                    </motion.div>
                  ),
                )}
              </div>
            </TabsContent>

            <TabsContent value="tools" className="bg-white rounded-xl p-6 shadow-md">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {["Git", "Docker", "Azure", "VS Code", "Figma", "Sourcetree", "MongoDB", "PostgreSQL"].map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-sky-50 rounded-lg p-4 text-center shadow-sm"
                  >
                    <div className="font-medium text-sky-700">{tool}</div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">My Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "WeatherForecast",
                description:
                  "Weather React App providing clothing recommendations based on current weather conditions for a user-specified city.",
                image: "/images/weather.png",
                link: "https://github.com/assem449/weatherApp",
              },
              {
                title: "SafeWalkAI",
                description:
                  "During ElleHacks 2024 collaborated in a group to develop a women's safety app.",
                image: "/images/safe1.png",
                link: "https://devpost.com/software/safewalk-2kef98",
              },
              {
                title: "E-commerce Platform",
                description:
                  "A complete e-commerce solution with product listings, cart functionality, and payment processing.",
                image: "/images/cart.png",
                link: "https://github.com/assem449/commerceApp",
              },
              {
                title: "ChatBot",
                description:
                  "A chat bot application powered by the OpenAI API.",
                image: "/images/chat.png",
                link: "https://github.com/assem449/ChatBot",
              },
              {
                title: "Portfolio Website",
                description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
                image: "/images/emoji.png",
                link: "https://github.com/yourusername/portfolio",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all"
              >
                <div className="relative h-48 w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-sky-700 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 h-20">{project.description}</p>

                  <div className="flex space-x-3">
                    <Button asChild variant="outline" size="sm" className="border-sky-400 text-sky-600 hover:bg-sky-50">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="mr-1 h-4 w-4" /> Code
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-sky-500 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <p className="mb-8">
                    Feel free to reach out! I'm always open to discussing new projects, creative ideas, or
                    opportunities.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-4" />
                      <a href="mailto:assem4491@gmail.com" className="hover:underline">
                        assem4491@gmail.com
                      </a>
                    </div>

                    <div className="flex items-center">
                      <Linkedin className="h-5 w-5 mr-4" />
                      <a
                        href="https://www.linkedin.com/in/assemmalgazhdarova/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        linkedin.com/in/assemmalgazhdarova 
                      </a>
                    </div>

                    <div className="flex items-center">
                      <Github className="h-5 w-5 mr-4" />
                      <a
                        href="https://github.com/assem449"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        github.com/assem449
                      </a>
                    </div>
                  </div>

                  {/* <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex space-x-4">
                      <motion.a
                        href="https://github.com/assem449"
                        target="_blank"
                        whileHover={{ y: -5 }}
                        className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                        rel="noreferrer"
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href="https://www.linkedin.com/in/assemmalgazhdarova/"
                        target="_blank"
                        whileHover={{ y: -5 }}
                        className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                        rel="noreferrer"
                      >
                        <Linkedin className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href="mailto:assem4491@gmail.com"
                        whileHover={{ y: -5 }}
                        className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </div> */}
                </div>

                <CardContent className="p-8">
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Your email"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Your message"
                      ></textarea>
                    </div>

                    <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white">Send Message</Button>
                  </form>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-sky-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">Assem Malgazhdarova </div>

            <div className="flex space-x-6">
              <a
                href="https://github.com/assem449"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-300 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/assemmalgazhdarova/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-300 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:assem4491@gmail.com" className="hover:text-sky-300 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-blue-200">
            © {new Date().getFullYear()} Assem Malgazhdarova. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

