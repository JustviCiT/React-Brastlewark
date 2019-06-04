import React from 'react';
import classes from '../app.module.css';

const GnomeDetail = (props) => {

    let className = classes.window;
    if( props.show ){
        className = classes.window;
    }else{
        className = classes.closed;
    }

    return (
        <div className={className}>
            <h3>Name: {props.name}</h3>
            <p>Age: {props.age} </p>
            <p>Weight: {props.weight} </p>
            <p>Height: {props.height} </p>
            <p>Hair color: {props.hair_color} </p>
            <p>Professions: {props.professions.map(element => {
                return element + " ";
            })} </p>
            <p>Friends: {props.friends.map(element => {
                return element + " ";
            })} </p>
        </div>
    );
}

export default GnomeDetail;
