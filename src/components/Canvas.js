import React from 'react';
import styled from 'styled-components';

const CanvasWrap = styled.div`
    position: absolute;
    left: 0;
    right:0;
    top: 3.5rem;
    bottom: 0;
    margin: 0;
    background-color: white;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    overflow: auto;
    padding-bottom: 2rem;
`;

const Canvas = (props) => {
    return(
        <CanvasWrap>
            {props.children}
        </CanvasWrap>
    )
}

export default Canvas;