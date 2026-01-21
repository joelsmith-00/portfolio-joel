import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experienceData = [
    {
        role: "AI & Automation Intern",
        company: "Tech Innovators Inc.", // Placeholder structure
        period: "June 2024 - Present",
        description: "Developing automated workflows using n8n and building custom chatbots for internal efficiency.",
        skills: ["n8n", "Python", "Automation"]
    },
    // Add more if user provided, otherwise placeholders for structure
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-[var(--color-bg)] px-6 transition-colors duration-300">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-[var(--color-text-main)]">Experience</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </motion.div>

                <div className="space-y-8">
                    {/* If no data, show a placeholder or the sample one */}
                    {experienceData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-[var(--color-card-bg)] border border-[var(--color-card-border)] p-8 rounded-2xl hover:border-primary/50 transition-all group shadow-sm"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-secondary/20 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                                    <Briefcase className="w-6 h-6" />
                                </div>
                                <div className="flex-grow">
                                    <div className="flex flex-col md:flex-row md:justify-between mb-2">
                                        <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-1">{item.role}</h3>
                                        <span className="text-sm text-[var(--color-text-muted)] font-mono">{item.period}</span>
                                    </div>
                                    <h4 className="text-primary font-medium mb-4">{item.company}</h4>
                                    <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                                        {item.description}
                                    </p>
                                    <div className="flex gap-2">
                                        {item.skills.map(skill => (
                                            <span key={skill} className="px-2 py-1 text-xs rounded bg-[var(--color-bg)] text-[var(--color-text-muted)] border border-[var(--color-card-border)]">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
