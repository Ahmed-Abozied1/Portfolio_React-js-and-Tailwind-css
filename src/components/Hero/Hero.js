import React from "react";
import { content } from "../../Content";
const Hero = () => {
  const { hero } = content;
  return (
    <section id="home">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center ">
        <div
        data-aos="slide-left"
        data-aos-delay="1200"
         className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0  -z-10">
          <h3 className=" absolute top-[10%] lef-[5%]  text-[#EAF2FA] p-2 ">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h3>
          <p className=" absolute top-[25%] lef-[5%]  text-dark_primary p-2 flex">{hero.job}</p>
        </div>
        {/* first col */}
        <div className="pb-16 px-6 pt-5 "
        
        data-aos="fade-down"
    
        >
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            <button className="btn">{hero.btnText}</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i*300}

                className={`flex items-center w-80 gap-5 ${
                  i === 1 && "flex-row-reverse text-right"
                }`}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>
        {/* second col */}
        <div className="md:h-[37rem] h-96">
          {/* <img 
                  data-aos="slide-up"

          src={hero.image} alt="" className="h-full object-cover rounded-xl w-60  sm:hidden" /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
