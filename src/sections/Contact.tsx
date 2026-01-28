
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section id="contact" className="py-20 bg-[var(--color-bg)] text-[var(--color-text-main)] px-6 transition-colors duration-300">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-[var(--color-text-muted)] max-w-xl mx-auto">
                        Whether you have a question, a project idea, or just want to say hi, feel free to reach out!
                    </p>
                </motion.div>

                <div className="flex flex-col gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-8"
                    >
                        <div className="flex items-center gap-4 min-w-[250px]">
                            <div className="p-4 rounded-full bg-[var(--color-card-bg)] border border-[var(--color-card-border)] text-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Email</h3>
                                <a href="mailto:js96292006@gmail.com" className="text-[var(--color-text-muted)] hover:text-primary transition-colors">
                                    js96292006@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 min-w-[250px]">
                            <div className="p-4 rounded-full bg-[var(--color-card-bg)] border border-[var(--color-card-border)] text-secondary">
                                <Linkedin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">LinkedIn</h3>
                                <a href="https://www.linkedin.com/in/joel-smith-632b40322" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-primary transition-colors">
                                    Joel Smith
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 min-w-[250px]">
                            <div className="p-4 rounded-full bg-[var(--color-card-bg)] border border-[var(--color-card-border)] text-[var(--color-text-main)]">
                                <Github className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">GitHub</h3>
                                <a href="https://github.com/joelsmith-00" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-primary transition-colors">
                                    @joelsmith-00
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Animated Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="w-full bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-xl overflow-hidden shadow-2xl h-[800px]"
                    >
                        <div
                            className="visme_d"
                            data-title="Simple Animated Contact Form"
                            data-url="7vgozy9w-untitled-project?fullPage=false"
                            data-domain="forms"
                            data-full-page="false"
                            data-min-height="100%"
                            data-form-id="163634"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
