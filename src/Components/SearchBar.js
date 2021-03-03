import React, { Component } from 'react';
import {Paper,TextField} from '@material-ui/core';

export class SearchBar extends Component {

    state={
        SearchTerm:""
    }
    //for taking input from user
    handleChange=(e)=>this.setState({SearchTerm:e.target.value})
    
    //for taking values from the state when user click serch button 
    handleSubmit=(e)=>{
        e.preventDefault();
        const searchTerm=this.state.SearchTerm;
        const {onFormSubmit}=this.props;
        onFormSubmit(searchTerm);
        
    }
    render() {
        return (
            <Paper elevation={6} style={{padding:'25px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                     fullWidth 
                     label="Search"
                     onChange={this.handleChange}
                     >

                    </TextField>
                </form>
            </Paper>

        )
    }
}

export default SearchBar
