import React, { Component } from "react";
import Item from "./Item";
import { withRouter } from "react-router";
import Card from "react-bulma-components/lib/components/card";
import api from "../../helpers/api";
import AddItem from "./AddItem";

class List extends Component {
  toggleItem = (item, updateItem) => {
    (async () => {
      try {
        let resp = await api.updateItem(item, updateItem);
        if (resp.data.status === "ok") {
          console.log("Item successfully toggled");
          this.props.updateState();
        } else {
          console.log("Item toggling failed");
          return;
        }
      } catch (err) {
        console.log(err);
        return;
      }
    })();
  };

  addItem = item => {
    (async () => {
      try {
        let resp = await api.createItem(item);
        if (resp.data.status === "ok") {
          console.log("Item successfully added");
          this.props.updateState();
        } else {
          console.log("Item adding failed");
          return;
        }
      } catch (err) {
        console.log(err);
        return;
      }
    })();
  };

  removeItem = item => {
    (async () => {
      try {
        let resp = await api.deleteItem(item);
        if (resp.data.status === "ok") {
          console.log("Item successfully removed");
          this.props.updateState();
        } else {
          console.log("Item removing failed");
          return;
        }
      } catch (err) {
        console.log(err);
        return;
      }
    })();
  };

  updateItem = (item, newDescription) => {
    (async () => {
      try {
        let resp = await api.updateItem(item, { name: newDescription });
        if (resp.data.status === "ok") {
          console.log("Item successfully updated");
          this.props.updateState();
        } else {
          console.log("Item updating failed");
          return;
        }
      } catch (err) {
        console.log(err);
        return;
      }
    })();
  };

  componentWillMount() {
    this.props.updateState();
  }

  render() {
    const { list } = this.props;
    if (list) {
      return (
        <Card className="list">
          <Card.Header>
            <Card.Header.Title style={{ justifyContent: "center" }}>
              {list.title}
            </Card.Header.Title>
          </Card.Header>
          <Card.Content>
            <AddItem
              addItem={this.addItem}
              listId={list.id}
              userId={list.userId}
            />
            {list.items.map(item => (
              <Item
                key={item.id}
                item={item}
                onToggle={() =>
                  this.toggleItem(item, { purchased: !item.purchased })
                }
                onItemRemove={() => this.removeItem(item)}
                onItemEdit={() => {
                  let newName = prompt(`Change the item name`, item.name);
                  if(!newName) return;
                  this.updateItem(item, newName);
                }}
              />
            ))}
          </Card.Content>
        </Card>
      );
    } else {
      return <p> Loading </p>;
    }
  }
}

export default withRouter(List);
