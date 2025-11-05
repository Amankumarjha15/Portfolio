import Microservices from './../assets/microservices.png'
import Padhaikro from '../assets/padhaikro.png'
import Bhukhad from '../assets/bhukhad.png'


const Project = () => {

    const projects = [
        {
            name: "Microservices",
            description:
                "Built a robust microservices architecture using message broker , Cloud and Docker. Implemented service discovery, API gateway, circuit breakers, and distributed tracing. Achieved 99.9% uptime and reduced response times by 40%.",
            type: 'Scalable Back-end',
            technologies: [
                "TypeScript",
                "NodeJs",
                "Docker",
                "Kubernetes",
                "Redis",
                "Postgres",
                "RabbitMQ",
                "Kafka",
                "NextJs",
                "Microservices",
                "AWS"
            ],
            image: Microservices,

        },
        {
            name: "PadhaiKro.com",
            description:
                "Padhai kro is an innovative edtech platform designed to transform online learning by offering a wide range of interactive courses and tutorials focused on technology and modern skills. Catering to learners of all levels, Eduroute provides engaging content curated by industry experts to ensure relevant and practical knowledge.",
            type: "Full Stack",
                technologies: [
                "Javascript",
                "React Js",
                "TailwindCSS",
                "Node Js",
                "Express Js",
                "MongoDB",
                "Redux",
                "Razorpay",
                "Cloudinary",
                "Auth Service"
            ],
            image: Padhaikro,
            code: "https://github.com/Amankumarjha15/PadhaiKro",
            link: 'https://padhai-kro.vercel.app/'
        },
        {
            name: "Bhukhad",
            description:
                "The Bhukhad project offers a streamlined platform for discovering and exploring nearby restaurants, aiming to enhance the food search experience for users. It provides quick access to local eateries, allowing users to browse through options effortlessly. The platform is designed with simplicity in mind, featuring intuitive navigation, making it easy for food enthusiasts to find and enjoy dining spots in their area. It seems to emphasize convenience and user-friendly interaction for those looking to satisfy their culinary cravings.",
            type: 'Front-End Api-Based',
            technologies: [
                "Javascript",
                "React Js",
                "TailwindCSS",
                "Redux",
                "Firebase",
                "Swiggy's Api integration"
            ],
            image: Bhukhad,
            link: 'https://bhukhad.vercel.app/',
            code: "https://github.com/Amankumarjha15/BHUKHAD",
        }
    ];




    return (
        <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center my-10">
                <h2 className="text-4xl text-center my-2 font-bold bg-gradient-to-r from-white to-[#333] bg-clip-text text-transparent">
                    Featured Projects
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Explore a collection of my recent work showcasing full-stack development,
                    microservices architecture, and innovative solutions using modern technologies.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto relative z-20 '>
                {
                    projects?.map((project) => (
                        <div className='rounded-lg overflow-hidden shadow-lg hover:shadow-2xl dark:bg-black bg-white opacity-100 transition-all duration-300'>
                            <div className='h-62 overflow-hidden'>
                                <img src={project?.image} alt={project?.name} className='w-full h-full object-cover' />
                            </div>
                            <div className='p-6 space-y-4'>
                                <div className='flex justify-between items-center'>
                                    <h3 className='text-2xl font-bold not-dark:text-[#545457] dark:text-white'>
                                        {project?.name}
                                    </h3>
                                    {project?.type && (
                                        <div className='text-sm text-gray-500 dark:bg-[#212123] not-dark:bg-[#dededc] px-3 py-1 rounded'>
                                            {project?.type}
                                        </div>
                                    )}
                                </div>
                                <div className='text-gray-400 text-sm'>
                                    {project?.description}
                                </div>
                                <div className='flex flex-wrap gap-2'>
                                    {
                                        project?.technologies.map((tech) => (
                                            <span className='px-3 py-1 border-[1.5px] rounded-full text-xs text-gray-500'>{tech}</span>
                                        ))
                                    }
                                </div>


                                <div className="flex gap-4 mt-4">
                                    {project?.link ? (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-500 hover:text-gray-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                <polyline points="15 3 21 3 21 9" />
                                                <line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                            Live Demo
                                        </a>
                                    ) : (
                                        <span className='text-sm text-gray-500 dark:bg-[#212123] not-dark:bg-[#dededc] px-3 py-1 rounded-3xl'>Upcoming</span>
                                    )}
                                    {project?.code && (
                                        <a href={project.code} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-500 hover:text-gray-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                            </svg>
                                            Code
                                        </a>
                                    )}
                                </div>



                            </div>
                        </div>

                    ))
                }
            </div>
        </div >
    )
}
export default Project