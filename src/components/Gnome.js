import React from 'react';
import classes from '../app.module.css';
import LazyLoad from 'react-lazyload';

const Gnome = (props) => {

    let className = classes.window;
    if( props.show ){
        className = classes.window;
    }else{
        className = classes.closed;
    }
    
    return (
        <div>
            <LazyLoad width={100}
                    height={100}
                    debounce={false}
                    offset={100}
                    once>

                <img alt={props.name}
                        src={props.thumbnail} 
                        onClick={ (event) => {props.click(event,props.id)}} />
            </LazyLoad>  

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
        </div>
    );
}

export default Gnome;
