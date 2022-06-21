import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
// import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import ThumbDownRoundedIcon from '@material-ui/icons/ThumbDownRounded';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles({
    vidCard: {
        display: 'flex',
        backgroundColor: '#f8f8f8',
        height: 'auto',
        minHeight: 450,
        flexDirection: 'column',
        justifyContent: 'space-evenly',

    },
    vidTitle: {
        fontSize: 2,
        marginBottom: -10,
    },

    media: {
        width: "100%",
        margin: 'Auto',
        marginTop: '-1px',
        marginBottom: '-20px',
        height: 200
    },

    iconWrapper: {
        display: 'flex',
        justifyContent: 'space-around',
        // padding: 25,
        fontSize: 25,
    },



})

const VideoSection = ({ vid, handleDelete, handleUpdate }) => {
    let [vidColor, setVidColor] = useState(false);
    let [vidColor2, setVidColor2] = useState(false);
    let [count, setCount] = useState(0);
    const classes = useStyles();
    // console.log(vid)
    function increment(id) {
        setCount(++count);
        setVidColor(true);
        handleUpdate(id, vid.rating);

    }
    function decrement(id) {
        if (count <= 0) {
            setCount(0);
            setVidColor2(false);
        } else {
            setCount(--count);
            setVidColor2(true);
            handleUpdate(id, vid.rating);
        }

    }
    vid.rating = count;
    // console.log(vid.url);
    return (<div className="vid-wrapper">
        <Card elevation={1} className={classes.vidCard} sx={{ maxWidth: 350 }}>
            <CardHeader className={classes.vidTitle}
                title={vid.title}
            />

            <div className={classes.iconWrapper}>
                <ThumbUpRoundedIcon color={vidColor ? "primary" : ""} style={{ fontSize: 40 }} onClick={() => increment(vid._id)} />
                <span className="ratingCount">{count}</span>
                <ThumbDownRoundedIcon color={vidColor2 ? "secondary" : ""} style={{ fontSize: 40 }} onClick={() => decrement(vid._id)} />
            </div>

            <CardMedia className={classes.media}
                component="iframe"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                image={`https://www.youtube.com/embed/${vid.embedId}`}
            />
            <CardContent style={{ marginTop: 10 }}>
                <Button variant="contained" startIcon={<DeleteIcon />} color="secondary" onClick={() => handleDelete(vid._id)}>
                    Delete
                </Button>

            </CardContent>
        </Card>

    </div>);
}

export default VideoSection;