import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedInForCandidate(props) {
  console.log(props)
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
        />
        <Dropdown pointing="top right" text="Elif">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgiler" icon="info" />
            <Dropdown.Item onClick={props.signOut} text="Çıkış yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
