import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';
import { useSpring, animated, config } from 'react-spring'; // Import thư viện react-spring
import OurProductLines from '../components/OurProductLines';
import HomeBanner from '../components/banners/HomeBanner';
import Footer from '../components/layout/Footer';
import AppAppBar from '../components/layout/AppAppBar';
import banner from '../config/banners/homebanner';
import OurBusiness from '../components/OurBusiness';

const theme = createTheme();

const titleButton = {
  p: 1,
  '&:hover': {
    backgroundColor: '#5AB9D1',
    color: '#FFFFFF'
  }
}

const titleButtonFinder = {
  color: '#00aee3',
  '&:hover': {
    backgroundColor: '#5AB9D1',
    color: '#FFFFFF',
    border: '1px solid transparent'
  }
}

export default function Home() {
  // Tạo các spring animations cho tiêu đề "OUR BUSINESS", nút "PRODUCT FINDER", và một phần tử khác
  const businessSpring = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });
  const finderSpring = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1000 });
  const customElementSpring = useSpring({
    from: { opacity: 0, transform: 'translateX(-100px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: config.slow,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppAppBar />
      </Container>
      <main>
        <HomeBanner banner={banner} />
        <Container maxWidth="lg" >
          <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 3, pb: 6 }}>
            <animated.div style={businessSpring}>
              <Typography
                component="h1"
                variant="h4"
                align="center"
                color="text.primary"
                gutterBottom
              >
                OUR BUSINESS
              </Typography>
            </animated.div>
            <Typography variant="h6" align="center" color="text.secondary" component="p">
              We are an independent electronic component distributor in Vietnam
            </Typography>
          </Container>
          <Grid container spacing={4} sx={{ pb: 1 }}>
            <OurBusiness />
          </Grid>
          <Container disableGutters component="main" sx={{ pb: 5 }}>
            <animated.div style={customElementSpring}>
              <Typography
                component="h2"
                variant="h5"
                align="center"
                color="text.primary"
                gutterBottom
              >
              </Typography>
            </animated.div>
          </Container>
          <Grid container spacing={5} sx={{ mb: 9, display: 'flex', alignItems: 'center' }}>
            <Grid container item xs={12} lg={6}>
              <animated.div style={finderSpring}>
                <Typography
                  component="h1"
                  variant="h4"
                  align="left"
                  color="text.secondary"
                  gutterBottom
                  sx={titleButton}
                >
                  Our Product Line
                </Typography>
              </animated.div>
              <Typography variant="body1" align="left" color="text.secondary" component="p"
                sx={{ pb: 3 }}
              >
                TitanPower is a leading regional electronics components distributor providing quality components, engineering design services. Use the product search tools to help find the right product for your next design.
              </Typography>
              <animated.div style={finderSpring}>
                <Button variant="outlined" href="/products"
                  size="large"
                  sx={titleButtonFinder}
                >
                  PRODUCT FINDER
                </Button>
              </animated.div>
            </Grid>
            <Grid container item xs={12} lg={6} spacing={2} sx={{ mt: 3, mb: 9 }}>
              <OurProductLines />
            </Grid>
          </Grid>
        </Container>
      </main>
      <Footer
        title="Footer"
      />
    </ThemeProvider>
  );
}
