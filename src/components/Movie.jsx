import MainContent from "./MainContent";
import SearchBar from './SearchBar';
import { useEffect, useState } from "react";
import "./Moviestyle.css";

export const Movie = () => {
  const [btn,setBtn]=useState("mountain");
  const [image,setImage]=useState([]);
  const [loading,setloading]=useState(true);
  const [error,setError]=useState(null);

  const API=`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${btn}&per_page=24&format=json&nojsoncallback=1`;


  let headstyle={color: '#051c33',fontSize:'2em',textAlign:'center',fontFamily:"Josefin Sans"}
  
  const fetchImages=async ()=>{
      try {
        const res=await fetch(API);
        const data=await res.json();
        console.log(data.photos.photo);

        // const detailedData=data.photos.photo.map(async (cur)=>{
        //   const res=await fetch(cur.photo);
        //   const data=await res.json();
        //   return data;
        // })
        // const detailresponse=await Promise.all(detailedData);
        // console.log(detailresponse);
        setImage(data.photos.photo);
        setloading(false);
      } 
      
      catch (error) {
        console.log(error.message);
        setError(error);
        setloading(false);
        
        
      }

  }


    useEffect(()=>{
         fetchImages();
    },[btn])


    if(loading)
    {
      return (
        <div>
          <h1>Loading...</h1> 
         </div>
      )
    }

    if(error)
      {
        return (
          <div>
            <h1>{error.message}</h1> 
           </div>
        )
      }


  return (

    <div className="container">
      <h1>SnapShot</h1>


      <SearchBar btn={btn} setBtn={setBtn}/>

          <h3 style={headstyle}>{btn.charAt(0).toUpperCase()+btn.substring(1)}   Pictures</h3>
          <ul className="cards">
            
            {image.map((cur) => {
              return (
                <MainContent key={cur.id} image={cur}/>
              );
            })}
          </ul>
      

      


    </div>
  )
}


