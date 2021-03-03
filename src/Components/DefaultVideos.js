import React from 'react'


function DefaultVideos() {
    const {videos,setVideos}=React.useState([])
    const [selectedVideo, setSelectedVideo] = React.useState(null);

    const api = axios.create({
        baseURL: "https://www.googleapis.com/youtube/v3",
      });

      const { data} = api.get("search", {
        params: {
          part: "snippet",
          maxResults: 5,
          key: "AIzaSyA4pBAeGIlB2h7gmoNwCXTEe2Ni-B2_OFI",
          q: "youtube",
        },
      });
    setVideos(data.items);
    setSelectedVideo(data.items[0])


    return (
        <div>
            <Grid justify="center" container spacing={16}>
  <Grid item xs={12}>
    <Grid container spacing={16}>
      
      <Grid item xs={6}>
        < VideoDetails video={selectedVideo} />
      </Grid>
      <Grid item xs={4}>
      <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
      </Grid>
    </Grid>
  </Grid>
</Grid>






        </div>
    )
}

export default DefaultVideos
