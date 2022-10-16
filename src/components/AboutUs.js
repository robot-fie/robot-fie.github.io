import React from 'react';
import {layout} from "../style";
import {aboutUs} from "../constants";


const AboutUs = () => {
    return (
        <section className={`${layout.section} overflow-x-scroll`}>
            <div className={`${layout.sectionInfo}`}>
                <div className={"flex flex-row flex-nowrap m-2  "}>
                    {aboutUs.map((member) => (
                        <MemberCard member={member} key={member.id}/>
                    ))}
                </div>
            </div>


        </section>
    );
};

const MemberCard = ({member}) => {
    return (

        <div className={"flex flex-col justify-self-start items-center space-y-3 w-[250px]"}>
            <div className={"w-[200px] h-[200px] bg-white rounded-full p-1 "}>
                <div className={"w-full h-full rounded-full bg-blue-700"}>
                    <img src={member.photo} alt="foto" className={"w-full h-full rounded-full"}/>
                </div>
            </div>
            <h1 className={"text-2xl text-white text-center "}>{member.role}</h1>
            <h1 className={`text-xl text-white font-thin text-center`}>{member.name}</h1>
        </div>

    )
}


export default AboutUs;
