import './App.css';
import ProjectList from './components/projectList';


function App() {
  return (
    <div className="App">
      <div>
        <h1>Lev Rosenberg</h1>
        <p>
          Hey! I’m Lev, I’m a fourth year at Northwestern studying comp sci & cog sci who wants to apply his technical skills towards mission-driven roles.
          I am an experienced full-stack developer proficient with React, Redux, Next, Typescript, Cloud Firebase, and more. I also have extensive experience working with Python and C++.
        </p>
      </div>
      <ProjectList />
    </div>
  );
}

export default App;
