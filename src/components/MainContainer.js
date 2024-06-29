import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useDispatch } from 'react-redux'
import { toggleHeaderList } from '../utils/HeaderListSlice';

const MainContainer = () => {
  const dispatch=useDispatch();

  const handleHeaderListEvent = () => {
    dispatch(toggleHeaderList(false));
  }
   
  return (
    <div onClick={handleHeaderListEvent}>
        <VideoTitle />
        <VideoBackground/>
    </div>
  )
}

export default MainContainer;
