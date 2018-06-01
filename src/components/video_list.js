import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = function(props){
    // Here we are storyng a list of videos. We make a foreach using array.map (videos.map)
    // for each video (videos) that he take, he create a var called video and pass thsi var
    // for the component VideoList. 
    const videoItems = props.videos.map((video)=>{
        return <VideoListItem key={video.etag} video={video} />
        // key will receive video.etag (etag it's a unic identifier for each video give by YouTube API)
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

// Export this component to other pages have access to
export default VideoList;