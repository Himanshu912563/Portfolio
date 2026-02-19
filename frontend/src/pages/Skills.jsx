import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDatabase, FaDocker } from 'react-icons/fa';

const skillsData = [
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'MongoDB', icon: <FaDatabase />, color: '#47A248' },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
];

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="page-container"
        >
            <h1 className="section-title">Technical Skills</h1>
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="skills-grid"
            >
                {skillsData.map((skill, index) => (
                    <motion.div key={index} variants={item} className="skill-card">
                        <div className="skill-icon" style={{ color: skill.color }}>
                            {skill.icon}
                        </div>
                        <h3>{skill.name}</h3>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Skills;
