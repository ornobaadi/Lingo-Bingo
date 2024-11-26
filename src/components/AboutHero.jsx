import { Mail, Github, Globe, Component, Atom, Database, Fingerprint, Braces, Code, Hexagon } from 'lucide-react';

const techStack = [
    { icon: <Globe className="text-emerald-600" />, name: 'HTML' },
    { icon: <Component className="text-emerald-600" />, name: 'Tailwind CSS' },
    { icon: <Braces className="text-emerald-600" />, name: 'JavaScript' },
    { icon: <Fingerprint className="text-emerald-600" />, name: 'Firebase' },
    { icon: <Database className="text-emerald-600" />, name: 'MongoDB' },
    { icon: <Code className="text-emerald-600" />, name: 'ExpressJS' },
    { icon: <Atom className="text-emerald-600" />, name: 'ReactJS' },
    { icon: <Hexagon className="text-emerald-600" />, name: 'NodeJS' },
];

export default function AboutHero() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-16">
            <div className="flex-1 space-y-6">
                <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-success to-slate-800">
                    Ornob Aadi
                </h1>
                <p className="text-xl text-slate-600">Frontend Developer from Bangladesh</p>
                <p className="text-slate-600 leading-relaxed">
                    Currently expanding my expertise into Backend Development and UI/UX design
                    for comprehensive full-stack capabilities.
                </p>
                <div className="flex gap-4">
                    <a
                        href="mailto:aadi4789@gmail.com"
                        className="flex items-center gap-2 bg-success hover:bg-emerald-700 text-white transition-colors px-4 py-2 rounded-lg"
                    >
                        <Mail size={20} />
                        Contact Me
                    </a>
                    <a
                        href="https://github.com/ornobaadi?tab=repositories"
                        target="_blank"
                        className="flex items-center gap-2 bg-slate-200 hover:bg-slate-300 transition-colors px-4 py-2 rounded-lg"
                    >
                        <Github size={20} />
                        View Projects
                    </a>
                </div>
            </div>
            <div className="flex-1">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 to-slate-200 rounded-2xl blur-xl opacity-50"></div>
                    <div className="relative bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
                        <h2 className="text-2xl font-semibold mb-6 text-slate-800">Tech Stack</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {techStack.map((tech, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg hover:bg-slate-100 transition-colors"
                                >
                                    {tech.icon}
                                    <span className="text-slate-700">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}