import React from "react";
import ReactPlayer from 'react-player';
import Swipeable from 'react-swipeable';
import fetchById from "../../Api/FetchById";
import "./OverlayPlayer.css";
import "./OverlayPlayerVideo.css";
import "./OverlayPlayerPhoto.css";

export default class extends React.Component {
  _currentId = null;

  constructor() {
    super();

    this.state = {
      work: null,
      prevId: null,
      currentImage: 0,
      numImages: 0
    };
  }

  _loadAsyncData = async id => {
    if (id !== this._currentId) {
      this._currentId = id;
      const work = await fetchById(id);
      this.setState({
        numImages: work.data.images ? work.data.images.length : 0,
        currentImage: 0,
        work: {...work.data, type: work.type}
      });
    }
  };

  slideShowBack = () => {
    const {currentImage, numImages} = this.state;

    let newImage;

    if (currentImage === 0) {
      newImage = numImages - 1;
    }
    else {
      newImage = currentImage - 1;
    }
    this.setState({currentImage: newImage});
  };

  slideShowForward = () => {
    const {currentImage, numImages} = this.state;

    let newImage;

    if (currentImage === numImages - 1) {
      newImage = 0;
    }
    else {
      newImage = currentImage + 1;
    }
    this.setState({currentImage: newImage});
  };

  handleKeyDown = event => {
    const {keyCode} = event;
    if (keyCode === 39) {
      this.slideShowForward();
    }
    if (keyCode === 37) {
      this.slideShowBack();
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

  async componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      if (this.props.isOpen) {
        window.addEventListener("keydown", this.handleKeyDown, true);
      }
      else {
        window.removeEventListener("keydown", this.handleKeyDown, true);
      }
    }
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
    const {work, numImages, currentImage} = this.state;
    const singleImage = numImages < 2;

    if (work) {
      if (work.type === "video") {
        const {duration, embed_link, metadata, title} = work;
        playerContent = (
          <div onClick={e => e.stopPropagation()} className="player-content">
            <div className="player-top-section">
              <div className="player-text">
                <h4 className="player-title">{title[0].text}</h4>
                <p className="player-body-text"><span className="player-emphasis-text">{duration}</span> {metadata}</p>
              </div>
              <svg className="close-icon" onClick={this.props.toggleOverlay} width='28' height='28' xmlns='http://www.w3.org/2000/svg'>
                <path d='M27.968 3.064L16.832 14.2l11.136 11.136-2.832 2.832L14 17.032 2.864 28.168.032 25.336 11.168 14.2.032 3.064 2.864.232 14 11.368 25.136.232z'
                      fill='#646464' fillRule='evenodd' />
              </svg>
            </div>
            {isOpen && <ReactPlayer width={window.innerWidth < 640 ? window.innerWidth - 50 : 640} url={embed_link.embed_url} playing={isOpen && typeof window.orientation === "undefined"} />}
          </div>
        );
      }
      else {
        const {dimensions, images, medium, title} = work;
        playerContent = (
          <div onClick={e => e.stopPropagation()} className="player-content photo-player-content">
            <div className="player-top-section">
              <div className="player-text">
                <h4 className="player-title">{title[0].text}</h4>
                {images[currentImage].title1.length !== 0 && <h6 className="player-subtitle">{images[currentImage].title1[0].text}</h6>}
                <p className="player-body-text">{medium} <span className="player-emphasis-text">{dimensions}</span></p>
              </div>
              <svg className="close-icon" onClick={this.props.toggleOverlay} width='28' height='28' xmlns='http://www.w3.org/2000/svg'>
                <path d='M27.968 3.064L16.832 14.2l11.136 11.136-2.832 2.832L14 17.032 2.864 28.168.032 25.336 11.168 14.2.032 3.064 2.864.232 14 11.368 25.136.232z'
                      fill='#646464' fillRule='evenodd' />
              </svg>
            </div>
            <Swipeable onSwipedLeft={this.slideShowBack} onSwipedRight={this.slideShowForward}>
              <div className="player-photo-section" style={{justifyContent: singleImage ? "center" : "space-between"}}>
                {
                  !singleImage &&
                  <svg onClick={this.slideShowBack} className="arrow-icon" viewBox='0 0 40 73' xmlns='http://www.w3.org/2000/svg'>
                    <path d='m311.88 567.5c0.32813 0 0.63281 0.058593 0.91406 0.17578 0.28125 0.11719 0.53906 0.29297 0.77344 0.52734 0.46875 0.46875 0.70312 1.043 0.70312 1.7227s-0.23437 1.2539-0.70312 1.7227l-32.062 32.062 31.641 31.641c0.46875 0.46875 0.70312 1.0312 0.70312 1.6875 0 0.65625-0.23437 1.2187-0.70312 1.6875-0.46875 0.46875-1.043 0.70313-1.7227 0.70313s-1.2539-0.23437-1.7227-0.70313l-33.328-33.328c-0.46875-0.46875-0.70313-1.0312-0.70313-1.6875 0-0.65625 0.23437-1.2187 0.70313-1.6875l33.82-33.82c0.23438-0.23438 0.5039-0.41016 0.80859-0.52734s0.59766-0.17578 0.87891-0.17578z'
                          transform='translate(-275 -567)' fill='#646464' fillRule='evenodd' />
                  </svg>
                }
                <div className="player-photo-container">
                  <img className="player-photo" src={images[currentImage].photo.url}/>
                  {
                    !singleImage &&
                    <p className="player-photo-number">{currentImage + 1} of {numImages}</p>
                  }
                </div>
                {
                  !singleImage &&
                  <svg onClick={this.slideShowForward} className="arrow-icon" viewBox='0 0 40 73' xmlns='http://www.w3.org/2000/svg'>
                    <path d='m1129.1 639.43c-0.32813 0-0.64453-0.058594-0.94922-0.17578s-0.57422-0.29297-0.80859-0.52734c-0.46875-0.46875-0.70313-1.0312-0.70313-1.6875 0-0.65625 0.23438-1.2187 0.70313-1.6875l32.133-32.133-31.641-31.57c-0.46876-0.46875-0.70313-1.043-0.70313-1.7227s0.23437-1.2539 0.70313-1.7227c0.46875-0.46875 1.043-0.70312 1.7226-0.70312s1.2539 0.23437 1.7227 0.70312l33.258 33.328c0.46875 0.46875 0.70312 1.0312 0.70312 1.6875s-0.23437 1.2187-0.70312 1.6875l-33.75 33.82c-0.23438 0.23438-0.5039 0.41016-0.80859 0.52734s-0.59766 0.17578-0.87891 0.17578z'
                          transform='translate(-1126 -567)' fill='#646464' fillRule='evenodd' />
                  </svg>
                }
              </div>
            </Swipeable>
          </div>
        );

      }
    }

    return (
      <div onClick={this.props.toggleOverlay} className={isOpen ? "open" : "closed"} id="overlay-player">
        {playerContent}
      </div>
    );
  }
}
