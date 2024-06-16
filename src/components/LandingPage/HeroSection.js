import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const HeroSection = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box className="hero"></Box>
      </Grid>
    </Grid>
  );
}

export default HeroSection;
