import {robotHero2} from "../assets";
import styles, {layout} from "../style";
import {specifications} from "../constants";

const Specifications = () => (
    <section id="specifications" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
            <img src={robotHero2} alt="robotHero2" className="w-[full] z-[5]"/>
            {/* gradient start */}
            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
            <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient"/>
            {/* gradient end */}
        </div>

        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Datos técnicos
            </h2>
            <ul className={"space-y-2"}>
                {specifications.map((specification) => (
                    <li key={specification.id}>
                        <span className={`text-white text-[18px] leading-[30.8px] max-w-[470px] mt-5 font-bold tracking-wide `}>{specification.title}</span>
                        <span className={`${styles.textNormal} max-w-[470px] mt-5 `}>{specification.content}</span>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

export default Specifications;
