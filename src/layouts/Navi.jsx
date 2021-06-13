import React from "react";
import {
  Button,
  Container,
  Dropdown,
  GridColumn,
  Menu,
} from "semantic-ui-react";
import SignOut from "./SignOut";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          
            <Menu.Menu position='right'>
              <SignOut />
            </Menu.Menu>
          
        </Container>
      </Menu>
    </div>
  );
}
