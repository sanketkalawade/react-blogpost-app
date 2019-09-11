import React, { Component } from 'react';
import { fetchUsersAndPosts } from '../actions';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import UserHeader from './UserHeader';

class PostList extends Component {
    componentDidMount(){
        this.props.fetchUsersAndPosts();
    }
    renderList(){
      return this.props.posts.map(post =>{
          return (
              <div key={post.id}>
                  <PostItem  post={post}/>
                  <UserHeader userId={post.userId}/>
              </div>
          )
       }) 
    }
    render(){        
        return(
            <div className="ui relaxed divided list">{this.renderList()}</div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        posts:state.posts
    }
}

export default connect(mapStateToProps,{ fetchUsersAndPosts })(PostList);