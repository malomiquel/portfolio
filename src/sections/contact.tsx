import grainImage from "@/assets/images/grain.jpg";
import ArrowUpRightIcon from "@/components/icons/arrow-up-right";
import { ForwardedRef, forwardRef } from "react";

const Contact = forwardRef(function Contact(_, ref: ForwardedRef<Element>) {
  return (
    <section id="contact" ref={ref as (node: Element | null) => void}>
      <div className="container">
        <div className="bg-gradient-to-r from-sky-700 via-sky-800 to-sky-900 text-white p-8 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-around">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">Faisons connaissance</h2>
              <p className="text-sm md:text-base mt-2">
                Prêt à collaborer avec moi ? Contactez-moi et discutons de mes
                expériences.
              </p>
            </div>
            <div>
              <a href="mailto:malomiquel@gmail.com">
                <button className="text-sky-700 bg-[#FEFFEB] inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max group">
                  <span className="font-semibold">Contactez-moi</span>
                  <ArrowUpRightIcon className="size-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
