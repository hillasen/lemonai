import React, { useState } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';
import { useSpeechSynthesis } from 'react-speech-kit';
import './App.css';
import {dust} from './dust';



function App() {
  const [value, setValue] = useState('');
  const { speak } = useSpeechSynthesis();
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      // 음성인식 결과가 value 상태값으로 할당됩니다.
      setValue(result);
    }
  });


//Test browser support
const SUPPORTS_MEDIA_DEVICES = 'mediaDevices' in navigator;

if (SUPPORTS_MEDIA_DEVICES) {
  //Get the environment camera (usually the second one)
  navigator.mediaDevices.enumerateDevices().then(devices => {
  
    const cameras = devices.filter((device) => device.kind === 'videoinput');

    if (cameras.length === 0) {
      throw 'No camera found on this device.';
    }
    const camera = cameras[cameras.length - 1];

    // Create stream and get video track
    navigator.mediaDevices.getUserMedia({
      video: {
        deviceId: camera.deviceId,
        facingMode: ['user', 'environment'],
        height: {ideal: 1080},
        width: {ideal: 1920}
      }
    }).then(stream => {
      const track = stream.getVideoTracks()[0];

      //Create image capture object and get camera capabilities
      const imageCapture = new ImageCapture(track)
      const photoCapabilities = imageCapture.getPhotoCapabilities().then(() => {

        //todo: check if camera has a torch

        //let there be light!
        const btn = document.querySelector('.switch');
        const btn2 = document.querySelector('.switch_off');
        btn.addEventListener('click', function(){
          track.applyConstraints({
            advanced: [{torch: true}]
          });
        });
        btn2.addEventListener('click', function(){
          track.applyConstraints({
            advanced: [{torch: false}]
          });
        });
      });
    });
  });

  
  //The light will be on as long the track exists
  
  
}

function on(){
  const btn = document.querySelector('.switch');
  btn.click();
} 
function off(){
  const btn = document.querySelector('.switch_off');
  btn.click();
} 

function stopit(){
  stop();
  if(value == "불 켜 줘"){
    speak({text : "네 알겠습니다"})
    on();
    
  }
  else if(value == "불 꺼 줘"){
    speak({text : "네 알겠습니다"})
    off();
  }
  else if(value == "현재 미세먼지 어때"){
    speak({text : dust() + " 으로, 좋음 입니다"})
  }
  else if(value == "현재 미세 먼지 어때"){
    speak({text : dust() + " 으로, 좋음 입니다"})
  }
  

}
  
  return (
    
    <div>
      <h3>3103 김명준 작품명: 미세먼지 알려주는 스마트 스탠드</h3>
      <div class="buttons">
      <div class="vl">
      <button class="ai" onMouseDown={listen} >인식 시작</button>
      </div>
      <div class="vl">
      <button class="ai"  onMouseDown={() => {stopit()}} >인식 중지</button>
      </div>
      </div>
      <button class="switch sw">On / Off</button>
      <button class="switch_off sw">Off</button>
      <div>{value}</div>
      {listening && <div>음성인식 활성화 중</div>}
    </div>
  );
}
export default App;
