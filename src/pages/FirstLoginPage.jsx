import React from 'react';

const FirstLoginPage = ({state,onLogin}) => {
    let login,password,trueLogin='skymirs',truePassword='skymirs'
    return (
        <div className="first_login_page_container">
            <div className='info'>Начнем нашу партию, для этого необходимо ввести логин и пароль</div>
            <div><input type="text" className='input' placeholder='login' onChange={e=>{login=e.target.value}} required/></div>
            <div><input type="password" className='input' placeholder='password' onChange={e=>{password=e.target.value}} required/></div>
            <button className='button' onClick={()=>{
                if(login===trueLogin&&password===truePassword){
                    onLogin(!state)
                }
            }}>Войти</button>

        </div>
    );
};

export default FirstLoginPage;