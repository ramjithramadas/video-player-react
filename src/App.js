import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import SearchBar from "./Components/SearchBar";
import VideoDetails from "./Components/VideoDetails";
import VideoList from "./Components/VideoList";
import axios from "axios";
const api = axios.create({
   baseURL: "https://www.googleapis.com/youtube/v3",
});

const App = () => {
   const [videos, setVideos] = useState([]);
   const [selectedVideo, setSelectedVideo] = useState(null);

   const handleSubmit = async (searchTerm) => {
      try {
         const { data } = await api.get("search", {
            params: {
               part: "snippet",
               maxResults: 5,
               key: process.env.REACT_APP_API_KEY,
               q: searchTerm,
            },
         });
         setVideos(data.items);
         setSelectedVideo(videos[0]);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
     typeof handleSubmit == "function" && handleSubmit("youtube");
   }, []);

   return (
      <Grid style={{ justifyContent: "center" }} container spacing={10}>
         <Grid item xs={11}>
            <Grid container spacing={10}>
               <Grid item xs={12}>
                  <SearchBar onFormSubmit={handleSubmit} />
               </Grid>

               <Grid item xs={5}>
                  <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
               </Grid>
               <Grid item xs={7} style={{ height: "600px" }}>
                  <VideoDetails video={selectedVideo} />
               </Grid>
            </Grid>
         </Grid>
      </Grid>
   );
};

export default App;
