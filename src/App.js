import React, {useState} from 'react';
import {Panel, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import MainScreen from "./panels/MainScreen/MainScreen.jsx";
import CreateList from "./panels/CreateList/CreateList.jsx";
import DonateDescription from "./UI/DonateDescription/DonateDescription.jsx";
import DonateAddictions from "./UI/DonateAddictions/DonateAddictions.jsx";

const App = () => {

    const [activeScreen, setActiveScreen] = useState('MainScreen')

    return (
        <View activePanel={activeScreen}>
            <Panel id='MainScreen'>
                <MainScreen setScreen={setActiveScreen}/>
            </Panel>
            <Panel id='CreateList'>
                <CreateList setScreen={setActiveScreen}/>
            </Panel>
            <Panel id='DonateDescription'>
                <DonateDescription setScreen={setActiveScreen}/>
            </Panel>
            <Panel id='DonateAddictions' style={{height: '100%'}}>
                <DonateAddictions setScreen={setActiveScreen}/>
            </Panel>
        </View>
    );
}

export default App;

