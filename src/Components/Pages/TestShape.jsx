import React from 'react';
import './TestShape.css';

const TestShape = () => {
    return (
        <div>
            <div className="square">
  <p className="text">Square text</p>
</div>
<div className="circle">
  <p className="text">Circle text</p>
</div>

<div className="triangle">
  <p className="text">Triangle</p>
</div>
        </div>
    );
};

export default TestShape;