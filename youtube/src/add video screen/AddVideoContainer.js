
import './AddVideoContainer.css';
import videos from "../database/videos.json"
import { useState } from "react";



function AddVideoContainer() {

    const [getVideosList, setVideosList] = useState(videos)

    const addVideo = () => {
        console.log("hi")
        const newVideo = {
            "text": "newVideo"
        }
        setVideosList[getVideosList, newVideo]
    }



    return (
        <>
            <div className="container text-left">
                <div className="row align-items-start ">
                    <div className="col">
                        uploade videos
                    </div>
                    <button type="button" className="btn-close" aria-label="Close"></button>
                </div>

                <div className="row ">

                    <button onClick={addVideo} type="button" className="btn btn-primary btn-sm
                ">Chose file</button>

                </div>

            </div >


        </>
    );
}
export default AddVideoContainer;