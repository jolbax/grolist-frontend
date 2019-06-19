import React, { Component } from "react";
import {
  Field,
  Control,
  Input,
  Help
} from "react-bulma-components/lib/components/form";
import Button from "react-bulma-components/lib/components/button";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {};
  }

  componentWillMount() {
    this.setState({
      name: "",
      listId: this.props.listId,
      userId: this.props.userId
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.name === "") {
      alert("Provide a description. Empty items are not allowed.");
    } else {
      this.props.addItem(this.state);
      this.setState({ name: "" })
    }
  }

  onChange(e) {
    const value = e.target.value;
    this.setState({
      name: value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Field style={{ display: "flex", justifyItems: "center" }}>
            <Control style={{ flex: 4, marginRight: "10px" }}>
              <Input
                placeholder="Item description"
                type="text"
                onChange={this.onChange}
                value={this.state.name}
              />
              <Help color="info">Max. 20 characters</Help>
            </Control>
            <Control>
              <Button type="primary" submit={true}>
                Add
              </Button>
            </Control>
          </Field>
        </form>
      </div>
    );
  }
}

export default AddItem;
