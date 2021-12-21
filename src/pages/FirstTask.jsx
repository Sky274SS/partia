import React from 'react';

const FirstTask = () => {
    let in1,in2,in3,in4
    return (
        <div>
            <div className='heading'>Ход первый</div>
            <div className='info'>Посмотрим насколько хорошо ты со мной знакома)</div>
            <div>
                <div>
                    <p>Task 1</p>
                    <input type="text" className='input' onChange={e=>{in1=e.target.value}}/>
                </div>
                <div>
                    <p>Task 2</p>
                    <input type="text" className='input'onChange={e=>{in2=e.target.value}}/>
                </div>
                <div>
                    <p>Task 3</p>
                    <input type="text" className='input'onChange={e=>{in3=e.target.value}}/>
                </div>
                <div>
                    <p>Task 4</p>
                    <input type="text" className='input'onChange={e=>{in4=e.target.value}}/>
                </div>
            </div>
            <button className='button'  onClick={()=>{
                if((in1&&in1.trim)&&(in2&&in2.trim)&&(in3&&in3.trim)&&(in4&&in4.trim)){
                    console.log(true)
                }
                else{
                    console.log(false)
                }
            }}>Далее</button>
        </div>
    );
};

export default FirstTask;