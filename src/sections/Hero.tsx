// Hero.tsx
import { motion, useMotionValue, animate } from 'framer-motion';
import { ArrowDown, Linkedin, Github, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import heroImg from '../assets/hero-profile.jpg';

const TypingText = ({ text }: { text: string }) => {
    const count = useMotionValue(0);
    const [display, setDisplay] = useState("");

    useEffect(() => {
        const controls = animate(count, text.length, {
            type: "tween",
            duration: 2,
            ease: "linear",
            onUpdate: (latest) => {
                setDisplay(text.slice(0, Math.round(latest)));
            }
        });
        return controls.stop;
    }, [text]);

    return <span>{display}<span className="animate-blink">|</span></span>;
};

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-[var(--color-bg)] transition-colors duration-300 overflow-hidden px-6">
            {/* Background Gradients & Particles */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
            <div className="absolute top-0 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse delay-1000" />

            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center z-10 w-full max-w-6xl">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block px-4 py-2 bg-[var(--color-card-bg)] border border-primary/30 rounded-full text-primary text-sm font-medium backdrop-blur-sm shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                    >
                        <TypingText text="AI & Automation Engineer" />
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold text-[var(--color-text-main)] tracking-tight">
                        Hello, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
                            Joel Smith
                        </span>
                    </h1>

                    <p className="text-[var(--color-text-muted)] text-lg md:text-xl max-w-lg leading-relaxed">
                        I turn complex problems into smart solutions. Specializing in AI, automation, and full-stack development to build the future.
                    </p>

                    <div className="flex gap-4 pt-4">
                        <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-primary to-orange-600 text-white rounded-full font-semibold hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:scale-105 transition-all shadow-lg">
                            Contact Me
                        </a>
                        <a href="#projects" className="px-8 py-3 bg-[var(--color-card-bg)] border border-[var(--color-card-border)] text-[var(--color-text-main)] rounded-full font-semibold hover:bg-black/5 dark:hover:bg-white/10 hover:scale-105 transition-all backdrop-blur-sm">
                            View Work
                        </a>
                    </div>

                    <div className="flex gap-6 pt-4 text-[var(--color-text-muted)]">
                        {[
                            { icon: Github, href: "https://github.com/joelsmith-00" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/joel-smith-632b40322" },
                            { icon: Mail, href: "mailto:js96292006@gmail.com" }
                        ].map(({ icon: Icon, href }) => (
                            <motion.a
                                key={href}
                                href={href}
                                target={href.startsWith('http') ? "_blank" : undefined}
                                rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                                whileHover={{ y: -5, color: '#F97316' }}
                                className="hover:text-primary transition-colors"
                            >
                                <Icon className="w-6 h-6" />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Image / Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-80 h-80 md:w-96 md:h-96 group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-orange-500 rounded-[2rem] rotate-6 opacity-40 blur-lg animate-pulse" />
                        <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-primary/20 bg-white/5 backdrop-blur-sm shadow-2xl">
                            <img
                                src={heroImg}
                                alt="Joel Smith"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary cursor-pointer"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <ArrowDown className="w-8 h-8 drop-shadow-lg" />
            </motion.div>
        </section>
    );
};

export default Hero;
