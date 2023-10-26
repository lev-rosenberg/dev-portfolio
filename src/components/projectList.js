import '../App.css';
import Project from './project';

function ProjectList() {
  return (
    <div className = "projects-container">
      <h2>Projects</h2>
      <div className='project-list'>
        <Project 
          name = "ADAMAH Ceramics"
          link = "https://adamah-portfolio.vercel.app/"
          description = "This is my ceramics portfolio!"
          skills = {["React", "Next.js", "Javascript", "CSS"]}
        />
        <Project 
          name = "NU Art"
          link = "https://artnu.vercel.app/ArtNU/Home"
          description = "This is a student art social media and commission service!"
          skills = {["React", "Javascript", "CSS", "Cloud Firebase"]}
        />
        <Project 
          name = "Design Your Delta"
          link = "https://delta-lab-8ec06.firebaseapp.com/"
          description = "This is a web-app designed for law students to calculate growth areas!"
          skills = {["React", "Javascript", "CSS", "Cloud Firebase"]}
        />
        <Project 
          name = "Maddox Image Annotator"
          link = "https://imageannotator.netlify.app/"
          description = "This is a demo of different frameworks for image annotatition!"
          skills = {["React", "Typescript", "Next", "Konva", "D3", "visx"]}
        />
        <Project 
          name = "Knowledge Maps"
          link = "https://km-rale.netlify.app/"
          description = "This is a CSS-education prototype for intermediate frontend developers!"
          skills = {["React", "Javascript", "CSS", "HCI"]}
        />
      </div>
    </div>
  );
}

export default ProjectList;
