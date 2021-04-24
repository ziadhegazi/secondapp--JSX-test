import pic from "./imageInSrc.jpg"
import './style.css';

function App() {
  return (
    <div>
      <div style={{border:"solid 1px black", maxWidth:"100vw"}}>
        <h1 className ="title red">Ziad Hegazi</h1>
        <img src={pic} ></img>
        <br></br>
        <img src="/imageInPublic.jpg" ></img>
      </div>
      <br></br>
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" ></source>
      </video>
    </div>
  );
}

export default App;
