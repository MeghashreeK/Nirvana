import React, { useState } from 'react';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth"
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';
import { useEffect } from 'react';
import { gptToggleFunction } from '../utils/GptSearchSlice';
import { LANGUAGE_SUPPORT, PROFILE_PIC_URL, SORT_DOWN_URL, SORT_UP_URL } from '../utils/constants';
import { addLanguage } from '../utils/LanguageSlice';
import lang from '../utils/languageConstants'
import { toggleHeaderList } from '../utils/HeaderListSlice';
import { toggleHomeValue, togglegptSearchValue, togglevideoPlayerValue } from '../utils/HeaderMenuSlice';


const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const [arrowState, setArrowState] = useState(false);
    const gptSearchValue = useSelector(store => store.gptstate.gptToggle);
    const language = useSelector(store => store.language.languageSelected);
    const arrowState=useSelector((store)=>store.headerList.headerListToggle);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
        return () => unsubscribe();
    }, [])

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate("/error");
        });
    }
    
    const handleListOpenFunction=()=>{
        dispatch(toggleHeaderList(true));
    }

    const handleListCloseFunction=()=>{
        dispatch(toggleHeaderList(false));
    }

    const handleLanguageSelection = (e) => {
        dispatch(addLanguage(e.target.value));
    }
    const handleHomeEvent=()=>{
        dispatch(toggleHomeValue(true));
        dispatch(togglegptSearchValue(false));
        dispatch(togglevideoPlayerValue(false));

    }
    const handleGptSearchEvent=()=>{
        dispatch(togglegptSearchValue(true));
        dispatch(toggleHomeValue(false));
        dispatch(togglevideoPlayerValue(false));
    }
    

    return (
        <div className='absolute z-10'>
            <div className='flex pt-3 px-4 sm:px-10 text-red-600 bg-gradient-to-b from-black w-screen relative justify-between'>
                <p className='font-bold Bebas text-4xl'>NIRVANA</p>
                {window.location.pathname === "/browse" && (
                    <div className='flex flex-col gap-1 items-center'>
                        <div className='flex items-center gap-1'>
                           {arrowState && <img width="24" height="24" className='cursor-pointer' src={SORT_UP_URL} alt="up-arrow" onClick={handleListCloseFunction} />}
                            {(!arrowState) && <img width="24" height="24" className='cursor-pointer' src={SORT_DOWN_URL} alt="down-arrow" onClick={handleListOpenFunction} />}
                            <img className='w-8 h-8 cursor-pointer' src={PROFILE_PIC_URL} alt="profile-icon" />
                        </div>
                        {(arrowState) && <div className='flex flex-col bg-opacity-50 border-2 text-white p-2 bg-gray-400 rounded-sm place-items-start gap-1'>
                            {/* <p className='cursor-pointer' onClick={() => dispatch(gptToggleFunction())}>{gptSearchValue ? lang[language].home : lang[language].gptSearch}</p> */}
                            <p className='cursor-pointer' onClick={handleHomeEvent}>{lang[language].home}</p>
                            <p className='cursor-pointer' onClick={handleGptSearchEvent}>{lang[language].gptSearch}</p>
                            <p className='cursor-pointer' onClick={handleSignOut}>{lang[language].signOut}</p>
                            {<select className='border cursor-pointer focus:outline-none bg-gray-400' onChange={handleLanguageSelection} value={language}>
                                {LANGUAGE_SUPPORT.map((lang) => <option className='text-[10px] sm:text-[16px]' key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                            </select>}
                        </div>}
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default Header;
