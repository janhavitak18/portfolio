"use client"
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { TabsList, TabsTrigger, Tabs, TabsContent } from "@/components/ui/tabs"

type Skill = {
  name: string
  level: number
  color: string
}

type SkillCategory = {
  name: string
  skills: Skill[]
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("languages")

  const skillCategories: SkillCategory[] = [
    {
      name: "languages",
      skills: [
        { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600" },
        { name: "TypeScript", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "HTML5", level: 95, color: "from-orange-400 to-orange-600" },
        { name: "CSS3", level: 90, color: "from-blue-400 to-blue-600" },
        { name: "PHP", level: 80, color: "from-purple-400 to-purple-600" },
        { name: "SQL", level: 75, color: "from-green-400 to-green-600" },
      ],
    },
    {
      name: "frameworks",
      skills: [
        { name: "React.js", level: 90, color: "from-cyan-400 to-cyan-600" },
        { name: "Next.js", level: 85, color: "from-gray-400 to-gray-600" },
        { name: "Tailwind CSS", level: 90, color: "from-teal-400 to-teal-600" },
        { name: "Node.js", level: 80, color: "from-green-400 to-green-600" },
        { name: "Express.js", level: 85, color: "from-gray-400 to-gray-600" },
        { name: "MongoDB", level: 75, color: "from-green-400 to-green-600" },
      ],
    },
    {
      name: "tools",
      skills: [
        { name: "Git", level: 85, color: "from-red-400 to-red-600" },
        { name: "VS Code", level: 90, color: "from-blue-400 to-blue-600" },
        { name: "Figma", level: 80, color: "from-purple-400 to-purple-600" },
        { name: "Docker", level: 70, color: "from-blue-400 to-blue-600" },
        { name: "Webpack", level: 75, color: "from-blue-400 to-blue-600" },
        { name: "AWS", level: 65, color: "from-yellow-400 to-yellow-600" },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          My <span className="text-purple-500">Skills</span>
        </h2>
        <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
      </motion.div>

      <Tabs defaultValue="languages" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-900 border border-gray-800">
          <TabsTrigger value="languages" className={`data-[state=active]:bg-purple-500 data-[state=active]:text-white`}>
            Languages
          </TabsTrigger>
          <TabsTrigger
            value="frameworks"
            className={`data-[state=active]:bg-purple-500 data-[state=active]:text-white`}
          >
            Frameworks
          </TabsTrigger>
          <TabsTrigger value="tools" className={`data-[state=active]:bg-purple-500 data-[state=active]:text-white`}>
            Tools
          </TabsTrigger>
        </TabsList>

        {skillCategories.map((category) => (
          <TabsContent key={category.name} value={category.name} className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={activeTab === category.name ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-gray-900 rounded-lg p-5 border border-gray-800"
                >
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">{skill.name}</h3>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.1 + index * 0.1 }}
                      className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16 bg-gray-900 p-6 rounded-lg border border-gray-800"
      >
        <h3 className="text-xl font-bold mb-6 text-center text-purple-400">Other Skills</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "REST API",
            "GraphQL",
            "Redux",
            "SASS",
            "Firebase",
            "SEO",
            "Jest",
            "Material UI",
            "Bootstrap",
            "WordPress",
            "UI/UX Design",
            "Responsive Design",
            "Agile",
            "Scrum",
          ].map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700 hover:border-purple-500 hover:bg-purple-900/20 transition-colors"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
