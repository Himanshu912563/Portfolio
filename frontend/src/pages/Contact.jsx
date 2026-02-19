import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="page-container"
        >
            <h1 className="section-title">Get In Touch</h1>
            <div className="contact-content">
                <div className="contact-info">
                    <h3>Let's Talk</h3>
                    <p>I'm currently available for freelance projects and full-time opportunities. If you have a project that needs some creative injection, I'd love to hear from you.</p>
                    <div className="contact-methods">
                        <a href="mailto:heyhimanshu9125@gmail.com" className="contact-method">
                            <FaEnvelope /> <span>heyhimanshu9125@gmail.com</span>
                        </a>
                        <div className="social-links">
                            <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        </div>
                    </div>
                </div>

                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="5" placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </motion.div>
    );
};

export default Contact;
