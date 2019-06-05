import React from 'react';
import classes from '../app.module.css';
import Gnome from './Gnome';

const Gnomes = (props) => {

    return(
        <div className={classes.Gnomes}>
            {props.list.map( (item) => {
                return <Gnome key={item.id} click={props.click} {...item} />}
            )}
        </div>
    )
}

export default Gnomes;