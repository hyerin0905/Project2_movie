import { Link } from "react-router-dom";
import "./Login.css" ;

const Login = () => {
    return (
        <div className="login">
            <h2>로그인</h2>
            <div className="form-section">
                <form>
                    <div className="login-input-id">
                        <h3>아이디&#40;ID&#41;</h3>
                        <input type="text" className="userId" placeholder="아이디를 입력하세요" />
                    </div>
                    <div className="login-input-pw">
                        <h3>비밀번호</h3>
                        <input type="text" className="userPassword" placeholder="비밀번호를 입력하세요" />
                    </div>
                    <Link className="sign-up">회원가입</Link>
                    <button className="login-btn">확인</button>
                </form>
            </div>
        </div>
    );
};

export default Login;