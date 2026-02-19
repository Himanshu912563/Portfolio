import { useEffect, useState, useRef } from 'react';

const StardustCursor = () => {
    const pointsRef = useRef([]);
    const cursorRef = useRef(null);
    const requestRef = useRef();

    useEffect(() => {
        const handleMouseMove = (e) => {
            const point = {
                x: e.clientX,
                y: e.clientY,
                timestamp: Date.now()
            };
            pointsRef.current.push(point);
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            const now = Date.now();
            // Remove points older than 200ms
            if (pointsRef.current.length > 0) {
                pointsRef.current = pointsRef.current.filter(p => now - p.timestamp < 200);
            }

            if (cursorRef.current && pointsRef.current.length > 1) {
                const points = pointsRef.current;
                let path = `M ${points[0].x} ${points[0].y}`;

                for (let i = 1; i < points.length - 1; i++) {
                    const p0 = points[i];
                    const p1 = points[i + 1];
                    const mx = (p0.x + p1.x) / 2;
                    const my = (p0.y + p1.y) / 2;
                    path += ` Q ${p0.x} ${p0.y} ${mx} ${my}`;
                }

                if (points.length > 1) {
                    const last = points[points.length - 1];
                    path += ` L ${last.x} ${last.y}`;
                }

                cursorRef.current.setAttribute('d', path);
            } else if (cursorRef.current) {
                cursorRef.current.setAttribute('d', '');
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return (
        <div className="stardust-container">
            <svg className="cursor-svg">
                <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <path
                    ref={cursorRef}
                    d=""
                    stroke="cyan"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#glow)"
                    style={{
                        opacity: 0.8,
                        transition: 'none' // Remove CSS transition for instant updates
                    }}
                />
            </svg>
        </div>
    );
};

export default StardustCursor;


