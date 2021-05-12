import React, { useState, useEffect } from 'react';
import OneRow from './OneRow';

import { AdminContainer, TabsWrapper, ContentWrapper, Tabs, TabButton, Content } from './AdminTemplate.elements.js';

const AdminTemplate = () => {

    const [active, setActive] = useState(0);
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    const handleClick = e => {
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
            setActive(index);
        }
    };

    useEffect(() => {
        const url = 'http://blogapi.local/api/posts?page=1';

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': 'BEARER '+ localStorage.getItem('JWT'),
                'Accept': 'application/json'
            },
            credentials: 'include'
        }).then(resp => resp.json())
            .then(resp => setPosts(resp))
        // .then(resp => console.log(resp))
    }, []);

    useEffect(() => {
        const url = 'http://blogapi.local/api/users?page=1';

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': 'BEARER '+ localStorage.getItem('JWT'),
                'Accept': 'application/json'
            },
            credentials: 'include'
        }).then(resp => resp.json())
            .then(resp => setUsers(resp))
        // .then(resp => console.log(resp))
    }, []);

    return (
        <>
            <AdminContainer>
                <TabsWrapper>
                    <Tabs>
                        <TabButton onClick={handleClick} active={active === 0} id={0}>Content1</TabButton>

                        <TabButton onClick={handleClick} active={active === 1} id={1}>Content2</TabButton>
                    </Tabs>
                </TabsWrapper>
                <ContentWrapper>
                    <Content active={active === 0}>

                        {posts.map(post => (
                            <OneRow title={post.title} subtitle={post.subtitle} />
                        ))}

                    </Content>
                    <Content active={active === 1}>

                        {/* {users.map(user => (
                            <OneRow title={user.title} subtitle={user.subtitle} />
                        ))} */}

                    </Content>
                </ContentWrapper>
            </AdminContainer>
        </>
    );
};

export default AdminTemplate;