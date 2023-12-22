import * as React from 'react';
import { Link } from 'react-router-dom';
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

const cardData = [
  {
    id: 1,
    image: 'Ac.jpg',
    heading: 'AC',
    path: '/ac',
  },
  {
    id: 2,
    image: 'wm.jpg',
    heading: 'Washing Machine',
    path: '/washing-machine',
  },
  {
    id: 3,
    image: 'fridge.jpg',
    heading: 'Fridge',
    path:'',
  },
  {
    id: 4,
    image: 'lp.jpg',
    heading: 'LapTop',

    path:'/lp',
  },
  {
    id: 5,
    image: 'mixer.jpg',
    heading: 'Mixer',
    path:'',
  },
  {
    id: 6,
    image: 'trimmer.jpg',
    heading: 'Trimmer',
    path:'',
  },
];

const defaultTheme = createTheme();

export default function Album() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = () => {
    // Implement your search logic using the 'searchTerm' state
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" color="inherit" noWrap >
            Products
          </Typography>
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            sx={{ ml: 2, backgroundColor: 'white' }}
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
            {cardData.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%',
                    }}
                    image={`${process.env.PUBLIC_URL}/images/${card.image}`}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.heading}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" component={Link} to={card.path}>
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
    </div>
  );
}
