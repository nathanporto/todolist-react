import styled from 'styled-components';
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`
    background: linear-gradient(90deg, #383838, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const ToDoList = styled.div`
    background-color: #fff;
    padding: 30px 20px;
    border-radius: 20px;
    width: 100%;
    max-width: 600px; 
    box-sizing: border-box; 

    ul {
        padding: 0;
        margin-top: 50px;
    }

    @media (max-width: 768px) {
        padding: 20px 10px;
        margin-right: 25px;
    }

    
`;

export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    height: 40px;
    margin-right: 10px; 
    width: calc(100% - 140px); 
    padding: 0 15px; 
    box-sizing: border-box;

    @media (max-width: 480px) {
        margin-right: 15px;
        padding: 0 10px;
    }
`;

export const Button = styled.button`
    background-color: #8052EC;
    height: 40px;
    border: none;
    color: #FFFFFF;
    font-weight: 900;
    font-size: 17px;
    border-radius: 5px;
    width: 130px;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
    }

    @media (max-width: 480px) {
        width: 100px;
        font-size: 14px;
    }
`;

export const ListItem = styled.div`
    background: ${props => props.isFinished ? '#e8ff8b' : '#e4e4e4'};
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    height: 60px;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 0 15px;
    width: 100%; 
    box-sizing: border-box;

    @media (max-width: 480px) {
        padding: 0 10px;
        height: 50px;
    }
`;

export const Trash = styled(FcEmptyTrash)`
    cursor: pointer;

    @media (max-width: 480px) {
        width: 20px;
        height: 20px;
    }
`;

export const Check = styled(FcCheckmark)`
    cursor: pointer;

    @media (max-width: 480px) {
        width: 20px;
        height: 20px;
    }
`;