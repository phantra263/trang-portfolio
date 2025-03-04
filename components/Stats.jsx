'use client'

import CountUp from "react-countup";
const stats = [
    {
        num: 4,
        text: "Năm kinh nghiệm"
    },
    {
        num: 5,
        text: "Quản lý team size"
    },
    {
        num: 400,
        text: "Số học viên quản lý"
    },
    {
        num: 100,
        text: "% Khách hàng hài lòng"
    }
]

const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto xl:px-10 px-0">
                <div className="flex flex-wrap gap-6 xl:max-w-[80vw] max-w-full w-full mx-auto justify-around">
                    {stats.map((stat, index) => (
                        <div key={index} className="xl:flex-1 flex flex-col xl:w-50 gap-4 items-center justify-start xl:justify-start xl:flex-row">
                            <CountUp end={stat.num} duration={3} delay={1} className="text-4xl xl:text-6xl font-extrabold bg-gradient-to-r from-white to-accent text-transparent bg-clip-text" />
                            <p className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/60 xl:text-left text-center`}>{stat.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats;
