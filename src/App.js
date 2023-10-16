import {Ticker} from 'react-ticker-tape'
import './App.css'
function App() {


  return (
    <div className="App">
      <header className="App-header">
        Ticker Tape Library Demo
      </header>
      <main>
          <Ticker text= {"Hi there! I am ticker tape soley build for react projects."} animationSpeed = {20} bg= {'red'} color={'white'}  />

          <Ticker text='Hi there! I am another ticker tape. Look I can be placed in bottom.' animationSpeed = {20} bg= {'yellow'} color={'black'} fix={"bottom"} />
          

          <Ticker text='Hi there! I am third ticker tape placed on left side.' animationSpeed = {15} bg= {'lightgreen'} color={'red'} fix={"left"} />

          <Ticker text='Hi there! I am fourth and last ticker tape placed on right side.' animationSpeed = {10} bg= {'blue'} color={'white'} fix={"right"} />
         
      </main>
    </div>
  );
}

export default App;
