class Coche{

    private modelo;
    private color;

    constructor (modelo,color){

        this.color=color;
        this.modelo=modelo;
    }

    public getInfo(){

        return "Color: "+this.color+", Modelo: "+this.modelo;
    }
}