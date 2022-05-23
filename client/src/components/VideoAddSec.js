import { useState } from 'react';
import VideoAddInput from "./VideoAddInput";


const VideoAddSec = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="addvideo-wrapper">
            <a href="#" onClick={() => setShow(!show)}>Add Video</a>
            {show && <VideoAddInput />}
        </div>
    );
}

export default VideoAddSec;