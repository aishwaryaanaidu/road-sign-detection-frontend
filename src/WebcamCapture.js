import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

function WebcamCapture() {

    const [isShowVideo, setIsShowVideo] = useState(false);
    const videoElement = useRef(null);
    
    const videoConstraints = {
        width: 640,
        height: 480,
        facingMode: { exact: "environment" }
    }

    const startCam = () => {
        setIsShowVideo(true);
    }

    const stopCam = () => {
        let stream = videoElement.current.stream;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        setIsShowVideo(false);
    }

    const handleOnUserMedia = () => {
      console.log(videoElement.current.stream)
    }

    return (
        <div>
            <div className="camView">
                {isShowVideo &&
                    <Webcam audio={false} ref={videoElement} onUserMedia={handleOnUserMedia} videoConstraints={videoConstraints} />
                }
            </div>
            <button onClick={startCam}>Start Video</button>
            <button onClick={stopCam}>Stop Video</button>
        </div>
    );
};

export default WebcamCapture;