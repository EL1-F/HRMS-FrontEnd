import React from "react";
import { Segment, Form, Menu } from "semantic-ui-react";

export default function Filters() {
  return (
    <div>
      <Menu pointing secondary vertical>
        <Menu.Item>
          <Segment color="red">
          <Segment color="red">Şirketin Sektörü</Segment>
            <Form.Group grouped>
              <Form.Field label="This one" control="input" type="checkbox" />
              <Form.Field label="That one" control="input" type="checkbox" />
            </Form.Group>
          </Segment>
        </Menu.Item> 

        <Menu.Item>
          <Segment color="olive">
            <Segment color="olive">Pozisyon Sevisi</Segment>
            <Form.Group grouped>
              <Form.Field label="This one" control="input" type="checkbox" />
              <Form.Field label="That one" control="input" type="checkbox" />
            </Form.Group>
          </Segment>
        </Menu.Item>

        <Menu.Item>
          <Segment color="green">
          <Segment color="green">Departman</Segment>
            <Form.Group grouped>
              <Form.Field label="This one" control="input" type="checkbox" />
              <Form.Field label="That one" control="input" type="checkbox" />
            </Form.Group>
          </Segment>
        </Menu.Item>

        <Menu.Item>
          <Segment color="yellow">
          <Segment color="yellow">Eğitim Seviyesi</Segment>
            <Form.Group grouped>
              <Form.Field label="This one" control="input" type="checkbox" />
              <Form.Field label="That one" control="input" type="checkbox" />
            </Form.Group>
          </Segment>
        </Menu.Item>
      </Menu>
    </div>
  );
}
