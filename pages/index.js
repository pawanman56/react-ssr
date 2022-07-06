import React from 'react';
import Link from 'next/link';

function Home() {
    return(
        <div>
            Visit the {' '}
            <Link href='/about' prefetch>
                <a>/about</a>
            </Link>
            {' '} page
        </div>
    )
}

export default Home;
