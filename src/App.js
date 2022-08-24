
import './App.css';
import { Button, Container, Row, Col } from 'react-bootstrap'
import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetails';
import VideoItem from './components/VideoItem';
import VideoList from './components/VideoList';
import {useState,useEffect} from 'react'
import youtube from './api/youtube';

// youtube API :- AIzaSyAJRuSZsnJDcxhLLjlrgW0xfmsOLUMFd70
function App() {
 const [videos,setVideos] = useState([])
const [clickVideo,setClickVideo] = useState(null)
const selectedVideo = clickVideo!=null ? clickVideo :(videos.length!=0?videos[0] :null)
 async function handleSubmit(searchTerm){
 const response =  await youtube.get("search",{
  params:{
    part:"snippet",
    maxResult:6,
    key:"AIzaSyAJRuSZsnJDcxhLLjlrgW0xfmsOLUMFd70",
    q:searchTerm
  }
 })
 setVideos(response.data.items)

}

const onVideoClick = (video)=>{
setClickVideo(video)
}




useEffect(()=> { 
  handleSubmit('javascript')
},[])


  return (
    <div className="App">
      <Container>
        <SearchBar onSubmit={handleSubmit}/>
        <Row>
          <Col sm={7}>
            <VideoDetails video ={selectedVideo}/>
          </Col>
          <Col sm={5}>
            <VideoList videos={videos}  onVideoSelect = {onVideoClick}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
