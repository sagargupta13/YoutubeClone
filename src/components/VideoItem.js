import {Row,Col,Container} from "react-bootstrap"

function VideoItem({VideoItem,onVideoSelect}){
   
return(
    <Container>
    <Row onClick={()=>onVideoSelect(VideoItem)}>
        <Col sm={7} style = {{marginTop:"20px"}}>
       <img src={VideoItem.snippet.thumbnails.medium.url} width = "260px"/>
        </Col>
        <Col sm={5} style = {{marginTop:"20px"}}  >
       <p>{VideoItem.snippet.title}</p>
        </Col>
    </Row>
    </Container>
)
}
export default VideoItem