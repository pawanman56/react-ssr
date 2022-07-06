import React, { Component } from 'react';
import { withRouter } from 'next/router';

class Home extends Component {
    componentDidMount () {
        const { router } = this.props;
        router.prefetch('/about');
    }

    render () {
        const { router } = this.props;

        return(
            <div>
                Visit the {' '}
                <span onClick={() => router.push('/about')}>
                    /about
                </span>
                {' '} page
            </div>
        )
    }
}

export default withRouter(Home);
