import React, {useEffect} from "react";

// import logo from './logo.svg';
import './sass/App.scss';
import Header from "./components/Header";
import ImportScript from "./components/ImportScript";

function App() {
    const handleScroll = (event) => {
        if (window.scrollY > 20) {
            document.querySelector(".sticky").className = "sticky scroll";
            document.querySelector(".sticky__in").className = "sticky__in scroll";
            document.querySelector(".sticky__lang").className = "sticky__lang scroll";
            // document.body.classList.add("scroll");
        } else {
            document.querySelector(".sticky").className = "sticky";
            document.querySelector(".sticky__in").className = "sticky__in";
            document.querySelector(".sticky__lang").className = "sticky__lang";
            // document.body.classList.remove("scroll")
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // cleanup this component
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
    <div className="App">
        <Header/>

    </div>
  );
}

export default App;
