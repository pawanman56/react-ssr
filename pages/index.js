import React, { Component } from 'react';
import Posts from '../components/Posts';

class Home extends Component {
    static getInitialProps () {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(postsResponse => postsResponse.json())
            .then((posts) => {
                return { posts }
            });
    }

    render () {
        const { posts } = this.props;

        return(
            <div>
                <Posts posts={posts} />
            </div>
        )
    }
}

export default Home;
