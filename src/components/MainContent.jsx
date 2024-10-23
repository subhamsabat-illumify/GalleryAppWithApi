
export default function MainContent(props) {
      let farm = props.image.farm;
      let server = props.image.server;
      let id = props.image.id;
      let secret = props.image.secret;
      let title = props.image.title;
      // console.log(props.image.image)

  let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
  return (
    <li className="movie-card">
    
     <img src={url} alt={title} />
     {/* <p>{farm} {server}{id}{secret}{title}</p> */}
      
    </li>
  )
}
