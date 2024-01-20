import React from "react";
import {
  SlidebarContainer,
  Icon,
  CloseIcon,
  SlidebarMenu,
  SlidebarLink,
  SlidebarBtnWrap,
  SlidebarRoute,
} from "./SlidebarElements";

const Slidebar = ({ isOpen, toggle }) => {
  return (
    <SlidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SlidebarMenu>
        <SlidebarLink to="/">Pizzas</SlidebarLink>
        <SlidebarLink to="/">Dessarts</SlidebarLink>
        <SlidebarLink to="/">Full Menu</SlidebarLink>
      </SlidebarMenu>
      <SlidebarBtnWrap>
        <SlidebarRoute to="/">Order Now</SlidebarRoute>
      </SlidebarBtnWrap>
    </SlidebarContainer>
  );
};

export default Slidebar;
