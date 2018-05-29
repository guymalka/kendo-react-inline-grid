import React from 'react';
import { connect } from 'react-redux';
import { productUpdated, productDelete, productEdit, itemChange } from '../actions/index';
import MyCommandCell from './MyCommandCell'
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';

class GridContainer extends React.Component {
    constructor(props) {
        super(props);

        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.edit = this.edit.bind(this);
        this.CommandCell = MyCommandCell(this.remove, this.update, this.edit);
        this.addItem = this.addItem.bind(this);
        this.itemChange = this.itemChange.bind(this)
    }
    edit(dataItem){        
        this.props.productEdit(dataItem);        
    }
    update(dataItem){
        console.info('update');
        this.props.productUpdated(dataItem);
    }
    addItem() {
        this.props.addProduct();
    }

    remove(dataItem) {
        this.props.productDeleted(dataItem);
    }
    itemChange(event){        
        this.props.itemChange(event.dataItem, event.value, event.field);     
    }
    render() {
        return (
            <div className="grid-container col-md-8 col-sm-12 col-xs-12">
                <div className="header">
                    <h5>Data</h5>
                </div>
                <Grid
                    itemChange={this.itemChange}      
                    style={{ maxHeight: "600px" }}
                    editField="inEdit"
                    data={this.props.products}                    
                >
                    <GridToolbar>
                        <button
                            title="Add new"
                            className="k-button k-primary"
                            onClick={this.addItem}
                            disabled={this.props.isNew}
                        >
                            Add new
                        </button>
                    </GridToolbar>
                    <Column field="ProductID" title="ID" width="40px" />
                    <Column field="ProductName" title="Name" width="150px" />
                    <Column field="UnitPrice" title="Price" width="80px" />
                    <Column field="UnitsInStock" title="In stock" width="80px" />
                    <Column cell={this.CommandCell} width="120px" />
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.productsReducer.products,
        isNew: state.selectionReducer.isNew,
        selectedRow: state.selectionReducer.selectedRow
    }
}

export default connect(mapStateToProps, { productUpdated, productDelete, productEdit, itemChange })(GridContainer);
