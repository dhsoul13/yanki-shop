import { Button, Menu, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Arrow from '../../../assets/svg/arrow';
import { lang, money } from '../../../helpers/content';

const MenuDown = ({ type, classList, location }) => {
  ///Тип выпадающего меню
  const content = type === 'lang' ? lang : money;

  /// Выбор валюты/языка

  const [show, setShow] = useState(null);

  useEffect(() => {
    if (localStorage.getItem(type)) {
      setShow(localStorage.getItem(type));
    } else {
      setShow(content[0].text);
    }
  }, [type]);

  /// Для выпадающего меню
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  /// Для закрытия и для логике
  const handleClose = (el) => {
    if (el.text) {
      localStorage.setItem(type, el.text);
      setShow(el.text);
    }
    setAnchorEl(null);
  };

  return (
    <div className={`${classList}__menu-down menu-down`}>
      <Button
        disableElevation
        disableRipple
        className={`menu-down__button`}
        onClick={handleClick}
        sx={{
          border: 'none',
          fontFamily: 'Raleway',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '1.125rem',
          lineHeight: '21px',
          textTransform: 'uppercase',
          color: location === '/' ? '#fff' : '#252525',
          '&:hover': {
            color: location === '/' ? '#252525' : '#e0bea2',
            backgroundColor: 'inherit',
          },
          '&:active': {
            color: location === '/' ? '#252525' : '#cca88a',
            backgroundColor: 'inherit',
          },
        }}
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <div className={`${classList}__menu-down-text menu-down__text`}>
          <span>{show}</span>
          <span className={`${anchorEl ? 'rotate' : ''}`}>
            <Arrow />
          </span>
        </div>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {content.map((el) => (
          <MenuItem
            key={el.id}
            onClick={() => {
              handleClose(el);
            }}
          >
            {el.text}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MenuDown;
