import '../App.css';
import Project from './project';

function ProjectList() {
  return (
    <div className = "projects-container">
      <h2>Recent Projects</h2>
      <div className='project-list'>
        <Project 
          name = "Maddox Image Annotator"
          link = "https://imageannotator.netlify.app/"
          description = "This is a demo of different frameworks for image annotatition that I developed for Maddox AI last summer."
          skills = {["React", "Typescript", "Next", "Konva", "D3", "visx"]}
          image = "https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/i04t8hgah6pucderr0eb"
        />
        <Project 
          name = "ADAMAH Ceramics"
          link = "https://adamah-portfolio.vercel.app/"
          description = "This is my ceramics portfolio! In addition to my love of tech, i'm a semi professional potter and I love to make functional ceramics."
          skills = {["React", "Next.js", "Javascript", "CSS"]}
          image = "https://api.logo.com/api/v2/images?logo=logo_61cafd86-3bc7-4671-a793-b9f8a7230a24&u=2023-10-26T01%3A24%3A48.514Z&margins=0&format=webp&quality=30&width=200&height=200&background=transparent&fit=contain"
        />
        <Project 
          name = "NU Art"
          link = "https://artnu.vercel.app/ArtNU/Home"
          description = "This is a student art social media and commission service!"
          skills = {["React", "Javascript", "CSS", "Cloud Firebase"]}
          image = "https://api.logo.com/api/v2/images?logo=logo_649e99e8-238c-4391-8a81-1ee2ea94b4e0&u=2023-10-26T01%3A18%3A23.584Z&margins=0&format=webp&quality=30&width=200&height=200&background=transparent&fit=contain"
        />
        <Project 
          name = "Knowledge Maps"
          link = "https://km-rale.netlify.app/"
          description = "This is a CSS-education prototype for intermediate frontend developers I worked on as a student researcher in Delta Lab's DTR."
          skills = {["React", "Javascript", "CSS", "HCI"]}
          image = "https://media.soc.northwestern.edu/socwp-aws/sites/48/2020/10/19165020/delta.png"
        />
        <Project 
          name = "Design Your Delta"
          link = "https://delta-lab-8ec06.firebaseapp.com/"
          description = "This is a web-app designed for law students to calculate growth areas!"
          skills = {["React", "Javascript", "CSS", "Cloud Firebase"]}
          image = "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_630,w_1200,f_auto,q_auto/255976/803804_907450.png"
        />
         
      </div>
    </div>
  );
}

export default ProjectList;
