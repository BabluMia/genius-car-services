import React from 'react';
import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer>
            <small>Copyright Goes To Bablu || {year}</small>
        </footer>
    );
};

export default Footer;