import React from 'react';
import { CircularProgress } from '@mui/material';
import { LoadingContainer } from './style';

function Loading() {
    return (
        <LoadingContainer>
            <CircularProgress />
        </LoadingContainer>
    );
}

export default Loading;