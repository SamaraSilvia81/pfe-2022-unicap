import React from 'react';

// import components
import Projects from '../content/Projects';
import Skills from '../content/Skills';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h-[1400px]'>

      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            My latest work
          </h2>
          <p className='subtitle'>
            Esses são alguns dos meus projetos desenvolvidos na faculdade e fora dela. Espero que aproveitem!!
          </p>
        </div>
        <Projects />
        <Skills />
      </div>
    </section>
  );
};

export default Portfolio;
