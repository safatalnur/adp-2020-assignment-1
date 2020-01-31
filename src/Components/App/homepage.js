import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
      root: {
            '& > *': {
                  margin: theme.spacing(1),
                  width: 400,
                  textAlign:'center',
                  },
            },
      submitButton: {
            padding: 10,
            fontSize: 20,
            backgroundColor: 'transparent',
            border: '2px solid black',
            boxShadow: '0px 15px 45px -15px rgba(0,0,0,0.75)'
            }
}));

      function onSubmit(e) {
                  e.preventDefault()
                  // setQuery(search)
                  console.log(search)
}


function HomePage () {

      const classes = useStyles();
      const [search, setSearch] = useState('')


      return (
            <div className="bodyContainer">
                  <div className="bodyHeader">
                        <h1>WorldWide Weather</h1>
                        <p>Find weather info for 200,000+ cities around the World!!!!!! </p>
                  </div>

                  <div className="bodyInput">
                        <form className={classes.root} noValidate autoComplete="off" 
                        onSubmit={onSubmit}>
                        <TextField id="standard-basic" label="Please Enter a City, Country(Abb)" value={search} onChange={e=>setSearch(e.currentTarget.value)} />
                        <br />
                        <button className={classes.submitButton} type="submit">Get Weather Report</button>
                  </form>

                  </div>
            </div>
      )
}
export default HomePage