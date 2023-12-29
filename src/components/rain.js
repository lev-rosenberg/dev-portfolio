import { useState, useEffect } from "react";

function Rain(props) {

  const [vw, setVw] = useState(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0))
  const [vh, setVh] = useState(Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0))
  
  useEffect(() => {
    function handleResize() {
      setVw(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0))
      setVh(Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0))
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function circle(cx, cy) {
    const duration = (1 + Math.random() + Math.random()*2).toString() + "s"
    return (
      <circle cx={cx} cy={cy} r = "1" fill="lightgrey">
        <animate
          attributeName="cy"
          from={cy-1000}
          to="100vh"
          dur={duration}
          repeatCount="indefinite"
           />
        <animate 
          className="rain"
          attributeName="r"
          begin="indefinite"
          dur="2.5s" 
          values = "1; 50"
          fill = "freeze"
        />
      </circle>
    )
  }
  
  function randomCircleList() {
    let list = []
    for (let i = 0; i < 3000; i++) {
      list.push(circle(Math.random() * vw, Math.random() * vh))
    }
    return list
  }
  
  function loadScreen() {
    const enterButton = document.getElementById("enter-button")
    enterButton.style.display = "none"
    const animations = document.getElementsByClassName("rain")
    const droplets = document.getElementById("droplets")
    const background = document.getElementById("background")    
    for (let i = 0; i < animations.length; i++) {
      animations[i].beginElement()
      animations[i].onend = () => {
        droplets.setAttribute("display", "none")
        background.beginElement()
      }
      background.onend = () => {
        props.callHome(true)
      }
    }
  }
  return (
    <div className="rain-screen">
      <button className = "enter" id = "enter-button" onClick = {loadScreen}>Enter</button>
      <svg xmlns="http://www.w3.org/2000/svg"
        width="100%" height="100%"
        // viewBox= "0 0 1000 1000"
        preserveAspectRatio="xMidYMid meet">
          <rect width="100%" height="100%" fill = "black">
            <animate
              id = "background"
              attributeName="fill"
              begin="indefinite"
              values="lightgrey;white"
              dur="3s"
              fill="freeze"
            />
          </rect>
          <g id = "droplets">
            {randomCircleList().map((circle) => circle)}
          </g>

      </svg>
    </div>
  )
};
export default Rain;
