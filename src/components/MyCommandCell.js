import React from 'react';
import { GridCell } from '@progress/kendo-react-grid';

export default function MyCommandCell(remove, update, edit) {    
    return class extends GridCell {
        
        render() {        
            if (!this.props.dataItem.inEdit){
                return (
                        <td>
                            <button
                                className="k-button k-grid-remove-command"
                                onClick={(e) => edit(this.props.dataItem)  }>
                                Edit
                            </button>
                            <button
                                className="k-button k-grid-remove-command"
                                onClick={(e) => window.confirm('Confirm deleting: ' + this.props.dataItem.ProductName) && remove(this.props.dataItem)}>
                                discard
                            </button>
                        </td>   
                );
            }
            else{
                return(<td>
                    <button
                        className="k-button k-grid-remove-command"
                        onClick={(e) =>  update(this.props.dataItem)}>
                        Update
                    </button>
                    <button
                        className="k-button k-grid-remove-command"
                        onClick={(e) => window.confirm('Confirm deleting: ' + this.props.dataItem.ProductName) && remove(this.props.dataItem)}>
                        Remove
                    </button>
                </td>);
            }
        }
    }
};