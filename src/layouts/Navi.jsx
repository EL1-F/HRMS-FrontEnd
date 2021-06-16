import React , {useState}from "react";
import { Container, Menu,} from "semantic-ui-react";
import SignOut from "./SignOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router-dom";

export default function Navi(props) {

  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history= useHistory()

  function handleSignOut(params) {
    setIsAuthenticated(false)
    props.isDashboard()
    history.push("/")
  }

  const [isEmployer, setIsEmployer] = useState(false);

  function changeUserCandidate(params) {
    setIsAuthenticated(true)
    setIsEmployer(false)
    props.isDashboard()
  }

  function changeUserEmployer(params) {
    setIsAuthenticated(true)
    setIsEmployer(true)
  }


  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          
            <Menu.Item position='right'> 
              {isAuthenticated?<SignedIn isEmployer={isEmployer} signOut={handleSignOut} 
              isJobAddDashboard={props.isJobAddDashboard}/>
              :<SignOut changeCandidate={changeUserCandidate} 
              changeEmployer={changeUserEmployer} /> }
              
            </Menu.Item>
          
        </Container>
      </Menu>
    </div>
  );
}
