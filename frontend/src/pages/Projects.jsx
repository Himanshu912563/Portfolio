import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const projectsData = [
    {
        id: 1,
        title: 'Trade X',
        description: 'A full-featured online trading platform built with React, Node.js, and MongoDB. Includes user authentication, payment integration, and admin dashboard.',
        longDescription: 'Trade X is known for its simple pricing (zero brokerage on equity delivery and direct mutual funds, and flat fees on intraday/F&O), clean user interface, and strong focus on investor education. It serves millions of clients across India and processes a significant share of daily retail trading volumes.',
        tags: ['React', 'Node.js', 'MongoDB', ],
        github: '#',
        demo: '#'
    },
    {
        id: 2,
        title: 'Hospital Management System',
        description: 'This system replaces manual paperwork with an organized digital workflow, enabling hospital staff to access real-time information, reduce errors, and save time.',
        longDescription: 'A Hospital Management System (HMS) is a software application designed to digitally manage the complete operations of a hospital or clinic. It integrates patient records, appointments, billing, pharmacy, laboratory, and administrative tasks into a single, centralized system to improve efficiency, accuracy, and patient care.',
        tags: ['Full Stack'],
        github: '#',
        demo: '#'
    },
    {
        id: 3,
        title: 'Weather Dashboard',
        description: 'A beautiful weather application that provides detailed forecasts and visualizes data using Recharts. Uses OpenWeatherMap API.',
        longDescription: 'Get accurate weather forecasts for any location worldwide. The app visualizes temperature trends, humidity, and wind speed using interactive charts.',
        tags: ['React', 'API Integration', 'Recharts'],
        github: '#',
        demo: '#'
    }
];

const Projects = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="page-container"
        >
            <h1 className="section-title">Featured Projects</h1>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <motion.div
                        layoutId={`project-${project.id}`}
                        key={project.id}
                        className="project-card"
                        onClick={() => setSelectedId(project.id)}
                        whileHover={{ scale: 1.02 }}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="project-image-placeholder">
                            <div className="overlay"></div>
                        </div>
                        <div className="project-info">
                            <motion.h3>{project.title}</motion.h3>
                            <p>{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        className="project-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            layoutId={`project-${selectedId}`}
                            className="project-expanded"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.button
                                className="close-btn"
                                onClick={() => setSelectedId(null)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaTimes />
                            </motion.button>

                            {(() => {
                                const project = projectsData.find(p => p.id === selectedId);
                                return (
                                    <>
                                        <div className="project-image-placeholder expanded-image">
                                            <div className="overlay"></div>
                                        </div>
                                        <div className="project-info expanded-info">
                                            <motion.h2>{project.title}</motion.h2>
                                            <p className="long-description">{project.longDescription}</p>

                                            <div className="project-tags">
                                                {project.tags.map(tag => (
                                                    <span key={tag}>{tag}</span>
                                                ))}
                                            </div>

                                            <div className="project-links expanded-links">
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><FaGithub /> View Code</a>
                                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><FaExternalLinkAlt /> Live Demo</a>
                                            </div>
                                        </div>
                                    </>
                                );
                            })()}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Projects;
