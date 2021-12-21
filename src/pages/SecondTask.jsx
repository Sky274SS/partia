import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const SecondTask = () => {
    let audio
    return (
        <div>
            <div className='heading'>Ход второй</div>
            <div className='info' style={{marginTop:"100px"}}>Тебе необходимо послушать трек и написать его название)</div>
            <div>
                <ReactAudioPlayer
                    src="Pearl.mp3"
                    controls
                    className='music'
                />
            </div>
            <input type="text" className='input' onChange={e=>{audio=e.target.value}}/>
            <br/>
            <button className='button'>Далее</button>
        </div>
    );
};

export default SecondTask;