import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Quantum Health Frontend",
    description: "An AI-powered telemedicine assistant that delivers personalized, doctor-verified health insights using wearable data — seamlessly integrated with hospitals and insurers.",
    image: "/projects/QuantumProject.png",
    tags: ["React", "Vite", "Typescript", "HTML/CSS"],
    demoURL: "https://quantm-frontend.vercel.app/",
  },
  {
    id: 2,
    title: "GECU Banking Dummy App",
    description:
      "GECU is a fictional, educational banking system built to simulate real-world financial operations such as deposits, transfers, loans, and investments.",
    image: "/projects/GECUBanking.png",
    tags: ["HTML/CSS", "Typescript", "React", "Node.JS"],
    demoURL: "https://grandelitecreditunion.com/#",
  },
  {
    id: 3,
    title: "GECU Logistics",
    description:
    "GECU Logistics is a real-time parcel tracking tool that gives users accurate updates from dispatch to delivery. Try the demo with tracking number ABD112233445566 to see how it works.",
    image: "/projects/GECULogistics.png",
    tags: ["HTML/CSS", "Typescript", "React", "Java(Springboot)"],
    demoURL: "https://packagetracker-u8n9.onrender.com/",
  },
  {
    id: 4,
    title: "Blockchain Based Voting System",
    description:
      "Blockchain Based Voting System is a decentralized voting system that allows users to vote on a set of candidates. It is built using Hyperledger Besu and React.",
    image: "/projects/BlockChainProject.png",
    tags: ["Solidity", "Hyperledger Besu", "React", "HTML/CSS"],
    demoURL: "https://blockchain-based-voting-system-rouge.vercel.app/",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {" "}
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent Projects. Each project is a unique
          representation of my skills and expertise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover relative"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 pb-12">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium rounded-full border bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* External Link positioned at bottom right */}
              <a
                href={project.demoURL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 p-2 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors duration-300 group-hover:scale-110"
              >
                <ExternalLink className="h-5 w-5 text-primary" />
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 ">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/kodycodes23"
          >
            {" "}
            Check My GitHub <ArrowRight size={16} />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};
