import profile from './jasminepic.jpg';
import './App.css';
import Button from './Button';

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
        <Button pink={true}></Button>
        </div>
        </span>
      </header>
    </div>
  );
}

export default App;
