import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Posts from '../components/Posts';

class Home extends Component {
    static async getInitialProps () {
        const postsReponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await  postsReponse.json();

        return { posts }
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
