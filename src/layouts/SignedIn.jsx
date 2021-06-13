import React from "react";
import {Menu } from "semantic-ui-react";
import SignedInForEmployer from "./SignedInForEmployer";
import SignedInForCandidate from "./SignedInForCandidate";


export default function SignedIn(props) {

    console.log(props)

  return (
    <div>
      <Menu inverted>
        <Menu.Item position="right">
          {props.isEmployer?<SignedInForEmployer signOut={props.signOut}/>:<SignedInForCandidate signOut={props.signOut}/>}
        </Menu.Item>
      </Menu>
    </div>
  );
}
