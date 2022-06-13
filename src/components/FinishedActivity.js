import { Button } from '@mui/material';
import React, { useEffect } from 'react';

const FinishedActivity = ({setStage}) => {
    return (
        <div>
            Finish
            <Button onClick={()=>setStage(3)}>Next</Button>
        </div>
    );
};

export default FinishedActivity;