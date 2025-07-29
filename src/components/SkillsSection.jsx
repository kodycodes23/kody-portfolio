import { useState } from "react";
import { cn } from "../lib/utils";

const Skills = [
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "Java(Springboot)", level: 85, category: "backend" },
  { name: "C#(.NET)", level: 80, category: "backend" },
  { name: "Node.js", level:65, category: "backend" },
  { name: "NestJS", level: 60, category: "backend" },
  { name: "SQL", level: 80, category: "database" },
  { name: "MongoDB", level: 75, category: "database" },
  { name: "React Native", level: 80, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "Angular", level: 75, category: "frontend" },
  { name: "Microsoft Azure", level: 70, category: "cloud" },
  { name: "Solidity", level: 70, category: "blockchain" },
  { name: "Hyperledger Besu", level: 65, category: "blockchain" },
  { name: "Git/Github", level: 65, category: "Tools" },
  { name: "Docker", level: 60, category: "Tools" },
  { name: "Figma", level: 55, category: "Tools" },
  { name: "Jira", level: 40, category: "Tools" },
  { name: "Trello", level: 35, category: "Tools" },
];

const categories = [
  "all",
  "frontend",
  "backend",
  "database",
  "blockchain",
  "Tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all" ? Skills : Skills.filter(skill => skill.category === activeCategory);
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-forground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover border border-slate-700/50"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full orgin-left animate-[grow_1.5s_ease_out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
