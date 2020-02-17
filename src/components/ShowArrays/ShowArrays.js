import React from 'react';
import List from "../List/List";
class ShowArrays extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           value: '',
           list: ['a', 'b', 'c'],
       };
       this.onAddItem = this.onAddItem.bind(this);
       this.onChangeValue = this.onChangeValue.bind(this);
   }
    onChangeValue(e) {
        this.setState({ value: e.target.value });
    };
    onAddItem() {
        this.setState(state => {
            const list = [...state.list, state.value];
            return {
                list,
                value: '',
            };
        });
    };
   render() {
       return (
           <div>
               <List list={this.state.list} />
               <input
                   type="text"
                   value={this.state.value}
                   onChange={this.onChangeValue}
               />
               <button
                   type="button"
                   onClick={this.onAddItem}
                   disabled={!this.state.value}
               >
                   Add
               </button>
           </div>
       );
   }
}
export default ShowArrays;