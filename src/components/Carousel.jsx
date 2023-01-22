import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
    }
  }
  componentDidMount() {
      setInterval(() => {}, 5000)
  }

  previousImage = () =>{
    if (this.state.imageIndex < 1){
      this.setState({imageIndex: this.props.images.length - 1})
    } else {
      this.setState({imageIndex: this.props.images.length + 1})
    }
  }

  nextImage = () =>{
    if (this.state.imageIndex > this.props.images.length - 2){
      this.setState({imageIndex: 0})
    } else {
      this.setState({imageIndex: this.state.imageIndex + 1})
    }
  }

  onChangeImage = (type) => () =>{
    if (type === 'previous') this.previousImage();
    if (type === 'next') this.nextImage();
  }

  render() {
    const renderImage = this.props.images.map((item, key) => {
        const nameOfClass = cn('carousel-item', {
          'active': key === this.state.imageIndex
        })
        return (
          <div className={nameOfClass}>
            <img alt="slide of carousel"
                 className={"carousel__image"}
                 src={item}/>
          </div>
        )
      }
    )
    return (
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">{renderImage}</div>
        <button className="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev"
         onClick={this.onChangeImage('previous')}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next"
        onClick={this.onChangeImage('next')}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
  }
}


Carousel.propsTypes = {
  images: PropTypes.array.isRequired
}
export default Carousel;
