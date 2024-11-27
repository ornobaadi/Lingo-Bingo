import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

const Lesson = () => {
    const { lesson_no } = useParams();
    const [vocabularies, setVocabularies] = useState([]);
    const [selectedVocab, setSelectedVocab] = useState(null); // To handle modal data
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/german.json') // Fetch lesson data
            .then((res) => res.json())
            .then((data) => {
                const filteredData = data.filter((item) => item.lesson_no === Number(lesson_no));
                setVocabularies(filteredData);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [lesson_no]);

    const pronounceWord = (word, lang = 'de-DE') => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = lang;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
    };

    // Dynamically assign card colors based on difficulty
    const getDifficultyClass = (difficulty) => {
        switch (difficulty) {
            case 'easy':
                return 'bg-green-100 border-green-400';
            case 'medium':
                return 'bg-yellow-100 border-yellow-400';
            case 'hard':
                return 'bg-red-100 border-red-400';
            default:
                return 'bg-gray-100 border-gray-300';
        }
    };

    return (
        <div className="container mx-auto p-10">
            {/* Page Title */}
            <h1 className="text-4xl font-bold text-center mb-8">Lesson {lesson_no}</h1>

            {/* Vocabulary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {vocabularies.length > 0 ? (
                    vocabularies.map((vocab, index) => (
                        <div
                            key={index}
                            className={`card border rounded-lg p-6 items-center cursor-pointer hover:shadow-lg transition ${getDifficultyClass(vocab.difficulty)}`}
                            onClick={() => pronounceWord(vocab.word, 'de-DE')}
                        >
                            <h2 className="text-2xl font-semibold">{vocab.word}</h2>
                            <p className="text-lg">{vocab.meaning}</p>
                            <p className="italic text-sm mb-2">{vocab.part_of_speech}</p>
                            <button
                                className="btn btn-success text-white btn-wide mt-2"
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent card click event
                                    setSelectedVocab(vocab); // Open modal with vocab data
                                }}
                            >
                                When to say
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center col-span-3">No words found for this lesson.</p>
                )}
            </div>

            {/* Back to Lessons Button */}
            <button
                className="mt-8 btn btn-wide btn-success text-white flex items-center justify-center"
                onClick={() => navigate('/learn')}
            >
                <IoIosArrowBack className="mr-2" />
                Back to Lessons
            </button>

            {/* Modal for "When to Say" */}
            {selectedVocab && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h2 className="text-xl font-semibold mb-4">{selectedVocab.word}</h2>
                        <p>
                            <strong>Meaning:</strong> {selectedVocab.meaning}
                        </p>
                        <p>
                            <strong>When to Say:</strong> {selectedVocab.when_to_say}
                        </p>
                        <p>
                            <strong>Example:</strong> {selectedVocab.example}
                        </p>
                        <div className="modal-action">
                            <button
                                className="btn btn-error"
                                onClick={() => setSelectedVocab(null)} // Close modal
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Lesson;