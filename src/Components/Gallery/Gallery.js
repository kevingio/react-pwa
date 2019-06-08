import React from 'react';
import axios from 'axios';
import './../../App.css';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default class Gallery extends React.Component {

  constructor(props) {
    super(props);

    // Establish our state
    this.state = {
      keyword: '',
      photos: []
    }

    this.searchPhotos = this.searchPhotos.bind(this)
    this.fetchPhotos = this.fetchPhotos.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.fetchPhotos()
  }

  handleChange(e) {
    this.setState({
      keyword: e.target.value
    })
  }

  searchPhotos(event) {
    event.preventDefault();
    if(this.state.keyword !== '') {
      axios.get('https://api.unsplash.com/search/photos?page=1&query=' + this.state.keyword, {
        headers: {
          'Authorization': 'Client-ID ' + process.env.REACT_APP_UNSPLASH_API_KEY,
          'Content-Type': 'application/json',
        }
      }).then((response) => {
        this.setState({ photos: response.data.results })
      }).catch(() => {
        this.setState({ photos: [] })
      })
    }
  }

  fetchPhotos() {
    axios.get('https://api.unsplash.com/photos?page=1&per_page=18', {
      headers: {
        'Authorization': 'Client-ID ' + process.env.REACT_APP_UNSPLASH_API_KEY,
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      this.setState({ photos: response.data })
    }).catch(() => {
      this.setState({ photos: [] })
    })
  }

  render() {
    return (
      <div>
        <Typography variant="h6" gutterBottom>
          Find Some Awesome Photos
        </Typography>
        <form noValidate autoComplete="off" onSubmit={this.searchPhotos}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="standard-name"
                label="Keyword"
                value={this.state.keyword}
                placeholder="enter keyword"
                margin="normal"
                variant="outlined"
                onChange={this.handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="secondary" size="large" onClick={this.searchPhotos}>
                Search
              </Button>
            </Grid>
          </Grid>
        </form>
        <Grid container spacing={2} style={{ marginTop: '20px' }} direction="row" alignItems="stretch">
          {this.state.photos.map((data, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar alt="Remy Sharp" src={data.user.profile_image.large} />
                  }
                  action={
                    <IconButton aria-label="Settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={data.user.name}
                  subheader={data.user.username}
                />
                <CardMedia
                  image={data.urls.regular}
                  title={data.alt_description}
                  style={{ width: '100%', height: '200px' }}
                />
                <CardActions style={{ margin: '5px' }}>
                  <FavoriteIcon color="error" />
                  <Typography variant="body1" style={{ marginLeft: '10px' }}> {data.likes} likes </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }
}
