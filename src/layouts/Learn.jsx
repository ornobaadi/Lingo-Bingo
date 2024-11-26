import ReactCountryFlag from "react-country-flag";
import { useNavigate } from "react-router-dom";

const Learn = () => {
    const navigate = useNavigate();

    const lessons = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        title: `Lesson ${index + 1}`,
        description: `Description for Lesson ${index + 1}`,
    }));

    return (
        <div className="container mx-auto p-5 md:p-10">
            <h1 className="text-lg md:text-3xl font-bold text-center mb-6 flex justify-center items-center">
                Let&apos;s Learn German Vocabularies
                <ReactCountryFlag
                    countryCode="DE"
                    svg
                    style={{
                        width: '1.5em',
                        height: '1.5em',
                        marginLeft: '0.5em'
                    }}
                />
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {lessons.map((lesson) => (
                    <div
                        key={lesson.id}
                        onClick={() => navigate(`/learn/${lesson.id}`)}
                        className="group bg-white p-6 rounded-xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-2 bg-emerald-50 rounded-lg">
                                <span className="text-emerald-500 font-bold text-xl">
                                    {lesson.id}
                                </span>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">
                            {lesson.title}
                        </h3>
                        {/* <p className="text-slate-600">
                            {lesson.description}
                        </p> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Learn;