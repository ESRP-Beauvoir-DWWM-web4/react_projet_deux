import React, { useEffect, useState } from 'react';
import { endPointsService } from '../../_services/endPoints.service';
import { Link } from 'react-router-dom';

const PostsList = () => {

    const [posts, setPosts] = useState(null)
    const [loaded, setLoaded] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=> {
        endPointsService.getAllPosts()
            .then(res => {
                console.log(res.data)
                setPosts(res.data)
                setLoaded(true)
            })
            .catch(error => {
                setError(error)
                setLoaded(true)
            })
    }, [])

    if ( !loaded ) {
        return(
            <div>
                <h2>Chargement...</h2>
            </div>
        )
    } else if ( error ) {
        return(
            <div>
                <h2>Vous avez une erreur de type : {error.response.status}</h2>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Liste des articles</h1>
                {posts.map(post => (
                <Link to={`/posts/show/${post.id}`}>
                <div className="card">
                    <p>{post.title}</p>
                </div>
                </Link>
                ))}
            </div>
        );
    }
    
};

export default PostsList;