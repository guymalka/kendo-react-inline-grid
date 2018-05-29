export const productUpdated = (product) => {
    return {
        type: 'ITEM_UPDATE',
        payload: product
    }
}

export const itemChange = (row, val, field) => {
    return {
        type: 'ITEM_Change',
        payload:{ dataItem:  row, value: val,field: field } 
    }
}

export const productEdit = (product) => {
    return {
        type: 'ITEM_EDIT',
        payload: product
    }
}

export const productDelete = (product) => {
    return {
        type: 'ITEM_DELETE',
        payload: product
    }
}

export const productAdd = (product) => {
    return {
        type: 'ITEM_ADD',
        payload: product
    }
}

export const toggleNew = (isNew) => {
    return {
        type: 'TOGGLE_NEW',
        isNew: isNew
    }
}

export const changeSelect = (index) => {
    return {
        type: 'CHANGE_SELECT',
        index: index
    }
}