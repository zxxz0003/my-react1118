import{Link}from "react-router-dom";
export default function Navbar(){
    return(
        <div>
            <ul>


                <li>
                    <Link to='/'>首頁</Link>
                </li>
                <li>
                    <Link to='/'>關於我</Link>
                </li>
                <li>
                    <Link to='/'>最新消息</Link>
                </li>
                <li><Link to='/login' >登入</Link></li>
            </ul>
        </div>
    )
}