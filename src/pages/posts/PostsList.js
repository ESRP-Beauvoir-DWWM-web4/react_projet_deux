import React, { useEffect, useState } from 'react';
import { endPointsService } from '../../_services/endPoints.service';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

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
                <div className='d-flex flex-wrap justify-content-around'>
                    {posts.map(post => (
                        <Card className='m-1'>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Button 
                                    href={`/posts/show/${post.id}`} variant="primary">Lire l'article
                                </Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        );
    }
    
};

export default PostsList;