import { useState } from "react";
import NavItemComponent from "./NavItemComponent";

function HeaderComponent() {

    return (
        <>
            
            <div className="my-3">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex  align-items-center col-2 col-md-2 col-lg-3">
                        <img src="../../photo/1000019484-removebg-preview.png" alt="" width={"48px"} />

                    </div>
                    <div className="c-bg-primary border text-white col-7 d-flex rounded col-md-5 col-lg-4 h-50">
                            <i className="bi bi-search fs-3 ps-2 pe-2 bg-black"></i>
                            <input type="text" className=" ps-2 border-0 input-search w-100" placeholder="Search in store" />
                    </div>
                    <div className="d-md-flex d-none list-unstyled align-items-center col-5 justify-content-end">
                        {
                            navItems.map((item, index) => (
                                <NavItemComponent key={index} content={item} />
                            ))
                        }
        
                    </div>
                    <div className="d-md-none  d-flex justify-content-center fs-2">
                        <i class="bi bi-list"></i>
                    </div>

                </div>

            </div>
        </>

    )
}


export default HeaderComponent;

const navItems = [
    {
        content: 'Home',
        link: '/'
    },
    {
        content: 'Register',
        link: '/register'
    },
    {
        content: 'Login',
        link: '/login'
    }


]