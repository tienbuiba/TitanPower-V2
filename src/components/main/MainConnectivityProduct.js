import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import LazyLoad from 'react-lazyload'; // Import thư viện react-lazyload
import product49 from '../../assets/images/product/49.png';
import product50 from '../../assets/images/product/50.png';
import product51 from '../../assets/images/product/51.png';
import product52 from '../../assets/images/product/52.png';
import product53 from '../../assets/images/product/53.jpeg';
import product54 from '../../assets/images/product/54.png';

const mainproduct = [
  // ...Dữ liệu sản phẩm của bạn...
];

function MainConnectivityProduct() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(true);
  }, []);

  return (
    <>
      {mainproduct.map((product) => (
        <Grid item xs={6} sm={3} lg={2} key={product.id}>
          <CardActionArea component="a" href={`/product-detail/${product.id}`}>
            <Card>
              <Card sx={{ height: '120px', border: '1px solid #ccc' }}>
                <div style={{ height: '90px', width: '100%', border: '1px solid #ccc' }}>
                  {/* Bọc hình ảnh trong LazyLoad */}
                  <LazyLoad height={90} offset={100}>
                    <img
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'block',
                        borderBottom: '1px solid #ccc',
                        padding: '8px',
                      }}
                      src={product.src}
                      alt={product.altText}
                    />
                  </LazyLoad>
                  {!imageLoaded && (
                    <Typography component="h2" color="text.secondary" sx={{ my: 0.5 }}>
                      Loading...
                    </Typography>
                  )}
                </div>
                <div>
                  <Typography component="h2" color="text.secondary" sx={{ my: 0.5 }}>
                    {product.title}
                  </Typography>
                </div>
              </Card>
            </Card>
          </CardActionArea>
        </Grid>
      ))}
    </>
  );
}

export default MainConnectivityProduct;
