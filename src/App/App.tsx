import { useEffect, useRef, useState } from "react"
import { FaGear } from "react-icons/fa6"
import {
  FaTools,
  FaChartLine,
  FaShieldAlt,
  FaClock,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from 'lenis'


gsap.registerPlugin(ScrollTrigger)

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

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Our Services",
    dropdown: [
      { name: "Web Development", href: "/services/web" },
      { name: "App Development", href: "/services/app" },
    ],
  },
  {
    name: "Projects",
    dropdown: [
      { name: "E-Commerce", href: "/projects/ecommerce" },
      { name: "Portfolio", href: "/projects/portfolio" },
    ],
  },
]

const App = () => {
  const [openDropdown, setOpenDropdown] = useState<null | number>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const footerRef = useRef<HTMLDivElement | null>(null)
  
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

   useEffect(() => {
    const footer = footerRef.current

    const trigger = ScrollTrigger.create({
      trigger: footer,
      start: "start 50%",
      end: "start 45%",
      onEnter: () => {
        document.documentElement.classList.remove("dark")
      },
      onEnterBack: () => {
        document.documentElement.classList.add("dark")
      },
    })
    return () => {
      trigger.kill()
    }
  })

  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Adjust smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      // smooth: true,
      // smoothTouch: false,
    });

    const raf = (time:number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  });

  return (
    <>
      <section className="relative">
        {/* Navbar */}
        <nav className="fixed top-0 left-1/2 w-[80%] py-4 z-50 -translate-x-1/2">
          <div className=" rounded-full border-1 flex items-center justify-between backdrop-blur-sm px-6 py-2 md:py-4 shadow-md">
            <h1>LOGO</h1>

            <button
              className="md:hidden text-2xl text-emerald-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <ul className="hidden md:flex gap-6">
              {navLinks.map((link, idx) => (
                <li key={idx} className="relative group">
                  {/* Parent Link */}
                  {!link.dropdown ? (
                    <a
                      href={link.href}
                      className="font-medium transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === idx ? null : idx)
                      }
                      className="flex items-center gap-1 font-medium transition-colors"
                    >
                      {link.name}
                      <FaChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          openDropdown === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}

                  {/* Dropdown Menu */}
                  {link.dropdown && openDropdown === idx && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                      {link.dropdown.map((item, i) => (
                        <li key={i}>
                          <a
                            href={item.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <button className=" hidden md:flex bg-[var(--color-paper)] text-[var(--color-paper-fg)] text-nowrap px-[2.2vw] py-[1.2vh] font-light rounded-full ">
              Let's Talk
            </button>
          </div>
        </nav>

        {/* Page 1 */}
        <div className="px-4">
          <div
            id="page1"
            className="flex border-t-0 border h-[99vh] relative w-full justify-center items-center rounded-b-[var(--container-roundness)]"
          >
            <div
              id="text-container"
              className="flex flex-col justify-center items-center"
            >
              <div className="flex flex-col justify-center items-center pb-6">
                <h1
                  id="page1-H1"
                  className="uppercase text-[3.2em] sm:text-[4em] lg:text-[8em] xl:text-[9em] flex justify-center items-center leading-10 md:leading-16  lg:leading-22 xl:leading-29 tracking-tight"
                >
                  WE DON’T
                  <span className="flex justify-center items-center">
                    <span className="bg-[#0CA34E]  text-center mx-[0.5vw] rounded-full size-[6.8vw] hover:rotate-[-25deg] hover:scale-[0.9] transition-all flex justify-center items-center">
                      <FaGear className="text-[2.2vw]" />
                    </span>
                  </span>
                  REPLACE
                </h1>
                <h1
                  id="page1-H1"
                  className=" uppercase text-[3.2em] sm:text-[4em] lg:text-[8em] xl:text-[9em] leading-10 md:leading-16  lg:leading-22 xl:leading-29 tracking-tight"
                >
                  we reengineer
                </h1>
              </div>

              <div id="page1-p" className="">
                <p className="tracking-tight text-[var(--color-secondary)] px-6  text-center text-[0.8em] md:text-lg">
                  Unlock the Secret of Cost-Effective and Reliable Machine
                  Modification and Automation Solutions! <br className="hidden sm:flex" /> Experts in Machine
                  Modification & Automation Solutions!
                </p>
                <div className="flex flex-wrap justify-center items-center gap-[clamp(0.3rem,1vw,0.75rem)] mt-[clamp(0.5rem,1vw,1rem)] text-center">
                  <button className=" select-none border rounded-full px-[clamp(0.6rem,1.2vw,1rem)] py-[clamp(0.2rem,0.6vw,0.5rem)] text-[clamp(0.75rem,1vw,0.9rem)] tracking-tight hover:text-emerald-700 transition-colors">
                    About us
                  </button>

                  <button className=" select-none border rounded-full px-[clamp(0.6rem,1.2vw,1rem)] py-[clamp(0.2rem,0.6vw,0.5rem)] text-[clamp(0.75rem,1vw,0.9rem)] tracking-tight hover:text-emerald-700 transition-colors">
                    Contact us
                  </button>
                </div>
              </div>
            </div>

            <div
              id="moving-div"
              className="select-none absolute bottom-[3%] whitespace-nowrap p-[2vw] overflow-hidden w-[44vw]"
            >
              <div
                id="blur-left"
                className="bg-gradient-to-l rounded-4xl from-[var(--color-paper-fg)] absolute z-0 right-[0] top-[0] h-full w-[30%]"
              ></div>
              <div className="move inline-block">
                <img
                  className="md:h-[1em] h-[0.55em] mx-[1.2vw] inline-block"
                  src="https://lazarev.kiev.ua/la24/forbes.svg"
                  alt=""
                />
                <img
                  className="md:h-[1em] h-[0.55em] mx-[1.2vw] inline-block"
                  src="https://lazarev.kiev.ua/la24/adweek.svg"
                  alt=""
                />
                <img
                  className="md:h-[1em] h-[0.55em] mx-[1.2vw] inline-block"
                  src="https://lazarev.kiev.ua/la24/pmi.svg"
                  alt=""
                />
                <img
                  className="md:h-[1em] h-[0.55em] mx-[1.2vw] inline-block"
                  src="https://lazarev.kiev.ua/la24/wf.svg"
                  alt=""
                />
                <img
                  className="md:h-[1em] h-[0.55em] mx-[1.2vw] inline-block"
                  src="https://lazarev.kiev.ua/la24/adweek.svg"
                  alt=""
                />
                <img
                  className="md:h-[1em] h-[0.55em] mx-[1.2vw] inline-block"
                  src="https://lazarev.kiev.ua/la24/rd.svg"
                  alt=""
                />
                <img
                  className="md:h-[1em] h-[0.55em] mx-[1.2vw] inline-block"
                  src="https://lazarev.kiev.ua/la24/pmi.svg"
                  alt=""
                />
                <img
                  className="md:h-[1em] h-[0.55em] mx-[1.2vw] inline-block"
                  src="https://lazarev.kiev.ua/la24/webby.svg"
                  alt=""
                />
              </div>
              <div className="move inline-block">
                <img
                  className="md:h-[1em] h-[0.55em] mx-[1.2vw] inline-block"
                  src="https://lazarev.kiev.ua/la24/forbes.svg"
                  alt=""
                />
                <img
                  className="md:h-[1em] h-[0.55em] mx-[1.2vw] inline-block"
                  src="https://lazarev.kiev.ua/la24/adweek.svg"
                  alt=""
                />
                <img
                  className="md:h-[1em] h-[0.55em] mx-[1.2vw] inline-block"
                  src="https://lazarev.kiev.ua/la24/pmi.svg"
                  alt=""
                />
                <img
                  className="md:h-[1em] h-[0.55em] mx-[1.2vw] inline-block"
                  src="https://lazarev.kiev.ua/la24/wf.svg"
                  alt=""
                />
                <img
                  className="md:h-[1em] h-[0.55em] mx-[1.2vw] inline-block"
                  src="https://lazarev.kiev.ua/la24/adweek.svg"
                  alt=""
                />
                <img
                  className="md:h-[1em] h-[0.55em] mx-[1.2vw] inline-block"
                  src="https://lazarev.kiev.ua/la24/rd.svg"
                  alt=""
                />
                <img
                  className="md:h-[1em] h-[0.55em] mx-[1.2vw] inline-block"
                  src="https://lazarev.kiev.ua/la24/pmi.svg"
                  alt=""
                />
                <img
                  className="md:h-[1em] h-[0.55em] mx-[1.2vw] inline-block"
                  src="https://lazarev.kiev.ua/la24/webby.svg"
                  alt=""
                />
              </div>
              <div
                id="blur-right"
                className="bg-gradient-to-r rounded-4xl from-[var(--color-paper-fg)] absolute z-0 left-[0] top-[0] h-full w-[20%]"
              ></div>
            </div>
          </div>
        </div>

        {/* Page 2 */}
        <section
          ref={sectionRef}
          className="w-full flex justify-center py-14 items-end"
        >
          <div className="craftr4 text-4xl gap-[14vh] py-[12vh] flex flex-col justify-evenly items-center w-full">
            <div>
              <p className="text-center ">
                Collaborate with brands and agencies <br /> to create impactful
                results.
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
                    <h3 className="craftr4 text-2xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="craftr3 text-sm opacity-80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Page 3 */}

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3em] px-8 mx-auto">
            <div className="px-6 py-4 text-center rounded flex justify-between items-end">
              <button className="bg-[var(--color-paper)] absolute text-[var(--color-tertiary-fg)] text-lg text-nowrap px-6 py-4 font-light rounded-4xl ">
                About Us
              </button>
            </div>
            <div className="px-6 py-4 text-center rounded">
              <h2 className="craftr3 font-extrabold text-5xl tracking-tight text-left py-3">
                New Approaches for <br /> Industry development
              </h2>
              <p className="craftr3 font-light text-[var(--color-secondary)] text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque magni at pariatur, <br /> eum vero repudiandae
                aliquid eligendi, a architecto dolore rem reprehenderit ipsam
                tempore <br />
                blanditiis incidunt amet excepturi. Harum, quibusdam!
              </p>
            </div>

            <div className="col-span-full my-4 h-px bg-[var(--color-secondary)]"></div>

            <div className="px-6 py-4 text-center rounded">
              <h2 className="craftr3 font-medium text-left text-7xl pb-40">
                45000+
              </h2>
              <p className="text-3xl font-light text-left text-[var(--color-secondary)]">
                Companies
              </p>
            </div>

            {/* Box 2 */}
            <div className="px-6 py-4 text-center rounded">
              <h2 className="craftr3 font-medium text-left text-7xl pb-40">
                120+
              </h2>
              <p className="text-3xl font-light text-left text-[var(--color-secondary)]">
                Projects
              </p>
            </div>

            {/* _ Separator */}
            <div className="col-span-full h-px bg-[var(--color-elegant-300)] opacity-70"></div>

            {/* Box 3 */}
            <div className="px-6 py-4 text-center rounded">
              <h2 className="craftr3 font-medium text-left text-7xl pb-40">
                75K+
              </h2>
              <p className="text-3xl font-light text-left text-[var(--color-secondary)]">
                Users
              </p>
            </div>

            {/* Box 4 */}
            <div className="px-6 py-4 text-center rounded">
              <h2 className="craftr3 font-medium text-left text-7xl pb-40">
                98%
              </h2>
              <p className="text-3xl font-light text-left text-[var(--color-secondary)]">
                Satisfaction
              </p>
            </div>
          </div>
        </section>

        {/* footer */}

        <footer ref={footerRef} className="pt-[11em] px-4">
          <div className="border rounded-t-[var(--container-roundness)] border-b-0 px-8 pt-[5em]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3em]  mx-auto">
              <div className="px-6 py-4 text-center rounded flex items-start">
                <h2 className="craftr3 font-extrabold text-6xl tracking-tight text-left py-3">
                  Our Services and <br /> directions
                </h2>
              </div>
              <div className="px-6 py-4 text-center rounded flex items-end">
                <p className="craftr3 font-light text-[var(--color-secondary)] text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque magni at pariatur,
                  <br /> eum vero repudiandae aliquid eligendi, a architecto
                  dolore rem reprehenderit ipsam <br /> tempore blanditiis
                  incidunt amet excepturi. Harum, quibusdam!
                </p>
              </div>
              <div className="col-span-full my-4 h-px bg-[var(--color-secondary)]"></div>
            </div>
            <div>
              <div className=" py-[14em]">
                <h2 className="craftr3 text-center font-extrabold text-6xl tracking-tight py-3">
                  Tell me about your next project
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-[clamp(0.3rem,1vw,0.75rem)] mt-[clamp(0.5rem,1vw,1rem)] text-center">
                  <button className=" select-none border rounded-full px-[clamp(0.6rem,1.2vw,1rem)] py-[clamp(0.2rem,0.6vw,0.5rem)] text-[clamp(0.75rem,1vw,0.9rem)] tracking-tight hover:text-emerald-700 transition-colors">
                    About us
                  </button>

                  <button className=" select-none border rounded-full px-[clamp(0.6rem,1.2vw,1rem)] py-[clamp(0.2rem,0.6vw,0.5rem)] text-[clamp(0.75rem,1vw,0.9rem)] tracking-tight hover:text-emerald-700 transition-colors">
                    Contact us
                  </button>
                </div>
              </div>

              <div className="col-span-full h-px bg-[var(--color-secondary)]"></div>
            </div>

            <div className="py-6 flex justify-between items-center">
              <div>
              <p>All Rights Reseved.</p>
              </div>
              <div className="flex gap-4">
                <p>Facebook</p>
                <p>LinkedIn</p>
                <p>Instagram</p>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  )
}

export default App
