const VideoSearchSec = () => {
    return (<div className="video-searchWraper">
        <label for="search"> Search</label>
        <input className="video-input input"
            name="search"
            type="text"
        //  value={title}
        //  onChange={(e) => setTitle(e.target.value)}
        />
    </div>);
}

export default VideoSearchSec;