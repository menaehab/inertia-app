import React from "react";
import Navbar from "../Components/Navbar";
export default function Layout({ children }) {
    return (
        <>
            <Navbar />

            <div className="container mt-5 mx-auto">{children}</div>
        </>
    );
}
