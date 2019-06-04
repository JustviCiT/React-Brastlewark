import React,{Component} from 'react';
import classes from '../app.module.css';
import GnomeImage from './GnomeImage';
import GnomeDetail from './GnomeDetail';
import LazyLoad from 'react-lazyload';

const Gnomes = (props) => {
    return(
        <div className={classes.Gnomes}>
            {props.list.map( (item) => {
                return (
                <div>
                    <LazyLoad width={100}
                                height={100}
                                debounce={false}>

                        <GnomeImage key={item.id} 
                            name={item.name} 
                            src={item.thumbnail} 
                            onClick={ (event) => {props.click(event,item.id)}}  /> 
                    </LazyLoad>  

                    <GnomeDetail key={item.id}
                        show={item.show}
                        name={item.name}
                        age={item.age}
                        weight={item.weight}
                        height={item.height}
                        hair_color={item.hair_color}
                        professions={item.professions}
                        friends={item.friends} 
                        />
                </div>
                )})}
        </div>
    )
}

export default Gnomes;