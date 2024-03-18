import React, { useEffect, useState } from 'react';
import { endPointsService } from '../../_services/endPoints.service';

const UsersList = () => {

    const [users, setUsers] = useState(null)
    const [loaded, setLoaded] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        endPointsService.getAllUsers()
            .then(res => {
                console.log(res.data)
                setUsers(res.data)
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
                <h1>Liste des utilisateurs</h1>
                <div className='parent'>
                {users.map(user => (
                <div className='card'>
                    <p>{user.name}</p>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    <p>{user.address.street}</p>
                    <p>{user.address.city}</p>
                </div>
                ))}
                </div>
            </div>
        );
    }

};

export default UsersList;