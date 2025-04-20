import { RevealOnScroll } from "./RevealOnScroll";

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-orange-600 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2ox_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3>Drone Simulator</h3>
                            <p></p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {[
                                    "C++",
                                    "Docker",
                                    "Git",
                                    "Design Patterns",
                                    "Development Cycles",
                                ].map((tech, key) => (
                                    <span
                                        key={key}
                                        className=" bg-orange-500/10 text-orange-300 py- px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2ox_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="#"
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    View Project →{" "}
                                </a>
                            </div>
                        </div>
                        {/* <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2ox_8px_rgba(59,130,246,0.1)] transition-all">
              <h3>Drone Simulator</h3>
              <p></p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "C++",
                  "Docker",
                  "Git",
                  "Design Patterns",
                  "Development Cycles",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className=" bg-orange-500/10 text-orange-300 py- px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2ox_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →{" "}
                </a>
              </div>
            </div> */}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
