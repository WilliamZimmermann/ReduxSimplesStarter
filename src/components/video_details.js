import React from 'react';

const VideoDetail = ({video})=>{
    // As JavaScript is Assyncronous, it can be that components are not charged yet
    // if this happens, will be showed the loading message
    if (!video){
        return <div>Loading...</div>;
    }
    // It gets the video data and url and will pass it for our iframe
    const videoId = video.id.videoId;
    const url = 'https://www.youtube.com/embed/' + videoId;
    // Another way to reference url is...
    // const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;