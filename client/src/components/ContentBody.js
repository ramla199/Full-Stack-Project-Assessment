import React, { useEffect, useState } from 'react'
import AddVideo from "./AddVideo";
import VideoSection from "./VideoSection";
import Grid from '@material-ui/core/Grid'


const ContentBody = () => {
    const [videoList, setVideoList] = useState([]);
    let [searchTerm, setSearchTerm] = useState('');
    let [isAsc, setIsAsc] = useState(true);



    // desc
    // get 
    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => {
                setVideoList(data)
            })
            .catch((err) => console.log(err))
    }, [])



    // delete
    const handleDelete = async (id) => {
        console.log(id);
        await fetch(`http://localhost:5000/${id}`, {
            method: 'DELETE'
        }).then((res) => res.json())
            .then((data) => {
                const newList = videoList.filter(video => video._id !== data._id);
                setVideoList(newList);
            })
            .catch((err) => console.log(err))
    }

    // put
    const handleUpdate = async (id, rating) => {
        // console.log(id, rating);

        await fetch(`http://localhost:5000/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rating: rating
            })
        })
            .then(res => {
                return res.json()
            })
            .catch((err) => console.log(err))
    }



    // post
    const handleSubmit = async (title, embedId) => {

        const videoData = {
            vidId: videoList.length > 0 ? videoList.length : 1,
            title: title,
            embedId: embedId,
            rating: 0
        }
        await fetch('http://localhost:5000', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(videoData)
        }).then((res) => res.json())
            .then((data) => {
                setVideoList([...videoList, data]);
            })
            .catch((err) => console.log(err))

    }






    //  search
    function handlesearch(e) {
        setSearchTerm(e);
    }

    return (<div className="content-body">
        <AddVideo handlesearch={handlesearch} handleSubmit={handleSubmit} />
        <div className="div-order"><button className="btn btn-order" onClick={() => {
            setIsAsc(!isAsc);
        }}>{isAsc ? 'Ascending Order' : 'Descending Order'}</button></div>
        <div className="video-list" style={{ padding: 35 }}>
            <Grid container spacing={3} style={{ padding: 35 }}>
                {videoList && videoList.filter(video => {
                    if (searchTerm == "") {
                        return video;
                    } else if (video.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return video;
                    } // edit this part soon
                }).sort((a, b) => { return isAsc ? a.title - b.title : b.title - a.title }).map(vid => (
                    <Grid item xs={12} sm={6} md={3} key={vid.id}>
                        <VideoSection vid={vid} handleUpdate={handleUpdate} handleDelete={handleDelete} />
                    </Grid>
                ))}
            </Grid>

        </div>
    </div>
    );
}

export default ContentBody;