import React, { useEffect, useState } from 'react'
import AddVideo from "./AddVideo";
import VideoSection from "./VideoSection";
// import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
// import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
// import { makeStyles } from '@material-ui/core'

const ContentBody = () => {
    const [videoList, setVideoList] = useState([]);
    let [searchTerm, setSearchTerm] = useState('');
    // http://localhost:3000//exampleresponse.json
    //http://localhost:5000/


    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setVideoList(data)
            })
    }, [])

    const handleDelete = async (id) => {
        console.log(id);
        await fetch(`http://localhost:5000/${id}`, {
            method: 'DELETE'
        })

        const newList = videoList.filter(video => video.id !== id);
        console.log(newList);
        setVideoList(newList);
        // console.log('hi')
    }

    const handleSubmit = async (title, url) => {
        console.log(title, url);
        const videoData = {
            title: title,
            url: url
        }
        await fetch('http://localhost:5000', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(videoData)
        })

    }

    function handlesearch(e) {
        setSearchTerm(e);
    }

    return (<div className="content-body">
        <AddVideo handlesearch={handlesearch} handleSubmit={handleSubmit} />
        <div className="video-list" style={{ padding: 35 }}>
            <Grid container alignItems="stretch" spacing={3} style={{ padding: 35 }}>
                {videoList && videoList.filter(video => {
                    if (searchTerm == "") {
                        return video;
                    } else if (video.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return video;
                    }
                }).map(vid => (
                    <Grid item xs={12} sm={6} md={3} key={vid.id}>
                        <VideoSection vid={vid} handleDelete={handleDelete} />
                    </Grid>
                ))}
            </Grid>

        </div>
    </div>
    );
}

export default ContentBody;