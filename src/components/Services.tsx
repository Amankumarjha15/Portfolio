import { FaPalette, FaLaptopCode, FaLightbulb, FaRocket } from 'react-icons/fa';

const Services = () => {
    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="border-[1px] dark:border-[#1a1a1a] dark:bg-[#09090B] bg-white rounded-md p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl p-2 rounded-md bg-[#5A5A5C] text-white"><FaPalette /></span>
                        <h2 className="text-xl font-semibold">UI/UX Design</h2>
                    </div>
                    <p className="text-gray-400 mb-4">Creating intuitive and engaging user experiences through thoughtful design.</p>
                    <ul className="space-y-2 text-sm dark:text-gray-300 not-dark:black">
                        <li>→ <span className="hover:underline">User-centered design approach</span></li>
                        <li>→ <span className="hover:underline">Wireframing and prototyping</span></li>
                        <li>→ <span className="hover:underline">Responsive design for all devices</span></li>
                        <li>→ <span className="hover:underline">Accessibility considerations</span></li>
                    </ul>
                </div>

                <div className="border-[1px] dark:border-[#1a1a1a] dark:bg-[#09090B] bg-white rounded-md p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl p-2 rounded-md bg-[#5A5A5C] text-white"><FaLaptopCode /></span>
                        <h2 className="text-xl font-semibold">Full-Stack Development</h2>
                    </div>
                    <p className="text-gray-400 mb-4">Building robust applications with modern technologies from front to back.</p>
                    <ul className="space-y-2 text-sm dark:text-gray-300 not-dark:black">
                        <li>→ Frontend: React, Vue, Next.js</li>
                        <li>→ Backend: Node.js, Express, Django</li>
                        <li>→ Database: MongoDB, PostgreSQL</li>
                        <li>→ API Development and Integration</li>
                    </ul>
                </div>

                <div className="border-[1px] dark:border-[#1a1a1a] dark:bg-[#09090B] bg-white rounded-md p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl p-2 rounded-md bg-[#5A5A5C] text-white"><FaLightbulb /></span>
                        <h2 className="text-xl font-semibold">Design Systems</h2>
                    </div>
                    <p className="text-gray-400 mb-4">Crafting scalable design systems that ensure consistency and efficiency.</p>
                    <ul className="space-y-2 text-sm dark:text-gray-300 not-dark:black">
                        <li>→ Component library development</li>
                        <li>→ Style guide creation</li>
                        <li>→ Design tokens implementation</li>
                        <li>→ Documentation for developers and designers</li>
                    </ul>
                </div>

                <div className="border-[1px] dark:border-[#1a1a1a] dark:bg-[#09090B] bg-white rounded-md p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl p-2 rounded-md bg-[#5A5A5C] text-white"><FaRocket /></span>
                        <h2 className="text-xl font-semibold">Performance Optimization</h2>
                    </div>
                    <p className="text-gray-400 mb-4">Enhancing application speed and efficiency for better user experience.</p>
                    <ul className="space-y-2 text-sm dark:text-gray-300 not-dark:black">
                        <li>→ Code optimization and refactoring</li>
                        <li>→ Lazy loading and code splitting</li>
                        <li>→ Caching strategies</li>
                        <li>→ Server-side rendering and static generation</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Services