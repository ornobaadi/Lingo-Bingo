import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";


const Lesson = () => {
    const { lesson_no } = useParams();
    const [vocabularies, setVocabularies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/german.json')
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

    return (
        <div className="container mx-auto p-10">
            <h1 className="text-3xl font-bold text-center mb-6">Lesson {lesson_no}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {vocabularies.length > 0 ? (
                    vocabularies.map((vocab, index) => (
                        <div
                            key={index}
                            className="card border border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-100 transition"
                            onClick={() => pronounceWord(vocab.word, 'de-DE')}
                        >
                            <h2 className="text-xl font-semibold">{vocab.word}</h2>
                            <p>{vocab.meaning}</p>
                            <p className="italic text-sm">{vocab.part_of_speech}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center col-span-3">No words found for this lesson.</p>
                )}
            </div>
            <button
                className="mt-6 btn btn-wide btn-success text-white"
                onClick={() => navigate('/learn')}
            >
            <IoIosArrowBack />
            Back to Lessons
            </button>
        </div>
    );
};

export default Lesson;
