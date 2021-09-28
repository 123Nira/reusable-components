// import React, { Component } from 'react';
// import { AppProvider, Page } from '@shopify/polaris';
// import DataTable from '../components/Table/DataTable';

// class TableGrid extends Component {

//    headings = ["Id", "ProductName", "SKU", "Name"];
//     constructor(props) {
//         super(props);
    
//         this.state = {
//           message: "",
//           items: []
//         }
//       }
    
//       handleClick() {
//         var items = this.state.items;
//         items.push(this.state.message);
//         this.setState({
//           items: items,
//           message: ""
//         });
//       }
    
//       updateMessage(event) {
//         this.setState({
//           message: event.target.value
//         });
//       }
    
//     //   handleItemChanged(i, event) {
//     //     var items = this.state.items;
//     //     items[i] = event.target.value;
    
//     //     this.setState({
//     //       items: items
//     //     });
//     //   }
    
//     //   renderRows() {
//     //     var context = this;
//     //     return this.state.items.map(function (o, i) {
//     //       return (
//     //         <tr key={"item-" + i}>
//     //           <td>
//     //             <input
//     //               type="text"
//     //               value={o}
//     //               onChange={context.handleItemChanged.bind(context, i)}
//     //             />
//     //           </td>
//     //         </tr>
//     //       );
//     //     });
//     //   }
    
//     render() {

//         // const headings = ["Id", "ProductName", "SKU", "Name"];

//         // const rows = [
//         //     [1, "Red and black ", 124689325, "Rahul"],
//         //     [2, "Red and black ", 124689325, "Rahul"]
//         // ];


//         return (
//             <AppProvider>
//                 <Page title="Data table">
//                     <DataTable headings={headings} >
//                     <input
//                  type="text"
//                value={this.state.message}
//              onChange={this.updateMessage.bind(this)}
//         />
//                         </DataTable>
//                     <button onClick={this.handleClick.bind(this)}>Add Item</button>
                    
//                     {/* <button onClick={this.handleAddClick.bind(this)}>Add</button> */}
//                 </Page>
//             </AppProvider>
//         );
//     }
// }

// export default TableGrid;