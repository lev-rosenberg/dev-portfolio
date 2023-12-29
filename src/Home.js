import { useEffect } from 'react';
import ProjectList from './components/projectList';
import TypedText from './components/TypedText';

function Home() {

  
  
  return (
    <div className='home' id='home'>
      <h1>
        <TypedText string={"Lev Rosenberg"} typeSpeed={100}/>
      </h1>
      <p>
        Hey! I’m Lev, I’m a fourth year at Northwestern studying comp sci & cog sci who wants to apply his technical skills towards mission-driven roles.
        I am an experienced full-stack developer proficient with React, Redux, Next, Typescript, Cloud Firebase, and more. I also have extensive experience working with Python and C++.
      </p>
      <ProjectList />
    </div>
  );
}

export default Home;
