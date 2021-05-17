import React, { useState, useEffect } from 'react';
import OneRow from './OneRow';

import { AdminContainer, TabsWrapper, ContentWrapper, Tabs, TabButton, Content } from './AdminTemplate.elements.js';

const AdminTemplate = () => {

    const [active, setActive] = useState(0)
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    const handleClick = e => {
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
            setActive(index);
        }
    };

    useEffect(() => {
        const url1 = 'http://blogapi.local/api/posts?page=1';

        fetch(url1, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: 'include'
        }).then(resp => resp.json())
            .then(resp => setPosts(resp))
    }, []);

    useEffect(() => {
        const url2 = 'http://blogapi.local/api/users?page=1';

        fetch(url2, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'BEARER '+ localStorage.getItem('JWT'),
                'Accept': 'application/json'
            },
            credentials: 'include'
        }).then(resp => resp.json())
            .then(resp => setUsers(resp))
    }, []);

    return (
        <>
            <AdminContainer>
                <TabsWrapper>
                    <Tabs>
                        <TabButton onClick={handleClick} active={active === 0} id={0}>Posts</TabButton>

                        <TabButton onClick={handleClick} active={active === 1} id={1}>Users</TabButton>
                    </Tabs>
                </TabsWrapper>
                <ContentWrapper>
                    <Content active={active === 0}>

                        {posts.map((post, index) => (
                            <OneRow firstValue={post.id} secondValue={post.title} thirdValue={post.subtitle} key={index}/>
                        ))}

                    </Content>
                    <Content active={active === 1}>

                        {users.map((user, index) => (
                            <OneRow firstValue={user.id} secondValue={user.username} thirdValue={user.email} key={index}/>
                        ))}

                    </Content>
                </ContentWrapper>
            </AdminContainer>
        </>
    );
};

export default AdminTemplate;