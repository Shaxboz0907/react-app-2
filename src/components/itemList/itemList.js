import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';

const ListStyle = styled.ul`
    border-radius : 5% ;      
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
    color : white;
    background-color: rgb(0, 0, 51);
    transition-duration: 0.5s ;
    transition-property: all ;
    transition-timing-function: linear;
    font-weight: bold; 
    padding: 15px ;   
             
    :hover {     
        font-size : 16px;   
        letter-spacing: 5px;
        
    }
    
`;
export default class ItemList extends Component {   

    state = {
        itemList : null
    }

    componentDidMount() {
        const {getData} = this.props;
        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems (arr) {
        return arr.map((item) => {
            const {id} = item ;
            const label = this.props.renderItem(item);
            return (
                <ListItem 
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                   {label}
                </ListItem>
            )
        })
    }

    render() {

        const { itemList } = this.state ;

        if (!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList);

        return (
            <ListStyle >
               {items}
            </ListStyle>
        );
    }
}