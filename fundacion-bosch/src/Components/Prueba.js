/*import React, { Component } from "react";


/*import dummypic from './resources/dummypic.png';

class Prueba extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    fetch(
      'https://api-rest-bosch.herokuapp.com/api/project'
    )
      .then(res => res.json())
      .then(projects => {
        this.setState({ projects: projects.projects }, () =>
          console.log('Products fetched', projects)
        );
      });
  }

  /*constructor(props){
    super(props);
      this.nameProyect = "Nombre del proyecto";
      this.textProyect = "Some quick example text to build on the card title and make up the bulk of the cards content.";  
      this.showMore = "#";
  }*/

/*render() {
  const { projects } = this.state;
  console.log(projects)
    return(
      <div className= "projects">
        {projects.map((item, index) =>{
          return(
            <div class="card" key={index}>
            <img class="card-img-top" src={item.picture} alt="Card" />
            <div class="card-body">
              <h5 class="card-title">{item.nameProject}</h5>
              <p class="card-text">{item.content}</p>
            </div>
          </div>
          )}
        )}
      </div>
    );
}

}

export default Prueba; */