import logo from "../img/logo.png"

function Navigation() {
    return (
        <>
            <nav className="main-nav" id="mainNav">
                <div className="container">
                <div className="navbar-brand"><img src={logo} alt="..." /></div>
                    {/* <a  href="/mainpage"></a> */}
                    <div className="navbar" id="navbar">
                        <ul className="navbar-navs">
                            <li className="nav-item"><a href="#">예약</a></li>
                            <li className="nav-item"><a href="#">예약확인</a></li>
                            <li className="nav-item"><a href="#">공지사항</a></li>
                            <li className="nav-item"><a href="#">리뷰</a></li>
                        </ul>
                        <ul className="navbar-login">
                            <li><a href="#">로그인</a></li>
                            <li><a href="#">회원가입</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
} export default Navigation;