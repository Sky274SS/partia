import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const SecondTask = ({state, onLogin}) => {
    let audio
    return (
        <div>
            <div className='heading'>Ход второй</div>
            <div className='info'>Тебе необходимо послушать трек и написать его название)</div>
            <div style={{display: "none"}}>
                <ReactAudioPlayer
                    src="Pearl.mp3"
                    controls
                    autoPlay
                />
            </div>
            <img src="pearl.jpg" alt="" className='partia_img'/>
            <input type="text" className='input' placeholder='заполни меня' onChange={e => {
                audio = e.target.value
            }}/>
            <br/>
            <button className='button' onClick={() => {
                if (audio && audio.trim) {
                    onLogin(!state)
                }

            }}>Далее
            </button>
        </div>
    );
};

export default SecondTask;