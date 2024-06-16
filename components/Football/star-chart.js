import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';

const StarChart = () => {
    return (
        <>
            <Navbar />
            <PageBanner pageTitle="FOOTBALL" />
            <div style={{ textAlign: 'center' }}>
                <img src="/images/starChart.png" alt="Star Chart" />
            </div>
            <Footer />
        </>
    );
}

export default StarChart;
