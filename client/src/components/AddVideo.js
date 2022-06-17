import VideoAddSec from "./VideoAddSec";
import VideoSearchSec from "./VideoSearchSec";
const AddVideo = ({ handlesearch, handleSubmit }) => {
    return (
        <div className="searchWraper">
            <VideoAddSec handleSubmit={handleSubmit} />
            <VideoSearchSec handlesearch={handlesearch} />
        </div>
    );
}

export default AddVideo;