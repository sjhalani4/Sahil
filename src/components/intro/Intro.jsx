import"./intro.scss";
import {init} from 'ityped';
import {useEffect,useRef} from "react";
export default function Intro(){
  const textRef = useRef()
  useEffect(()=>{
    init(textRef.current,{
      showCursor:true,
      strings:["NodeJS","ReactJS","MERN-STACK"],
      backDelay:  1500,
      backSpeed:100
    });
  },[])
  return(
    <div className="intro"id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/sahil1.png" alt="man" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Sahil Jhalani</h1>
          <h3><span ref={textRef}></span> Devloper</h3>
        
        <a href="#portfolio">
          <img src="assets/downArrows.png" alt="arrow" />
        </a>
      </div>
      </div>
     
    </div>
  );
};
