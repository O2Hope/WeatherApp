import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {fetchPosts} from '../../actions/postActions';

class Posts extends Component {


    componentDidMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.newItem) {
            this.props.posts.unshift(nextProps.newItem)
        }
    }

    renderPosts(posts){
        return(posts.map( post =>(
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ) ))
    }

  render() {
      const posts = this.props.posts;
    return (
      <div>
        <h1>Posts</h1>
        {posts && this.renderPosts(posts)}
      </div>
    )
  }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequiered,
    newItem: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newItem: state.posts.item
})

export default connect(mapStateToProps,{fetchPosts})(Posts);
