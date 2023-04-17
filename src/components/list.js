import React, { useState } from "react";
import Icon from "../assets/trash.svg";
import DoneIcon from "../assets/on.png";
import UndoneIcon from "../assets/off.png";
import Card from "./Card";
import ListItem from './ListItem'



function List(props) {
  return (
    <ul>
      {props.items.map((item) => (<ListItem key={item.id} item={item} onDone={props.onDone}onItemDeleted={props.onItemDeleted}></ListItem>

      ))}
    </ul>
  );
}

export default List;
