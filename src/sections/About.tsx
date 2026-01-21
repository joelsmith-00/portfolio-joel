
import { motion } from 'framer-motion';
import { GraduationCap, Code } from 'lucide-react';
import aboutImg from '../assets/about-profile.jpg';

const About = () => {
    return (
        <section id="about" className="py-20 bg-[var(--color-bg)] text-[var(--color-text-main)] px-6 transition-colors duration-300">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                        <div className="relative rounded-2xl overflow-hidden border border-[var(--color-card-border)] aspect-[3/4]">
                            <img
                                src={aboutImg}
                                alt="Joel Smith - About"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <div className="space-y-8">
                        {/* Bio Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-6 text-[var(--color-text-muted)] text-lg leading-relaxed"
                        >
                            <p>
                                I am <span className="text-primary font-semibold">Joel Smith M</span>, a passionate 2nd-year Artificial Intelligence & Data Science student at <span className="text-[var(--color-text-main)] font-medium">Karunya Institute of Technology and Sciences</span>.
                            </p>
                            <p>
                                I thrive on converting real-life problems into smart systems through automation, chatbots, and intelligent workflows. My focus areas include AI automation, mobile applications, smart systems, and productivity tools.
                            </p>
                            <p>
                                I am continuously learning new technologies and applying them through projects and hackathons. My goal is to become a skilled AI & Automation Engineer and contribute to real-world, high-impact projects.
                            </p>
                        </motion.div>

                        {/* Education & Highlights */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="grid gap-6"
                        >
                            {/* Education Card */}
                            <div className="p-6 rounded-2xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] hover:border-primary/50 transition-colors backdrop-blur-sm group">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <GraduationCap className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-[var(--color-text-main)]">B.Tech - AI & Data Science</h3>
                                        <p className="text-sm text-[var(--color-text-muted)] mt-1">Karunya Institute of Technology and Sciences</p>
                                        <p className="text-xs text-[var(--color-text-muted)] mt-2">2nd Year Student</p>
                                    </div>
                                </div>
                            </div>

                            {/* Interest Card */}
                            <div className="p-6 rounded-2xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] hover:border-secondary/50 transition-colors backdrop-blur-sm group">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                                        <Code className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-[var(--color-text-main)]">Problem Solver</h3>
                                        <p className="text-sm text-[var(--color-text-muted)] mt-1">
                                            Hackathons, Ideathons, and Real-world Projects.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
