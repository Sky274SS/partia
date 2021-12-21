import React, {useState} from "react";
import StartPage from "../pages/StartPage";
import FirstLoginPage from "../pages/FirstLoginPage";
import './layout.css';

const Layout = () => {

    const [state, setState] = useState({
        isStartPage: true,
        isFirstLoginPage: false
    })

    return (
        <div className='container'>
            <img src="Skymirs.png" alt="" className='skymirs'/>
        <div>
            {state.isStartPage && <StartPage
                state={state.isStartPage}
                onChange={(value) => setState({...state, isStartPage: value, isFirstLoginPage: !value})}
            />}
            {state.isFirstLoginPage && <FirstLoginPage
                state={state.isFirstLoginPage}
                onChange={(value) => setState({...state, isFirstLoginPage: value, isStartPage: !value})}
            />

            }
        </div>
        </div>
    );
};

export default Layout;