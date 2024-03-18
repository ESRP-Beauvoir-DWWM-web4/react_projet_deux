import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserLayout from './UserLayout'
import UsersList from './UsersList';
import Error404 from '../../_utils/Error404';

const UserRouter = () => {
    return (
        <Routes>
            <Route element={<UserLayout />}>
                <Route path="list" element={<UsersList />} />
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>
    );
};

export default UserRouter;