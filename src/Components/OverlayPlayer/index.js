import React from "react";
import ReactPlayer from 'react-player'
import fetchById from "../../Api/FetchById";
import "./OverlayPlayer.css";

export default class extends React.Component {
  _currentId = null;

  constructor() {
    super();

    this.state = {
      work: null,
      prevId: null
    };
  }

  _loadAsyncData = async id => {
    if (id !== this._currentId) {
      this._currentId = id;
      const work = await fetchById(id);
      this.setState({work: {...work.data, type: work.type}});
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    // Store prevId in state so we can compare when props change.
    // Clear out previously-loaded data (so we don't render stale stuff).
    if (nextProps.selectedWorkId !== prevState.prevId) {
      return {
        work: null,
        prevId: nextProps.selectedWorkId
      };
    }

    // No state update necessary
    return null;
  }

  async componentDidMount() {
    const {selectedWorkId} = this.props;
    if (selectedWorkId) {
      await this._loadAsyncData(selectedWorkId);
    }
  }

  async componentDidUpdate() {
    if (this.state.work === null && this.props.selectedWorkId) {
      await this._loadAsyncData(this.props.selectedWorkId);
    }
  }

  componentWillUnmount() {
    // Prevent potential setState calls after unmount,
    this._currentId = null;
  }

  render() {
    const {isOpen} = this.props;

    let playerContent;
    const {work} = this.state;

    if (work) {
      if (work.type === "video") {
        const {duration, embed_link, metadata, title} = work;
        playerContent = (
          <div onClick={e => e.stopPropagation()} className="player-content">
            <div className="video-player-top-section">
              <div className="video-player-text">
                <h4 className="video-player-title">{title[0].text}</h4>
                <p className="video-player-metadata"><span className="video-player-duration">{duration}</span> {metadata}</p>
              </div>
              <svg className="close-icon" onClick={this.props.toggleOverlay} width='28' height='28' xmlns='http://www.w3.org/2000/svg'>
                <path d='M27.968 3.064L16.832 14.2l11.136 11.136-2.832 2.832L14 17.032 2.864 28.168.032 25.336 11.168 14.2.032 3.064 2.864.232 14 11.368 25.136.232z'
                      fill='#DADADA' fillRule='evenodd' />
              </svg>
            </div>
            <ReactPlayer url={embed_link.embed_url} playing={isOpen} />
          </div>
        );
      }
      else {

      }
    }

    return (
      <div onClick={this.props.toggleOverlay} className={isOpen ? "open" : "closed"} id="overlay-player">
        {playerContent}
      </div>
    );
  }
}
