import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import ContactForm from '@/components/Football/ContactForm';

const Contact = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="FOOTBALL" />

            <ContactForm />
           
            <Footer />
        </>
    )
}

export default Contact;