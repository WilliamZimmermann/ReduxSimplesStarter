import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = function(props){
    return (
        <ul className="col-md-4 list-group">
            {props.videos.length}
        </ul>
    );
}

// Export this component to other pages have access to
export default VideoList;