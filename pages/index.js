import React, { Component } from 'react';
import Posts from '../components/Posts';

class Home extends Component {
    state = {
        posts: []
    };

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(postsResponse => postsResponse.json())
            .then((posts) => {
                this.setState({ posts })
            });
    }

    render () {
        const { posts } = this.state;

        return(
            <div>
                <Posts posts={posts} />
            </div>
        )
    }
}

export default Home;
