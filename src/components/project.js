import '../App.css';


function Project(props) {
  const link = props.link
  const name = props.name
  const description = props.description
  const skills = props.skills
  const image = props.image ? props.image : "https://fakeimg.pl/300x400?text=hey+bb+<3&font=lobster"
  function handleClick() {
    const skills_list = document.getElementsByClassName("skills")
      skills_list.style.display = "none"
  }
  return (
    <a href = {link} rel="noreferrer" target="_blank">
      <div className="project">
        <div style = {{width: "40%", alignSelf: "center"}}>
          <img src = {image} alt = ""></img>
        </div>
        <div className='project-info'>
          <h3 className='project-title'>{name}</h3>
          <p>{description}</p>
          <ul className='skills'>
            {skills.map((skill) => 
              <li onClick = {handleClick}>{skill}</li>
            )}
          </ul>
        </div>
      </div>
    </a>

  );
}

export default Project;
