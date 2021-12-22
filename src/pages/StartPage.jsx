import React from 'react';
import './startPage.css';
const StartPage = ({onChange,state}) => {
    return (
        <div className='container_start'>
            <div className='info' style={{marginTop:"200px"}}>Добро пожаловать в игру!<br/> Приложение предназначено для твоего телефона, на других устройствах возможна некорректная работа!<br/> Ты готова начать?</div>
            <button className='button' onClick={()=>{onChange(!state)}}>Начать</button>

        </div>
    );
};

export default StartPage;