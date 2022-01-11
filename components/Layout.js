import CustomCursor from "./CustomCursor";
import Footer from "./Footer"
import NavBar from "./Navbar"

const Layout = ({children}) => {
return (
    <div className="flex flex-col lg:content lg:container mx-auto min-h-screen">
        {/* content container mx-auto */}
        <CustomCursor />
        <NavBar/>
        <div className={"mainbody py-8 px-8"}>
        {children}
        </div>
        <Footer className="pt-12"/>
    </div>
)
}

export default Layout;