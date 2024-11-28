import { BookCheck, Earth, FlaskConical } from "lucide-react";

const HomeAbout = () => {
    return (
        <section className="py-20 px-5 md:px-20 bg-gray-50">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-5" data-aos="fade-up">
                    Empower Your Language Learning Journey
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-10 mx-auto max-w-4xl" data-aos="fade-up" data-aos-delay="100">
                    At Lingo Bingo, we provide interactive tools designed to help you master new languages with ease. 
                    From engaging lessons to vocabulary games, we make learning effective and enjoyable.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-xl transition duration-500" data-aos="fade-up" data-aos-delay="200">
                    <div className="mb-4">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                        <BookCheck />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Engaging Lessons</h3>
                    <p className="text-gray-600">
                        Learn at your own pace with structured lessons that build your language skills step by step.
                    </p>
                </div>
                {/* Card 2 */}
                <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-xl transition duration-500" data-aos="fade-up" data-aos-delay="300">
                    <div className="mb-4">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                        <FlaskConical />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Interactive Experience</h3>
                    <p className="text-gray-600">
                        Reinforce your vocabulary with fun and interactive design to make learning memorable.
                    </p>
                </div>
                {/* Card 3 */}
                <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-xl transition duration-500" data-aos="fade-up" data-aos-delay="400">
                    <div className="mb-4">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                        <Earth />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Cultural Insights</h3>
                    <p className="text-gray-600">
                        Dive into the culture behind the language with curated articles and videos for better understanding.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;
