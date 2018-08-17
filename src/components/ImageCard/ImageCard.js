import React from "react";
import "./ImageCard.css";
import images from "../../images.json"

class ImageCard extends React.Component
{
  state = {
    images,
    score: 0,
    keys: [],
  }

  getImagesRand = () => {
    if (this.state.score === 11) {
      alert ("You win! Click OK to play again.");
      window.location.reload()
    }

    else {
      for (let i = images.length-1; i>0; i--) {
        const j = Math.floor(Math.random()* (i+1));
        [images[i], images[j]] = [images[j], images[i]];
      }
      return images
    }
  }
  
  clickHandler = event => {
    if (this.state.keys.includes(event.target.id)) {
      alert("You lose :( Click OK to try again.")
      window.location.reload()
    }
    
    else {
      console.log(event.target.id);
      this.setState({
        score: this.state.score+1,
        keys: [...this.state.keys, event.target.id]
      })
      this.getImagesRand();
    }
  }


  render () {
    return (
      <div>
              <h2 id="scoreCard">Score: {this.state.score}</h2>
              <div class="flex-container">
                {this.state.images.map(image => (
              <div className="card" >
                <div className="img-container">
                <img src={image.image} name={image.name} id={image.id} 
                onClick={this.clickHandler}
                alt={image.name}
                key={image._id}/>
                </div>
                </div>
            ))} 
            </div>     
      </div>
    )
  }
}

export default ImageCard;
