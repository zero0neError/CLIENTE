var Coche = /** @class */ (function () {
    function Coche(modelo, color) {
        this.color = color;
        this.modelo = modelo;
    }
    Coche.prototype.getInfo = function () {
        return "Color: " + this.color + ", Modelo: " + this.modelo;
    };
    return Coche;
}());
