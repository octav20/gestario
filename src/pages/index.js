import Layout from 'components/Layout'
import LoginForm from 'components/LoginForm'
import { headers } from 'next.config'
import Cookies from 'cookies';
import React, { useEffect } from 'react'
import Home from './inde';
import { Router, useRouter } from 'next/router';

function Login({ token }) {
    const router = useRouter();
    useEffect(() => {
        if (token) { router.push('/menu') }

    }, [])
    return (
        <Layout>
            <LoginForm />
        </Layout>
    )
}

export default Login
export const getServerSideProps = (context) => {
    const token = context.req.headers["cookie"]
    return {
        props: {
            token: token || null
        },
    };
}
