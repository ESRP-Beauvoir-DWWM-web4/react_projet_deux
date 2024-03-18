import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PublicLayout from './PublicLayout';
import Home from './Home'
import Error404 from '../../_utils/Error404';

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<PublicLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;