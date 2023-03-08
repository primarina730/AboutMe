import React from "react";
import "../components/Piano.css";
import Do from "../assets/Do.mp3";
import DoS from "../assets/DoS.mp3";
import Re from "../assets/Re.mp3";
import ReS from "../assets/ReS.mp3";
import Mi from "../assets/Mi.mp3";
import Fa from "../assets/Fa.mp3";
import FaS from "../assets/FaS.mp3";
import Sol from "../assets/Sol.mp3";
import SolS from "../assets/SolS.mp3";
import La from "../assets/La.mp3";
import LaS from "../assets/LaS.mp3";
import Si from "../assets/Si.mp3";

function Piano() {

  const startMusic =(scale:any)=>{
    const audio=new Audio(scale);
    audio.play();
  }

  // const startMusic=()=>{
  //   const scale=document.getElementsByClassName("whiteKey");
  //   playMusic(scale);
  // }

  return (
    <div className="PianoComponent">
      <div className="white">
        <div className="whiteKey" id="do" onMouseOver={()=>startMusic(Do)}></div>
        <div className="whiteKey" id="re" onMouseOver={()=>startMusic(Re)}></div>
        <div className="whiteKey" id="mi" onMouseOver={()=>startMusic(Mi)}></div>
        <div className="whiteKey" id="fa"
        onMouseOver={()=>startMusic(Fa)}
        ></div>
        <div className="whiteKey" id="sol"
                onMouseOver={()=>startMusic(Sol)}></div>
        <div className="whiteKey" id="la"
                onMouseOver={()=>startMusic(La)}></div>
        <div className="whiteKey" id="si"
                onMouseOver={()=>startMusic(Si)}></div>
      </div>
      <div className="black">
        <button className="blackKey" id="doS" onMouseOver={()=>startMusic(DoS)} ></button>
        <div className="blackKey" id="reS"
                onMouseOver={()=>startMusic(ReS)}></div>
        <div className="blackKey" id="faS"
                onMouseOver={()=>startMusic(FaS)}></div>
        <div className="blackKey" id="solS"
                onMouseOver={()=>startMusic(SolS)}></div>
        <div className="blackKey" id="laS"
                onMouseOver={()=>startMusic(LaS)}></div>
      </div>
    </div>
  );
}

export default Piano;
