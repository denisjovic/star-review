import './App.css';
import StarRatingComponent from "./components/star-rating.component";

function App() {
  return (
    <div className="App">
       <StarRatingComponent totalStars={5}/>
    </div>
  );
}

export default App;
