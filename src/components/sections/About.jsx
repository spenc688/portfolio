import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {
  const frontendSkills = ["Typescript", "CSS", "Javascript", "HTML"];
  const backendSkills = ["node.js", "SQL", "Python", "Java", "C/C++"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-orange-600 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">Passionate developer</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className=" bg-orange-500/10 text-orange-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2ox_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className=" bg-orange-500/10 text-orange-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2ox_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">📚 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Bachelor&apos;s Degree in Computer Science</strong> -
                  University of Minnesota (2020-2025)
                </li>
                <li>
                  Relevant Coursework:
                  <ul className="text-xs list-inside space-y-1 px-3">
                    <li>Data Structures and Algorithms</li>
                    <li>Internet Programming</li>
                    <li>Program Design and Development</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💻 Work Experience</h3>
              <div className="space-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Undergraduate Teacher&apos;s Assistant(2024 - 2025)
                  </h4>
                  <p>
                    Facilitated hands-on coding labs, guiding students through
                    practical applications of machine architecture concepts.
                    Provided academic support during office hours, addressing
                    student questions and enhancing understanding of course
                    material. Assisted in the grading of projects and exams,
                    ensuring fair and timely feedback to promote student
                    learning and improvement. Collaborated with the course
                    instructor to develop instructional materials and enhance
                    the overall learning experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
