import React from 'react';
import {Card, Div, Text, Title} from "@vkontakte/vkui";
import '@vkontakte/vkui/dist/vkui.css'
import './CreateListCard.css'

const CreateListCard = ({card, setScreen}) => {
    return (
        <Card size='l'>
            <Div className='CreateListCard'>
                {card.icon}
                <Div className='container'
                     onClick={() => setScreen('DonateDescription')}>
                    <Title weight='semibold' level={3} className='title'>{card.title}</Title>
                    <Text weight='regular' level={1} className='subTitle'>{card.subTitle}</Text>
                </Div>
            </Div>
        </Card>
    )
}

export default CreateListCard;
