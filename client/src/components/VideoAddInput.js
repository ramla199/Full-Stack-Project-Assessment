import React, { useState } from "react";

const VideoAddInput = ({ handleSubmit }) => {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    function validateYouTubeUrl(urlToParse) {
        if (urlToParse) {

            var regExp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
            if (urlToParse.match(regExp)) {
                return true;
            }
        }
        return false;
    }



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
                    if (validateYouTubeUrl(url) && title !== '') {
                        const embedId = url.replace('https://www.youtube.com/watch?v=', '');
                        handleSubmit(title, embedId);
                    } else {
                        alert('Video could not be saved\n  please complete every thing')
                    }

                }
                }>ADD</button>
            </div>
        </form>);
}

export default VideoAddInput;