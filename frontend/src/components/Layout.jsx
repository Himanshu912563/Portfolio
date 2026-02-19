import { Link, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import StarBackground from './StarBackground';
import StardustCursor from './StardustCursor';

const Layout = () => {
    return (
        <div className="layout">
            <StarBackground />
            <StardustCursor />
            <nav className="navbar">
                <div className="logo">Portfolio</div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

            <main className="content">
                <Outlet />
            </main>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
