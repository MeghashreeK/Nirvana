import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
   
  return (
    <div>
        <VideoTitle />
        <VideoBackground/>
    </div>
  )
}

export default MainContainer;
