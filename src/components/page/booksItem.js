import React, { Component } from 'react';
import gotServices from '../../services/gotServices';
import ItemDetails,{Field} from '../itemDetails';

export default class BooksItem extends Component{

    gotServices = new gotServices();
    
    render() {
        return(

            <ItemDetails 
            itemId={this.props.bookId}
            getData={this.gotServices.getBook}>
                <Field field='numberOfPages' label='NumberOfPages'/>  
                <Field field='publiser'label='Publiser'/>
                <Field field='released'label='Released'/>                      
            </ItemDetails>

        )
    }

}