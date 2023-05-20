import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developer</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill />
             <div>
                  <h4>HTML</h4>
                    <small className="text_light">Experienced</small>
             </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                 <h4>CSS</h4>
                  <small className="text_light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
                    <div>
                    <h4>JavaScript</h4>
                   <small className="text_light">Experienced</small>
                    </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__deatails-icon"/>
                   <div>
                       <h4>Bootstrap</h4>
                      <small className="text_light">Experienced</small>
                   </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__deatails-icon"/>
                     <div>
                         <h4>Tailwind</h4>
                         <small className="text_light">Experienced</small>
                     </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__deatails-icon" />
                      <div>
                          <h4>React</h4>
                           <small className="text_light">Experienced</small>
                      </div>
            </article>
          </div>
        </div>
             {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Developer</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__deatails-icon" />
                  <div>
                      <h4>Node.js</h4>
                      <small className="text_light">Experienced</small>
                  </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__deatails-icon" />
                   <div>
                      <h4>Node.js</h4>
                      <small className="text_light">Experienced</small>
                   </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__deatails-icon" />
                   <div>
                     <h4>PHP</h4>
                     <small className="text_light">Intermediate</small>
                   </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__deatails-icon" />
                    <div>
                       <h4>MySQL</h4>
                       <small className="text_light">Basic</small>
                    </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__deatails-icon" />
                   <div>
                      <h4>Python</h4>
                       <small className="text_light">Experienced</small>
                   </div>
            </article>
          </div>
        </div>
        </div>
      
    </section>
  );
};

export default Experience;



