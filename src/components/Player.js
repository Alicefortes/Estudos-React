import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
function Player(){
return(
    <div>
        <p>No componente</p>
    <AudioPlayer 
   src={process.env.PUBLIC_URL + '/audios/01.mp3'} 
   layout="stacked-reverse"/>
    </div>
)
}
export default Player