import React from 'react'
import { useEffect } from 'react'

import { Box } from '@mui/material';

import { PageTitle } from '../components/PageStyles';

export default function Archive() {
    useEffect(() => {
        document.title = "not found :(";
    }, []);

  return (
    <Box className="normalPage" sx={{ margin: '1em' }}>
        <PageTitle> archive </PageTitle>
    </Box>
    )
}
