function Emitter (){ // se exporta el constructor
    this.events = {};
}

Emitter.prototype.on = function (type, listener){ //funcion on con dos parametros, type y listener
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type){ //método emit que recibe el tipo de evento
    if(this.events[type]){
        this.events[type].forEach(function(listener){
            listener();
        });
    }
}

module.exports = Emitter;