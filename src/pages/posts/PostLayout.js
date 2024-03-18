import React from 'react';
import Header from '../../components/Header';
import { Outlet } from 'react-router-dom';

const PostLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default PostLayout;