import React, { Component } from 'react';
import Latex from 'react-latex'

class LatexEQ extends Component {
  render() {
    return (
      <p align={'center'} style={{margin: 10}}>
        <Latex>
          {this.props.children}
        </Latex>
      </p>
    );
  }
}

export default LatexEQ;
