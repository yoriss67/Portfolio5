import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './components/css/index.css';

import {  Hero, Bio, Currently, Works, Global, Navbar, Footer} from './index';

const App = () => {
    const [isJapanese, setLanguage] = useState(false);
    return  (
      <>
        <Global isJapanese={isJapanese} setLanguage={setLanguage} />
        <Navbar  />
        <Hero isJapanese={isJapanese} />
        <Bio isJapanese={isJapanese} />
        <Works isJapanese={isJapanese} />
        <Currently  isJapanese={isJapanese}/>
        <Footer  />
        <div className="container"></div>
      </>
    );
}
export default App