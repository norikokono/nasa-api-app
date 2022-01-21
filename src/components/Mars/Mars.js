// https://stackoverflow.com/questions/70442276/calling-the-property-of-an-object-returns-object-instead-of-property
import "./Mars.css"
import { useState } from "react"
import NavBar from "../NavBar";

const apiKey = process.env.REACT_APP_NASA_KEY;

const Mars = () => {
  const [data, setData] = useState([]);

  const handleFetch = async () => {
    const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`, {
      method: "GET",
    })
    const fetchData = await response.json()
    const fetchData2 = fetchData.photos.slice(0,10)
    setData(fetchData2.map(arrayItem => {
      return arrayItem.img_src
    }))
  }

  return (
    <main className="mars">
      <NavBar />
      <div className="mars-app">
        <h1>Mars rover images</h1>
        <button onClick={handleFetch} className="mars-button">Upload Images</button>
      
        <ol>
          {data && 
            data.map((temp, index) => {
              return (
                <li key={index}>
                  <img src={temp} alt="" />
                </li>
              )
            })}
        </ol>
      </div>
    </main>
  )
}

export default Mars