import { NextPage } from "next";
import { useState } from "react";
import BlurryCircle from "../components/blurry-circle";
import Footer from "../components/footer";
import Header from "../components/header/header";
import { TimelineChart } from "../components/timeline-chart";
import VectorsBG from "../components/vectors-bg";
import { cseData, chemData, civilData, itData, eceData, eeeData, snucData } from '../components/timeline-chart/timelines';
import { Department } from "../types";

const dataMap = {
    [Department.CSE]: cseData,
    [Department.IT]: itData,
    [Department.CHEM]: chemData,
    [Department.CIVIL]: civilData,
    [Department.ECE]: eceData,
    [Department.EEE]: eeeData,
    [Department.BCOM]: snucData,
    [Department.BME]: itData,
    [Department.MECH]: itData,
}

const depts = Object.values(Department).filter(x => x != Department.MECH && x != Department.CHEM);

const SchedulePage: NextPage = () => {
    const [selectedDept, setSelectedDept] = useState<string>(depts[0]);
    return (
        <div className="bg-background min-h-screen">
            <Header />
            <VectorsBG />
            <BlurryCircle />
            <h1 className="text-3xl text-white font-azonix text-center mt-40">
                SCHEDULE
            </h1>
            <div className="flex flex-col lg:flex-row w-11/12 lg:w-5/6 mx-auto gap-10 my-10">
                <div className="text-white lg:overflow-auto overflow-scroll lg:p-10 rounded-lg lg:w-1/4  backdrop-blur-md bg-black/30 border-[0.02rem] border-gray-400 border-opacity-20">
                    <ul className="flex lg:flex-col px-2 gap-10 lg:gap-0 flex-row w-full justify-between">
                        {depts.map((dept) => (
                            <li
                                className="font-ubuntu min-w-fit lg:w-auto font-thin flex items-center cursor-pointer my-10 text-xl transition-all duration-300 hover:font-bold"
                                key={dept}
                                onClick={() => setSelectedDept(dept)}
                            >
                                <i className="text-2xl mt-1"
                                    dangerouslySetInnerHTML={{
                                        __html: `<ion-icon name="caret-forward-outline"></ion-icon>`,
                                    }}
                                ></i>
                                {dept === Department.BCOM ? 'SNUC Commerce' : dept}{" "}
                                {dept != Department.IT &&
                                    dept != Department.BCOM &&
                                    dept[dept?.split(" ").length - 1] !=
                                    "engineering"
                                    ? "Engineering"
                                    : ""}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="text-white p-10 rounded-lg lg:w-3/4  backdrop-blur-md bg-black/30 border-[0.02rem] border-gray-400 border-opacity-20">
                    <h3 className="font-ubuntu font-bold text-2xl mb-10">
                        {selectedDept}
                    </h3>
                    <TimelineChart data={dataMap[selectedDept as Department]} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SchedulePage;