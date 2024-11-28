const FAQ = () => {
    return (
        <section className="py-10 px-5 md:px-20" data-aos="fade-up">
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Frequently Asked <span className="text-lime-500 underline decoration-2">Questions</span>
                </h2>
                <p className="text-gray-600">Find answers to common questions about Lingo Bingo</p>
            </div>

            <div className="mx-auto space-y-4">
                <div className="collapse collapse-arrow bg-base-200" data-aos="fade-up" data-aos-delay="400">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        How does Lingo Bingo make language learning fun?
                    </div>
                    <div className="collapse-content">
                        <p>Lingo Bingo combines interactive games, rewards, and social elements to make learning engaging. Our platform features:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Game-based lessons with points and achievements</li>
                            <li>Daily challenges and competitions</li>
                            <li>Social learning with friends and global community</li>
                            <li>Interactive quizzes and real-life scenarios</li>
                            <li>Progress tracking and personalized learning paths</li>
                        </ul>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200" data-aos="fade-up" data-aos-delay="400">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Which languages are available on Lingo Bingo?
                    </div>
                    <div className="collapse-content">
                        <p>We currently offer courses in:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Spanish, French, German, Italian</li>
                            <li>Mandarin Chinese, Japanese, Korean</li>
                            <li>Portuguese, Russian, Arabic</li>
                            <li>Dutch, Swedish, Turkish</li>
                        </ul>
                        <p className="mt-2">We’re constantly adding new languages based on user demand!</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200" data-aos="fade-up" data-aos-delay="400">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What subscription plans do you offer?
                    </div>
                    <div className="collapse-content">
                        <p>We offer flexible plans to suit different needs:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li><strong>Free Plan:</strong> Basic lessons, limited daily exercises</li>
                            <li><strong>Premium ($9.99/month):</strong> Full access to all features, offline mode</li>
                            <li><strong>Family Plan ($19.99/month):</strong> Up to 6 family members</li>
                            <li><strong>Student Discount:</strong> 50% off Premium with valid student ID</li>
                        </ul>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200" data-aos="fade-up" data-aos-delay="400">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How effective is Lingo Bingo for language learning?
                    </div>
                    <div className="collapse-content">
                        <p>Lingo Bingo uses proven learning methodologies:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Spaced repetition for better retention</li>
                            <li>Context-based learning with real-life scenarios</li>
                            <li>AI-powered personalization</li>
                            <li>Regular progress assessments</li>
                        </ul>
                        <p className="mt-2">Our users typically achieve conversational fluency within 3-6 months of consistent practice.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200" data-aos="fade-up" data-aos-delay="400">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Can I learn multiple languages simultaneously?
                    </div>
                    <div className="collapse-content">
                        <p>Yes! With Lingo Bingo, you can:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Learn unlimited languages at once</li>
                            <li>Switch between languages easily</li>
                            <li>Track progress for each language separately</li>
                            <li>Set different goals for different languages</li>
                        </ul>
                        <p className="mt-2">However, we recommend focusing on one language at a time for beginners to ensure better progress.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200" data-aos="fade-up" data-aos-delay="400">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How does the community feature work?
                    </div>
                    <div className="collapse-content">
                        <p>Our community features include:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Language exchange with native speakers</li>
                            <li>Group challenges and leaderboards</li>
                            <li>Discussion forums for each language</li>
                            <li>Cultural exchange events</li>
                            <li>Study groups and buddy system</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;