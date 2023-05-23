import styled from "@emotion/styled";

export const List = styled.ul`
margin: 50px auto;
display: flex;
flex-direction: column;
gap: 10px;
list-style: none;
justify-content: center;
align-items: center;

max-width: fit-content;

`;

export const FriendItem = styled.li`
width: 180px;
border-radius: 6px;

display: flex;
padding: 6px 15px;
gap:10px;
align-items: center;

font-weight: 500;


box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px;
transition: all 250ms ease-out;

:hover {
    box-shadow: -5px -5px 36px 0px #A4A8A3, 
    5px 10px 17px 0px #A3A3A3;
    cursor: pointer;
};

.status{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${props => (props.isOnline ? 'green' : 'red')};

};


.avatar {
    border-radius: 6px;
    background-color: #212121;
    overflow: hidden;
};

.name{

};

`;

