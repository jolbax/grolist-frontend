import React from "react";
import Icon from "react-bulma-components/lib/components/icon";
import Button from "react-bulma-components/lib/components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenAlt, faBackspace } from "@fortawesome/free-solid-svg-icons";

function Item(props) {
  const { item, onToggle } = props;

  return (
    <div className="list-item" style={{ display: "flex" }}>
      <input onChange={onToggle} type="checkbox" checked={item.purchased} />
      <p
        style={{
          textDecoration: item.purchased ? "line-through" : "none",
          flexGrow: 3
        }}
      >
        {item.name}
      </p>
      <EditButton onItemEdit={props.onItemEdit} />
      <RemoveButton onItemRemove={props.onItemRemove} />
    </div>
  );
}

function RemoveButton(props) {
  return (
    <Button color="danger" onClick={props.onItemRemove} size="small" style={{ margin: "2px" }}>
      <Icon>
        <FontAwesomeIcon icon={faBackspace} />
      </Icon>
    </Button>
  );
}

function EditButton(props) {
  return (
    <Button color="link" onClick={props.onItemEdit} size="small" style={{ margin: "2px" }}>
      <Icon>
        <FontAwesomeIcon icon={faPenAlt} />
      </Icon>
    </Button>
  );
}

export default Item;
