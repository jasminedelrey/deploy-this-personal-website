import profile from './jasminepic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="photo-and-bio">
        <img src={profile} className="App-logo" alt="logo" />
        <div className= "biography">
        <p>
          Hey! My name is Jasmine Reyes.
        </p>
        <p> I am a human that likes to code, sing, and watch movies! I currently work as a software engineer at Esri, with an expertise in frontend
        software development. In my free time, I like to take long walks on the beach and watch sunsets. I am a budding boba connoisseur and 
        a human bean figuring out her 20s in the most fearless way she can. </p>
        <p>Let's be friends!</p>
        <a
          className="App-link"
          href="https://drive.google.com/file/d/1DxNef13MBBiaPX1cc33wm12lMZU9AJc8/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stalk my work experience here
        </a>
        </div>
        </span>
      </header>
    </div>
  );
}

export default App;
