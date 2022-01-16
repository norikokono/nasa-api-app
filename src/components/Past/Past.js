// https://stackoverflow.com/questions/70675385/how-do-you-save-an-object-from-an-api-to-a-favorites-component-in-react

import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import "./Past.css";

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Stars from '@material-ui/icons/Stars';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import Search from './../../components/Search/Search';

const apiKey = process.env.REACT_APP_NASA_KEY;

function Past() {

    const [media, setMedia] = useState([]);

    const mediaGet = () => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10&concept_tags=True`)
            .then(res => res.json())
            .then(result => {
                setMedia(result)
            })
    }

    useEffect(() => {
        mediaGet()
    }, [])

    console.log(media);

    return (
        <>
            <NavBar />
            <main>
                <h1 className="past-heading">Past Astronomy Picture of the Day</h1>

                {media.map(item => (
                    <div className="past-container" key={item.id}>
                        <h2 className="past-title">{item.title}</h2>
                        <h3 className="past-data">{item.date}</h3>
                        <img src={item.url} alt={item.title} className="image" />
                        <p className="past-explanation">{item.explanation}</p>
                        
                        {/* Like Button */}
                        <div style={{
                            marginTop: 0,
                            marginLeft: '70rem',
                            width: 'fit-content',
                            color: 'Teal'
                        }}>
                        
                        <FormControlLabel
                            control={<Checkbox icon={<StarBorderIcon />} 
                            checkedIcon={<Stars style={{fill: "Yellow"}}/>}
                            name="checkedS" />}
                            label="Like"
                        />
                        </div>
                        <a href={item.hdurl} className="past-hyperlink" target="_blank" rel="noopener noreferrer">{item.hdurl}</a>
                        <p class="dashed"></p>
                    </div>
                ))}

                <Search />
            </main>
        </>
    )
}

export default Past;
