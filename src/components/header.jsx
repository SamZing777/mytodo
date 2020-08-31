import React, { Component } from 'react';

import ListItems from './List/index';

import './style.css';


class Header extends Component{
    
   constructor(props){
        super(props);
        
            this.state = {
                items: [],
                
                currentItem: {
                    text: '',
                    key: ''
            }
        }
       
       this.handleInput = this.handleInput.bind(this);
       this.addItem = this.addItem.bind(this);
       this.deleteItem = this.deleteItem.bind(this);
       this.updateItem = this.updateItem.bind(this);
    }
    
    handleInput(e){
        this.setState({
            currentItem: {
                text: e.target.value,
                key: Date.now()
            }
        });
    }
    
    addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.text !== ""){
            const newItems = [...this.state.items, newItem];
            this.setState({
                items: newItems,
                currentItem: {
                    text: '',
                    key: ''
                }
            })
        }
    }
    
    deleteItem(key){
        const filteredItems = this.state.items.filter(item => item.key !== key);
        this.setState({
            items:filteredItems
        }) 
    }
    
    updateItem(text, key){
        const items = this.state.items;
        items.map(item => {
            if(item.key === key ){
                item.text = text;
            }
        })
        this.setState({
            items: items
        })
    }
    
    
    render(){
    
        return(
            <React.Fragment>
                <header className="text-center">
                    <form id="to-do"  onSubmit={ this.addItem }>
                        <input type="text" placeholder="Enter to do" value={ this.state.currentItem.text } onChange={ this.handleInput } />
                        <button type="submit">Add</button>
                    </form>
                </header>
                
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ListItems items = {this.state.items} deleteItem = {this.deleteItem} updateItem={this.updateItem} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
        
    }
}

export default Header;