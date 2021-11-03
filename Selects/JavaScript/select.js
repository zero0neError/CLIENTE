HTMLSelectElement.prototype.añadirTodos=function(select){
    
    while(select.children.length>0){
        this.appendChild(select.children[0]);
    }
}

HTMLSelectElement.prototype.añadir=function(select){

    while(select.selectedIndex>-1){
        var selecteds = select.selectedOptions;
        this.appendChild(selecteds[0]);
        
    }  
}

HTMLSelectElement.prototype.ordena=function(){
    var elements = this.options;
    var vector=[];
    for(let i=0;i<elements.length;i++){

        vector.push(elements[i]);
    }
    vector.sort(function(a,b){

        return a.innerHTML.localeCompare(b.innerHTML);
    });
    for(let i=0;i<vector.length;i++){

        this.appendChild(vector[i]);
    }
}

