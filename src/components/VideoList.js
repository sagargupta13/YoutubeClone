import VideoItem from "./VideoItem"

function VideoList({videos,onVideoSelect}){
    if(videos.length == 0) return <h2>Loading...</h2>
    let newvideos = [];
    for(let i=1;i<videos.length;i++){
        newvideos.push(videos[i])
    }
return(
    <>
    {newvideos.map((video,idx) => <VideoItem key={idx} VideoItem={video} onVideoSelect={onVideoSelect}/>)}
    </>
)
}
export default VideoList