import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    return (<>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                <img
                    alt=""
                    src="/images/logo192.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {' SBC Rating Combinations Calculator'}
            </Navbar.Brand>
        </Navbar>
    </>);
}