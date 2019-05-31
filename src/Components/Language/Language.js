import React from 'react';
import axios from 'axios';
import './../../App.css';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class Language extends React.Component {
  constructor(props) {
    super(props);

    // Establish our state
    this.state = {
      keyword: '',
      country: null,
      detectLang: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.detectLanguage = this.detectLanguage.bind(this)
  }

  componentDidMount() {
    // let DetectLanguage = require('detectlanguage');
    // let detectLang = new DetectLanguage({
    //   key: process.env.REACT_APP_TRANSLATE_API_KEY,
    //   // ssl: false
    // });
    // console.log(detectLang)
    // var dataSimple = "I am a Teapot and a Submarine";
    // detectLang.detect(dataSimple, function (error, result) {
    //   console.log(JSON.stringify(result));
    // });
    // this.setState({
    //   detectLang: detectLang
    // })
  }

  handleChange(e) {
    this.setState({
      keyword: e.target.value
    })
  }

  detectLanguage(event) {
    event.preventDefault();
    if (this.state.keyword !== '') {
      console.log(this.state.keyword)
      axios.post('https://ws.detectlanguage.com/0.2/detect', { q: this.state.keyword }, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer ' + process.env.REACT_APP_TRANSLATE_API_KEY,
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.setState({ country: response.data.detections[0].language });
        console.log(response.data)
      }).catch(() => {
        this.setState({ country: null })
      })
    }
  }

  render() {
    return (
      <div>
        <Typography variant="h6" gutterBottom>
          Detect Language
        </Typography>
        <Typography variant="body1" gutterBottom>
          Enter keyword in any language
        </Typography>
        <form noValidate autoComplete="off" onSubmit={this.detectLanguage}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="standard-name"
                label="Keyword"
                value={this.state.keyword}
                margin="normal"
                variant="outlined"
                onChange={this.handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="secondary" size="large" onClick={this.detectLanguage}>
                Search
              </Button>
            </Grid>
          </Grid>
        </form>
        {
          this.state.country ? (
            <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
              Search Result: &nbsp; { this.state.country }
            </Typography>
          ) : null
        }
      </div>
    )
  }
}
