import VideoComp from "./videoComp";

function CatRub({ data }) {
  return (
    <div className="Rub-Container">
      <h2>{data.Rub}</h2>
      <div className="videos-grid">
        {data.VideoData.map((video, index) => (
          <VideoComp key={index} videoData={video} />
        ))}
      </div>
    </div>
  );
}
export default CatRub;
