import CustomCursor from "./CustomCursor";
import Footer from "./Footer"
import NavBar from "./Navbar"

const Layout = ({children}) => {
return (
    <div className="content container mx-auto cursor-none">
        <CustomCursor />
        <NavBar/>
        <div className="my-8 cursor-none">
        {children}
        </div>
        <Footer className=""/>
    </div>
)
}

export default Layout;