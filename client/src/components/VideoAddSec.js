const VideoAddSec = () => {
    return (
        <div>
            <a href="#">Add Video</a>
            <form action="#">
                <div className="video-add">
                    <label for="title">
                        Title
                    </label>
                    <input className="video-input input"
                        name="title"
                        type="text"
                        required
                    //  value={title}
                    //  onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="video-add">
                    <label for="url">
                        URL
                    </label>

                    <input className="video-input input"
                        name="url"
                        type="text"
                        required
                    // value={title}
                    //  onChange={(e) => setTitle(e.target.value)}
                    />

                </div>
            </form>
        </div>
    );
}

export default VideoAddSec;