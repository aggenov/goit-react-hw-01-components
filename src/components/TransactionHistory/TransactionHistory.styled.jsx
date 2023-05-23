import styled from '@emotion/styled';

export const Table = styled.table`
margin: 50px auto;

font-size: 14px;
border-collapse: collapse;
text-align: center;

th{
    background-color: #0ed0e6;
    color: white;
    font-size: 12px;
}
  td,
  th {
    border: 1px solid #f0f0f0;
    padding: 10px 70px; 
    
  }

 td{
    color: #6e6e6e;
 }
 tr{
font-size: 10px;
 }

 tr:nth-of-type(even) {
    background-color: #fafafa; 
  }

  tr:nth-of-type(odd) {
    background-color: #ffffff; 
  }

  tr:hover {
    background-color: #f0f0f0;
    // opacity: 0.8;
    cursor: pointer;
  }
`;