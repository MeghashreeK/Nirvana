import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/MoviesSlice";

const useTrailerVideo = (movieId) => {
    useEffect(() => {
        getTrailerVideoData();
    }, []);
    const dispatch=useDispatch();

    const getTrailerVideoData = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos",API_OPTIONS);
        const json=await data.json();
        const filterData=json.results.filter((data)=>data.type==="Trailer")
        const Trailer=filterData[0];
        dispatch(addTrailerVideo(Trailer));
 
    }
}
export default useTrailerVideo;