
export function VideoPlayer(props: { url: string, coverImage: string }) {

  return <video width="320" height="240" controls className="w-full h-auto" poster={props.coverImage}>
    <source src={props.url} type="video/mp4" />

    Your browser does not support the video tag.
  </video>
}