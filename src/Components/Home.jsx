import React from "react";
import me from "/src/assets/Me.png";

const Home = () => {
    return (
        <>
            <div
                className="absolute top-96
            flex flex-col content-center justify-center m-auto z-10
            md:relative md:top-0"
            >
                <h1
                    className="text-center w-52 text-4xl animate-updown
                md:text-6xl md:w-64"
                >
                    <b>Welcome!</b>
                </h1>
                <p
                    className="text-center w-52 text-2xl
                md:text-3xl md:w-64"
                >
                    <br />I am <b>Ahmed</b>, an avid programmer always looking
                    to learn new things!
                </p>
            </div>
            <img
                src={me}
                alt="Personal photo"
                className="w-[400px] h-fit m-auto
                absolute bottom-36
                hover:scale-105 transition-all
                md:w-[450px] md:relative md:bottom-0"
            />
        </>
    );
};

export default Home;
