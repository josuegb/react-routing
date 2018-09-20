import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import "./Blog.css";

import Posts from "../Blog/Posts/Posts";
import NewPost from "../Blog/NewPost/NewPost";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  exact
                  to="/"
                  // activeStyle={{
                  //   color: "red",
                  //   textDecoration: "underline"
                  // }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/new-post"> New Post </NavLink>
              </li>
              {/* <li><Link to={{
                              pathname: '/new-post',
                              hash: '#submit',
                              search: '?quick-submit=true'
                            }}>New Post</Link></li> */}
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1> }/>
                      <Route path="/" render={() => <h1>Home 2</h1> } /> */}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" exact component={NewPost} />
      </div>
    );
  }
}

export default Blog;
