import React from 'react';
import ReactAudioPlayer from "react-audio-player";

const FinalPage = ({state,onLogin}) => {
    return (
        <div>
            <div className='heading'>Партия</div>
            <img src="label.jpg" alt="" className='partia_img'/>
            <div style={{display:"none"}}>
                <ReactAudioPlayer
                    src="partia.mp3"
                    controls
                    autoPlay
                />
            </div>
            <button className='button' onClick={()=>{onLogin(!state)}}>До новых встреч</button>
        </div>
    );
};

export default FinalPage;