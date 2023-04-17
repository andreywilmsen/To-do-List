import React, { useState } from "react";
import Icon from "../assets/trash.svg";
import DoneIcon from "../assets/on.png";
import UndoneIcon from "../assets/off.png";
import Card from "./Card";

function DoneImg(props) {
  if (props.done) {
    return <img alt="done" src={DoneIcon}></img>;
  } else {
    return <img alt="undone" src={UndoneIcon}></img>;
  }
}

function ListItem(props) {
  return (
        <li>
          <Card className={props.item.done ? "done item" : "item"}>
            {props.item.text}
            <div>
              <button
                onClick={() => {
                  props.onDone(props.item);
                }}
              >
                <DoneImg done={props.item.done}></DoneImg>
              </button>
              <button
                onClick={() => {
                  props.onItemDeleted(props.item);
                }}
              >
                <img src={Icon}></img>
              </button>
            </div>
          </Card>
        </li>
  );
}

export default ListItem;
