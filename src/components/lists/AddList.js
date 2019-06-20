import React, { Component } from "react";
import {
  Field,
  Control,
  Input,
  Help
} from "react-bulma-components/lib/components/form";
import Button from "react-bulma-components/lib/components/button";

class AddList extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {};
  }

  componentWillMount() {
    this.setState({
      title: ""
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.title === "") {
      alert("Provide a list title.");
    } else {
      this.props.addList(this.state);
      this.setState({ title: "" });
    }
  }

  onChange(e) {
    const value = e.target.value;
    this.setState({
      title: value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Field style={{ display: "flex", justifyItems: "center" }}>
            <Control style={{ flex: 4, marginRight: "10px" }}>
              <Input
                placeholder="List title"
                type="text"
                onChange={this.onChange}
                value={this.state.title}
              />
              <Help color="info">Max. 20 characters</Help>
            </Control>
            <Control>
              <Button type="primary" submit={true}>
                Create List
              </Button>
            </Control>
          </Field>
        </form>
      </div>
    );
  }
}

export default AddList;
