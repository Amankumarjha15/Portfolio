import { VscAccount, VscHome } from 'react-icons/vsc';
import './App.css'
import Dock from './base/Dock/Dock';
import { useTheme } from './context/ThemeContext';
import SplitText from './components/SplitText';
import Profile from './components/Profile';
// import Services from './components/Services';
import BlinkButton from './components/BlinkButton';
import { IoCodeSlashOutline, IoMailOutline, IoMoonOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';

import { SlHandbag } from 'react-icons/sl';
import { LuGithub } from 'react-icons/lu';
import { FaLinkedinIn } from 'react-icons/fa';
import Project from './components/Project';
import Skills from './components/Skills';
import Background from './components/Background';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';


function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  // Set up intersection observer to detect which section is in view
  useEffect(() => {
    const sections = document.querySelectorAll('div[id]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  // Helper function for smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const items = [
    {
      icon: <VscHome className={`${activeSection === 'home' ? 'text-white' : ''}`} size={18} />,
      label: 'Home',
      onClick: () => scrollToSection('home'),
      isActive: activeSection === 'home'
    },
    {
      icon: <VscAccount className={`${activeSection === 'about' ? 'text-white' : ''}`} size={18} />,
      label: 'About',
      onClick: () => scrollToSection('about'),
      isActive: activeSection === 'about'
    },

    {
      icon: <IoCodeSlashOutline className={`${activeSection === 'skills' ? 'text-white' : ''}`} size={18} />,
      label: 'Skills',
      onClick: () => scrollToSection('skills'),
      isActive: activeSection === 'skills'
    },
    {
      icon: <SlHandbag className={`${activeSection === 'experience' ? 'text-white' : ''}`} size={18} />,
      label: 'Experience',
      onClick: () => scrollToSection('experience'),
      isActive: activeSection === 'experience'
    },
    {
      icon: <IoMailOutline className={`${activeSection === 'contact' ? 'text-white' : ''}`} size={18} />,
      label: 'Contact',
      onClick: () => scrollToSection('contact'),
      isActive: activeSection === 'contact'
    },

    {
      icon: <LuGithub size={18} />,
      label: 'GitHub',
      onClick: () => window.open('https://github.com/Amankumarjha15', '_blank'),
      isActive: false
    },
    {
      icon: <FaLinkedinIn size={18} />,
      label: 'LinkedIn',
      onClick: () => window.open('https://www.linkedin.com/in/aman-kumar-jha-736834217/', '_blank'),
      isActive: false
    },
    {
      icon: <IoMoonOutline className={theme === 'dark' ? 'text-yellow-300' : 'text-blue-600'} size={18} />,
      label: 'Theme',
      onClick: () => toggleTheme(),
      isActive: false
    },
  ];

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden  border bg-background dark:bg-[#09090B] dark:text-white transition-colors">
      {/* Custom dot pattern background */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

      {/* Text content with higher z-index */}
      <div className='text-center w-full h-[500px] relative z-10 flex items-center justify-center' id='home'>
        {/* More natural gradient overlay without box effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/50 to-transparent dark:via-[#09090B]/90 backdrop-blur-[0.5px]"></div>

        <div className='relative z-10 max-w-2xl px-4'>
          <SplitText
            text="Hi, I'm Aman Kumar jha"
            className="text-4xl font-semibold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />


          <p className='text-[#5C5C60] my-5'>
           Full-Stack Developer | System-First Thinker | Eager Learner
          </p>

          <div className='flex gap-5 justify-center my-5'>


            <BlinkButton classname='inline-block px-6 py-2 border-[1px] border-[#666668] bg-[#474749] hover:bg-[#5a5a5c] text-white rounded-3xl relative 
          transition-colors duration-300 hover:animate-[border-blink_1s_ease-in-out_infinite]' text="Explore Projects" func={() => scrollToSection('project')} />
            
            <BlinkButton
              classname='inline-block px-6 py-2 border-[1px] border-[#666668]  dark:text-white rounded-3xl relative not-dark:text-black
          transition-colors duration-300 hover:animate-[border-blink_1s_ease-in-out_infinite]'
              text="Download Resume"
              func={() => {
          const link = document.createElement('a');
          link.href = '/assets/Aman_Kumar_Jha_Resume.pdf';
          link.download = 'Aman_Kumar_Jha_Resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
              }}
            />

            <BlinkButton classname='inline-block px-6 py-2 border-[1px] border-[#666668]  dark:text-white rounded-3xl relative not-dark:text-black
          transition-colors duration-300 hover:animate-[border-blink_1s_ease-in-out_infinite]' text='Get In Touch' func={() => scrollToSection('contact')}></BlinkButton>
          </div>
        </div>
            </div>


      <div id='about' className="mt-20 container max-w-6xl px-4 mx-auto">
        <h2 className="text-3xl text-center mt-10 font-bold bg-gradient-to-r from-white to-[#333] bg-clip-text text-transparent">Simplicity in Code, Sophistication in Impact</h2>

        <p className='text-[#5C5C60] my-5 text-center'>Turning complex ideas into clean, scalable, and beautiful digital products.</p>
      </div>

      <Profile></Profile>

      {/* <div className='mt-16 container max-w-6xl mx-auto px-4' id='services'> */}
        {/* <h2 className="text-3xl text-center mt-10 font-bold bg-gradient-to-r from-white to-[#333] bg-clip-text text-transparent">Services I Offer</h2> */}
        {/* <p className='text-[#5C5C60] my-5 text-center'>Crafting full-stack solutions <br /> using modern technologies to solve real-world business problems.</p> */}
      {/* </div> */}
      {/* <Services></Services> */}

      <div id='skills' className='mt-16 container max-w-6xl mx-auto px-4'>
        <h2 className="text-3xl text-center mt-10 font-bold bg-gradient-to-r from-white to-[#333] bg-clip-text text-transparent">My Skills</h2>
        <p className='text-[#5C5C60] my-5 text-center'>The Stack Behind My Full-Stack Development Approach.</p>
        <Skills></Skills>
      </div>

      <div id='project' className="container mt-16 max-w-6xl mx-auto px-4">
        <Project></Project>
      </div>

      <div id='experience' className='mt-16 container max-w-6xl mx-auto'>
        <h2 className="text-3xl text-center mt-10 font-bold bg-gradient-to-r from-white to-[#333] bg-clip-text text-transparent">Knowledge Base – From Classroom to Code</h2>
        <p className='text-[#5C5C60] mb-10 mt-5 text-center'>My professional journey and achievements</p>
        <Background></Background>
      </div>

      <div id='contact' className='mt-16 container max-w-6xl mx-auto px-4'>
        <h2 className="text-3xl text-center mt-10 font-bold bg-gradient-to-r from-white to-[#333] bg-clip-text text-transparent">Get in Touch</h2>
        <p className='text-[#5C5C60] my-5 text-center'>Have a project in mind? Let's connect and discuss how I can help.</p>
        <Contact></Contact>
      </div>

      {/* Mobile Sidebar with active section highlighting */}
      <Sidebar items={items} activeSection={activeSection} />

      {/* Dock - hidden on mobile screens */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <Dock
          items={items}
          panelHeight={68}
        />
      </div>
    </div>
  )
}

export default App
