const VideoAddInput = () => {
    return (<form action="#">
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
        <div className="btn-video">
            <button className="btn btn-warning">Cancel</button>
            <button className="btn btn-danger">ADD</button>
        </div>
    </form>);
}

export default VideoAddInput;