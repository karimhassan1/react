import { Outlet } from "react-router-dom";
import HeaderComponent from "../Components/HeaderComponent";

function MainLayout() {

    return (
        <div className="container">
            <div className="row">
              

                <header>
                    <HeaderComponent />
                    <hr/>
                </header>
          
                
           
                <main>
                    <Outlet />
                </main>
         
                
        
                <footer>
                    <h1>this is footer</h1>
                </footer>
            
        </div>
            
                




        </div>
       
    )

}

export default MainLayout;