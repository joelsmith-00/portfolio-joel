import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    const [scrolled, setScrolled] = useState(false);

    // Theme State
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
            return localStorage.getItem('theme');
        }
        return 'dark'; // Default to dark
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme || 'dark');
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--color-card-border)] ${scrolled ? 'py-4' : 'py-6'} dark:bg-dark/80`}>
            {/* Note: using css vars for bg/border to make it theme aware */}
            <div className="container mx-auto max-w-6xl px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold bg-gradient-to-r from-primary to-[var(--color-text-main)] bg-clip-text text-transparent">JS.</a>

                <nav className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="relative group text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors font-medium">
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}

                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-[var(--color-card-border)] transition-colors text-[var(--color-text-main)]"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>

                    <a href="#contact" className="px-5 py-2 rounded-full border border-primary/50 text-primary hover:bg-primary hover:text-white transition-all text-sm font-semibold">
                        Let's Talk
                    </a>
                </nav>
            </div>

            {/* Reading Progress Bar */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary origin-left"
                style={{ scaleX }}
            />
        </header>
    );
};

export default Navbar;
