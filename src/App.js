import "./App.css";
import Header from "./components/Header";
import PromotedVideo from "./components/PromotedVideo";
import VideoSlider from "./components/VideoSlider";

function App() {
  return (
    <div className="App">
      <Header />
      <PromotedVideo />
      <VideoSlider />
    </div>
  );
}

export default App;
