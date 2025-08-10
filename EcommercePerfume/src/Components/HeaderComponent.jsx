

function HeaderComponent() {
    return (
        <>
            <div className="d-flex justify-content-between bg-black text-white">
                <div className="d-flex  align-items-center ms-md-5 p-2 col-md-6">
                    <h5 className="fs-3">Website Logo</h5>
                    <h2 className="ms-2 fs-3">Store Name</h2>

                </div>
                <div className="d-sm-flex d-none list-unstyled align-items-center col-5 justify-content-evenly">
                    {
                        navItems.map((item, index) => (
                            <NavItem key={index} content={item} />
                        ))
                    }
                </div>

            </div>
            <div className="d-flex justify-content-center pt-3">
                <div className="bg-secondary text-white">
                    <i className="bi bi-search-heart-fill fs-3 p-2"></i>
                    <input type="text" />
                </div>

            </div>
        </>

    )
}

function NavItem(props) {
    return (
        <>
            <a className="text-decoration-none text-white">{props.content}</a>
        </>
    )
}
export default HeaderComponent;

const navItems = [
    'Home',
    'Sign Up',
    'Login'
]