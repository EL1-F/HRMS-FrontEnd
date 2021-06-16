import "./App.css";
import Dashboard from "./layouts/Dashboard";
import AddJobDashboard from "./layouts/AddJobDashboard";
import "semantic-ui-css/semantic.min.css";
import Navi from "./layouts/Navi";
import { Container } from "semantic-ui-react";
import React , {useState}from "react";

function App() {

  const [dashboard, setdashboard] = useState(true)

  function isDashboard(params) {
    
    setdashboard(true)
  }

  function isJobAddDashboard(params) {
    setdashboard(false)
  }



  return (
    <div className="App">
      <Navi isDashboard={isDashboard}  
      isJobAddDashboard={isJobAddDashboard}/>
      <Container className="main">
        {dashboard?<Dashboard />:<AddJobDashboard />}
        
      </Container>
    </div>
  ); 
}

export default App;
