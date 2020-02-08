import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getSmurf } from '../actions';

import SmurfForm from './SmurfForm';
import SmurfCard from './SmurfCard';

import "./App.css";

const App = props => {

    useEffect(() => {
      props.getSmurf();
    }, []);
    
    return (
      <div className="App">
        <form>
          <button>Get Smurfs!</button>
        </form>
        {props.smurfs.map(smurf => {
          return (
            <SmurfCard className="smurf-card" smurf={smurf}/>
          );
        })}
        <SmurfForm/>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  {
    getSmurf
  }
)(App);