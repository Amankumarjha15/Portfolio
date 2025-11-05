import ProfileImage from './../assets/photoofme.png'


const Profile = () => {
    return (
        <div className="container max-w-6xl mx-auto mt-20 opacity-100 relative z-10 px-4">
            <div className="border-[1px] dark:border-[#1a1a1a] dark:bg-[#09090B] bg-white rounded-md p-5 flex flex-col md:flex-row justify-between shadow-sm">
                <div className='md:w-1/3 mb-4 md:mb-0 rounded-md'>
                    <img className='w-full h-auto overflow-hidden object-cover' src={ProfileImage} alt="Profile" />
                </div>
                <div className='md:w-3/5 flex flex-col justify-center'>
                    <h2 className='font-semibold text-xl'>
                        My Approach
                    </h2>
                    <p className='py-3 dark:text-[#5C5C60]'>
                        Hi, I’m Aman Kumar Jha, a passionate Full Stack Developer with a strong focus on backend development and building scalable, high-performance systems. I enjoy turning complex problems into simple, efficient solutions.
                    </p>
                    <p className='py-3 dark:text-[#5C5C60]'>
                       I’m currently enhancing my skills in System Design, Data Structures & Algorithms, and Advanced System Architecture to deepen my understanding of how large-scale systems work. I’m also learning Docker, Kubernetes, and AWS to strengthen my deployment and DevOps knowledge.
Exploring Microservices Architecture and distributed systems excites me — my goal is to design and build robust, scalable backend systems that power real-world applications seamlessly.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Profile