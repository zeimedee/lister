import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import {addTodo} from '../redux/actions'
import Textfield from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'

const useStyles = makeStyles((theme)=>({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}))



function Form() {
    const classes = useStyles();
    const [open,setOpen] = useState(false);
    const [id,setId] = useState(1);

    const [time,setTime] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const dispatch = useDispatch('');

    
    const handelClose =  () => {
        setOpen(false);
    }

        const handleSubmit = (e) => {
            e.preventDefault();
         var post = {
                'id': id,
                'time': time,
                'title': title,
                'description': desc
            }

            if(post.title !== '' && post.time !== ''){
            dispatch(addTodo(post))
            setTime('')
            setTitle('')
            setDesc('')
            setId(id + 1);
            console.log(post);
        }else{
            setOpen(true);
        }
        }

    return (
        <div>
        <form className={classes.root} onSubmit={handleSubmit}>
            <div>
                <Textfield 
                    label="Time"
                    id='filled-size-small'
                    variant='outlined'
                    size='small'
                    value={time}
                    onChange={e=>setTime(e.target.value)}
                />
            </div>
                <div>
                <Textfield
                    label='Title'
                    id='filled-size-small'
                    variant='outlined'
                    size='small'
                    value={title}
                    onChange={e=>setTitle(e.target.value)}
                />
            </div>
            <div>
                <Textfield
                    label='Description'
                    id='filed-size-small'
                    variant='outlined'
                    size='small'
                    value={desc}
                    onChange={e=>setDesc(e.target.value)}
                />
            </div>
            <div><Button type='submit' variant='outlined' color='primary'>Add</Button></div>
            
            
        </form>

        <Dialog
        open={open}
        onClose={handelClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        >
        <DialogTitle id='alert-dialog-title'>{'Enter Time and Title'}</DialogTitle>
        <Button onClick={handelClose}>CLOSE</Button>

        </Dialog>

        </div>
    )
}

export default Form;
