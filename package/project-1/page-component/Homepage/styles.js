import styled from 'styled-components';

export const Container = styled.div`
    height:100vh;
    background:#a7fee9;
`;

export const Ctn1=styled.div`
    display: flex;
    padding: 0 0 0 150px;
    width:100%;

    @media (max-width: 767px) {
        flex-direction: column-reverse;
  	}
`;
export const ChildCtn1=styled.div`
    font-size: 60px;
    word-wrap: break-word;
    width:50%;

    @media (max-width: 767px) {
        font-size: 24px;
  	}
`;
export const ChildCtn2=styled.div`
    display:flex;
    width:420px;
    height:420px;
    width:50%;
    justify-content: center;
    align-items: center;
`;
export const Ctn2=styled.div`
    display:flex;
    margin-left:150px;
    width:405px;
    height:55px;
    background:#000;
    border-radius:10px;
`;

export const InputCtn=styled.input`
    width:300px;
    height:50px;
    background:#000;
    border-radius:10px;
    color:#fff;
    border:none;
    padding: 10px;
`;

export const Button = styled.button`
    padding-left: 30px;
    padding-right: 30px;
    background: #fdef78;
    color:#000;
    height:50px;
    border-radius:10px;
    margin:2px;
`;