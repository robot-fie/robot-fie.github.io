import React from 'react';
import style from './style'
import {Navbar, Hero, Footer, Hero2, Specifications} from './components'
import AboutUs from "./components/AboutUs";
import Carrousel from "./components/Carrousel";
import styles from "./style";

const App = () => {
    return (
        <div className={"bg-primary w-full overflow-hidden"}>
            <div className={`${style.paddingX} ${style.flexCenter}`}>
                <div className={`${style.boxWidth}`}>
                    <Navbar></Navbar>
                </div>
            </div>

            <div className={`bg-primary ${style.flexStart}`}>
                <div className={`${style.boxWidth}`}>
                    <Hero/>
                </div>
            </div>

            <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
                <div className={`${style.boxWidth}`}>
                    <Hero2></Hero2>
                    <Specifications></Specifications>
                    <Carrousel/>
                    <h2 id={"aboutUs"} className={styles.heading2}>
                        Nuestro Equipo <br className="block hidden"/>
                    </h2>
                    <AboutUs/>
                    <Footer></Footer>
                </div>
            </div>




        </div>
    );
};

export default App;
