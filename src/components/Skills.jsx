import React from "react";

const skillData = [
  {
    id: 1,
    name: "Java",
    alt: "Java",
    src: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Java-Light.svg",
  },
  {
    id: 2,
    name: "JavaScript",
    alt: "JavaScript",
    src: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/JavaScript.svg",
  },
  {
    id: 3,
    name: "Python",
    alt: "Python",
    src: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Python-Light.svg",
  },
  {
    id: 4,
    name: "C",
    alt: "C",
    src: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/C.svg",
  },
  {
    id: 5,
    name: "C++",
    alt: "C++",
    src: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/CPP.svg",
  },
  {
    id: 6,
    name: "C#",
    alt: "C#",
    src: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/CS.svg",
  },
  {
    id: 7,
    name: "HTML",
    alt: "HTML",
    src: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/HTML.svg",
  },
  {
    id: 8,
    name: "CSS",
    alt: "CSS",
    src: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/CSS.svg",
  },
  {
    id: 9,
    name: "Bootstrap",
    alt: "Bootstrap",
    src: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Bootstrap.svg",
  },
  {
    id: 10,
    name: "MySQL",
    alt: "MySQL",
    src: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MySQL-Light.svg",
  },
  {
    id: 11,
    name: "Node.js",
    alt: "Node.js",
    src: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NodeJS-Light.svg",
  },
  {
    id: 12,
    name: "React",
    alt: "React",
    src: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Light.svg",
  },
  {
    id: 13,
    name: "Tailwind CSS",
    alt: "Tailwind CSS",
    src: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TailwindCSS-Light.svg",
  },
  {
    id: 14,
    name: "MongoDB",
    alt: "MongoDB",
    src: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MongoDB.svg",
  },
  {
    id: 15,
    name: ".NET Framework",
    alt: ".NET Framework",
    src: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/DotNet.svg",
  },
  {
    id: 16,
    name: "Android Studio",
    alt: "Android Studio",
    src: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/AndroidStudio-Light.svg",
  },
  {
    id: 17,
    name: "Visual Studio",
    alt: "Visual Studio",
    src: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/VisualStudio-Dark.svg",
  },
  {
    id: 18,
    name: "VS Code",
    alt: "VS Code",
    src: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/VSCode-Dark.svg",
  },
  {
    id: 19,
    name: "Git",
    alt: "Git",
    src: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Git.svg",
  },
  {
    id: 20,
    name: "Adobe Photoshop",
    alt: "Adobe Photoshop",
    src: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Photoshop.svg",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-brandDark text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Languages and Tools
        </h2>
        <div className="mt-12 ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
            {skillData.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col items-center hover:scale-125 duration-200 cursor-pointer"
              >
                <span className="text-3xl">
                  <img
                    src={skill.src}
                    alt={skill.alt}
                    width="40"
                    height="40"
                    className=""
                  />
                </span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;