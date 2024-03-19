import React, { useEffect, useState } from 'react';
import { endPointsService } from '../../_services/endPoints.service';
import { Table } from 'react-bootstrap';

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
                <Table striped bordered hover>
                    <thead className='text-center'>
                        <tr>
                            <th>Nom</th>
                            <th>Pseudo</th>
                            <th>Email</th>
                            <th colSpan={2}>Adresse</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.street}</td>
                            <td>{user.address.city}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }

};

export default UsersList;