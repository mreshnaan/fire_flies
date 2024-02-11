
export function VideoPlayer(props:{url:string}){
 
    return <video width="320" height="240" controls className="w-full h-auto">
    <source src={props.url} type="video/mp4" />
   
  Your browser does not support the video tag.
  </video>
}