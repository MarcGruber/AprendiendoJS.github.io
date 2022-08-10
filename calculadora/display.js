class Display {
   
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            restar: '-',
            dividir: '/',
            multiplicar: '*'
        }
    }

    agregarNumero(numero){

        if (numero === '.' && this.valorActual.includes('.')) return
        this.valorActual+=numero.toString();
        this.imprimirValores() 
        
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1)
        this.imprimirValores() 

    }

    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined; 
        this.imprimirValores()
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior)
        const valorActual = parseFloat(this.valorActual)

        if (isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual = this.calculadora[this.tipoOperacion](valorActual, valorAnterior);
            
        
    }

    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular()
        this.tipoOperacion = tipo
        this.valorAnterior= this.valorActual || this.valorAnterior
        this,this.valorActual = '';
        this.imprimirValores()
    }

    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

}