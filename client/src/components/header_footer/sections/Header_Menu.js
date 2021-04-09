import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useHistory } from "react-router-dom";

export default function MenuPopupState(props) {
  const history = useHistory();

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
            <MenuIcon />
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={()=> {
              history.push("/introduce")
              popupState.close()
              }}>Introduce</MenuItem>

            <MenuItem onClick={()=> {
              history.push("/projects")
              popupState.close()
              }}>Projects</MenuItem>

            <MenuItem onClick={()=> {
              history.push("/contact")
              popupState.close()
              }}>Contact</MenuItem>   

            <MenuItem onClick={()=> {
              window.open("https://blockmonkeys.tistory.com/", '_blank');
              popupState.close()
              }}>Blog</MenuItem>

            <MenuItem onClick={()=> {
              window.open("https://github.com/BlockMonkeys/", '_blank');
              popupState.close()
              }}>Github</MenuItem>

            <MenuItem onClick={()=> {
              window.alert("준비중입니다 😅")
              popupState.close()
              }}>Resume</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}