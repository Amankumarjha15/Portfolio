import { TbSend } from "react-icons/tb"

const Contact = () => {
    return (

        <div className="container max-w-6xl relative z-10  mx-auto px-4 py-8 mb-20">
            
            <form className="max-w-lg mx-auto p-5 dark:bg-[#09090B]  not-dark:bg-white rounded-md space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full p-2 border rounded"
                        placeholder="Enter your name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-2 border rounded"
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium">Message</label>
                    <textarea
                        id="message"
                        rows={4}
                        className="w-full p-2 border rounded"
                        placeholder="Enter your message"
                    />
                </div>
                <div className="flex justify-center">

                    <button
                        type="submit"
                        className="px-6 py-2 border-[1px] border-[#666668] bg-[#474749] hover:bg-[#5a5a5c] text-white rounded-3xl relative 
                transition-colors duration-300 hover:animate-[border-blink_1s_ease-in-out_infinite] flex items-center gap-2"
                    >
                        <span>
                            <TbSend></TbSend>
                        </span>
                        <span>
                            Send Message
                        </span>
                    </button>
                </div>
            </form>

        </div>
    )
}
export default Contact