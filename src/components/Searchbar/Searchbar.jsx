import React from "react";
import { Component } from "react";
import Notiflix from 'notiflix';
import {Search, SearchBTN, SearchBTNLabel, SearchForm, SearchInput } from "./Searchbar.styled";

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
            Notiflix.Notify.failure('Введіть пошуковий запит');;
            return;
        }
        this.props.onSearch(this.state.value)
        this.setState({value: ''})
    }
  
  render() {
      return (
        <Search>
  <SearchForm onSubmit={this.handleSubmit}>
    <SearchBTN type="submit">
      <SearchBTNLabel>Search</SearchBTNLabel>
    </SearchBTN>

    <SearchInput
      type="text"
    //   autocomplete="off"
    //   autofocus
      placeholder="Search images and photos"
                      onChange={this.handleChange}
                      value={this.state.value}
    />
  </SearchForm>
</Search>
    )
  }
}

