import React,{useRef,useEffect} from "react";
import "./style.css";

export default function App() {
  
  const counterRef = useRef(0);
  const handleClick = ()=>{
    setInterval(()=>{
      counterRef.current +=1;
      console.log(counterRef);
    },1000)
  }

  useEffect(()=>{
    console.log('rendering again');
  })
  return (
    <div>
      <button onClick={handleClick}/>
    </div>
  );
}
