import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
const cardData = [
  {
    id: 1,
    image: 'l1.jpg',
    brand: 'ASUS',
    description: "ASUS Vivobook 15, Intel Core i3-1220P 12th Gen, 15.6 (39.62 cm) FHD, Thin and Laptop (8GB/512GB SSD/Integrated Graphics/1.7 kg)",
    price: 40000,
    stock: 10,
  },
  {
    id: 2,
    image: 'l2.jpg',
    brand: 'DELL',
    description: 'Dell 15 Laptop, Intel Core i5-1135G7 Processor/16GB DDR4/512GB SSD/Intel UHD Graphic/15.6" (39.562cm) FHD Display/Thin & Light 1.69kg',
    price: 48000,
    stock: 5,
  },
  {
    id: 3,
    image: 'l3.webp',
    brand: 'HP',
    description: 'HP Laptop 15s, Intel Celeron, 15.6-inch (39.6 cm), HD, 8GB DDR4, 512GB SSD, Intel UHD Graphics, Thin & Light, Dual Speakers,(Silver, 1.65 kg)',
    price: 28000,
    stock: 8,
  },
  {
    id: 4,
    image: 'l4.jpg',
    brand: 'LENOVO',
    description: 'Lenovo IdeaPad Slim 3 2021 11th Gen Intel Core i3 15.6 FHD Thin & Light Laptop (8GB/256GB SSD/2 Year Warranty/Arctic Grey/1.65Kg)',
    price: 35500,
    stock: 12,
  },
  {
    id: 5,
    image: 'l5.jpg',
    brand: 'DELL',
    description: 'Dell Inspiron 5518 Laptop, Intel i5-11320H, 8GB, 512GB, 15.6 (39.64Cms) FHD WVA AG 250 nits, Platinum Silver, 1.64Kgs',
    price: 63500,
    stock: 3,
  },
  {
    id: 6,
    image: 'l1.jpg',
    brand: 'ASUS',
    description: 'ASUS TUF Gaming F15, 15.6"(39.62 cms) FHD 144Hz, Intel Core i7-11800H 11th Gen, Gaming Laptop (16GB/1TB SSD/Battery/Black/2.30 Kg)',
    price: 60000,
    stock: 15,
  },
];

const defaultTheme = createTheme();

export default function Laptops() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [sortCriteria, setSortCriteria] = React.useState('default');
  const [cartItems, setCartItems] = React.useState([]);

  const handleSearch = () => {
    console.log(`Searching for: ${searchTerm}`);
  };

  const handleSort = (criteria) => {
    setSortCriteria(criteria);
    console.log(`Sorting by: ${criteria}`);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const calculateTotalAmount = () => {
    const totalAmount = cartItems.reduce((acc, item) => acc + (item.price || 0), 0);
    return totalAmount.toFixed(2);
  };

  const handleCheckout = () => {
    console.log('Checkout logic goes here');
  };

  const sortedCardData = [...cardData].sort((a, b) => {
    if (sortCriteria === 'brand') {
      return a.brand.localeCompare(b.brand);
    } else if (sortCriteria === 'price') {
      return a.price - b.price;
    } else {
      return a.id - b.id;
    }
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" color="inherit" noWrap>
            Laptops
          </Typography>
          <div sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="subtitle1" sx={{ color: 'white', marginRight: 0 }}>
              Sort by: &nbsp;
        
            <Select
              value={sortCriteria}
              onChange={(e) => handleSort(e.target.value)}
              sx={{ color: 'white' }}
            >
              <MenuItem value="default">Default</MenuItem>
              <MenuItem value="brand">Brand</MenuItem>
              <MenuItem value="price">Price</MenuItem>
            </Select>
            </Typography>
          </div>
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon onClick={handleSearch} style={{ cursor: 'pointer' }} />
                </InputAdornment>
              ),
            }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Container>
      </AppBar>
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {sortedCardData.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%',
                    }}
                    image={`${process.env.PUBLIC_URL}/images/${card.image}`}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.brand}
                    </Typography>
                    <Typography>
                      {searchTerm
                        ? card.description.split(new RegExp(`(${searchTerm})`, 'i')).map((text, index) =>
                            index % 2 !== 0 ? (
                              <span key={index} style={{ backgroundColor: '#FFFF00' }}>
                                {text}
                              </span>
                            ) : (
                              text
                            )
                          )
                        : card.description}
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: 1 }}>
                      Price: {card.price.toFixed(2)} <br></br> Stock: {card.stock}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => addToCart(card)}>
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* Display Cart Items */}
        {cartItems.length > 0 && (
          <Container sx={{ py: 4 }} maxWidth="md">
            <Typography variant="h6" gutterBottom>
              Cart Items
            </Typography>
            <Grid container spacing={4}>
              {cartItems.map((cartItem, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {cartItem.brand}
                      </Typography>
                      <Typography>{cartItem.description}</Typography>
                      <Typography variant="h6" sx={{ marginTop: 1 }}>
                        Price: {cartItem.price.toFixed(2)}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" onClick={() => removeFromCart(index)}>
                        Remove
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            {/* Display Total Amount */}
            <Typography variant="h6" sx={{ marginTop: 2 }}>
              Total Amount: {calculateTotalAmount()}
            </Typography>
            <Button component={Link} to="/detail" variant="contained" color="primary" onClick={handleCheckout} sx={{ marginTop: 2 }}>
              Checkout
            </Button>
          </Container>
        )}
      </main>
    </ThemeProvider>
  );
}
