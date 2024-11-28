import CountUp from "react-countup";
import { FaBookOpen, FaLanguage, FaPlayCircle, FaUsers } from "react-icons/fa";

const SuccessNumbers = () => {
    return (
        <div>
            <section className="py-20 bg-gray-50 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-5" data-aos="fade-up">
                    Our Success So Far
                </h2>
                <div className="flex justify-around flex-col md:flex-row gap-10">
                    <div className="stat flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
                        <FaUsers className="text-5xl text-primary mb-3" />
                        <p className="stat-title">Users</p>
                        <p className="stat-value">
                            <CountUp start={0} end={15000} duration={5} />
                        </p>
                    </div>
                    <div className="stat flex flex-col items-center" data-aos="fade-up" data-aos-delay="300">
                        <FaBookOpen className="text-5xl text-secondary mb-3" />
                        <p className="stat-title">Lessons</p>
                        <p className="stat-value">
                            <CountUp start={0} end={1200} duration={5} />
                        </p>
                    </div>
                    <div className="stat flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
                        <FaLanguage className="text-5xl text-accent mb-3" />
                        <p className="stat-title">Vocabularies</p>
                        <p className="stat-value">
                            <CountUp start={0} end={25000} duration={5} />
                        </p>
                    </div>
                    <div className="stat flex flex-col items-center" data-aos="fade-up" data-aos-delay="500">
                        <FaPlayCircle className="text-5xl text-info mb-3" />
                        <p className="stat-title">Tutorials</p>
                        <p className="stat-value">
                            <CountUp start={0} end={500} duration={5} />
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SuccessNumbers;