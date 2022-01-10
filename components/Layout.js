import CustomCursor from "./CustomCursor";
import Footer from "./Footer"
import NavBar from "./Navbar"

const Layout = ({children}) => {
return (
    <div className="content container mx-auto">
        <CustomCursor />
        <NavBar/>
        <div className="my-6">
        {children}
        </div>
        <Footer className=""/>
    </div>
)
}

export default Layout;