import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export class App extends Component {
  state = {
    mode: 'light',
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  togglemode = () => {
    if (this.state.mode === 'light') {
      this.setState({ mode: 'dark' })
      document.body.style.backgroundColor = '#042743'
      document.title = "Trending Today - Dark mode enabled"
    }
    else {
      this.setState({ mode: 'light' })
      document.body.style.backgroundColor = 'white'
      document.title = "Trending Today - Light mode enabled"
    }
  }

  render() {
    return (

      <div className='hello'>
        {/* color='#f11946'  */}
        <Navbar mode={this.state.mode} togglemode={this.togglemode} />
        <LoadingBar color='#f11946' progress={this.state.progress} height={'5px'}/>
        <Routes>
          <Route exact path='/business' element={<News setProgress={this.setProgress}  key='business' pageSize={9} mode={this.state.mode} country={'in'} category={'business'} />}></Route>
          <Route exact path='/sport' element={<News setProgress={this.setProgress}  key='sport' pageSize={9} mode={this.state.mode} country={'in'} category={'sport'} />}></Route>
          <Route exact path='/health' element={<News setProgress={this.setProgress}  key='health' pageSize={9} mode={this.state.mode} country={'in'} category={'health'} />}></Route>
          <Route exact path='/entertainment' element={<News setProgress={this.setProgress}  key='entertainment' pageSize={9} mode={this.state.mode} country={'in'} category={'entertainment'} />}></Route>
          <Route exact path='/technology' element={<News setProgress={this.setProgress}  key='technology' pageSize={9} mode={this.state.mode} country={'in'} category={'technology'} />}></Route>
          <Route exact path='/science' element={<News setProgress={this.setProgress}  key='science' pageSize={9} mode={this.state.mode} country={'in'} category={'science'} />}></Route>
          <Route exact path='/' element={<News setProgress={this.setProgress}  key='general' pageSize={9} mode={this.state.mode} country={'in'} category={'general'} />}></Route>
        </Routes>
        
      </div>

    )

  }
}

export default App


