import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
		<div className="main-banner">
			<div className="d-table">
				<div className="d-table-cell">
					<div className="container">
						<div className="row h-100 justify-content-center align-items-center">
							<div className="col-lg-5">
								<div className="hero-content">
									<h1>DISCOVER YOUR POTENTIAL</h1>
									<p>
										Welcome to our college sports recruiting website where we help you discover your potential. We believe that every student-athlete has the potential to succeed in college and beyond. Our goal is to connect you with college coaches and programs that align with your skills, interests, and goals.

										Our website provides a range of resources and tools to support your recruiting journey. We offer tips and advice on how to create a standout profile, communicate with coaches, and prepare for the recruiting process. You can also browse our database of colleges and sports programs to find the best match for you.

										At the heart of our mission is the belief that sports can be a transformative experience for student-athletes. By participating in college sports, you can develop leadership skills, build character, and gain valuable experience that can benefit you in all aspects of life.

										We are committed to helping you discover your potential and achieve your goals as a student-athlete. Let's get started on your recruiting journey today!
									</p>
									
									<Link href="/sign-up">
										<a className="btn btn-primary">Get Started</a>
									</Link>
								</div>
							</div>

							<div className="col-lg-6 offset-lg-1">
                                    <img
                                        src='/images/banner-image/logo_HA.png'
                                        className="animate__animated animate__fadeInDown animate__delay-0.1s"
                                        alt="man" 
                                    />


							</div>
						</div>
					</div>
				</div>
			</div>

            {/* Shape Images */}
			<div className="shape1">
				<img src="/images/shape1.png" alt="shape"/>
			</div>
			<div className="shape2 rotateme">
				<img src="/images/shape2.svg" alt="shape"/>
			</div>
			<div className="shape3">
				<img src="/images/shape3.svg" alt="shape"/>
			</div>
			<div className="shape4">
				<img src="/images/shape4.svg" alt="shape"/>
			</div>
			<div className="shape5">
				<img src="/images/shape5.png" alt="shape"/>
			</div>
			<div className="shape6 rotateme">
				<img src="/images/shape4.svg" alt="shape"/>
			</div>
			<div className="shape7">
				<img src="/images/shape4.svg" alt="shape"/>
			</div>
			<div className="shape8 rotateme">
				<img src="/images/shape2.svg" alt="shape"/>
			</div>
		</div>
    )
}

export default MainBanner