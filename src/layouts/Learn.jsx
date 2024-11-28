import ReactCountryFlag from "react-country-flag";
import { Link, useNavigate } from "react-router-dom";

const Learn = () => {
    const navigate = useNavigate();

    const lessons = [
        {
            id: 1,
            title: "Lesson 1",
            description: "Essential greetings and polite expressions.",
        },
        {
            id: 2,
            title: "Lesson 2",
            description: "Phrases for daily activities and emotions.",
        },
        {
            id: 3,
            title: "Lesson 3",
            description: "Introductions and expressing excitement.",
        },
        {
            id: 4,
            title: "Lesson 4",
            description: "Expressing feelings and determination.",
        },
        {
            id: 5,
            title: "Lesson 5",
            description: "Expressions of love and well wishes.",
        },
        {
            id: 6,
            title: "Lesson 6",
            description: "Sharing opinions and making suggestions.",
        },
        {
            id: 7,
            title: "Lesson 7",
            description: "Expressing readiness and optimism.",
        },
        {
            id: 8,
            title: "Lesson 8",
            description: "Availability and decision-making phrases.",
        },
        {
            id: 9,
            title: "Lesson 9",
            description: "Hobbies and expressions of appreciation.",
        },
        {
            id: 10,
            title: "Lesson 10",
            description: "Confidence and personal aspiration phrases.",
        },
    ];

    return (
        <div className="min-h-screen">
            <div className="container mx-auto p-5 md:p-10">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-2xl md:text-4xl font-bold text-slate-800 mb-3 flex justify-center items-center gap-3">
                        Learn German
                        <ReactCountryFlag
                            countryCode="DE"
                            svg
                            style={{
                                width: '1.5em',
                                height: '1.5em',
                            }}
                        />
                    </h1>
                    <p className="text-slate-600 text-sm md:text-base">
                        Master the German language one lesson at a time
                    </p>
                </div>

                {/* Lessons Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {lessons.map((lesson) => (
                        <div
                            key={lesson.id}
                            onClick={() => navigate(`/learn/${lesson.id}`)}
                            className="group relative bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border border-slate-200"
                        >

                            {/* Content */}
                            <div className="space-y-4">
                                <div className="h-12 w-12 bg-green-50 rounded-xl flex items-center justify-center">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="h-6 w-6 text-green-600" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-slate-800 mb-1">
                                        {lesson.title}
                                    </h3>
                                    <p className="text-sm text-slate-600">
                                        {lesson.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="mt-6 text-start">
                    </div>
                </div>
                        <Link
                            to="/tutorial"
                            className="btn btn-success mt-5 text-white"
                        >
                            View More
                        </Link>
            </div>
        </div>
    );
};

export default Learn;