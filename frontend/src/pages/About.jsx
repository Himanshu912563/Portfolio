import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="page-container"
        >
            <h1 className="section-title">About Me</h1>
            <div className="about-content">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="about-text"
                >
                    <p>
                       I am a passionate and dedicated Java developer with a strong interest in building efficient, scalable, and user-friendly applications. I enjoy solving real-world problems through clean code and logical thinking. My focus is on continuously improving my programming skills and learning modern technologies that help me grow as a software developer.

I have hands-on experience with Java, OOP concepts, data structures, and basic backend development. I am comfortable working with databases, writing optimized code, and understanding how software systems work from the inside. I believe in writing simple, readable, and maintainable code.

I am a quick learner, self-motivated, and always eager to explore new tools and technologies. My goal is to become a skilled software engineer who can contribute to meaningful projects and create impactful solutions.

I am currently looking for opportunities where I can apply my skills, learn from experienced developers, and grow in a professional environment.
                    </p>
                    <p>
                        {/* I specialize in the MERN stack (MongoDB, Express, React, Node.js) but I'm always learning new tools and frameworks. I believe in writing clean, maintainable code and building user-centric interfaces. */}
                    </p>
                    <p>
                        {/* Whether working on a complex backend architecture or a pixel-perfect frontend, I bring dedication and attention to detail to every project. */}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="about-stats"
                >
                    {/* <div className="stat-item">
                        <h3>3+</h3>
                        <p>Years Experience</p>
                    </div>
                    <div className="stat-item">
                        <h3>25+</h3>
                        <p>Projects</p>
                    </div>
                    <div className="stat-item">
                        <h3>15+</h3> */}
                        {/* <p>Happy Clients</p>
                    </div> */}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;
