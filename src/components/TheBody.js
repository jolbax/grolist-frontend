import React, { Component } from "react";
import { Route } from "react-router-dom";
import ListedLists from "./lists/ListedLists";
import Profile from "./users/Profile";
import List from "./lists/List";
import Landing from "./others/Landing";
import api from "../helpers/api";
import { Loader } from "react-bulma-components/full";
import Signup from "./users/Signup";
import Login from "./users/Login";

class TheBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    (async () => {
      try {
        let resp = await api.fetchLists();
        let lists = await resp.data.lists;
        console.log("List fetching successfully");
        this.setState({ lists });
      } catch (err) {
        console.log(err);
      }
    })();
  }

  componentWillMount() {
    this.updateState();
  }
  render() {
    return (
      <div className="main">
        <Route exact path="/" component={Landing} />
        <Route
          exact
          path="/lists"
          render={() => (
            <ListedLists
              updateState={this.updateState}
              lists={this.state.lists}
            />
          )}
        />
        <Route
          path="/lists/:listId"
          render={props =>
            this.state.lists ? (
              <List
                updateState={this.updateState}
                list={this.state.lists.find(
                  list => list.id === Number(props.match.params.listId)
                )}
              />
            ) : (
              <Loader />
            )
          }
        />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </div>
    );
  }
}

export default TheBody;
