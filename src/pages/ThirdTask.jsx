import React from 'react';
import './thirdTask.css'

const ThirdTask = ({state,onLogin}) => {
    let digital
    return (
        <div>
            <div className='heading'>Ход третий</div>
            <div className='info'>Тебе необходимо выбрать по одному числу в каждом списке)</div>
            <div>
                <div className="block">
                    <div className="semi_block">2</div>
                    <div className="semi_block">14</div>
                    <div className="semi_block">7</div>
                    <div className="semi_block">27</div>
                </div>
                <div className="block">
                    <div className="semi_block">4</div>
                    <div className="semi_block">11</div>
                    <div className="semi_block">27</div>
                    <div className="semi_block">20</div>
                </div>
                <div className="block">
                    <div className="semi_block">17</div>
                    <div className="semi_block">13</div>
                    <div className="semi_block">3</div>
                    <div className="semi_block">7</div>
                </div>
                <div className="block">
                    <div className="semi_block">20</div>
                    <div className="semi_block">22</div>
                    <div className="semi_block">24</div>
                    <div className="semi_block">26</div>
                </div>
            </div>
            <div className='info'>Запиши цифры через пробел</div>
            <input type="text" className='input' onChange={e=>{digital=e.target.value}}/>
            <br/>
            <button className='button' onClick={()=>{
                if(digital&&digital.trim){
                    onLogin(!state)
                }

            }}>Завершить</button>
        </div>
    );
};

export default ThirdTask;