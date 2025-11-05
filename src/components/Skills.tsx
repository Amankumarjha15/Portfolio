import styles from '../styles/Skills.module.css';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker } from 'react-icons/fa';
import {  SiTypescript, SiJavascript, SiExpress, SiMongodb, SiTailwindcss, SiRedux, SiRedis, SiRabbitmq, SiPostgresql, SiNextdotjs } from 'react-icons/si';

const Skills = () => {
    const skillsList = [
        { name: "React", icon: <FaReact size={28} /> },
        { name: "Next.js", icon: <SiNextdotjs size={28} /> },
        { name: "TypeScript", icon: <SiTypescript size={28} /> },
        { name: "JavaScript", icon: <SiJavascript size={28} /> },
        { name: "Node.js", icon: <FaNodeJs size={28} /> },
        { name: "Express", icon: <SiExpress size={28} /> },
        { name: "MongoDB", icon: <SiMongodb size={28} /> },
        { name: "PostgreSQL", icon: <SiPostgresql size={28} /> },
        { name: "Redis", icon: <SiRedis size={28} /> },
        { name: "HTML5", icon: <FaHtml5 size={28} /> },
        { name: "CSS3", icon: <FaCss3Alt size={28} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={28} /> },
        { name: "Redux", icon: <SiRedux size={28} /> },
        { name: "Git", icon: <FaGitAlt size={28} /> },
        { name: "Docker", icon: <FaDocker size={28} /> },
        // { name: "RabbitMQ", icon: <SiRabbitmq size={28} /> },
    ];

    return (
        <div className={`${styles.skillsContainer} container mx-auto max-w-6xl`}>
            <div className={styles.skillsGrid}>
                {skillsList.map((skill, index) => (
                    <div key={index} className={styles.skillItem}>
                        <div className={styles.skillOverlay}></div>
                        <div className={styles.skillContent}>
                            <div className={styles.skillIcon}>{skill.icon}</div>
                            <span>{skill.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;