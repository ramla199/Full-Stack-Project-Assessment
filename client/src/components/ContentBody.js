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
    useEffect(() => {
        fetch('http://localhost:3000//exampleresponse.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setVideoList(data)
            })
    }, [])

    const handleDelete = async (id) => {
        await fetch('http://localhost:3000/exampleresponse.json' + id, {
            method: 'DELETE'
        })
        const newList = videoList.filter(video => video.id !== id)
        setVideoList(newList)
    }

    function handlesearch(e) {
        setSearchTerm(e);
    }

    return (<div className="content-body">
        <AddVideo handlesearch={handlesearch} />
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