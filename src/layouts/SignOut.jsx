import React from "react";

import { Button , Dropdown, Menu } from "semantic-ui-react";

export default function SignOut(props) {

  console.log(props)
  return (
    <div> 
      <Menu.Menu position='right' >
        <Dropdown item text="İş Arayan" pointing='top left'>
          <Dropdown.Menu >
            <Dropdown.Item>
              <Button onClick={props.changeCandidate} basic color='blue' >Giriş Yap</Button>
            </Dropdown.Item>
            <Dropdown.Item>
              <Button basic color='red'  style={{marginLeft:'0.25em'}}>Kayıt Ol</Button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>


        <Dropdown item text="İş Veren" pointing='top right'>
          <Dropdown.Menu >
            <Dropdown.Item> 
              <Button onClick={props.changeEmployer} basic color='blue'>Giriş Yap </Button>
            </Dropdown.Item>
            <Dropdown.Item>
              <Button basic color='red' style={{marginLeft:'0.25em'}}>Kayıt Ol</Button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </div>
  );
}
