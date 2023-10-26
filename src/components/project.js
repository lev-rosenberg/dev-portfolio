import '../App.css';


function Project(props) {
  const link = props.link
  const name = props.name
  const description = props.description
  const skills = props.skills
  return (
    <div className="project">
      <a href = {link} rel="noreferrer" target="_blank">
        <h3 className='project-title'>{name}</h3>
        <p>{description}</p>
        <ul className='skills'>
          {skills.map((skill) => 
            <li>{skill}</li>
          )}
        </ul>
      </a>
      
    </div>
  );
}

export default Project;
