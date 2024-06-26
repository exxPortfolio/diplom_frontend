import {useEffect, useRef, useState} from "react";
import DataView from "./dataview/dataview";
import {Account} from "../../../../server-api/using";

/**
 * ### Editor or project popups
 * */

export function DatabaseView_popup(){
    useEffect(() => {
        let popupBg = document.querySelector('.popup__bg__dataview_1'); // Фон попап окна
        let popup = document.querySelector('.popup__dataview_1'); // Само окно
        let openPopupButtons = document.querySelector('.open-popup__dataview_1'); // Кнопки для показа окна
        let closePopupButton = document.querySelector('.close-popup__dataview_1'); // Кнопка для скрытия окна

        openPopupButtons.addEventListener('click',() => { // Вешаем обработчик на крестик
            popupBg.classList.add('active'); // Убираем активный класс с фона
            popup.classList.add('active'); // И с окна
        });

        closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
            popupBg.classList.remove('active'); // Убираем активный класс с фона
            popup.classList.remove('active'); // И с окна
        });
    },[])

    return(
        <div className="popup__bg popup__bg__dataview_1">
            <form className="popup popup__dataview_1">
                <span className="close-popup__dataview_1 close-popup-cursor" style={{    color: 'black'}}> x </span>
                <span className="label__text"> Your connections </span>
                <DataView />
            </form>
        </div>
    )
}
export function ProjectCreate_popup(){
    useEffect(() => {
        let popupBg = document.querySelector('.popup__bg__project_create'); // Фон попап окна
        let popup = document.querySelector('.popup__project_create'); // Само окно
        let openPopupButtons = document.querySelector('.open-popup__project_create'); // Кнопки для показа окна
        let closePopupButton = document.querySelector('.close-popup__project_create'); // Кнопка для скрытия окна

        openPopupButtons.addEventListener('click',() => {
            popupBg.classList.add('active');
            popup.classList.add('active');
        });

        closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
            popupBg.classList.remove('active'); // Убираем активный класс с фона
            popup.classList.remove('active'); // И с окна
        });
    },[])

    return(
        <div className="popup__bg popup__bg__project_create">
            <form className="popup popup__project_create">
                <span className="close-popup__project_create close-popup-cursor" style={{    color: 'black'}}> x </span>
                <span className="label__text"> New project </span>
                <label>
                    <input type='button' value='Confirm' style={{ marginTop: '10px' }}/>
                    <input type='textbox' placeholder='Project name' />
                </label>
            </form>
        </div>
    )
}
export function ProjectOpen_popup(){
    useEffect(() => {
        let popupBg = document.querySelector('.popup__bg__project_open'); // Фон попап окна
        let popup = document.querySelector('.popup__project_open'); // Само окно
        let openPopupButtons = document.querySelector('.open-popup__project_open'); // Кнопки для показа окна
        let closePopupButton = document.querySelector('.close-popup__project_open'); // Кнопка для скрытия окна

        openPopupButtons.addEventListener('click',() => {
            popupBg.classList.add('active');
            popup.classList.add('active');
        });

        closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
            popupBg.classList.remove('active'); // Убираем активный класс с фона
            popup.classList.remove('active'); // И с окна
        });
    },[])

    return(
        <div className="popup__bg popup__bg__project_open">
            <form className="popup popup__project_open">
                <span className="close-popup__project_open close-popup-cursor" style={{    color: 'black'}}> x </span>
                <span className="label__text"> Open project </span>
                <label>
                    <input type='button' value='Confirm' style={{ marginTop: '10px' }}/>
                    <select className='select-white-color'>
                        <option value='1'>project_1</option>
                        <option value='2'>project_2</option>
                        <option value='3'>project_3</option>
                    </select>
                </label>
            </form>
        </div>
    )
}
export function ProjectSave_popup(){
    useEffect(() => {
        let popupBg = document.querySelector('.popup__bg__project_save'); // Фон попап окна
        let popup = document.querySelector('.popup__project_save'); // Само окно
        let openPopupButtons = document.querySelector('.open-popup__project_save'); // Кнопки для показа окна
        let closePopupButton = document.querySelector('.close-popup__project_save'); // Кнопка для скрытия окна

        openPopupButtons.addEventListener('click',() => {
            popupBg.classList.add('active');
            popup.classList.add('active');
        });

        closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
            popupBg.classList.remove('active'); // Убираем активный класс с фона
            popup.classList.remove('active'); // И с окна
        });
    },[])

    return(
        <div className="popup__bg popup__bg__project_save">
            <form className="popup popup__project_save">
                <span className="close-popup__project_save close-popup-cursor" style={{    color: 'black'}}> x </span>
                <span className="label__text"> Save project </span>
                <label>
                    <input type='button' value='Confirm' style={{ marginTop: '10px' }}/>
                    <input type='textbox' placeholder='Project name' />
                </label>
            </form>
        </div>
    )
}
export function ProjectCreateConnection_popup(){
    let newConnStorageName = useRef(null)
    useEffect(() => {
        let popupBg = document.querySelector('.popup__bg__project_create_conn'); // Фон попап окна
        let popup = document.querySelector('.popup__project_create_conn'); // Само окно
        let openPopupButtons = document.querySelector('.open-popup__project_create_conn'); // Кнопки для показа окна
        let closePopupButton = document.querySelector('.close-popup__project_create_conn'); // Кнопка для скрытия окна

        openPopupButtons.addEventListener('click',() => {
            popupBg.classList.add('active');
            popup.classList.add('active');
        });

        closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
            popupBg.classList.remove('active'); // Убираем активный класс с фона
            popup.classList.remove('active'); // И с окна
        });
    },[])

    return(
        <div className="popup__bg popup__bg__project_create_conn">
            <form className="popup popup__project_create_conn">
                <span className="close-popup__project_create_conn close-popup-cursor" style={{    color: 'black'}}> x </span>
                <span className="label__text"> Create connection </span>
                <label>
                    <input type='button' value='Confirm' style={{ marginTop: '10px' }} onClick={() => {
                        if (newConnStorageName.current.value.split('').length < 1)
                            console.log('incorrect name')

                    }}/>
                    <input type='textbox' id='7328462834' placeholder='Storage name' style={{ cursor: 'auto' }}
                    ref={newConnStorageName}/>
                </label>
            </form>
        </div>
    )
}
export function ProjectSettings_popup(){
    useEffect(() => {
        let popupBg = document.querySelector('.popup__bg__project_settings'); // Фон попап окна
        let popup = document.querySelector('.popup__project_settings'); // Само окно
        let openPopupButtons = document.querySelector('.open-popup__project_settings'); // Кнопки для показа окна
        let closePopupButton = document.querySelector('.close-popup__project_settings'); // Кнопка для скрытия окна

        openPopupButtons.addEventListener('click',() => {
            popupBg.classList.add('active');
            popup.classList.add('active');
        });

        closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
            popupBg.classList.remove('active'); // Убираем активный класс с фона
            popup.classList.remove('active'); // И с окна
        });
    },[])

    return(
        <div className="popup__bg popup__bg__project_settings">
            <form className="popup popup__project_settings">
                <span className="close-popup__project_settings close-popup-cursor" style={{ color: 'black' }}> x </span>
                <span className="label__text"> Settings </span>
                <label>
                    <label>
                        <input type='button' value='Confirm' style={{ marginTop: '10px' }}/>
                        <input type='textbox' placeholder='Project name' />
                        <span className="label__text label__text_2"> Project name </span>
                    </label>
                    <label>
                        <select className='select-white-color'>
                            <option value='1'>Web</option>
                            <option value='2'>Desktop</option>
                            <option value='3'>Mobile</option>
                        </select>
                        <span className="label__text label__text_2"> Project language </span>
                    </label>
                    <span className="label__text" style={{ color: 'black' }}> Project settings </span>
                </label>
            </form>
        </div>
    )
}

/**
 * ### Account popups
 * */

export function AccountLogin_popup(){
    const mail = useRef(null);
    const password = useRef(null);

    useEffect(() => {
        let popupBg = document.querySelector('.popup__bg__account_login'); // Фон попап окна
        let popup = document.querySelector('.popup__account_login'); // Само окно
        let openPopupButtons = document.querySelector('.open-popup__account_login'); // Кнопки для показа окна
        let closePopupButton = document.querySelector('.close-popup__account_login'); // Кнопка для скрытия окна

        openPopupButtons.addEventListener('click',() => { // Вешаем обработчик на крестик
            popupBg.classList.add('active'); // Убираем активный класс с фона
            popup.classList.add('active'); // И с окна
        });

        closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
            popupBg.classList.remove('active'); // Убираем активный класс с фона
            popup.classList.remove('active'); // И с окна
        });
    },[])

    return(
        <div className="popup__bg popup__bg__account_login">
            <form className="popup popup__account_login">
                <span className="close-popup__account_login close-popup-cursor" style={{    color: 'black'}}> x </span>
                <span className="label__text"> Your connections </span>
                <>
                    <input type='text' placeholder='Your mail address' inputMode='email' ref={mail} />
                    <input type='password' placeholder='Your password' id='81203124' ref={password}/>
                    <input type='button'value='Submit' onClick={async () => {
                        let account = new Account();
                        await account.Login({
                            mail: mail.current.value,
                            password: password.current.value
                        });
                    }}/>
                </>
            </form>
        </div>
    )
}

export function RenderAllPopups(){
    return(
        <>
            <ProjectCreateConnection_popup />
            <ProjectCreate_popup />
            <ProjectOpen_popup />
            <ProjectSave_popup/>
            <ProjectSettings_popup />
            <DatabaseView_popup />

            <AccountLogin_popup />
        </>
    )
}