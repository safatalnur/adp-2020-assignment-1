import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
      root: {
            '& > *': {
                  margin: theme.spacing(1),
                  width: 400,
                  // textAlign:'center',
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



function HomePage () {

      const classes = useStyles();
      const [search, setSearch] = useState('')
      // const [query, setQuery] = useState('')

//       function onSubmit(e) {
//             e.preventDefault()
//             setQuery(search)
//             console.log(search)
// }

      const url = "/weather/".concat(search)

      return (
            <div className="bodyContainer">
                  <div className="bodyHeader">
                        <h1>WorldWide Weather</h1>
                        <p>Find weather info for 200,000+ cities around the World!!!!!! </p>
                  </div>

                  <div className="bodyInput">
                        <form className={classes.root} noValidate autoComplete="off">
                              <TextField id="standard-basic" label="Please Enter a City, Country(Abb)" value={search} onChange={e=>setSearch(e.currentTarget.value)} />
                              <br />
                              <Link to={url}>
                                    <button className={classes.submitButton} type="submit" >Get Weather Report</button>
                              </Link>
                        </form>
                  </div>
            </div>
      )
}
export default HomePage