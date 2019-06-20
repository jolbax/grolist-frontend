import { Card, Media, Heading, Loader } from "react-bulma-components/full";
import { faTrashAlt, faPenAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, withRouter } from "react-router-dom";
import AddList from "./AddList";
import api from "../../helpers/api";
import Button from "react-bulma-components/lib/components/button";
import Icon from "react-bulma-components/lib/components/icon";
import React, { Component } from "react";

class ListedLists extends Component {
  constructor(props) {
    super(props);
    this.addList = this.addList.bind(this);
  }

  addList = list => {
    (async () => {
      try {
        let resp = await api.createList(list);
        if (resp.data.status === "ok") {
          console.log("List successfully added");
          this.props.updateState();
        } else {
          console.log("List adding failed");
          return;
        }
      } catch (err) {
        console.log(err);
        return;
      }
    })();
  };

  removeList = id => {
    (async () => {
      try {
        let resp = await api.deleteList(id);
        if (resp.data.status === "ok") {
          console.log("List successfully removed");
          this.props.updateState();
        } else {
          console.log("List removing failed");
          return;
        }
      } catch (err) {
        console.log(err);
        return;
      }
    })();
  };

  updateList = (id, newTitle) => {
    (async () => {
      try {
        let resp = await api.updateList(id, { title: newTitle });
        if (resp.data.status === "ok") {
          console.log("List successfully updated");
          this.props.updateState();
        } else {
          console.log("List updating failed");
          return;
        }
      } catch (err) {
        console.log(err);
        return;
      }
    })();
  };

  render() {
    let { lists } = this.props;
    return (
      <div className="listed-lists">
        <Heading size={2}>Your lists</Heading>
        <AddList addList={this.addList} />
        {lists ? (
          lists.map(list => (
            <ListCard
              key={list.id}
              title={list.title}
              username={`@${list.User.username}`}
              id={list.id}
              onListEdit={() => {
                let newTitle = prompt(`Change the list title`, list.title);
                if (!newTitle) return;
                this.updateList(list.id, newTitle);
              }}
              onListRemove={() => this.removeList(list.id)}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

function ListCard(props) {
  const { id, title, username } = props;
  return (
    <Card>
      <Card.Content>
        <Media>
          <Media.Item>
            <Link key={id} to={`/lists/${id}`}>
              <Heading size={6}>{title}</Heading>
              <Heading subtitle size={6}>
                {username}
              </Heading>
            </Link>
          </Media.Item>
          <Media.Item position="right">
            <Button
              color="link"
              onClick={props.onListEdit}
              size="small"
              style={{ margin: "2px" }}
            >
              <Icon>
                <FontAwesomeIcon icon={faPenAlt} />
              </Icon>
            </Button>
            <Button
              color="danger"
              onClick={props.onListRemove}
              size="small"
              style={{ margin: "2px" }}
            >
              <Icon>
                <FontAwesomeIcon icon={faTrashAlt} />
              </Icon>
            </Button>
          </Media.Item>
        </Media>
      </Card.Content>
    </Card>
  );
}

export default withRouter(ListedLists);
