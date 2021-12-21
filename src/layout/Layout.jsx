import React, {useState} from "react";
import StartPage from "../pages/StartPage";
import FirstLoginPage from "../pages/FirstLoginPage";
import './layout.css';
import InfoPage from "../pages/InfoPage";
import FirstTask from "../pages/FirstTask";
import SecondTask from "../pages/SecondTask";
import ThirdTask from "../pages/ThirdTask";
import FirstPresent from "../pages/FirstPresent";
import FinalPage from "../pages/FinalPage";

const Layout = () => {

    const [state, setState] = useState({
        isStartPage: true,
        isFirstLoginPage: false,
        isInfoPage:false,
        isFirstTaskPage:false,
        isSecondTaskPage:false,
        isThirdTaskPage:false,
        isFirstPresentPage:false,
        isFinalPage:false
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
                state.isSecondTaskPage && <SecondTask
                    state={state.isSecondTaskPage}
                onLogin={(value) => setState({...state, isSecondTaskPage: value,isThirdTaskPage : !value})}/>
            }
            {
                state.isThirdTaskPage && <ThirdTask
                    state={state.isThirdTaskPage}
                    onLogin={(value) => setState({...state, isThirdTaskPage: value,isFirstPresentPage : !value})}
                />
            }
            {
                state.isFirstPresentPage && <FirstPresent
                    state={state.isFirstPresentPage}
                    onLogin={(value) => setState({...state, isFirstPresentPage: value,isFinalPage : !value})}
                />
            }
            {state.isFinalPage&&<FinalPage
                state={state.isFinalPage}
                onLogin={(value) => setState({...state, isFinalPage: value,})}/>}
        </div>
        </div>
    );
};

export default Layout;