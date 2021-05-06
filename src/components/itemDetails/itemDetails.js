import React, {Component} from 'react';
import styled from 'styled-components';
import gotServices from '../../services/gotServices';
import './itemDetails.css';

const ItemDetailStyle = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius : 3% ;  
    color : white;
    background-color: rgb(0, 0, 51);
    h4 {
        margin-bottom: 20px;
        text-align: center;
        transition-duration: 0.5s ;
        transition-property: letter-spacing ;
        transition-timing-function: linear;       
    }    
    :hover {
        h4 {
            letter-spacing: 5px;
        }
    }    

`;
const ListStyle = styled.ul`
    border-radius : 3% ;    
`;
const ListItem = styled.li`
    height: 50px;
    display: flex;
    align-items: center; 
    justify-content: space-between;
    list-style: none;    
    border-bottom: 1px solid gray ;
    padding : 5px;
    cursor : pointer;
    span {
        transition-duration: 0.5s ;
        transition-property: all ;
        transition-timing-function: linear;
        font-weight: bold;
    }   
    :hover {        
        span {
            font-size : 16px;   
            letter-spacing: 5px;
            
        }
    }
    
`;

const Field = ({item,field, label}) => {
    return (
        <ListItem>
            <span >{label}</span>
            <span>{item[field]}</span>
        </ListItem>
    )
}

export {
    Field
}

export default class ItemDetails extends Component {

    gotServices = new gotServices();

    state = {
        item: null
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps) {
        if(this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }
    
    updateItem() {
        const {itemId} = this.props;
        if(!itemId) {
            return;
        }
        
        const {getData} = this.props;
        getData(itemId)
            .then((item) => {
                this.setState({item})
            })         
    }    

    render() {

        if(!this.state.item) {
            return <span className='span'>Please select a character!</span>
        }

        const {item} = this.state
        const {name} = item

        return (
            <ItemDetailStyle>
                <h4>{name}</h4>
                <ListStyle>
                    {
                        React.Children.map(this.props.children , (child) => {
                            return React.cloneElement(child , {item})
                        })
                    }
                </ListStyle>
            </ItemDetailStyle>
        );
    }
}