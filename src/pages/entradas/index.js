import axios from 'axios';
import EntradasForm from 'components/entradas/EntradasForm';
import Layout from 'components/Layout';
import React from 'react';


function index({ data }) {
    return (
        <Layout>
            <EntradasForm data={data}></EntradasForm>
        </Layout>
    );
}

export default index;


export const getServerSideProps = async (context) => {
    const reqUrl = context.req.headers["referer"];
    const url = new URL(reqUrl);
    const { data } = await axios.get(
        `${url.origin}/api/proveedores`
    );
    return {
        props: {
            data
        },
    };
};