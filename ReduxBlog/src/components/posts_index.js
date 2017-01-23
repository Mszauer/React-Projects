import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

//this is a container
class PostsIndex extends Component{
  componentWillMount(){
    this.props.fetchPosts(); //dispatch action before rendering to DOM
  }

  renderPosts(){
    return this.props.posts.map((post) => {
      return(
        <li className='list-group-item' key={post.id}>
          <Link to={'posts/'+post.id}>
            <span className='pull-xs-right'>{post.categories}</span>
            <strong> {post.title}</strong>
          </Link>
        </li>
      )
    });
  }

  render(){
    return(
      <div>
        <h3> Posts </h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
        <div className='text-xs-right'>
          <Link to='/posts/new' className='btn btn-primary'>
          Add a new post
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{ posts:state.posts.all };
}

//shortcut for mapDispatchToProps and fetchPosts : fetchPosts
export default connect(mapStateToProps,{ fetchPosts })(PostsIndex);
