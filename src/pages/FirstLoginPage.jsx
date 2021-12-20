import React from 'react';

const FirstLoginPage = () => {
    return (
        <div className="first_login_page_container">
            <div className='info'>Начнем нашу партию, для этого необходимо ввести логин и пароль</div>
            <div><input type="text" className='input' placeholder='login'/></div>
            <div><input type="password" className='input' placeholder='password'/></div>
            <button className='button'>Войти</button>

        </div>
    );
};

export default FirstLoginPage;