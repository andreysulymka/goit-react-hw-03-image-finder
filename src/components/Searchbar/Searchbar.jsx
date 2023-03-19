import React from "react";
import { Component } from "react";
import { toast } from "react-toastify";

export default class Searchbar extends Component {
  state = {
   value: '',
    };
    
    handleChange = event => {
        this.setState({value: event.currentTarget.value.toLowerCase()})
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.value.trim() === '') {
            toast.error('Введіть пошуковий запит');
            return;
        }
        this.props.onSearch(this.state.value)
        this.setState({value: ''})
    }
  
  render() {
      return (
        <header>
  <form onSubmit={this.handleSubmit}>
    <button type="submit">
      <span>Search</span>
    </button>

    <input
      type="text"
    //   autocomplete="off"
    //   autofocus
      placeholder="Search images and photos"
                      onChange={this.handleChange}
                      value={this.state.value}
    />
  </form>
</header>
    )
  }
}

