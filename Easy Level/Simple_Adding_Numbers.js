

function SimpleAdding(num) { 
    
    if (num === 0) {
        return 0;
    } else if (num > 0){
        return num + SimpleAdding(num - 1);
    } else {
        return 'Out of range';
    }      

}
