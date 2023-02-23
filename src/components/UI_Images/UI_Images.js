import React from "react";
import { content } from "../../Content";


const UI_Images = () => {
  const { ui_images } = content;

  
  return (
    <section id="skills" className="min-h-fit bg-bg_light_primary">
     
      {/* content */}
      <div className="md:container px-5 py-14">
        <h2 className="title " data-aos="fade-down">
          {ui_images.title}
        </h2>
        <h4 className=" subtitle " data-aos="fade-down">
          {ui_images.subtitle}
        </h4>
        <br />
        
        <div class="grid grid-cols-4 gap-4">
        {ui_images.skills_content.map((img, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 400}
              className="   "
            >
              <div > 
                <img
                  src={img.logo}
                  width={"150px"}
                  height={"200px"}
                  alt=""
                  className=" sm:cursor-pointer mt-5 group-hover:scale-150  rounded-xl group-hover:scale-150 duration-200 "
                />
              </div>
             
            </div>
          ))}
 
</div>
      </div>
    </section>
  );
};

export default UI_Images;
