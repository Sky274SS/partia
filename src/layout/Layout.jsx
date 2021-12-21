import React, {useState} from "react";
import StartPage from "../pages/StartPage";
import FirstLoginPage from "../pages/FirstLoginPage";
import './layout.css';
import InfoPage from "../pages/InfoPage";

const Layout = () => {

    const [state, setState] = useState({
        isStartPage: true,
        isFirstLoginPage: false,
        isInfoPage:false
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
                onLogin={(value) => setState({...state, isFirstLoginPage: value, isInfoPage: !value})}
            />
            }
            {state.isInfoPage && <InfoPage
                state={state.isInfoPage}

            />
            }
        </div>
        </div>
    );
};

export default Layout;