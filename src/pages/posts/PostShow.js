import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { endPointsService } from '../../_services/endPoints.service';
import { Button, Card } from 'react-bootstrap';

const PostShow = () => {

    const [post, setPost] = useState(null)
    const [loaded, setLoaded] = useState(null)
    const [error, setError] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        endPointsService.getOnePost(id)
            .then(res => {
                console.log(res.data)
                setPost(res.data)
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
            <Card className='w-50 m-auto'>
                <Card.Img src="https://picsum.photos/700/300" />
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                        {post.body}
                    </Card.Text>
                    <Button href="/posts/list" variant="primary">Retour à la liste</Button>
                </Card.Body>
            </Card>
        );
    }

};

export default PostShow;