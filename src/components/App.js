import video from "../data/video.js";
import Screen from "./Screen"
import Stats from "./Stats"
import CommentList from "./CommentList"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Screen video={video}/>
      <Stats video={video}/>
      <CommentList comments={video.comments}/>
    </div>
  );
}

export default App;
