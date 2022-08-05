import React, { Component } from 'react';
import styled from "@emotion/styled";

import Select from "react-dropdown-select";


export default class SelectItems extends Component {
    options = () =>
        this.props.options.map(item => ({
            label: item.label,
            value: item.value,
            cat: item.cat,
            type : item.type
        }));

    customContentRenderer = ({ props, state, methods }) => (

        <div style={{ cursor: "pointer" }}>
            {state.values.length} of {props.options.length} selected
        </div>
    );

    customDropdownRenderer = ({ props, state, methods }) => {
        const regexp = new RegExp(state.search, "i");

        return (
            <div>
                <SearchAndToggle>
                    <Buttons>
                        <div>Search {this.props.searchTitle}:</div>
                        {state.values.length === props.options.length ? (
                            <Button className="clear" onClick={methods.clearAll}>
                                Clear all
                            </Button>
                        ) : (
                            <Button onClick={methods.selectAll}>Select all</Button>
                        )}
                    </Buttons>
                    {/* <input
            type="text"
            value={state.search}
            onChange={methods.setSearch}
            placeholder="Type anything"
          /> */}
                </SearchAndToggle>
                <Items>
                    {props.options
                        .filter(item => regexp.test(item[props.searchBy] || item.label))
                        .map(option => (
                            <Item key={option.value} onClick={() => methods.addItem(option)}>
                                <input
                                    type="checkbox"
                                    onChange={() => methods.addItem(option)}
                                    checked={state.values.indexOf(option) !== -1}
                                />
                                <ItemLabel>{option.label}</ItemLabel>
                            </Item>
                        ))}
                </Items>
            </div>
        );
    };

    render() {

        return (
            <div className="filter">

                <StyledSelect
                    placeholder={this.props.searchTitle}
                    multi={this.props.multi}
                    // contentRenderer={this.customContentRenderer}
                    dropdownRenderer={this.props.checkBox ? this.customDropdownRenderer : ''}
                    onChange={this.props.onChange}
                    values={[]}
                    
                    options={this.options()}
                    className={this.props.classes + ' rounded'}
                />

            </div>
        );

    }

}

const StyledSelect = styled(Select)`
.react-dropdown-select-dropdown {
  overflow-y: scroll;
  width:max-content;
}
.react-dropdown-select-dropdown::-webkit-scrollbar {
    width: 2px;
    height: 100%;
}
.react-dropdown-select-dropdown::-webkit-scrollbar-track {
    background: #f1f1f1;
    
}
.react-dropdown-select-dropdown::-webkit-scrollbar-thumb {
    background: #888;
}
.react-dropdown-select-dropdown::-webkit-scrollbar-thumb:hover {
    background: #555;
}
`;

const SearchAndToggle = styled.div`
display: flex;
flex-direction: column;

input {
  margin: 10px 10px 0;
  line-height: 30px;
  padding: 0px 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  :focus {
    outline: none;
    border: 1px solid deepskyblue;
  }
}
`;

const Items = styled.div`
overflow: auto;
min-height: 10px;
max-height: 500px;
`;

const Item = styled.div`
display: flex;
margin: 10px;
align-items: baseline;
`;

const ItemLabel = styled.div`
margin: 5px 10px;
`;

const Buttons = styled.div`
display: flex;
justify-content: space-between;

& div {
  margin: 10px 0 0 10px;
  font-weight: 600;
}
`;

const Button = styled.button`
background: none;
border: 1px solid #555;
color: #555;
border-radius: 3px;
margin: 10px 10px 0;
padding: 3px 5px;
font-size: 10px;
text-transform: uppercase;
cursor: pointer;
outline: none;

&.clear {
  color: tomato;
  border: 1px solid tomato;
}

:hover {
  border: 1px solid deepskyblue;
  color: deepskyblue;
}
`;

const DropdownComponent = styled.div``;