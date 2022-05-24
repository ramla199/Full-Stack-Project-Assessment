import AddVideo from "./AddVideo";
import VideoSection from "./VideoSection";
const ContentBody = () => {
    return (<div className="content-body">
        <AddVideo />
        <div className="video-list">
            <VideoSection />
        </div>
    </div>
    );
}

export default ContentBody;