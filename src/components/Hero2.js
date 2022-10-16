import {knowledge} from "../constants";
import styles, {layout} from "../style";


const KnowledgeCard = ({icon, title, content, index}) => (
    <div
        className={`flex flex-row p-6 rounded-[20px] ${index !== knowledge.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt="tool" className="w-[50%] h-[50%] object-contain "/>
        </div>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                {title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                {content}
            </p>
        </div>
    </div>
);

const Hero2 = () => (
    <div className={"bg-robotHeroImage lg:bg-cover lg:bg-center bg-center bg-[length:800px_700px] bg-no-repeat "}>
        <section id="features" className={`${layout.section} bg-black bg-opacity-[10%]`}>
            <div className={`${layout.sectionInfo}`}>
                <div className={""}>
                    <h2 className={styles.heading2}>
                        Diseño y desarrollo <br className="block hidden"/>
                        integral
                    </h2>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
                        Las innovaciones tecnológicas y soluciones disruptivas son valoradas en
                        todo el mundo y sobre todo en diferentes aplicaciones de la defensa.
                        Este proyecto requirió llevar la integración de diferentes areas del conocimiento a un
                        “siguiente
                        nivel”
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                    </p>
                </div>
            </div>

            <div className={`${layout.sectionImg} flex-col`}>
                {knowledge.map((know, index) => (
                    <KnowledgeCard key={know.id} {...know} index={index}/>
                ))}
            </div>
        </section>
    </div>
);

export default Hero2;
