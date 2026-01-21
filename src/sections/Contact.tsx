
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-[var(--color-bg)] text-[var(--color-text-main)] px-6 transition-colors duration-300">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-[var(--color-text-muted)] max-w-xl mx-auto">
                        Whether you have a question, a project idea, or just want to say hi, feel free to reach out!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
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

                        <div className="flex items-center gap-4">
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

                        <div className="flex items-center gap-4">
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
                    </div>

                    {/* Form */}
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-4 py-3 bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-lg focus:outline-none focus:border-primary transition-colors text-[var(--color-text-main)] placeholder:text-[var(--color-text-muted)]"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-lg focus:outline-none focus:border-primary transition-colors text-[var(--color-text-main)] placeholder:text-[var(--color-text-muted)]"
                            />
                        </div>
                        <div>
                            <textarea
                                rows={4}
                                placeholder="Message"
                                className="w-full px-4 py-3 bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-lg focus:outline-none focus:border-primary transition-colors text-[var(--color-text-main)] placeholder:text-[var(--color-text-muted)] resize-none"
                            />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all flex items-center justify-center gap-2"
                        >
                            Send Message <Send className="w-4 h-4" />
                        </motion.button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
