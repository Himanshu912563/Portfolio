import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const TypewriterText = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout;

        if (isDeleting) {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(prev => prev.slice(0, -1));
                }, 50); // Deleting speed
            } else {
                timeout = setTimeout(() => setIsDeleting(false), 500); // Pause before re-typing
            }
        } else {
            if (displayText.length < text.length) {
                timeout = setTimeout(() => {
                    setDisplayText(text.slice(0, displayText.length + 1));
                }, 100); // Typing speed
            } else {
                timeout = setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, text]);

    return (
        <span className="typewriter-text">
            {displayText}
            <span className="typewriter-cursor">|</span>
        </span>
    );
};

const Home = () => {
    const navigate = useNavigate();
    const controls = useAnimation();

    const handleDragEnd = (event, info) => {
        // If dragged left (negative x) by more than 100px
        if (info.offset.x < -100) {
            navigate('/about');
        } else {
            // Reset position if threshold not met
            controls.start({ x: 0 });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="home-container"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            style={{ cursor: 'grab', touchAction: 'pan-y' }} // Improve touch experience
            whileTap={{ cursor: 'grabbing' }}
        >
            <section className="hero">
                <div className="hero-content">
                    <motion.h2
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="hero-subtitle"
                    >
                        Hello, I'm
                    </motion.h2>
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="hero-title"
                    >
                        <span className="name-highlight">Himanshu Singh</span>
                    </motion.h1>
                    <motion.h3
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="hero-role"
                    >
                        <TypewriterText text="Full Stack Developer" />
                    </motion.h3>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="hero-description"
                    >
                        I build exceptional digital experiences with modern technologies.
                        Focused on creating intuitive, performant, and beautiful web applications.
                    </motion.p>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="hero-cta"
                    >
                        <Link to="/projects" className="btn btn-primary">View Work</Link>
                        <Link to="/contact" className="btn btn-outline">Contact Me</Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="hero-visual"
                >
                    <div className="profile-wrapper">
                        <img src="/src/assets/WhatsApp Image 2026-02-11 at 14.27.24.jpeg" alt="Profile" className="profile-image" />
                        <div className="profile-glow"></div>
                    </div>
                </motion.div>
            </section>
        </motion.div>
    );
};

export default Home;
