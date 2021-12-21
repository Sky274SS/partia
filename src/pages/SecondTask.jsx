import React, {useState} from 'react';
import ReactAudioPlayer from 'react-audio-player';

const SecondTask = () => {
    const [next,setNext]=useState(false)
    let audio
    return (
        <div>
            <div className='heading'>Ход второй</div>
            <div className='info' style={{marginTop:"100px"}}>Тебе необходимо послушать трек и написать его название)</div>
            <div style={{display:"none"}}>
                <ReactAudioPlayer
                    src="Pearl.mp3"
                    controls
                    autoPlay
                    onEnded={()=>{setNext(true)}}
                />
            </div>
            <input type="text" className='input' onChange={e=>{audio=e.target.value}}/>
            <br/>
            {next&&<button className='button'>Далее</button>}
        </div>
    );
};

export default SecondTask;