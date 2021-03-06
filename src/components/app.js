import React, { Component } from 'react'
import { BrowserRouter,Route,Link,NavLink} from 'react-router-dom'
import {value01} from './value'
import {Home} from './home'
import {About} from './about'
import {Add} from './add'
import {Tbl} from './tbl'
import {Err} from './err'
import '../css/style.css'

export class App extends Component{
  constructor(props){super(props);
    this.state = { value001: [...value01] }
    this.fn1 = this.fn1.bind(this)
  }
fn1(x){
  this.setState({
    value001: [ ...this.state.value001, x]
  })
}
  render(){
    const {location,match} = this.props
    return(
      <div >
      <div style={{marginBottom:"20px"}}>
      <NavLink exact to='/' className='navlink' activeClassName='selected'>Home </NavLink>
      <NavLink to='/add'  className='navlink' activeClassName='selected'>add </NavLink>
      <NavLink to='/table'  className='navlink' activeClassName='selected'>table </NavLink>
      <NavLink to='/about'  className='navlink' activeClassName='selected'>about </NavLink>
      </div>
      { location.pathname === '/' ?
      <Home name='Dadashi' number={this.state.value001.length}/> :
      location.pathname === '/about' ?
      <About/> :  location.pathname === '/add' ?
      <Add submit1={this.fn1}/> :
      <Tbl key01={this.state.value001} filter1={match.params.x}/> }
    </div>
    )
  }
}
