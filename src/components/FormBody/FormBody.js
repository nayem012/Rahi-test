import React from 'react';
import './FormBody.css';

const FormBody = () => {
    return (
        <div className="body-container">
        <div className="body-boxcontainer">
            <div className="waterprint-text">get a custom quote</div>
            <div className="body-box">
                <div className="div-body-text-header">
                    <p className="body-text-header">We’d love to create a custom award for you. Fill out the form below and we’ll get in touch!</p>
                </div>
                <div className="form-box">
                    <form id="contact-form" method="post" action="">
                        <div className="Username">
                            <div className="firstname">
                                <label htmlFor="firstname">FIRST NAME*</label>
                                <input type="text" id="firstname" autoComplete="on" required autoFocus />
                            </div>
                            <div className="lastname">
                                <label htmlFor="lastname">LAST NAME*</label>
                                <input type="text" id="lastname" autoComplete="on" required />
                            </div>
                        </div>
                        <div className="mail-box">
                            <label htmlFor="emailadd">EMAIL ADDRESS</label>
                            <input type="email" id="emailadd" autoComplete="on" required />
                        </div>
                        <div className="contact-box">
                            <div className="phn-number">
                                <label htmlFor="contact-box">PHONE NUMBER</label>
                                <input type="tel" id="contact-box" autoComplete="on" required />
                            </div>
                            <div className="contact-mathod">
                                <label htmlFor="option">PREFERRED CONTACT METHOD</label>
                                <select id="option" name="option">
                                    <option value="">Choose one</option>
                                    <option value="email">Email</option>
                                    <option value="phone">Phone</option>
                                </select>
                            </div>
                        </div>
                        <div className="checkbox-container">
                            <p className="checkbox-text-header">TYPE OF AWARD</p>
                            <p className="checkbox-text">Select all that you're interested in</p>
                            <div className="checkbox-action">
                                <input type="checkbox" id="Trophy" name="awardType" value="Trophy" />
                                <label className="checkbox-label" htmlFor="Trophy">Trophy</label><br />
                                <input type="checkbox" id="Medallion" name="awardType" value="Medallion" />
                                <label className="checkbox-label" htmlFor="Medallion">Medallion</label><br />
                                <input type="checkbox" id="Ribbon" name="awardType" value="Ribbon" />
                                <label className="checkbox-label" htmlFor="Ribbon">Ribbon</label><br />
                                <input type="checkbox" id="Plaque" name="awardType" value="Plaque" />
                                <label className="checkbox-label" htmlFor="Plaque">Plaque</label>
                            </div>
                        </div>
                        <div className="note-container">
                            <h1>NOTES</h1>
                            <p className="note-text">Do you have any questions for us? Anything you think we should know before we start crunching numbers? Any highly-specific requests?</p>
                            <textarea id="notebox" className="note-box"></textarea>
                        </div>
                        <div className="button-box">
                            <button type="submit" id="submit-button">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default FormBody;
