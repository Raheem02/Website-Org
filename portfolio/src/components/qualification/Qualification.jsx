import React, { useState } from "react";
import "./qualification.css";
const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}

                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Internship
                        
                    </div>
                </div>

                <div className="qualification__sections">
                    <div 
                    className={
                        toggleState ===1 
                        ? "qualification__content qualification__content-active" 
                        : "qualification__content" 
                    }
                        >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Atria institute of technology</h3>
                                <span className="qualification__subtitle">
                                B.E, CSE
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    2019 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>


                            <div>
                                <h3 className="qualification__title">Full Stack Web Developer</h3>
                                <span className="qualification__subtitle">
                                Varcons Technologies
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    Feb 2023 – Mar 2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Vidhyadri PU College,</h3>
                                <span className="qualification__subtitle">
                                Pre-University Course
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    2018 - 2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Maya English School</h3>
                                <span className="qualification__subtitle">
                                SSLC
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    2016 - 2017
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div> */}

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Java Full Stack</h3>
                                <span className="qualification__subtitle">
                                Cranes Varsity
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    Sep 2022 – Dec 2022
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2nd part  */}


                    <div   
                    className={
                        toggleState ===2 
                        ? "qualification__content qualification__content-active" 
                        : "qualification__content" 
                    }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Atria institute of technology</h3>
                                <span className="qualification__subtitle">
                                B.E, CSE
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    2019 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Fresher</h3>
                                <span className="qualification__subtitle">Actively looking for a job</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    2023 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title" id="pu">Vidhyadri PU College</h3>
                                <span className="qualification__subtitle">
                                Pre-University Course
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    2018 - 2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
