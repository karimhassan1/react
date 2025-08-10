import { Outlet } from "react-router-dom";
import HeaderComponent from "../Components/HeaderComponent";

function MainLayout() {

    return (
        <div>

            <header>
                <HeaderComponent />

            </header>
            <main>
                <Outlet />
            </main>

            <footer>
                <h1>this is footer</h1>
            </footer>




        </div>
    )

}

export default MainLayout;