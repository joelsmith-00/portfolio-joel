import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const hackathons = [
    {
        name: "Hack Sprint 2.0",
        description: "Developed AI-based solutions for real-world problems, collaborating to build innovative prototypes.",
        tags: ["AI", "Innovation"]
    },
    {
        name: "MSME Idea Hackathon 5.0",
        description: "Proposed automation workflows for small scale industries to enhance efficiency.",
        tags: ["Automation", "MSME"]
    },
    {
        name: "Google × GeeksforGeeks Hackathon",
        description: "Built scalable full-stack applications solving community issues under strict deadlines.",
        tags: ["Full Stack", "Google"]
    },
    {
        name: "Triwizardathon 1.0 (Microsoft)",
        description: "Rapid prototyping of tech solutions, demonstrating adaptation to new technologies.",
        tags: ["Prototyping", "Microsoft"]
    },
    {
        name: "Gen AI Exchange Hackathon",
        description: "Leveraged Generative AI for creative content and intelligent workflows.",
        tags: ["GenAI", "LLMs"]
    },
    {
        name: "Smart India Hackathon",
        description: "Addressed complex societal challenges with technology, improving time management and teamwork.",
        tags: ["Social Impact", "National"]
    }
];

const Hackathons = () => {
    return (
        <section id="hackathons" className="py-20 bg-[var(--color-bg)] transition-colors duration-300 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-[var(--color-text-main)]">Hackathons & Practical Experience</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full" />
                    <p className="text-[var(--color-text-muted)] mt-6 max-w-2xl mx-auto leading-relaxed text-lg">
                        Beyond certifications, I believe in learning by doing. I've actively participated in national-level and industry-focused hackathons, shaping my practical skills and problem-solving mindset.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hackathons.map((hack, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[var(--color-card-bg)] border border-[var(--color-card-border)] p-8 rounded-2xl group hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="mb-6 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Trophy className="w-6 h-6" />
                            </div>

                            <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-3 group-hover:text-primary transition-colors">{hack.name}</h3>

                            <p className="text-[var(--color-text-muted)] mb-6 text-sm leading-relaxed flex-grow">{hack.description}</p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {hack.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono px-2 py-1 bg-[var(--color-bg)] text-[var(--color-text-muted)] rounded-md border border-[var(--color-card-border)]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hackathons;
