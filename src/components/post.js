import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme)=>({
        root:{
            width: '100%',
            margin: theme.spacing(1),
        },
        heading:{
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,

        },
}))

function Post(props) {
    const classes= useStyles();

    
    
    return (
        <div className={classes.root}>
        <ExpansionPanel>
            <ExpansionPanelSummary 
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panle1a-content'
            id='panel1a-header'
            >
            <Typography className={classes.heading}>{props.id}.{props.title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                    {props.time}
                    <br />
                    {props.description}
                    <br />
                    <Button 
                        onClick={props.handleClick} 
                        variant='outlined' 
                        color='secondary' 
                        startIcon={<DeleteIcon />}
                        size='small'>Delete</Button>
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
            {/* <h1>{props.id}</h1>
            <h4>{props.time}</h4>
            <h3>{props.title}</h3>
            <p>{props.description}</p> */}
        </div>
    )
}

export default Post
