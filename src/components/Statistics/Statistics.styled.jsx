import styled from "@emotion/styled";

export const StatsSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;

margin: 0 auto;
max-width: fit-content;

border-radius: 6px;
overflow: hidden;
box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px;
transition: all 250ms ease-out;

.title {
    font-size: 14px;
    margin: 0;
    padding: 30px;
    text-transform: uppercase;
    opacity: 0.5;
}

:hover {
    box-shadow: -5px -5px 36px 0px #A4A8A3, 
    5px 10px 17px 0px #A3A3A3;
    cursor: pointer;
.title {
    opacity: 1;
}
`;

export const StatList = styled.ul`
display: flex;
list-style: none;
justify-content: center;
align-items: center;
padding: 0;
margin: 0;

`;
export const StatListItem = styled.li`
color: white;
font-size:12px;

flex: 1;
display: flex;
flex-direction: column;
gap: 10px;
padding: 20px;
text-align: center; 

background-color: ${props => props.color};


.percentage{
    font-size:16px;
    font-weight:500;
}
`;