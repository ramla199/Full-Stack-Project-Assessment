import React, { useState } from "react";

const VideoAddInput = ({ handleSubmit }) => {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    return ( //action = "/#" method = "POST"
        <form>
            <div className="video-add">
                <label for="title">
                    Title
                </label>
                <input className="video-input input"
                    name="title"
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />

            </div>
            <div className="btn-video">
                <button className="btn btn-warning" onClick={(e) => { e.preventDefault(); setTitle(''); setUrl('') }}>Cancel</button>
                <button type="submit" className="btn btn-danger" onClick={(e) => {
                    e.preventDefault();
                    handleSubmit(title, url);
                }
                }>ADD</button>
            </div>
        </form>);
}

export default VideoAddInput;