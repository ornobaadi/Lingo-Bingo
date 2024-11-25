
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
        <div className="container mx-auto p-10">
            <h1 className="text-3xl font-bold text-center mb-6">Let&apos;s Learn German Vocabularies&nbsp; <ReactCountryFlag
                countryCode="DE"
                svg
                style={{
                    width: '1.5em',
                    height: '1.5em',
                }}
                title="US"
            /></h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {lessons.map((lesson) => (
                    <div
                        key={lesson.id}
                        className="card bg-base-200 w-96 mx-auto"
                    >
                        <div className="card-body">
                            <h2 className="card-title justify-center">{lesson.title}</h2>
                            <p>{lesson.lesson_description}</p>
                            <div className="card-actions justify-center">
                                <button
                                    className="btn btn-wide text-white btn-success"
                                    onClick={() => navigate(`/learn/${lesson.id}`)}
                                >
                                    Start Lesson
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Learn;
