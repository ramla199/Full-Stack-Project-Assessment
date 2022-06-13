import VideoAddSec from "./VideoAddSec";
import VideoSearchSec from "./VideoSearchSec";
const AddVideo = ({ handlesearch }) => {
    return (
        <div className="searchWraper">
            <VideoAddSec />
            <VideoSearchSec handlesearch={handlesearch} />
        </div>
    );
}

export default AddVideo;