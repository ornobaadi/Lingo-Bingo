import Marquee from "react-fast-marquee";
const testimonials = [
    {
        id: 1,
        quote: "“Lingo Bingo makes language learning so much fun! I've learned more in a month here than I did in a year with other platforms!”",
        name: "Emily R.",
        title: "Student",
        image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        bgColor: "bg-lime-200",
        textColor: "text-black",
    },
    {
        id: 2,
        quote: "“I love how Lingo Bingo simplifies complex grammar rules. The bite-sized lessons fit perfectly into my busy schedule, and the progress tracking keeps me motivated.”",
        name: "Jason T.",
        title: "Marketing Professional",
        image: "https://cdn-icons-png.flaticon.com/512/168/168726.png",
        bgColor: "bg-gray-800",
        textColor: "text-white",
    },
    {
        id: 3,
        quote: "“This platform is a game-changer! I’ve tried many language apps, but Lingo Bingo’s personalized approach makes learning so much easier and enjoyable.”",
        name: "Sophia L.",
        title: "World Traveler",
        image: "https://cdn-icons-png.freepik.com/512/168/168730.png",
        bgColor: "bg-blue-100",
        textColor: "text-black",
    },
    {
        id: 4,
        quote: "“Lingo Bingo helped me prepare for my trip to Spain. The conversational practice is spot-on, and now I can confidently order tapas like a pro!”",
        name: "Carlos M.",
        title: "Food Enthusiast",
        image: "https://cdn-icons-png.flaticon.com/512/168/168732.png",
        bgColor: "bg-yellow-200",
        textColor: "text-black",
    },
    {
        id: 5,
        quote: "“What I love most about Lingo Bingo is the community aspect. Sharing tips and celebrating milestones with other learners has been so motivating!”",
        name: "Rachel P.",
        title: "College Student",
        image: "https://cdn-icons-png.flaticon.com/512/4196/4196209.png",
        bgColor: "bg-purple-200",
        textColor: "text-black",
    },
    {
        id: 6,
        quote: "“Lingo Bingo’s focus on real-life scenarios makes it incredibly practical. I’ve improved my French in just weeks and even got compliments from native speakers!”",
        name: "Henry W.",
        title: "Business Analyst",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrXBx9jb1Y1Y__UKnwyHXdK9AVIjon9khzjw&s",
        bgColor: "bg-green-100",
        textColor: "text-black",
    },
    {
        id: 7,
        quote: "“I was skeptical at first, but Lingo Bingo exceeded my expectations. The adaptive lessons feel tailor-made for my level, and the rewards system is so encouraging.”",
        name: "Aria K.",
        title: "Freelancer",
        image: "https://cdn-icons-png.freepik.com/512/8360/8360358.png",
        bgColor: "bg-pink-100",
        textColor: "text-black",
    },
    {
        id: 8,
        quote: "“Thanks to Lingo Bingo, I finally passed my B2 German exam! The platform’s structure and interactive exercises made the process stress-free and enjoyable.”",
        name: "Markus G.",
        title: "Engineer",
        image: "https://cdn-icons-png.flaticon.com/512/219/219986.png",
        bgColor: "bg-indigo-200",
        textColor: "text-black",
    },
    {
        id: 9,
        quote: "“Lingo Bingo combines fun and effectiveness. My kids and I are learning Spanish together, and it’s become our favorite family activity!”",
        name: "Olivia S.",
        title: "Parent",
        image: "https://cdn-icons-png.flaticon.com/512/3895/3895366.png",
        bgColor: "bg-orange-100",
        textColor: "text-black",
    },
    {
        id: 10,
        quote: "“The visuals and audio support on Lingo Bingo are phenomenal. It feels like I have a personal tutor guiding me step by step.”",
        name: "Nathan H.",
        title: "Language Enthusiast",
        image: "https://cdn-icons-png.flaticon.com/512/168/168726.png",
        bgColor: "bg-gray-800",
        textColor: "text-white",
    },
];


export default function TestimonialSection() {
    return (
        <section className="py-20 px-5 md:px-20" data-aos="fade-up">
            <div className="text-center mb-6 md:mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Hear what our amazing{" "}
                    <span className="text-lime-600 decoration-2">Users</span> say
                </h2>
            </div>

            <Marquee
                pauseOnHover
                speed={50}
                gradient={false}
            >
                <div className="flex space-x-6">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className={`p-6 rounded-xl shadow-md w-80 md:w-96 h-auto flex-shrink-0 flex flex-col justify-between ${testimonial.bgColor}`}
                        >
                            <blockquote className={`text-lg italic mb-4 pl-4 ${testimonial.textColor} border-lime-500`}>
                                {testimonial.quote}
                            </blockquote>
                            <div className="flex items-center space-x-4 mt-auto">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <h4 className={`font-semibold ${testimonial.textColor}`}>
                                        {testimonial.name}
                                    </h4>
                                    <p className={`text-sm ${testimonial.textColor}`}>
                                        {testimonial.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Marquee>
        </section>
    );
}