import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTranslatedSentence } from "../utils/GptSearchSlice";
import { RAPID_API_KEY, TRANSLATION_API } from "../utils/constants";
import { limitExceededFunction } from "../utils/LanguageSlice";

const useTranslation = () => {
    const movieData = useSelector((store) => store.addMovie.posterPathOverView);
    const selectedLanguage = useSelector((store) => store.language.languageSelected);
    const dispatch = useDispatch();

    useEffect(() => {
        if (movieData) {
            geminiTranslation();
        }
    }, [selectedLanguage, movieData]);

    const geminiTranslation = async () => {
        if (!movieData || !selectedLanguage) return;

        const title = movieData.movieTitle;
        const overview = movieData.overviewData;
        const textToTranslate = title + "&r&z&$" + overview;
        const options = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': RAPID_API_KEY,
                'x-rapidapi-host': 'google-translate113.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'auto',
                to: selectedLanguage,
                text: textToTranslate
            })
        };
        try{
        const data = await fetch(TRANSLATION_API, options);
        const json = await data.json();
        const translatedTextWithAmpersands = json.trans;
        const translatedText = translatedTextWithAmpersands.split("&r&z&$");
        const translatedTitle = translatedText[0];
        const translatedOverview = translatedText[1];
        dispatch(addTranslatedSentence({ title: translatedTitle, overview: translatedOverview }));
        }
        catch{
            dispatch(addTranslatedSentence({ title: title, overview: overview }))
            dispatch(limitExceededFunction(true));
        }


    }



}
export default useTranslation;




