import React, { Component } from 'react';

import LikeButton from './LikeButton';

export default class App extends Component {

  render() {
    return (
      <div>
        <LikeButton text={ "Like!" }></LikeButton>
        <LikeButton text={ "いいね！" }></LikeButton>
      </div>
    );
  }
};
