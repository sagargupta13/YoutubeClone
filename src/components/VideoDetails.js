import {Card} from 'react-bootstrap'

function VideoDetails({video}){
  
   if(!video) return <h1> Loading....</h1>
const videoSrc =`https://www.youtube.com/embed/${video.id.videoId}`
    return(
<Card>
    <iframe height={345} src={videoSrc}></iframe> 
    {/* /* iframe is a html tag used to show videos */ }
        
        <Card.Body>
          <Card.Title>{video.snippet.title}</Card.Title>
          <Card.Text>
           {video.snippet.description}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}
export default VideoDetails