import React from 'react'
import { Menu, Dropdown } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

function Header_Menu() {
  const history = useHistory();

  const menu = (
    <Menu>
      <Menu.Item onClick={()=>{
        history.push("/introduce");
      }}>Introduce</Menu.Item>

      <Menu.Item onClick={()=>{
        history.push("/projects");
      }}>Projects</Menu.Item>

      <Menu.Item onClick={()=>{
        history.push("/contact");
      }}>Contact</Menu.Item>

      <Menu.Item onClick={()=>{
        window.open("https://blockmonkeys.tistory.com/", '_blank');
      }}>Blog</Menu.Item>

      <Menu.Item onClick={()=>{
        window.open("https://github.com/BlockMonkeys/", '_blank');
      }}>Github</Menu.Item>

      <Menu.Item onClick={()=>{
        window.open("https://www.notion.so/fabeb9396c634418baebb5fec23d1557", '_blank');
      }}>Resume</Menu.Item>

      <Menu.Item onClick={()=>{
        window.open("http://13.125.230.121/", '_blank');
      }}>Ninja Coders</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={menu}>
        <a href="#!" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <MenuOutlined style={{ color: "black", fontSize: "22px", marginTop: "14px" }}/>
        </a>
      </Dropdown>
    </div>
  )
}

export default Header_Menu;