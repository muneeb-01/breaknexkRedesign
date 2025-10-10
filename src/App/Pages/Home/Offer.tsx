import { useEffect, useRef } from "react"
import { FaTools, FaChartLine, FaShieldAlt, FaClock } from "react-icons/fa"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const data = [
  {
    icon: <FaTools className="text-3xl" />,
    title: "Cost-Effective Solutions",
    desc: "We deliver high-performance engineering upgrades at a fraction of OEM replacement costs, saving clients up to 90%.",
  },
  {
    icon: <FaChartLine className="text-3xl" />,
    title: "Performance Optimization",
    desc: "Enhance your system efficiency and productivity with precision-engineered upgrades tailored to your needs.",
  },
  {
    icon: <FaShieldAlt className="text-3xl" />,
    title: "Reliable Quality",
    desc: "Every upgrade is tested to ensure consistent performance, reliability, and long-term durability.",
  },
  {
    icon: <FaClock className="text-3xl" />,
    title: "Quick Turnaround",
    desc: "Our streamlined engineering process minimizes downtime and ensures timely project delivery.",
  },
]

gsap.registerPlugin(ScrollTrigger)

export function Offer() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const section = sectionRef.current

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "start 50%",
      end: "start 45%",
      onEnter: () => {
        document.documentElement.classList.add("dark")
      },
      onEnterBack: () => {
        document.documentElement.classList.remove("dark")
      },
    })
    return () => {
      trigger.kill()
    }
  })
  return (
    <section
      ref={sectionRef}
      className="w-full flex justify-center py-14 items-end"
    >
      <div className="craftr4 text-4xl gap-[14vh] py-[12vh] flex flex-col justify-evenly items-center w-full">
        <div>
          <p className="text-center px-6">
            Collaborate with brands and agencies{" "}
            <br className="sm:flex hidden" /> to create impactful results.
          </p>
        </div>
        <div className="w-full flex justify-center items-center relative">
          <span className="border block border-t w-[80%]" />
          <button className="bg-[var(--color-paper)] -rotate-12 absolute text-[var(--color-paper-fg)] text-lg text-nowrap px-3 py-2 font-light rounded-full ">
            Let's Talk
          </button>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-10">
            {data.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-3 p-6 border border-[var(--color-elegant-300)] rounded-xl bg-background shadow-sm hover:shadow-md transition-shadow"
              >
                {item.icon}
                <h3 className="craftr4 text-2xl font-semibold">{item.title}</h3>
                <p className="craftr3 text-sm opacity-80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
