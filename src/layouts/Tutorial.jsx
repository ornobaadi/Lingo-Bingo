import { useState } from 'react';
import { Link } from 'react-router-dom';

const Tutorial = () => {
    const [currentVideo, setCurrentVideo] = useState('https://www.youtube.com/embed/oqJwR6qOipY?si=xCa0cRG8GrXYUfz0');

    const tutorials = [
        {
            id: 1,
            title: 'German for Beginners: Lesson 1',
            url: 'https://www.youtube.com/embed/oqJwR6qOipY',
            thumbnail: 'https://img.youtube.com/vi/oqJwR6qOipY/default.jpg'
        },
        {
            id: 2,
            title: 'Basic German Phrases',
            url: 'https://www.youtube.com/embed/nf1rzqG3nvA',
            thumbnail: 'https://img.youtube.com/vi/nf1rzqG3nvA/default.jpg'
        },
        {
            id: 3,
            title: 'Learn German with Duolingo',
            url: 'https://www.youtube.com/embed/i8WbI_PmcW4',
            thumbnail: 'https://img.youtube.com/vi/i8WbI_PmcW4/default.jpg'
        },
        {
            id: 4,
            title: 'German Grammar Basics',
            url: 'https://www.youtube.com/embed/7jP9Aw88h2Y',
            thumbnail: 'https://img.youtube.com/vi/7jP9Aw88h2Y/default.jpg'
        },
        {
            id: 5,
            title: 'Learning German Easily',
            url: 'https://www.youtube.com/embed/paDNTjoWExI',
            thumbnail: 'https://img.youtube.com/vi/paDNTjoWExI/default.jpg'
        },
        {
            id: 6,
            title: 'Common German Verbs',
            url: 'https://www.youtube.com/embed/mg2iOHZQMuM',
            thumbnail: 'https://img.youtube.com/vi/mg2iOHZQMuM/default.jpg'
        },
        {
            id: 7,
            title: 'Learn German Fast',
            url: 'https://www.youtube.com/embed/Py2O0pChgws',
            thumbnail: 'https://img.youtube.com/vi/Py2O0pChgws/default.jpg'
        },
        {
            id: 8,
            title: 'German Vocabulary',
            url: 'https://www.youtube.com/embed/OB9EshfBk5k',
            thumbnail: 'https://img.youtube.com/vi/OB9EshfBk5k/default.jpg'
        },
    ];

    return (
        <div className="min-h-screen p-6 lg:p-10">
            <h1 className="text-lg md:text-3xl font-bold text-center mb-8">Learn German - Video Tutorials</h1>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Side - Video Player */}
                <div className="lg:w-2/3">
                    <div className="w-full relative overflow-hidden rounded-lg shadow-xl bg-black">
                        <div
                            className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px]" // Adjust heights for different breakpoints
                        >
                            <iframe
                                src={currentVideo}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>

                    <div className="mt-6 text-start">
                        <Link
                            to="/learn"
                            className="btn btn-success text-white"
                        >
                            Learn Vocabularies
                        </Link>
                    </div>
                </div>

                {/* Right Side - Playlist */}
                <div className="lg:w-1/3">
                    <div className="bg-base-100 rounded-lg shadow-xl p-4">
                        <h2 className="text-xl font-semibold mb-4">Tutorial Playlist</h2>
                        <div className="space-y-3 max-h-[625px] overflow-y-auto">
                            {tutorials.map((tutorial) => (
                                <div
                                    key={tutorial.id}
                                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-base-200 transition-colors ${currentVideo === tutorial.url ? 'bg-base-300' : ''
                                        }`}
                                    onClick={() => setCurrentVideo(tutorial.url)}
                                >
                                    <img
                                        src={tutorial.thumbnail}
                                        alt={tutorial.title}
                                        className="w-24 h-16 object-cover rounded"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-medium">{tutorial.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tutorial;