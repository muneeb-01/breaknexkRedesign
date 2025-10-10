import { FaGear } from "react-icons/fa6"
import { Button } from '../../common/components/Button';
export function Landing() {
  return (
    <div className="px-4">
      <div
        id="page1"
        className="flex border-t-0 border h-[93vh] sm:h-[99vh] relative w-full justify-center items-center rounded-b-[var(--container-roundness)]"
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
              Modification and Automation Solutions!{" "}
              <br className="hidden sm:flex" /> Experts in Machine Modification
              & Automation Solutions!
            </p>
            <div className="flex flex-wrap justify-center items-center gap-[clamp(0.3rem,1vw,0.75rem)] mt-[clamp(0.5rem,1vw,1rem)] text-center">
              <Button name="About Us"/>
              <Button name="Contact Us"/>             
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
            className="bg-gradient-to-r rounded-4xl from-[var(--color-paper-fg)] absolute z-0 left-[0] top-[0] h-full w-[30%]"
          ></div>
        </div>
      </div>
    </div>
  )
}
