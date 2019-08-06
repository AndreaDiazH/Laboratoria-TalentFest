import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar";
import Video from "./Components/Video";
import Who from "./Components/Who";
import LastProyects from "./Components/LastProyects";
import HowHelp from "./Components/HowHelp";
import ContactUs from "./Components/ContactUs";
import FooterApp from "./Components/FooterApp";
/*import Prueba from "./Components/Prueba";*/
import SeeMore from "./Components/SeeMore";


class App extends Component {
  render() {
    return (
    <React.Fragment>

     
     <LastProyects />
     <HowHelp />
     <ContactUs /> 
     <FooterApp />
     <SeeMore />
      
    </React.Fragment>
    )
  }
}

 /* <NavBar />
     <Video />
     <Who />
 <Prueba />*/
export default App;
