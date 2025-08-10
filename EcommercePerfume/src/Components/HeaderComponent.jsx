import NavItemComponent from "./NavItemComponent";

function HeaderComponent() {
    return (
        <>
            <div className="d-flex justify-content-between bg-black text-white">
                <div className="d-flex  align-items-center ms-4 ms-md-5 me-4 me-md-5 pt-2 pb-2 col-md-6">
                    <h5 className="fs-3">Logo</h5>
                    <h2 className="ms-2 fs-3">Name</h2>

                </div>
                <div className="d-sm-flex d-none list-unstyled align-items-center col-5 justify-content-evenly">
                    {
                        navItems.map((item, index) => (
                            <NavItemComponent key={index} content={item} />
                        ))
                    }
                </div>

            </div>
            <div className="d-flex justify-content-center pt-1">
                <div className="col-10 col-sm-8 d-flex justify-content-center">
                    <div className="bg-secondary text-white d-flex rounded col-12 col-md-8 col-lg-6 border border-secondary">
                        <i className="bi bi-search-heart-fill fs-3 ps-2 pe-2"></i>
                        <input type="text" className=" ps-3 border-0 w-100 h-100" placeholder="Search in store" />
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
        content: 'Sign UP',
        link: '/sign-up'
    },
    {
        content: 'Login',
        link: '/login'
    }


]