import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {

  const [mode, setmode] = useState('light');
  const [progress, setprogress] = useState(0);

  const setProgress = (proGress) => {
    
    setprogress(proGress )
  }
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743'
      document.title = "Trending Today - Dark mode enabled"
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      document.title = "Trending Today - Light mode enabled"
    }
  }


  return (

    <div className='hello'>
      {/* color='#f11946'  */}
      <Navbar mode={mode} togglemode={togglemode} />
      <LoadingBar color='#f11946' progress={progress} height={'5px'} />
      <Routes>
        <Route exact path='/business' element={<News setProgress={setProgress} key='business' pageSize={9} mode={mode} country={'in'} category={'business'} />}></Route>
        <Route exact path='/sport' element={<News setProgress={setProgress} key='sport' pageSize={9} mode={mode} country={'in'} category={'sport'} />}></Route>
        <Route exact path='/health' element={<News setProgress={setProgress} key='health' pageSize={9} mode={mode} country={'in'} category={'health'} />}></Route>
        <Route exact path='/entertainment' element={<News setProgress={setProgress} key='entertainment' pageSize={9} mode={mode} country={'in'} category={'entertainment'} />}></Route>
        <Route exact path='/technology' element={<News setProgress={setProgress} key='technology' pageSize={9} mode={mode} country={'in'} category={'technology'} />}></Route>
        <Route exact path='/science' element={<News setProgress={setProgress} key='science' pageSize={9} mode={mode} country={'in'} category={'science'} />}></Route>
        <Route exact path='/' element={<News setProgress={setProgress} key='general' pageSize={9} mode={mode} country={'in'} category={'general'} />}></Route>
      </Routes>

    </div>

  )


}

export default App


