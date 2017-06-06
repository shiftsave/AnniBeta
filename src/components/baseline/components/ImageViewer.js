import React, { Component } from "react";
import classNames from "classnames";

export class ImageViewer extends Component {
  constructor(props) {
    super(props);
    this.state = props;
    console.log(this.state.selection);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selection !== this.state.selection) {
      this.setState({ selection: nextProps.selection });
    }
  }

  nextImage = () => {
    const nextImage = this.state.selection + 1;
    if (nextImage !== this.state.content.length) {
      this.setState({ selection: nextImage });
    }
  };

  prevImage = () => {
    const prevImage = this.state.selection - 1;
    if (prevImage !== -1) { // @hudakdidit Not sure if this is the best way to do this...
      this.setState({ selection: prevImage });
    }
  };

  render() {
    const { className } = this.props;
    const { content, selection } = this.state;

    const styles = classNames({
      ImageViewer: true,
      className
    });

    return (
      <div className={styles}>
        <button onClick={this.nextImage}>NEXT</button>
        <button onClick={this.prevImage}>PREVIOUS</button>
        <img src={content[selection].url} alt={content[selection].name} />
      </div>
    );
  }
}
