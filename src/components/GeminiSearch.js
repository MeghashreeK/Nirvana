import React, { useRef, useState } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GEMINI_API_KEY } from '../utils/constants';
import GeminiMovies from './GeminiMovies';
import { toggleHeaderList } from '../utils/HeaderListSlice';
import { useDispatch } from 'react-redux';
import ErrorElement from './ErrorElement';
import { and } from 'firebase/firestore';

const GeminiSearch = () => {
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  const language = useSelector(store => store.language.languageSelected);
  const input = useRef(null);
  const [movies,setMovies]=useState([]);
  const [inputValue, setInputValue] = useState('');
  const [error,setError]=useState(false);
  const dispatch=useDispatch();

  const geminiSearchMovies = async () => {
    try{
    const searchQuery = "Act as movie recommendation system and suggest movies for the query: " + input.current.value + ". only give me names of 15 movies, comma separated like the given result ahead. Example Result: Avatar, Sholay, Bahubali, Singham, Once upon a time in mumbai";
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const data = await model.generateContent(searchQuery);
    const response = await data.response;
    const text = response.text();
    const result = text.split(",").map(item => item.trim());
    const finalResult = result; 
    setMovies(finalResult);
    setInputValue(''); 
    setError(false);
    }
    catch(error){
    setError(true);
    }
    }
 
    const handleHeaderListEvent = () => {
      dispatch(toggleHeaderList(false));
    }
   
  return (
    <div className='flex flex-col items-center bg-[#010B13] pt-[20%] sm:pt-[8%] gap-2 h-screen w-screen' onClick={handleHeaderListEvent}>
      <div className='flex w-full justify-center gap-1'>
        <input ref={input} className="h-5 p-5 w-1/2 rounded-lg focus:outline-none" value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} placeholder={lang[language].gptSearchPlaceholder} />
        <button className='flex text-white h-5 bg-red-600 p-5 items-center focus:outline-none rounded-lg transition duration-500 hover:opacity-70' onClick={geminiSearchMovies }>
          {lang[language].search}</button>
      </div>
      <div className='flex flex-wrap gap-5 p-2 bg-[#010B13] justify-center'>
        {(error) ? <ErrorElement/> : (movies && movies.map((movie,index)=> <GeminiMovies key={index} movie={movie} />))}
      </div>
    </div>
  )
}

export default GeminiSearch;


