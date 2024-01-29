import './Main.css';
import Header from '../header/Header.js';
import Playlist from '../playlist/Playlist.js';

const Main = () => {
    return (
        <div className = 'main-container' >
            <Header/>
            <Playlist/>
        </div>
    );
  }

export default Main;