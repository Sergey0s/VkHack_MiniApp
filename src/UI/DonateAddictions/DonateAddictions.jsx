import {FormLayout, PanelHeader, PanelHeaderBack, Div, File, Input, Textarea, Select, Button,Radio} from "@vkontakte/vkui";
import React from "react";


const DonateAddictions = ({setScreen}) => {
    return (
        <React.Fragment>
            <PanelHeader left={<PanelHeaderBack onClick={() => setScreen('DonateDescription')}/>}
            >
                Дополнительно
            </PanelHeader>
            <FormLayout style={{height: 'calc(100vh - 124px)', display: 'flex', flexDirection: 'column'}}>
            <Select defaultValue={'author'} top={'Автор'}>
                <option value='author'>Матвей Правосудов</option>
            </Select>
                <Radio name="radio" value="1" defaultChecked>Когда соберём сумму</Radio>
                <Radio name="radio" value="2" defaultChecked>В определённую дату</Radio>
            <Select placeholder={'Выберите дату'} top={'Дата окончания'}>
                <option value='date'>Как соберем деньги</option>
            </Select>
                </FormLayout>
            <Div>
            <Button style={{alignSelf: 'flex-end'}} size={'xl'} onClick={() => setScreen('MainScreen')}>
                Создать сбор
            </Button>
            </Div>
        </React.Fragment>
    )
}

export default DonateAddictions
