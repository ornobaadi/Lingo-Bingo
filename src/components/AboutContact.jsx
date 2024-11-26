import { Mail, Github } from 'lucide-react';

export default function AboutContact() {
    return (
        <div className="mt-16 pb-8">
            <h2 className="text-3xl font-bold mb-8 text-slate-800">Get in Touch</h2>
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-md">
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-slate-800">Let’s Connect!</h3>
                        <p className="text-slate-600">
                            Feel free to reach out for collaborations or just a friendly chat
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="mailto:aadi4789@gmail.com"
                            className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 transition-colors px-6 py-3 rounded-lg"
                        >
                            <Mail size={20} className="text-blue-400" />
                            <span className="text-slate-700 font-semibold">aadi4789@gmail.com</span>
                        </a>
                        <a
                            href="https://github.com/ornobaadi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 transition-colors px-6 py-3 rounded-lg"
                        >
                            <Github size={20} className="text-slate-700" />
                            <span className="text-slate-700 font-semibold">GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}