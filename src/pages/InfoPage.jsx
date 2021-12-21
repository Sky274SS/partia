import React, {useState} from 'react';

const InfoPage = ({state,onChange}) => {
    const [isInstruction, setIsInstruction] = useState(false)
    return (
        <div>
            <div className='info'>
                Пришло время сделать первый ход! Но для начала ознакомься с инструкцией, читай внимательно!
            </div>
            <button className='button' onClick={() => {
                setIsInstruction(true)
            }}>Ознакомиться
            </button>
            {isInstruction && <div>
                <div className='info'>Тебе предстоит выполнить несколько заданий, они не сложные. Все ответы необходимо
                    записывать в НИЖНЕМ регистре, т.к. система будет проверять их в автоматическом режиме. Самый важный
                    момент, у тебя только одна попытка. После выполнения первого хода запустится таймер. На игру
                    отводиться 15 минут. По истечении времени прогресс будет сброшен. За победу тебя ждет приз, но для
                    этого необходимо, чтобы ВСЕ твои ходы были верными. Пока таймер не запущен, у тебя есть возможность
                    задать мне вопрос, который касается правил данной игры.
                </div>
                <button className='button' onClick={()=>{onChange(!state)}}>Играть!</button>
            </div>}
        </div>
    );
};

export default InfoPage;