import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const educationData = [
    {
        degree: "B.Tech - Artificial Intelligence & Data Science",
        institution: "Karunya Institute of Technology and Sciences",
        period: "2023 - 2027",
        description: "Focusing on AI, Machine Learning, and Data Science. Active member of DotDev Club.",
        status: "Current (2nd Year)"
    },
    {
        degree: "5th - 12th Grade",
        institution: "Suguna RIP V School",
        period: "High School",
        description: "Completed secondary and higher secondary education.",
        status: "Completed"
    },
    {
        degree: "1st - 3rd Standard",
        institution: "Blossom Nursery and Primary School",
        period: "Primary School",
        description: "Foundation in primary education.",
        status: "Completed"
    }
];

const Education = () => {
    return (
        <section id="education" className="py-20 bg-dark relative px-6">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-white">Education</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full" />
                </motion.div>

                <div className="relative border-l-2 border-white/10 ml-6 md:ml-12 space-y-12">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Dot */}
                            <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-primary ring-4 ring-dark" />

                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-sm group">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.degree}</h3>
                                    <span className="flex items-center gap-2 text-sm text-primary font-mono bg-primary/10 px-3 py-1 rounded-full w-fit">
                                        <Calendar className="w-3 h-3" /> {item.period}
                                    </span>
                                </div>
                                <h4 className="text-lg text-slate-300 font-medium mb-4 flex items-center gap-2">
                                    <GraduationCap className="w-5 h-5 text-secondary" />
                                    {item.institution}
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
