import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';

const PrivacyPolicy = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Privacy Policy" />

            <div className="main-text-area ptb-80">
                <div className="container">

                    <header>
                        <h1>Privacy Policy and Terms of Use</h1>
                    </header>

                    <section id="privacy-policy">
                        <h2>Privacy Policy</h2>
                        <p><strong>Effective Date:</strong> [Insert Date]</p>
                        <p>
                            [Website Name] ("we," "our," or "us") is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our website and services.
                        </p>

                        <h3>1. Information We Collect</h3>
                        <ul>
                            <li><strong>Personal Information:</strong> Name, email address, phone number, date of birth, school name, GPA, standardized test scores, athletic statistics, and extracurricular activities.</li>
                            <li><strong>Usage Information:</strong> IP address, browser type, and website activity (e.g., pages visited, time spent on site).</li>
                            <li><strong>Sensitive Information:</strong> With explicit consent, we may collect sensitive data (e.g., demographic details for diversity outreach).</li>
                        </ul>

                        <h3>2. How We Use Your Information</h3>
                        <ul>
                            <li>Facilitate connections between students and colleges.</li>
                            <li>Customize and improve your experience on the website.</li>
                            <li>Send updates, newsletters, or promotional materials (with your consent).</li>
                            <li>Comply with legal obligations.</li>
                        </ul>

                        <h3>3. Sharing Your Information</h3>
                        <ul>
                            <li><strong>Colleges and Recruiters:</strong> To help you explore educational opportunities.</li>
                            <li><strong>Service Providers:</strong> Companies that assist in website functionality and analytics.</li>
                            <li><strong>Legal Authorities:</strong> When required by law or to protect our rights.</li>
                        </ul>

                        <h3>4. Your Rights</h3>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access, update, or delete your personal information.</li>
                            <li>Opt-out of marketing communications.</li>
                            <li>Withdraw consent where applicable.</li>
                        </ul>
                        <p>To exercise these rights, contact us at <a href="mailto:[support email]">[support email]</a>.</p>

                        <h3>5. Data Security</h3>
                        <p>
                            We implement industry-standard security measures to protect your data. However, no system is 100% secure, and we cannot guarantee absolute security.
                        </p>

                        <h3>6. Changes to this Policy</h3>
                        <p>
                            We may update this Privacy Policy from time to time. Significant changes will be communicated via email or a prominent notice on our website.
                        </p>
                    </section>

                    <section id="terms-of-use">
                        <h2>Terms of Use</h2>
                        <p><strong>Effective Date:</strong> [Insert Date]</p>
                        <p>Welcome to [Website Name]! By using our website, you agree to comply with these Terms of Use. If you do not agree, please refrain from using our services.</p>

                        <h3>1. Eligibility</h3>
                        <ul>
                            <li>Our services are intended for high school students, parents, and college recruiters.</li>
                            <li>By using the site, you confirm that you are at least 13 years old and have parental consent if under 18.</li>
                        </ul>

                        <h3>2. User Conduct</h3>
                        <p>You agree to use the website responsibly and not to:</p>
                        <ul>
                            <li>Provide false or misleading information.</li>
                            <li>Post or share offensive, harmful, or unlawful content.</li>
                            <li>Attempt to breach the site’s security measures.</li>
                        </ul>

                        <h3>3. Intellectual Property</h3>
                        <p>
                            All content on this website, including logos, graphics, and text, is owned by [Website Name] or licensed to us. You may not reproduce, distribute, or modify any content without permission.
                        </p>

                        <h3>4. Disclaimer of Liability</h3>
                        <p>
                            We strive to maintain accurate and updated content but do not guarantee its completeness or reliability. [Website Name] is not responsible for:
                        </p>
                        <ul>
                            <li>Decisions made based on information provided on our site.</li>
                            <li>Disputes between users and colleges.</li>
                            <li>Unauthorized access to your data despite security measures.</li>
                        </ul>

                        <h3>5. Termination</h3>
                        <p>
                            We reserve the right to suspend or terminate your account if you violate these Terms of Use.
                        </p>

                        <h3>6. Governing Law</h3>
                        <p>
                            These terms are governed by the laws of [Your State or Country]. Disputes will be resolved in [Your State or Country] courts.
                        </p>

                        <h3>7. Contact Us</h3>
                        <p>
                            For questions or concerns, contact us at <a href="mailto:[support email]">[support email]</a>.
                        </p>
                    </section>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default PrivacyPolicy;