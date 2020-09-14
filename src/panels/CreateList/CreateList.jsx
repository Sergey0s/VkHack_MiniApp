import React, {useState} from 'react'
import {CardGrid, Div, PanelHeader, PanelHeaderBack} from "@vkontakte/vkui"
import '@vkontakte/vkui/dist/vkui.css'
import Icon28TargetOutline from '@vkontakte/icons/dist/28/target_outline';
import Icon28CalendarOutline from '@vkontakte/icons/dist/28/calendar_outline';
import CreateListCard from "../../UI/CreateListCard/CreateListCard";

const CreateList = ({setScreen}) => {

    const [createCardList] = useState([
        {
            title: 'Целевой сбор',
            subTitle: 'Когда есть определённая цель',
            icon: <Icon28TargetOutline width={24} height={24} fill='var(--accent)'/>,
            id: 'target'
        },
        {
            title: 'Регулярный сбор',
            subTitle: 'Если помощь нужна ежемесячно',
            icon: <Icon28CalendarOutline width={22} height={24} fill='var(--accent)'/>,
            id: 'regular'
        }
    ])

    return (
        <React.Fragment>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => setScreen('MainScreen')} />}
            >
                Тип сбора
            </PanelHeader>
            <Div style={{height: '80vh', display: 'flex', alignItems: 'center'}}>
            <CardGrid>
                {createCardList.length ? createCardList.map(card => <CreateListCard
                    card={card}
                    key={card.id}
                    setScreen={setScreen}
                />) : null}
            </CardGrid>
            </Div>
        </React.Fragment>
    )

}

export default CreateList;
