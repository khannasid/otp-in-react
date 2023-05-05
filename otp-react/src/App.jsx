import {React, useEffect, useRef, useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import './App.css'

let currentOTPIndex =0;
function App() {

  // const [otp, setOtp] = useState(new Array(6).fill(""));
  // return (
  //  <div>
  //   <Header/>
  //   <Inputs/>
  //   <Footer/>
  //  </div>
  // )
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);
  const inputRef = useRef(null);

  const handleOnChange = (event)=>{
    const {value} =  event.target;
    console.log(value, " " , currentOTPIndex, " ", activeOTPIndex);
    const newOTP = [...otp];
    newOTP [currentOTPIndex] = value.substring(value.length-1);
    
    if(!value)setActiveOTPIndex(currentOTPIndex-1);
    else setActiveOTPIndex(currentOTPIndex+1);
    setOtp(newOTP);
  }

  const handleOnKeyDown = (event,index)=>{
    const {key} = event;
    console.log(key);
    currentOTPIndex = index;
    if(key === 'Backspace'){
      // event.preventDefault();
      console.log(otp);
      setActiveOTPIndex(currentOTPIndex-1);
    }else if(key === 'ArrowUp' || key === 'ArrowDown'){
      event.preventDefault();
    }
    else if(key === 'ArrowRight'){
      if(index < 5){
        setActiveOTPIndex(currentOTPIndex+1);
      }
    }
    else if(key === 'ArrowLeft'){
      if(index > 0){
        // let val = otp[activeOTPIndex-1];
        setActiveOTPIndex(currentOTPIndex-1);
        // otp[currentOTPIndex-1] = val;
      }
    }
  }

  useEffect(() =>{
    inputRef.current?.focus();
    inputRef.current?.selectionEnd;
  },[activeOTPIndex]);

  return (
    <div className='main'>
      <Header/>
        <div className="otp-input">
          {otp.map((_, index) => {
            return (
                <input
                  key={index}
                  type="number"
                  ref={index === activeOTPIndex ? inputRef : null}
                  className="transaction" onChange={handleOnChange}
                  value={otp[index]}
                  onKeyDown={(e) => handleOnKeyDown(e,index)}
                />
            );
          })}
        </div>
      <Footer/>
    </div>
  );


}

export default App
