import React from 'react';

const Footer = () => {
    return (
        <div className='mt-2 flex justify-evenly py-5 bg-amber-500'>
            <p>I am footer</p>
            <div className='flex gap-2'>
                <a href="/">Terms</a>
                <a href="/">Privacy</a>
                <a href="/">Gmail</a>
                <a href="/">Facebook</a>
            </div>
        </div>
    );
};

export default Footer;