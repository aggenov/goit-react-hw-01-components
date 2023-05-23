import styled from '@emotion/styled';

export const ProfileCard = styled.div`

margin: 50px auto;
border-radius: 6px;
background-color:#fff;
max-width: fit-content;
box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px;
transition: all 250ms ease-out;

:hover {
    box-shadow: -5px -5px 36px 0px #A4A8A3, 
    5px 10px 17px 0px #A3A3A3;
    cursor: pointer;
`;

export const ProfileDescription = styled.div`
padding: 25px 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Avatar = styled.img`
border-radius: 50%;
width: 100px;
background-color:#f1f1f1;
margin-bottom:20px;
`;

export const ProfileName = styled.p`
font-size: 18px;
font-weight: 700;
`;

export const ProfileTag = styled.p`
font-size: 12px;
font-weight: 500;
color: #747887;
:hover {color: blue};
`;

export const ProfileLocation = styled.p`
font-size: 12px;
font-weight: 500;
color: #747887;
`;

export const ProfileStats = styled.ul`
display: flex;
list-style: none;
justify-content: center;
padding: 0;
margin: 0;

li{
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items:center;
    text-align: center;
    padding: 10px;
    flex:1;

    outline: 0.5px solid #e4e4ed;
    background-color:#f1f1f1;
}
  li:first-of-type {
    border-bottom-left-radius: 6px;
  }
  li:last-of-type {
    border-bottom-right-radius: 6px;
  }
`;


export const StatsLabel = styled.span`
font-size: 10px;
color:#747887;
`;

export const StatsQuantity = styled.span`
font-size: 14px;
font-weight: 700;
color:#000;
`;