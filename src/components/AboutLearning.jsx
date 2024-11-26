import { Code2, ChevronRight } from 'lucide-react';

export default function AboutLearning() {
    return (
        <div className="mt-16">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-50 rounded-lg">
                        <Code2 className="text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800">Currently Learning</h3>
                </div>
                <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-slate-600">
                        <ChevronRight size={16} className="text-emerald-600" />
                        UI/UX Design Principles
                    </li>
                    <li className="flex items-center gap-2 text-slate-600">
                        <ChevronRight size={16} className="text-emerald-600" />
                        Backend Development
                    </li>
                    <li className="flex items-center gap-2 text-slate-600">
                        <ChevronRight size={16} className="text-emerald-600" />
                        Cloud Services
                    </li>
                    <li className="flex items-center gap-2 text-slate-600">
                        <ChevronRight size={16} className="text-emerald-600" />
                        Mobile App Development
                    </li>
                </ul>
            </div>
        </div>
    );
}