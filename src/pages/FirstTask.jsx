import React from 'react';

const FirstTask = ({state,onLogin}) => {
    let in1,in2,in3,in4
    return (
        <div>
            <div className='heading'>Ход первый</div>
            <div className='info'>Посмотрим насколько хорошо ты со мной знакома)</div>
            <div>
                <div>
                    <p>1. Цвет глаз?</p>
                    <input type="text" className='input' onChange={e=>{in1=e.target.value}}/>
                </div>
                <div>
                    <p>2. Знак зодиака?</p>
                    <input type="text" className='input'onChange={e=>{in2=e.target.value}}/>
                </div>
                <div>
                    <p>3. С какой стороны руль?</p>
                    <input type="text" className='input'onChange={e=>{in3=e.target.value}}/>
                </div>
                <div>
                    <p>4. Что такое счастье?</p>
                    <input type="text" className='input'onChange={e=>{in4=e.target.value}}/>
                </div>
            </div>
            <button className='button'  onClick={()=>{
                if((in1&&in1.trim)&&(in2&&in2.trim)&&(in3&&in3.trim)&&(in4&&in4.trim)){
                    onLogin(!state)
                }

            }}>Далее</button>
        </div>
    );
};

export default FirstTask;