import { useState } from "react";
import Card from "./Card.jsx";

import Blender from "/assets/Blender.svg";
import Bootstrap from "/assets/Bootstrap.svg";
import CPP from "/assets/CPP.svg";
import CS from "/assets/CS.svg";
import Davinci from "/assets/Davinci.svg";
import Figma from "/assets/Figma.svg";
import FL_Studio from "/assets/FL Studio.svg";
import GIMP from "/assets/GIMP.svg";
import Git from "/assets/Git.svg";
import HTML5 from "/assets/HTML5.svg";
import Java from "/assets/Java.svg";
import Javascript from "/assets/Javascript.svg";
import Linux from "/assets/Linux.svg";
import NodeJS from "/assets/NodeJS.svg";
import Python from "/assets/Python.svg";
import React from "/assets/React.svg";
import Spring from "/assets/Blender.svg";
import Tailwindcss from "/assets/Blender.svg";
import Unity from "/assets/Blender.svg";
import VS_Code from "/assets/VS Code.svg";
import Resume from "/resume.pdf";

const Skills = () => {
    let categories = ["Languages", "Frameworks", "Tools", "Art & Design"];
    let [selectedButton, setSelectedButton] = useState(0);

    let listingsOfCategory = [
        [
            ["C++", CPP],
            ["Python", Python],
            ["Javascript", Javascript],
            ["C#", CS],
            ["Java", Java],
            ["HTML5", HTML5],
        ], // languages
        [
            ["NodeJS", NodeJS],
            ["React", React],
            ["Spring", Spring],
            ["Bootstrap", Bootstrap],
            ["Tailwindcss", Tailwindcss],
        ], // frameworks
        [
            ["Linux", Linux],
            ["VS Code", VS_Code],
            ["Git", Git],
            ["Unity", Unity],
            ["FL Studio", FL_Studio],
        ], // tools
        [
            ["Figma", Figma],
            ["GIMP", GIMP],
            ["Blender", Blender],
            ["Davinci", Davinci],
        ], // art & design
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
                        title={listing[0]}
                        imageSource={listing[1]}
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
                <a href={Resume} target="_blank">
                    <p>View My Resume</p>
                </a>
            </button>
        </div>
    );
};

export default Skills;
