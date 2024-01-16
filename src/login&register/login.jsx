import React, { useState, useEffect } from "react";
import './style.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [showLoginModal, setShowLoginModal] = useState(true);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    const handleLoginButtonClick = () => {
        setShowLoginModal(true);
        setShowRegisterModal(false);
    };
    const handleRegisterButtonClick = () => {
        setShowLoginModal(false);
        setShowRegisterModal(true);
    };

    return (
        <div className="wrapper">
            {showLoginModal && <LoginModal handleRegisterButtonClick={handleRegisterButtonClick} />}
            {showRegisterModal && <RegisterModal handleLoginButtonClick={handleLoginButtonClick} />}
        </div>
    )
}

//LoginModal 컴포넌트에게 부모 컴포넌트에서 정의한 handleRegisterButtonClick 함수를 전달하는 것입니다. 
//이것은 React에서 props(속성)를 통해 데이터나 함수를 자식 컴포넌트로 전달하는 메커니즘 중 하나입니다.
//handleRegisterButtonClick 함수는 회원가입 버튼이 클릭되었을 때 실행되어 부모 컴포넌트의 상태를 업데이트

function LoginModal(props) {
    const [id, setID] = useState("");
    const [pw, setPW] = useState("");
    const buttonText = [
        "로그인",
        "회원가입"
    ];

    const navigate = useNavigate();

    const handleChangeID = (event) => {
        setID(event.target.value);
    }
    const handleChangPW = (event) => {
        setPW(event.target.value);
    }
    const handleSubmit = (event) => {
        alert(`ID: ${id} PW: ${pw}`);
        navigate('/Window');
    }
    const handleButt = () => {
        // props로 전달받은 setShowRegisterModal을 사용하여 상태 변경
        if (props.handleRegisterButtonClick) {
            props.handleRegisterButtonClick();
        }
    }
    return (
        <div className="container">
            <h1 style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>로그인</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" className="text" value={id} onChange={handleChangeID} placeholder="아이디를 입력해주세요." />
                <input type="password" className="text" value={pw} onChange={handleChangPW} placeholder="비밀번호를 입력해주세요." />
                <button type="submit">{buttonText[0]}</button>
            </form>
            <div style={{ marginTop: '30px', marginLeft: '10px' }}>
                <label style={{ fontSize: '10px' }}>혹시 {buttonText[1]}을 안하셨나요?</label>
                <button onClick={handleButt} style={{ fontSize: '10px', padding: '1px' }}>{buttonText[1]}</button>
            </div>
        </div>
    )
}

function RegisterModal(props) {
    const [id, setID] = useState("");
    const [pw, setPW] = useState("");
    const [rpw, setRPW] = useState("");
    const buttonText = [
        "로그인",
        "회원가입"
    ];

    const handleChangeID = (event) => {
        setID(event.target.value);
    }
    const handleChangPW = (event) => {
        setPW(event.target.value);
    }
    const handleChangRPW = (event) => {
        setRPW(event.target.value);
    }
    const handleSubmit = (event) => {
        if (rpw === pw) {
            alert('회원가입 되셨습니다! 환영합니다 :)');
        }
        else {
            alert('비밀번호가 일치하지 않습니다.');
        }
    }
    const handleButt = () => {
        // props로 전달받은 setShowRegisterModal을 사용하여 상태 변경
        if (props.handleLoginButtonClick) {
            props.handleLoginButtonClick();
        }
    }
    return (
        <div className="container">
            <h1>회원가입</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" className="text" value={id} onChange={handleChangeID} placeholder="아이디를 입력해주세요." />
                <input type="password" className="text" value={pw} onChange={handleChangPW} placeholder="비밀번호를 입력해주세요." />
                <input type="password" className="text" value={rpw} onChange={handleChangRPW} placeholder="비밀번호를 재입력해주세요." />
                <button type="submit">{buttonText[1]}</button>
            </form>
            <div style={{ marginTop: '30px' }}>
                <label style={{ fontSize: '10px', marginLeft: '25px' }}>혹시 {buttonText[1]}을 이미 하셨나요?</label>
                <button onClick={handleButt} style={{ fontSize: '10px', padding: '1px' }}>{buttonText[0]}</button>
            </div>
        </div>
    )
}
export default Login;