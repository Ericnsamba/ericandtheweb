import Footer from "./Footer"
import NavBar from "./Navbar"

const Layout = ({children}) => {
return (
    <div className="content container mx-auto">
        <NavBar/>
        {children}
        <Footer/>
    </div>
)
}

export default Layout;