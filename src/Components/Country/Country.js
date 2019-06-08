import React from 'react';
import axios from 'axios';
import './../../App.css';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default class Country extends React.Component {
  constructor(props) {
    super(props);

    // Establish our state
    this.state = {
      name: '',
      countries: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.searchCountry = this.searchCountry.bind(this)
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  searchCountry(event) {
    event.preventDefault();
    if (this.state.name !== '') {
      axios.get('https://restcountries-v1.p.rapidapi.com/name/' + this.state.name, {
        headers: {
          'X-RapidAPI-Host': 'restcountries-v1.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.REACT_APP_COUNTRY_API_KEY
        }
      }).then((response) => {
        this.setState({ countries: response.data });
      }).catch(() => {
        this.setState({ countries: [] })
      })
    }
  }

  render() {
    return (
      <div>
        <Typography variant="h6" gutterBottom>
          Find Country Information
        </Typography>
        <Typography variant="body1" gutterBottom>
            Enter keyword to get country detail information
        </Typography>
        <form noValidate autoComplete="off" onSubmit={this.searchCountry}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="standard-name"
                label="Country Name"
                value={this.state.name}
                margin="normal"
                variant="outlined"
                onChange={this.handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="secondary" size="large" onClick={this.searchCountry}>
                Search
              </Button>
            </Grid>
          </Grid>
        </form>
        {
          this.state.countries.length ? (
            <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
              Search Result
            </Typography>
          ) : null
        }
        <Grid container spacing={2}>
          { this.state.countries.map((data, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {data.name}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary" component="p" m={0}>
                    Population: {data.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary" component="p" m={0}>
                    Capital: {data.capital}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary" component="p" m={0}>
                    Currency: <span> </span>
                    { data.currencies.map((currency, index) => (
                      <Typography variant="subtitle2" color="textSecondary" component="span" key={index}>
                      { currency }
                      </Typography>
                    )) }
                  </Typography>
                  
                </CardContent>
              </Card>
            </Grid>
          )) }
        </Grid>
      </div>
    )
  }
}
