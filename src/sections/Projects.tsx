
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
    {
        title: "Telegram Event & Task Automation Chatbot",
        category: "Automation",
        description: "A chatbot that allows users to create calendar events, tasks, and reminders directly from Telegram commands. Automates daily planning.",
        tech: ["n8n", "Telegram Bot", "Python"],
        links: { github: "#", demo: "#" }
    },
    {
        title: "Indigo Flight Issue Management System",
        category: "Web App",
        description: "Centralized platform providing real-time delay reasons and support info for passengers, reducing helpdesk overload.",
        tech: ["React", "Node.js", "API"],
        links: { github: "#", demo: "#" }
    },
    {
        title: "Smart Ambulance Signal Control System",
        category: "IoT / Smart City",
        description: "Traffic signal system that detects ambulances and provides priority green signals to reduce emergency response time.",
        tech: ["IoT", "Python", "Sensors"],
        links: { github: "#", demo: "#" }
    },
    {
        title: "Smart Career Guidance App",
        category: "App Dev",
        description: "Guides students toward Data Science/IT roles with company-wise skill requirements, roadmaps, and eligibility checks.",
        tech: ["Flutter/React", "Data Analysis"],
        links: { github: "#", demo: "#" }
    },
    {
        title: "Secure Digital Certificate Holder",
        category: "Web App",
        description: "Centralized platform to store, manage, and verify academic/internship certificates.",
        tech: ["Blockchain", "Web3", "React"],
        links: { github: "#", demo: "#" }
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-[var(--color-bg)] px-6 transition-colors duration-300">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-[var(--color-text-main)]">Featured Projects</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                            className="group relative bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] transition-all"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="p-8 h-full flex flex-col relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors">
                                        {project.category}
                                    </span>
                                    <div className="flex gap-3 text-[var(--color-text-muted)]">
                                        <a href={project.links.github} className="hover:text-primary hover:scale-110 transition-all"><Github className="w-5 h-5" /></a>
                                        <a href={project.links.demo} className="hover:text-primary hover:scale-110 transition-all"><ExternalLink className="w-5 h-5" /></a>
                                    </div>
                                </div>

                                <motion.h3
                                    className="text-xl font-bold text-[var(--color-text-main)] mb-3 group-hover:text-primary transition-colors"
                                    whileHover={{ x: 5 }}
                                >
                                    {project.title}
                                </motion.h3>

                                <p className="text-[var(--color-text-muted)] text-sm mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs text-[var(--color-text-muted)] font-mono group-hover:text-primary transition-colors">#{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://github.com/joelsmith-00"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[var(--color-text-main)] border-b border-[var(--color-text-muted)] hover:border-primary hover:text-primary transition-colors pb-1"
                    >
                        View all projects <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
