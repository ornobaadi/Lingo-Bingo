import { Smartphone, Bus, ShoppingCart, Wallet, ExternalLink, ChefHat, Trophy } from 'lucide-react';

const projects = [
    {
        title: 'Gadget Heaven',
        url: 'https://gadget-heaven-ornobaadi.surge.sh/',
        description: 'E-commerce platform for tech enthusiasts',
        icon: <Smartphone className="text-emerald-600" />
    },
    {
        title: 'Dream 11',
        url: 'https://dream11-ornobaadi.surge.sh/',
        description: 'T20 Cricket Tournament Auction',
        icon: <Trophy className="text-emerald-600" />
    },
    {
        title: 'Bus Buddy',
        url: 'https://ornobaadi.github.io/BusBuddy/',
        description: 'Transportation Ticketing',
        icon: <Bus className="text-emerald-600" />
    },
    {
        title: 'Best Dev Shop',
        url: 'https://ornobaadi.github.io/BestDevShop/',
        description: 'Developer tools marketplace',
        icon: <ShoppingCart className="text-emerald-600" />
    },
    {
        title: 'Payoo MFS',
        url: 'https://ornobaadi.github.io/Payoo-MFS-Updated/',
        description: 'Mobile financial services platform',
        icon: <Wallet className="text-emerald-600" />
    },
    {
        title: 'Chef Recipe',
        url: 'https://chefs-table-ornobaadi.surge.sh/',
        description: 'Online Restaurant with top chefs',
        icon: <ChefHat className="text-emerald-600" />
    },
];

export default function AboutProjects() {
    return (
        <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-slate-800">Recent Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white p-6 rounded-xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-2 bg-emerald-50 rounded-lg">
                                {project.icon}
                            </div>
                            <ExternalLink className="text-slate-400 group-hover:text-emerald-600 transition-colors" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
                        <p className="text-slate-600">{project.description}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}