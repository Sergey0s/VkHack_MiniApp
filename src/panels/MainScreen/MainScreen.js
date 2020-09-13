import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import {Button, PanelHeader, Placeholder, Text} from "@vkontakte/vkui";

const MainScreen = ({setScreen}) => {

    return (
        <React.Fragment>
            <PanelHeader>Пожертвования</PanelHeader>
            <Placeholder stretched={true} action={<Button size='l' onClick={() => setScreen('CreateList')}>Создать сбор</Button>}>
                <Text weight='regular'>У Вас пока нет сборов</Text>
                <Text weight='regular'>Начните доброе дело</Text>
            </Placeholder>

        </React.Fragment>
    )
};

export default MainScreen;