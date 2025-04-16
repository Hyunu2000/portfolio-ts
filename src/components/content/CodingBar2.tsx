import React from 'react';
import {Coding} from '@interfaces/common';

interface CodingBar2Props {
    code: Coding;
}

const CodingBar2: React.FC<CodingBar2Props> = ({code}) => {
    return (
        <>
            <div className="bar__metadata"><span>{code.title}</span><span>{code.percent}%</span></div>
            <div className="bar__bg"><div className="bar__value" style={{"width": `${code.percent}%`}}></div></div>
        </>
    );
}

export default CodingBar2;