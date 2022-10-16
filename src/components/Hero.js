import style from "../style";
import {robotFront} from "../assets";


const Hero = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${style.paddingY}`}>
            <div className={`flex-1 ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                    <p className={`${style.paragraph} ml-2`}>
                        <span className="text-white">PROYECTO</span> de{" "}
                        <span className="text-white">INVESTIGACIÓN</span> y{" "}
                        <span className="text-white">DESARROLLO</span>{""}
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                        Vehículo <br className="sm:block hidden"/>{" "}
                        <span className="text-gradient">Autónomo</span>{"  "}
                    </h1>

                </div>

                <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                    de Exploración.
                </h1>
                <p className={`${style.paragraph} max-w-[470px] mt-5`}>
                    EL Vehículo Autónomo de Exploración(VAE) está equipado con cámaras para operaciones de exploración y reconocimiento. Puede ser
                    fácilmente desplegado en el terreno, pudiendo cumplir misiones de forma autónoma o controlado a
                    distancia mediante su unidad de control.
                </p>
            </div>

            <div className={`flex-1 flex ${style.flexCenter} md:my-0 my-10 relative`}>
                <img src={robotFront} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
                {/* gradient start */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40"/>
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
                {/* gradient end */}
            </div>

        </section>
    );
};

export default Hero;
