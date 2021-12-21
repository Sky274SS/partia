import React, {useState} from "react";
import StartPage from "../pages/StartPage";
import FirstLoginPage from "../pages/FirstLoginPage";
import './layout.css';
import InfoPage from "../pages/InfoPage";
import FirstTask from "../pages/FirstTask";

const Layout = () => {

    const [state, setState] = useState({
        isStartPage: true,
        isFirstLoginPage: false,
        isInfoPage:false,
        isFirstTaskPage:false
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
                onChange={(value) => setState({...state, isInfoPage: value, isFirstTaskPage: !value})}
            />
            }
            {
                state.isFirstTaskPage && <FirstTask/>
            }
        </div>
        </div>
    );
};

export default Layout;