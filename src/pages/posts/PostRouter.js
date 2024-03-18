import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostLayout from './PostLayout'
import PostsList from './PostsList'
import Error404 from '../../_utils/Error404'
import PostShow from './PostShow';

const PostRouter = () => {
    return (
        <Routes>
            <Route element={<PostLayout />}>
                <Route path="list" element={<PostsList />} />
                <Route path="show/:id" element={<PostShow />} />
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>
    );
};

export default PostRouter;