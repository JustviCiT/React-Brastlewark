import React, {Component} from 'react'
import classes from '../app.module.css';
import SearchBar from '../components/SearchBar'
import Gnomes from '../components/Gnomes'

const TOWNAPI = "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";

class GnomeTownBuilder extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            townGnomes: [],
            search: ""
        }
    }

    componentDidMount() {
        fetch(TOWNAPI)
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Something went wrong ...');
            }
          })
          .then(data => {
            data.Brastlewark.map(function(el) {
                el.show = false;
            })

                this.setState({ townGnomes: data.Brastlewark });
            })
    }

    showDetails = (event, id) => {
        const brastleIndex =  this.state.townGnomes.findIndex((p) => {
            return p.id === id;
        })
        
        const gnome = {
            ...this.state.townGnomes[brastleIndex]
        }

        gnome.show = !gnome.show;
        
        const brastles = [...this.state.townGnomes];
        brastles[brastleIndex] = gnome;
    
        this.setState((prevState, props) => {
            return {
                townGnomes: brastles
            }
        });
        
    }

    updateSearch = (event) =>{
        this.setState({search: event.target.value});
    }


  
    render(){
        let filteredGnomes = this.state.townGnomes.filter(
            (gnome) => {
                return gnome.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            }
        );

        return(
            <div >
                <div className={classes.header}>
                    <h1>  Welcome To Brastlewark </h1>
                </div>
                <div className={classes.container}>
                    <SearchBar value={this.state.search} onChange={this.updateSearch} />
                    <Gnomes list={filteredGnomes} click={this.showDetails} />
                </div>
                <div className={classes.footer}>
                    <h6> See you ! </h6>
                </div>
            </div>
        )
    }
}

export default GnomeTownBuilder;