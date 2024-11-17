import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';

const TermCondition = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Term & Condition" />

            <div className="main-text-area ptb-80">
                <div className="container">
                    <header>
                        <h1>Terms and Conditions</h1>
                    </header>

                    <section id="introduction">
                        <h2>1. Introduction</h2>
                        <p>
                            Welcome to [Website Name]! By accessing or using our website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must refrain from using our services.
                        </p>
                    </section>

                    <section id="eligibility">
                        <h2>2. Eligibility</h2>
                        <p>
                            Our services are intended for use by high school students, parents, and college recruiters. By using the website, you confirm that you are:
                        </p>
                        <ul>
                            <li>At least 13 years old.</li>
                            <li>If under 18, you have the consent of a parent or legal guardian to use our site.</li>
                        </ul>
                    </section>

                    <section id="user-obligations">
                        <h2>3. User Obligations</h2>
                        <p>
                            By using our services, you agree to:
                        </p>
                        <ul>
                            <li>Provide accurate and truthful information when creating a profile or interacting with other users.</li>
                            <li>Respect the privacy and rights of others, including students, parents, and college recruiters.</li>
                            <li>Abide by applicable laws and regulations while using our platform.</li>
                        </ul>
                        <p>You must not:</p>
                        <ul>
                            <li>Use the website for unlawful or malicious activities.</li>
                            <li>Attempt to breach the website’s security or disrupt its operation.</li>
                            <li>Post any content that is offensive, harmful, or misleading.</li>
                        </ul>
                    </section>

                    <section id="intellectual-property">
                        <h2>4. Intellectual Property</h2>
                        <p>
                            All content, trademarks, and intellectual property on this website, including text, graphics, logos, and software, are the property of [Website Name] or its licensors. You may not copy, reproduce, or distribute any content without prior written consent.
                        </p>
                    </section>

                    <section id="disclaimer">
                        <h2>5. Disclaimer of Warranties</h2>
                        <p>
                            We provide our services "as is" without warranties of any kind, either express or implied. While we strive to ensure accuracy, we do not guarantee that our platform will be error-free, uninterrupted, or secure.
                        </p>
                    </section>

                    <section id="limitation-of-liability">
                        <h2>6. Limitation of Liability</h2>
                        <p>
                            To the fullest extent permitted by law, [Website Name] and its affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our platform.
                        </p>
                    </section>

                    <section id="termination">
                        <h2>7. Termination</h2>
                        <p>
                            We reserve the right to suspend or terminate your access to our website at our sole discretion, without notice, for conduct that we believe violates these Terms and Conditions or is harmful to others.
                        </p>
                    </section>

                    <section id="governing-law">
                        <h2>8. Governing Law</h2>
                        <p>
                            These terms are governed by the laws of [Your State or Country]. Any disputes shall be resolved exclusively in the courts of [Your State or Country].
                        </p>
                    </section>

                    <section id="changes">
                        <h2>9. Changes to Terms</h2>
                        <p>
                            We may update these Terms and Conditions from time to time. If we make significant changes, we will notify you via email or post a notice on our website. Continued use of the platform after such changes constitutes your acceptance of the revised terms.
                        </p>
                    </section>

                    <section id="contact-us">
                        <h2>10. Contact Us</h2>
                        <p>
                            If you have any questions or concerns about these Terms and Conditions, please contact us at <a href="mailto:[support email]">[support email]</a>.
                        </p>
                    </section>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default TermCondition;