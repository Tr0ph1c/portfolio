import Github from "/src/assets/Github.svg";

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <a href="#Home" className="navigation-button font-display">
                        HOME
                    </a>
                </li>
                <li>
                    <a
                        href="#Skills"
                        className="navigation-button font-display"
                    >
                        SKILLS
                    </a>
                </li>
                <li>
                    <a
                        href="#Contact"
                        className="navigation-button font-display"
                    >
                        CONTACT
                    </a>
                </li>
            </ul>
            <a
                href="https://github.com/Tr0ph1c"
                target="_blank"
                className="my-auto mx-10 hidden
                md:block"
            >
                <img
                    src={Github}
                    alt="Github"
                    className="w-14 h-auto
                            drop-shadow-md/50 hover:drop-shadow-lg/40 invert
                            hover:scale-110
                            transition-all ease-in"
                />
            </a>
        </nav>
    );
};

export default NavBar;
