import {FormLayout, PanelHeader, PanelHeaderBack, Div, File, Input, Textarea, Select, Button} from "@vkontakte/vkui";
import React from "react";
import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';


const DonateDescription = ({setScreen}) => {
    return (
        <React.Fragment>
            <PanelHeader separator = {false}
                         left={<PanelHeaderBack onClick={() => setScreen('CreateList')}/>}
            >
                Целевой сбор
            </PanelHeader>
    <FormLayout>
        <Div style={
            {
                height: '140px',
                padding:'0',
                margin: '0 12px',
                border: '1px dashed #3F8AE0', borderRadius: '10px',
                display: 'flex',justifyContent: 'center', alignItems: 'center'}}>

            <File style={{backgroundColor:'transparent', color: '#3F8AE0'}} top="Загрузить обложку" before={ <Icon28PictureOutline/>} controlSize="l">
                Загрузить обложку
            </File>
        </Div>
        <Input type="text" top='Название сбора' placeholder="Название сбора" />
        <Input type="text" top='Сумма, ₽' placeholder="Сколько нужно собрать?" />
        <Input type="text" top='Цель' placeholder="Например, лечение человека" />
        <Textarea top='Описание' placeholder="На что пойдут деньги и как они кому-то помогут?" />
        <Select defaultValue={'vkPay'} top={'Куда получать деньги'}>
            <option value="vkPay">Счёт VK Pay · 1234</option>
        </Select>
        <Button size={'xl'}>
            Далее
        </Button>
    </FormLayout>
        </React.Fragment>
    )
}

export default DonateDescription
