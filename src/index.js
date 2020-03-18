import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
//import axios from 'axios';
import Hello from './Hello';
import Posts from './Components/Posts';
import Pagination from './Components/Pagination';
import Card from './Components/Card';
import './style.scss';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Boozt',
      posts: [],
      loading: true,
      currentPage: 1,
      postsPerPage: 10
    };
  }
  componentDidMount() {
    fetch('https://dejeneruta.github.io/booztData/product_list.json')
      .then(response => response.json())
      .then(data => this.setState({ posts: data, loading: false }));
  }
  paginate(pageNumber) {
    this.setState({ currentPage: pageNumber });
  }
  render() {
    const { posts, loading, postsPerPage } = this.state;
    return (
      <div className="header">
        <Hello name={this.state.name} />
        <h3>Here is my test assignment solution</h3>
        <Posts posts={posts} loading={this.state.loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={this.paginate}
        />
        <div className="cards-container">
          <Card />
        </div>
      </div>
    );
  }
}
render(<App />, document.getElementById('root'));
