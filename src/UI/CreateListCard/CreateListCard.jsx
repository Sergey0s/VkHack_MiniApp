import React from 'react';
import {Card, Div, Text, Title} from "@vkontakte/vkui";
import '@vkontakte/vkui/dist/vkui.css'
import './CreateListCard.css'
import Icon28ChevronRightOutline from '@vkontakte/icons/dist/28/chevron_right_outline';

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
                <Icon28ChevronRightOutline fill={'#B8C1CC'} style={{position: 'absolute', top: '30%', right: '12.75px'}}/>
            </Div>
        </Card>
    )
}

export default CreateListCard;
