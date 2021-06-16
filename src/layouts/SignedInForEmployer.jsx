import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedInForEmployer(props) {
  console.log(props)
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://pazarlamasyon.com/wp-content/uploads/2013/08/logo.jpg"
        />
        <Dropdown pointing="top right">
          <Dropdown.Menu>
            <Dropdown.Item text="İlanlar" icon="list" />
            <Dropdown.Item onClick={props.isJobAddDashboard} text="İlan ver" icon="add" />
            <Dropdown.Item text="Bilgiler" icon="info" />
            <Dropdown.Item onClick={props.signOut} text="Çıkış yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
