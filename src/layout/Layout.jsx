import React, {useState} from "react";
import StartPage from "../pages/StartPage";
import FirstLoginPage from "../pages/FirstLoginPage";
import './layout.css';
import InfoPage from "../pages/InfoPage";
import FirstTask from "../pages/FirstTask";
import SecondTask from "../pages/SecondTask";

const Layout = () => {

    const [state, setState] = useState({
        isStartPage: true,
        isFirstLoginPage: false,
        isInfoPage:false,
        isFirstTaskPage:false,
        isSecondTaskPage:false
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
                state.isFirstTaskPage && <FirstTask
                 state={state.isFirstTaskPage}
                onLogin={(value) => setState({...state, isFirstTaskPage: value,isSecondTaskPage : !value})}/>
            }
            {
                state.isSecondTaskPage && <SecondTask/>
            }
        </div>
        </div>
    );
};

export default Layout;