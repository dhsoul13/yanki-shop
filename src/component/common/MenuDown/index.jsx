import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Menu,
  MenuItem,
  Slider,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useReducer } from 'react';
import Arrow from '../../../assets/svg/arrow';
import { lang, money } from '../../../helpers/content';

const MenuDown = ({ type, classList, location, addBg }) => {
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
          color: (location === '/') & !addBg ? '#fff' : '#252525',
          '&:hover': {
            color: (location === '/') & !addBg ? '#252525' : '#e0bea2',
            backgroundColor: 'inherit',
          },
          '&:active': {
            color: (location === '/') & !addBg ? '#252525' : '#cca88a',
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

export const MenuDownTwo = ({
  textMenu,
  type,
  content,
  onClick = () => {},
}) => {
  /// Для выпадающего меню
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  /// Для закрытия и для логике
  const handleClose = (el) => {
    setAnchorEl(null);
  };

  ///для сортировки

  const handlerSortCkick = (el) => {
    onClick(el);
    handleClose();
  };

  //// для price
  const minDistance = 10000;

  const min = type === 'price' ? content[0].text : 0;
  const max = type === 'price' ? content[1].text : 0;

  const [value1, setValue1] = React.useState([min, max]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }

    onClick(value1);
  };

  //// Для размера

  const [size, setSize] = useState([]);

  const handlerClickCheckbox = (ev) => {
    const newArray = [...size, ev.target.value].reduce((acc, elem) => {
      if (acc.find((el) => el === elem)) {
        const mas = acc.filter((el) => el !== ev.target.value);
        return [...mas];
      } else {
        acc.push(elem);
        return [...acc];
      }
    }, []);
    onClick(newArray);
    setSize(newArray);
  };

  if (type === 'price') {
    return (
      <div className="menu-down2">
        <Button
          disableElevation
          disableRipple
          sx={{
            textTransform: 'capitalize',
          }}
          onClick={handleClick}
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <div className="menu-down2__elem">
            <h2>{textMenu}</h2>
            <Arrow />
          </div>
        </Button>

        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem>
            <div>
              <div>
                От<span>{value1[0]}</span>
              </div>
              <div>
                До<span>{value1[1]}</span>
              </div>
            </div>
          </MenuItem>
          <MenuItem
            disableRipple
            sx={{
              width: '300px',
              height: '100px',
            }}
          >
            <Slider
              value={value1}
              onChange={handleChange1}
              min={0}
              max={40000}
            />
          </MenuItem>
        </Menu>
      </div>
    );
  }

  if (type === 'minmax') {
    return (
      <div className="menu-down2">
        <Button
          disableElevation
          disableRipple
          sx={{
            textTransform: 'capitalize',
          }}
          onClick={handleClick}
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <div className="menu-down2__elem">
            <h2>{textMenu}</h2>
            <Arrow />
          </div>
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {content.map((el, key) => (
            <MenuItem
              key={el.id}
              onClick={() => {
                handlerSortCkick(el);
              }}
            >
              {el.text}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }

  if (type === 'size') {
    return (
      <div className="menu-down2">
        <Button
          disableElevation
          disableRipple
          sx={{
            textTransform: 'capitalize',
          }}
          onClick={handleClick}
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <div className="menu-down2__elem">
            <h2>{textMenu}</h2>
            <Arrow />
          </div>
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem>
            <FormGroup>
              {content.map((el) => (
                <FormControlLabel
                  key={el.id}
                  control={
                    <Checkbox
                      onChange={handlerClickCheckbox}
                      value={el.type}
                      checked={Boolean(size.find((elem) => elem === el.type))}
                    />
                  }
                  label={el.text}
                />
              ))}
            </FormGroup>
          </MenuItem>
        </Menu>
      </div>
    );
  }

  return <></>;
};
