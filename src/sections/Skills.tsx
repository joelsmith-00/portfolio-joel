import { motion } from 'framer-motion';
import { FaPython, FaJs, FaJava, FaReact, FaHtml5, FaGitAlt, FaDocker, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiN8N, SiOpenai, SiFlutter, SiTailwindcss, SiGooglecloud, SiLangchain } from 'react-icons/si';
import { Terminal } from 'lucide-react';

const skills = [
    {
        category: "Languages",
        items: [
            { name: "Python", icon: FaPython, color: "#3776AB" },
            { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
            { name: "Java", icon: FaJava, color: "#007396" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }
        ]
    },
    {
        category: "AI & Automation",
        items: [
            { name: "n8n", icon: SiN8N, color: "#EA4B71" }, // n8n brand color
            { name: "LangChain", icon: SiLangchain, color: "#1C3C3C" }, // dark or default
            { name: "OpenAI API", icon: SiOpenai, color: "#412991" },
            { name: "Prompt Eng.", icon: Terminal, color: "#10B981" } // generic terminal
        ]
    },
    {
        category: "Mobile & Web",
        items: [
            { name: "Flutter", icon: SiFlutter, color: "#02569B" },
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "HTML/CSS", icon: FaHtml5, color: "#E34F26" }
        ]
    },
    {
        category: "Tools",
        items: [
            { name: "Git", icon: FaGitAlt, color: "#F05032" },
            { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
            { name: "Docker", icon: FaDocker, color: "#2496ED" },
            { name: "Figma", icon: FaFigma, color: "#F24E1E" }
        ]
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-[var(--color-bg)] relative overflow-hidden px-6 transition-colors duration-300">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-[100px]" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-[var(--color-text-main)]">Technical Proficiency</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skills.map((skillGroup, groupIndex) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, x: groupIndex % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-2xl p-8 backdrop-blur-sm shadow-sm"
                        >
                            <h3 className="text-2xl font-semibold text-[var(--color-text-main)] mb-8 border-b border-[var(--color-card-border)] pb-4">
                                {skillGroup.category}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                                {skillGroup.items.map((item) => (
                                    <motion.div
                                        key={item.name}
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        className="flex flex-col items-center justify-center gap-3 group"
                                    >
                                        <div
                                            className="w-14 h-14 flex items-center justify-center rounded-xl bg-black/5 dark:bg-white/5 border border-[var(--color-card-border)] group-hover:border-primary/30 transition-all shadow-sm group-hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]"
                                        >
                                            <item.icon className="w-8 h-8 transition-colors duration-300" style={{ color: item.color }} />
                                        </div>
                                        <span className="text-sm font-medium text-[var(--color-text-muted)] group-hover:text-[var(--color-text-main)] text-center transition-colors">
                                            {item.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
