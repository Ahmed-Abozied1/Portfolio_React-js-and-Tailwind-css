import React from "react";
import { content } from "../../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between ">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div >
         
          <Swiper
            pagination={{ clickable: true }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
           
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
              
              
              >
              

              <Link to="#" className="flex flex-col items-center bg-white border border-none rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 p-2 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={content.image} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{content.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content.describtion}</p>
    </div>
</Link>


                {/* <img src={content.image} alt="" />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button className="font-bold text-gray self-end ">
                    Read More
                  </button>
                </div> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
