import './App.css';
import Songs from './Songs';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-dark text-reset">
        <h1> HOME </h1>
      </header>
        <div className='container-fluid'>
          <div className='col-3'><h2>Top 10 Songs</h2></div>
          <div className='col-6'><button className='App-btn'>Add Songs</button></div>
        </div>

        <Songs />
        <h2>Top 10 Artists</h2>
  
    </div>
  );
}

export default App;
