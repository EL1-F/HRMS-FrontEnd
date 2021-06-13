import React , {useState}from "react";
import { Container, Menu,} from "semantic-ui-react";
import SignOut from "./SignOut";
import SignedIn from "./SignedIn";

export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(true)

  function handleSignOut(params) {
    setIsAuthenticated(false)
  }

  const [isEmployer, setIsEmployer] = useState(true);

  function changeUserCandidate(params) {
    setIsAuthenticated(true)
    setIsEmployer(false)
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
              {isAuthenticated?<SignedIn isEmployer={isEmployer} signOut={handleSignOut}/>
              :<SignOut changeCandidate={changeUserCandidate} changeEmployer={changeUserEmployer} /> }
              
            </Menu.Item>
          
        </Container>
      </Menu>
    </div>
  );
}
