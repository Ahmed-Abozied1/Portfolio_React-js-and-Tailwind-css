import React from "react";
import { content } from "../../Content";
const Hireme = () => {
  const { Hireme } = content;
  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse">
          <img
            src={Hireme.image1}
            alt=""
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <img
            src={Hireme.image2}
            alt=""
            data-aos="fade-up"
            className="max-w-sm md:hidden"
          />

          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7 ">{Hireme.para}</p>
            <br />
            <button className="btn bg-dark_primary text-white">
              {Hireme.btnText}
            </button>
            <div class="text-2xl text-dark_primary font-bold relative hourly-rate">
            For 12 $ per hour<span class="text-base font-normal absolute bottom-0 left-4 after:content-[attr(data-currency)]"></span>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
