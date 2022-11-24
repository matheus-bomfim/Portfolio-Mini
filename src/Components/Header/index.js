import { Head } from "./style"
import logo from '../../logo.svg';
import {useHistory} from "react-router-dom"
function Header() {
    const url = useHistory()
    return(
        <Head>
            <div> 
            <img src={logo} alt="logo" />
            <h1>Matheus Bomfim</h1>
            </div>
            <ul>
                <li onClick={()=>{url.push("/")}}>
                    <p>Home</p>
                </li>
                <li onClick={()=>{url.push("/projects")}}>
                    <p>Projects</p>
                </li>
            </ul>
        </Head>
    )
}

export default Header