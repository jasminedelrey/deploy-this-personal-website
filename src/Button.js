import './Button.css';

function Button(props) {
  return (
    <div className={`${props.pink ? "pinkColor" : "blueColor"} Button`}>
        <a
          className="App-link"
          href="https://drive.google.com/file/d/1DxNef13MBBiaPX1cc33wm12lMZU9AJc8/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stalk my work experience here
        </a>
        </div>
  );
}

export default Button;