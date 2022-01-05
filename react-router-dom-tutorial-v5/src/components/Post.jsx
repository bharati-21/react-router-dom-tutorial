import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

function Post({match}) {
    console.log(useParams());
    console.log(useLocation());
    const query = new URLSearchParams(useLocation().search);
    // const id = match.params.id;
    const id = useParams().id;
    return (
        <div>
            <h2>
                Id is = {id}
            </h2>
            <h2>{query.get('name')}</h2>
            <h2>{query.get('age')}</h2>
        </div>
    )
}

export default Post
