import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import "./App.css";

function App() {
    return (
        <>
            <NavBar />
            <main className="bg-radial from-cyan-600 to-cyan-500 h-fit w-full pt-15 flex flex-col content-center">
                <section id="Home">
                    <Home />
                </section>
                <section id="Skills" className="w-full m-0 p-0">
                    <Skills />
                </section>
                <section id="Contact">
                    <Contact />
                </section>
                <footer>
                    <p
                        className="m-auto text-sm text-amber-100
                    md:text-lg"
                    >
                        Designed and crafted by{" "}
                        <u className="text-amber-400">
                            <b>Ahmed Mahmoud</b>
                        </u>
                    </p>
                </footer>
            </main>
        </>
    );
}

export default App;
