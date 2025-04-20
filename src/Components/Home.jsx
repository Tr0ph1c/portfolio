import React from "react";
import me from "/assets/Me.png";

const Home = () => {
    return (
        <>
            <img
                src={me}
                alt="Personal photo"
                className="w-[400px] h-auto m-auto
                hover:scale-105 transition-all
                md:w-[28rem] md:relative md:bottom-0"
            />
            <div
                className="absolute bottom-3
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
        </>
    );
};

export default Home;
