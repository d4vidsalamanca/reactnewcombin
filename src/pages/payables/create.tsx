import React from "react";
import Header from "../../components/navbar";
import { NextPage } from "next";
import Head from "next/head";
import Filters from "../../components/filters";
import PayableForm from "../../components/payableform";

const CreatePayable: NextPage = () => {
    return(
        <>
            <Head>
                <title>Create Payable | NewCombin Challenge</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header  activePage="Payables" />
            <Filters typeBtn="Payable" />
            <PayableForm />

        </>
    )
}

export default CreatePayable;