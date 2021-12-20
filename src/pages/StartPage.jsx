import React from 'react';
import './startPage.css';
const StartPage = ({onChange,state}) => {
    return (
        <div className='container_start'>
            <div className='info'>Добро пожаловать в игру! <br/> Ты готова начать?</div>
            <button className='button' onClick={()=>{onChange(!state)}}>Начать</button>

        </div>
    );
};

export default StartPage;