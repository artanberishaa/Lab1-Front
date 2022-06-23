import React from 'react';
import './App.css';
import Row from './Components/Row/Row';
import requests from './requests';
import Banner from './Components/Banner/Banner';
import Nav from './Components/NavBar/Nav';

function App() {
  return (
      <div className="App" >
          <Nav />
          <Banner />
          <Row
            title="Netflix Originals" 
              fetchUrl={requests.fetchNetflixOriginals}
               isLargeRow = {true} />
          <Row title="Top Rated" fetchUrl={requests.fetchTrending} />
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
          <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries} />
         
    </div>
  );
}

export default App;
