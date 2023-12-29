function Rain(props) {

  function circle(cx, cy) {
    const duration = (1 + Math.random() + Math.random()*2).toString() + "s"
    return (
      <circle cx={cx} cy={cy} r = "1" fill="lightgrey" strokeWidth="0">
        <animate
          attributeName="cy"
          from={cy-768}
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
      list.push(circle(Math.random() * 1024, Math.random() * 768))
      // list.push(circle(Math.random() * 1024, Math.random() * 768))
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
        height="100%" width="100%"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid meet">
          <rect x="0" y="0" width="1024" height="768" fill = "black">
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
