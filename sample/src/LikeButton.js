import React, { Component } from 'react';
import './App.css';

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      count: 999,
      liked: false
    }
  }

  onMouseEnter() {
    this.setState({hovered: true});
  }

  onMouseLeave() {
    this.setState({hovered: false});
  }

  onClick(){
    this.setState({
      count: this.state.count + (this.state.liked ? -1 : 1),
      liked: !this.state.liked
    });
  }

  render() {
    const likeClass = this.state.hovered ? "like likeHover" : "like";

    return (
      <span className="container">
        <span
          onMouseEnter={this.onMouseEnter.bind(this)}
          onMouseLeave={this.onMouseLeave.bind(this)}
          onClick={this.onClick.bind(this)}
          className={likeClass}>{this.state.liked ? "✔" : ""} { this.props.text }</span>
        <span className="counter">
          <span className="counterBefore">{" "}</span>
          {this.state.count}
        </span>
      </span>
    );
  }
}

export default LikeButton;
