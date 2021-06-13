import React from "react";

import { Button , Dropdown, Menu } from "semantic-ui-react";

export default function SignOut() {
  return (
    <div>
      <Menu.Menu position='right'>
        <Dropdown item text="İş Arayan">
          <Dropdown.Menu>
            <Dropdown.Item>
              <Button basic color='blue'>Giriş Yap</Button>
            </Dropdown.Item>
            <Dropdown.Item>
              <Button basic color='red' >Kayıt Ol</Button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item text="İş Veren">
          <Dropdown.Menu>
            <Dropdown.Item> 
              <Button basic color='blue' >Giriş Yap</Button>
            </Dropdown.Item>
            <Dropdown.Item>
              <Button basic color='red' >Kayıt Ol</Button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </div>
  );
}
