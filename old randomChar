import React, {Component} from 'react';
import styled from 'styled-components';
import gotServices  from '../../services/gotServices';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import PropTypes from 'prop-types';

const RandomCharStyle = styled.div`
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
    img {
        width : 100%;
    }
    span {
        
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
            letter-spacing: 2px;            
        }
    }    
`;

export default class RandomChar extends Component {
    
    gotServices = new gotServices();
    state = {
       char : {},
       loading : true,
       error: false
    }

    static defaultProps = {
        interval: 15000 
    }
    
    static propTypes = {
        interval : PropTypes.number
    }

    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar , this.props.interval);  
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    onError = (err) => {
        this.setState({
            error : true,
            loading: false

        })
    }

    onCharLoaded = (char) => {
        this.setState({ 
            char,
            loading: false,
            error : false            
        })
    }
    
    updateChar = () => {        
        const id = Math.floor(Math.random() * 140 + 25) ; // 25-140 gacha degani                    
        this.gotServices.getCharacter(id)
            .then((this.onCharLoaded))
            .catch((this.onError)) 
    }

    render() {
        console.log('render');
        const { char , loading , error } = this.state;

        const errorMessage = error ? <ErrorMessage/> : null ;
        const spinner = loading ? <Spinner/> : null ;
        const content = !(loading || error) ? <View char={char}/> : null ; 
        
        return (
            <RandomCharStyle>
                {spinner}
                {errorMessage}
                {content}
            </RandomCharStyle>
        );
    }
}



const View = ({char}) => {
    const {name , gender , born , died , culture} = char ;
    return (
        <>
            <h4>Random Character: {name}</h4>
            <ListStyle>
                <ListItem>
                    <span >Gender </span>
                    <span>{gender}</span>
                </ListItem>
                <ListItem>
                    <span >Born </span>
                    <span>{born}</span>
                </ListItem>
                <ListItem>
                    <span >Died </span>
                    <span>{died}</span>
                </ListItem>
                <ListItem>
                    <span >Culture </span>
                    <span>{culture}</span>
                </ListItem>
            </ListStyle>
        </>
    )
}