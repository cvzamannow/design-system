import styled from "styled-components";

const TableShadow = styled.table`
    font-family: 'poppins', sans-serif;
    border-collapse: collapse;
    width: 100%;

    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        width: 20px;
    }

    .shadowBase {
        padding: 0px 0px 10px 10px;
        display: flex;
        margin: 10px;
        height: 100px;
        max-width: 400px;
        background-color: #ffffff;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    .shadowMd {
        display: flex;
        margin: 10px;
        height: 100px;
        max-width: 400px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }

    .shadowLg {
        display: flex;
        margin: 10px;
        height: 100px;
        max-width: 400px;
        background-color: white;
        box-shadow: rgba(136, 165, 191, 0.509) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    }

    .shadowXl {
        display: flex;
        margin: 10px;
        height: 100px;
        max-width: 400px;
        background-color: white;
        box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    }

    .shadowXxl {
        display: flex;
        margin: 10px;
        height: 100px;
        max-width: 400px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
    }

    .shadowInner {
        display: flex;
        margin: 10px;
        height: 100px;
        max-width: 400px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.061) 0px 4px 12px 0px inset;
    }
`;

export default TableShadow;