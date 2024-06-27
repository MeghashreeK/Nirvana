import React, { useState, useRef } from 'react';
import Header from './Header';
import { ValidateForm } from '../utils/ValidateForm';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/UserSlice';
import { LOGO_URL } from '../utils/constants';


const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState([]);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch=useDispatch();

  const tocheckSignIn = () => {
    setIsSignIn(!isSignIn);
  }


  const handleButtonEvent = () => {
    const message = ValidateForm(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: name.current.value
          }).then(() => {
            const { uid, email, displayName } = user;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("user-not-found");
        });
    }
  }


  return (
    <div className='relative w-full h-screen'>
      <Header />
      <img
        className='absolute top-0 left-0 w-full h-full object-cover -z-10'
        src={LOGO_URL}
        alt="netflix-bg"
      />
      <form onSubmit={(e) => { e.preventDefault(); }} className='flex flex-col justify-center items-center absolute bg-black bg-opacity-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-md p-8 rounded'>
        <div className='flex flex-col w-full gap-5'>
          <p className='text-white font-bold text-3xl'>{isSignIn === false ? 'Sign Up' : 'Sign In'}</p>
          <div className='flex flex-col gap-5'>
            {isSignIn === false && <input ref={name}
              className='p-3 rounded-sm bg-gray-800 bg-opacity-40 text-white w-full'
              type='text'
              placeholder='Name' required
            />}
            <input ref={email}
              className='p-3 rounded-sm bg-gray-800 bg-opacity-40 text-white w-full'
              type='text'
              placeholder='Email'
            />
            <input ref={password}
              className='p-3 rounded-sm bg-gray-800 bg-opacity-40 text-white w-full'
              type='password'
              placeholder='Password'
            />
            <p className='text-red-600'>{errorMessage}</p>
            <button className='bg-red-600 p-3 w-full text-white rounded hover:bg-red-500' onClick={() => handleButtonEvent()}>{isSignIn === false ? 'Sign Up' : 'Sign In'}</button>
          </div>
          <div onClick={() => tocheckSignIn()}>
            {isSignIn && <div className='flex gap-1 justify-center' >
              <p className='text-white'>Not registered yet?</p>
              <p className='text-white hover:text-red-600 cursor-pointer'>Sign Up now!</p>
            </div>
            }
            {isSignIn === false && <div className='flex gap-1 justify-center' >
              <p className='text-white'>Already registered?</p>
              <p className='text-white hover:text-red-600 cursor-pointer'>Sign In now!</p>
            </div>
            }
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;


