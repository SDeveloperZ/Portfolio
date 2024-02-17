import React from 'react';
import Button from './Button';

export const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hi, I'm Sergio Lopez</h1>
        <h3>Frontend Developer</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati vel sit facere odio et aperiam dolores
          porro quaerat culpa asperiores ipsum consequuntur, quasi quos harum doloribus tenetur?
        </p>
        <div className="btn-box">
          <Button text="Hire Me" link="#" />
          <Button text="Let's Talk" link="#" />
        </div>
      </div>
      <div className="home-sci">
        <a href="">
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="">
          <i className="bx bxl-twitter"></i>
        </a>
        <a href="">
          <i className="bx bxl-linkedin"></i>
        </a>
      </div>
    </section>
  );
};

export default Home;
