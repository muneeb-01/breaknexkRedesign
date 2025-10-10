import { Button } from '../../common/components/index';
export function Partners() {
  return (
    <section className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3em] px-8  mx-auto">
        <div className="px-6 py-4 text-center rounded flex justify-between items-end">
        <Button name={"About Us"} theme={"light"}/>
        </div>
        <div className="px-6 py-4 text-center rounded">
          <h2 className="craftr3 font-extrabold text-5xl tracking-tight text-left py-3">
            New Approaches for <br /> Industry development
          </h2>
          <p className="craftr3 font-light text-[var(--color-secondary)] text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            magni at pariatur, <br /> eum vero repudiandae aliquid eligendi, a
            architecto dolore rem reprehenderit ipsam tempore <br />
            blanditiis incidunt amet excepturi. Harum, quibusdam!
          </p>
        </div>

        <div className="col-span-full my-4 h-px bg-[var(--color-secondary)]"></div>

        <div className="px-6 py-4 text-center rounded">
          <h2 className="craftr3 font-medium text-left text-7xl pb-24">
            45000+
          </h2>
          <p className="text-3xl font-light text-left text-[var(--color-secondary)]">
            Companies
          </p>
        </div>

        {/* Box 2 */}
        <div className="px-6 py-4 text-center rounded">
          <h2 className="craftr3 font-medium text-left text-7xl pb-24">120+</h2>
          <p className="text-3xl font-light text-left text-[var(--color-secondary)]">
            Projects
          </p>
        </div>

        {/* _ Separator */}
        <div className="col-span-full h-px bg-[var(--color-elegant-300)] opacity-70"></div>

        {/* Box 3 */}
        <div className="px-6 py-4 text-center rounded">
          <h2 className="craftr3 font-medium text-left text-7xl pb-24">75K+</h2>
          <p className="text-3xl font-light text-left text-[var(--color-secondary)]">
            Users
          </p>
        </div>

        {/* Box 4 */}
        <div className="px-6 py-4 text-center rounded">
          <h2 className="craftr3 font-medium text-left text-7xl pb-24">98%</h2>
          <p className="text-3xl font-light text-left text-[var(--color-secondary)]">
            Satisfaction
          </p>
        </div>
        <div className="col-span-full my-4 h-px bg-[var(--color-secondary)]"></div>
      </div>
    </section>
  )
}
