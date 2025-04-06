import React, { useState } from "react";
import Card from "./Card.jsx";

const Skills = () => {
    let categories = ["Languages", "Frameworks", "Tools", "Art & Design"];
    let [selectedButton, setSelectedButton] = useState(0);

    let listingsOfCategory = [
        ["C++", "Python", "JavaScript", "C Sharp", "Java", "HTML5"], // languages
        ["NodeJS", "React", "Spring", "Bootstrap", "Tailwindcss"], // frameworks
        ["Linux", "VS Code", "Unity", "FL Studio"], // tools
        ["Figma", "GIMP", "Blender", "Davinci"], // art & design
    ];

    return (
        <div
            className="bg-radial from-cyan-800 to-cyan-700 drop-shadow-lg/100
    flex flex-col justify-center content-center text-center
    w-full h-full pt-5
    sm:pt-18"
        >
            <h1 className="text-2xl text-amber-100">My Skillset</h1>
            <p className="text-amber-400">
                Over the years, I tinkered with, and learned some tools and have
                become quite comfortable with them.
            </p>
            <ul
                className="w-10/12 h-fit m-auto mt-5 gap-2 flex flex-row flex-wrap justify-center content-center
            md:gap-14
            xl:w-full xl:gap-20"
            >
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={
                            "px-5 py-1 w-fit h-fit text-center bg-amber-400 hover:bg-amber-500 rounded-md cursor-pointer transition-all xl:w-40 " +
                            (index === selectedButton
                                ? "border-neutral-200 border-2 drop-shadow-amber-50 drop-shadow-sm/70"
                                : "border-amber-700 border-2")
                        }
                        onClick={() => setSelectedButton(index)}
                    >
                        <p>{category}</p>
                    </button>
                ))}
            </ul>
            <div
                className="w-10/12 h-full m-auto mt-5 rounded-xl p-5 inset-shadow-sm/75 bg-blue-900
            flex flex-row flex-wrap gap-5 justify-center items-center
            md:flex-nowrap md:gap-0"
            >
                {listingsOfCategory[selectedButton].map((listing, index) => (
                    <Card
                        key={index}
                        title={listing}
                        imageSource={"/src/assets/" + listing + ".svg"}
                    />
                ))}
            </div>
            <h2
                className="font-display my-1 origin-center text-amber-50
            md:my-5"
            >
                Icons by{" "}
                <u>
                    <a href="https://icons8.com/icons" target="_blank">
                        Icons8
                    </a>
                </u>
            </h2>
            <button
                className="w-56 h-20 my-1 mx-auto
            bg-amber-400 hover:bg-amber-500 border-amber-900 border-2 rounded-md transition-all
            md:my-5"
            >
                <a href="/src/assets/resume.pdf" target="_blank">
                    <p>View My Resume</p>
                </a>
            </button>
        </div>
    );
};

export default Skills;
