import { Component, OnInit } from '@angular/core';
import {  ArrayByColumna, ArrayByFila, Casilla, Sudoku, Zona } from './sudoku.models';

@Component({
  selector: 'app-sudokutable',
  templateUrl: './sudokutable.component.html',
  styleUrls: ['./sudokutable.component.css']
})
export class SudokutableComponent implements OnInit {


  
  magicSum = 45
  mensaje:string = ''
  sudokuIsvalid:boolean = false


  zona1:Zona= {
    fila:1,
    columna:1,
    casillas:[ {fila:1,columna:1,valor:5},{fila:1,columna:2,valor:3},{fila:1,columna:3,valor:4},
                {fila:2,columna:1,valor:6}, {fila:2,columna:2,valor:7}, {fila:2,columna:3,valor:2},
                {fila:3,columna:1,valor:1},{fila:3,columna:2,valor:9},{fila:3,columna:3,valor:8},  ]
     ,isCorrect:true       
              }

  zona2:Zona= {
    fila:1,
    columna:2,
    casillas:[ {fila:1,columna:1,valor:6},{fila:1,columna:2,valor:7},{fila:1,columna:3,valor:8},
                {fila:2,columna:1,valor:1}, {fila:2,columna:2,valor:9}, {fila:2,columna:3,valor:5},
                {fila:3,columna:1,valor:3},{fila:3,columna:2,valor:4},{fila:3,columna:3,valor:2},  ]
     ,isCorrect:true       
              }

  zona3:Zona= {
    fila:1,
    columna:3,
    casillas:[ {fila:1,columna:1,valor:9},{fila:1,columna:2,valor:1},{fila:1,columna:3,valor:2},
                {fila:2,columna:1,valor:3}, {fila:2,columna:2,valor:4}, {fila:2,columna:3,valor:8},
                {fila:3,columna:1,valor:5},{fila:3,columna:2,valor:6},{fila:3,columna:3,valor:7},  ]
     ,isCorrect:true       
              }
  zona4:Zona= {
    fila:2,
    columna:1,
    casillas:[ {fila:1,columna:1,valor:8},{fila:1,columna:2,valor:5},{fila:1,columna:3,valor:9},
                {fila:2,columna:1,valor:4}, {fila:2,columna:2,valor:2}, {fila:2,columna:3,valor:6},
                {fila:3,columna:1,valor:7},{fila:3,columna:2,valor:1},{fila:3,columna:3,valor:3},  ]
     ,isCorrect:true       
              }
  zona5:Zona= {
    fila:2,
    columna:2,
    casillas:[ {fila:1,columna:1,valor:7},{fila:1,columna:2,valor:6},{fila:1,columna:3,valor:1},
                {fila:2,columna:1,valor:8}, {fila:2,columna:2,valor:5}, {fila:2,columna:3,valor:3},
                {fila:3,columna:1,valor:9},{fila:3,columna:2,valor:2},{fila:3,columna:3,valor:4},  ]
     ,isCorrect:true       
              }
  zona6:Zona= {
    fila:2,
    columna:3,
    casillas:[ {fila:1,columna:1,valor:4},{fila:1,columna:2,valor:2},{fila:1,columna:3,valor:3},
                {fila:2,columna:1,valor:7}, {fila:2,columna:2,valor:9}, {fila:2,columna:3,valor:1},
                {fila:3,columna:1,valor:8},{fila:3,columna:2,valor:5},{fila:3,columna:3,valor:6},  ]
     ,isCorrect:true       
              }
  zona7:Zona= {
    fila:3,
    columna:1,
    casillas:[ {fila:1,columna:1,valor:9},{fila:1,columna:2,valor:6},{fila:1,columna:3,valor:1},
                {fila:2,columna:1,valor:2}, {fila:2,columna:2,valor:8}, {fila:2,columna:3,valor:7},
                {fila:3,columna:1,valor:3},{fila:3,columna:2,valor:4},{fila:3,columna:3,valor:5},  ]
     ,isCorrect:true       
              }
  zona8:Zona= {
    fila:3,
    columna:2,
    casillas:[ {fila:1,columna:1,valor:5},{fila:1,columna:2,valor:3},{fila:1,columna:3,valor:7},
                {fila:2,columna:1,valor:4}, {fila:2,columna:2,valor:1}, {fila:2,columna:3,valor:9},
                {fila:3,columna:1,valor:2},{fila:3,columna:2,valor:8},{fila:3,columna:3,valor:6},  ]
     ,isCorrect:true       
              }
  zona9:Zona= {
    fila:3,
    columna:3,
    casillas:[ {fila:1,columna:1,valor:2},{fila:1,columna:2,valor:8},{fila:1,columna:3,valor:4},
                {fila:2,columna:1,valor:6}, {fila:2,columna:2,valor:3}, {fila:2,columna:3,valor:5},
                {fila:3,columna:1,valor:1},{fila:3,columna:2,valor:7},{fila:3,columna:3,valor:9},  ]
     ,isCorrect:true       
              }

  miSudoku:Sudoku = {
    zonas:[this.zona1,this.zona2,this.zona3,this.zona4,this.zona5,this.zona6,this.zona7,this.zona8,this.zona9,]
  }

  
  constructor() { 
    this.miSudoku.zonas[1].casillas[1];
  }

  ngOnInit(): void {
  }


  revisar(){
    this.porZona()
    this.porHorizontal()
    this.porVertical()
  }


  porZona(){
    let arrayValXzona:number[] = []
    this.miSudoku.zonas.forEach(zona => {
      arrayValXzona = []
      //console.log(zona);
      
      zona.casillas.forEach(casilla =>{


        if (casilla.valor <1 || casilla.valor >9) {
          zona.isCorrect= false
        }

        //console.log(casilla.valor);

        if (arrayValXzona.includes(casilla.valor)== true) {
          //console.log('hay repetido por zona');
          zona.isCorrect= false
        }else{
          arrayValXzona.push(casilla.valor)
        }
        

      })
      

    })

    this.sudokuIsvalid = true 
    this.mensaje = 'SI esta armado correctamente'
    this.miSudoku.zonas.forEach(zona => {
      if (zona.isCorrect == false) {
        this.sudokuIsvalid = false 
        this.mensaje = 'NO esta armado correctamente'
      }
    })

  }

  porHorizontal(){

    let arrayByFila1:ArrayByFila= {numeros:[],isCorrect:true}
    let arrayByFila2:ArrayByFila= {numeros:[],isCorrect:true}
    let arrayByFila3:ArrayByFila= {numeros:[],isCorrect:true}
    let arrayByFila4:ArrayByFila= {numeros:[],isCorrect:true}
    let arrayByFila5:ArrayByFila= {numeros:[],isCorrect:true}
    let arrayByFila6:ArrayByFila= {numeros:[],isCorrect:true}
    let arrayByFila7:ArrayByFila= {numeros:[],isCorrect:true}
    let arrayByFila8:ArrayByFila= {numeros:[],isCorrect:true}
    let arrayByFila9:ArrayByFila= {numeros:[],isCorrect:true}

    this.miSudoku.zonas.forEach(zona =>{

      //reviso zonas con fila 1
      if (zona.fila == 1) {
        //aqui va a caer 11 12 13
        zona.casillas.forEach(casilla => {
          
          if (casilla.fila == 1) {
            this.validarCasilla(arrayByFila1,casilla)
          }

          if (casilla.fila == 2) {
            this.validarCasilla(arrayByFila2,casilla)
          }

          if (casilla.fila == 3) {
            this.validarCasilla(arrayByFila3,casilla)
          }

        });

      }

      if (zona.fila == 2) {
        zona.casillas.forEach(casilla => {
          
          if (casilla.fila == 1) {
            this.validarCasilla(arrayByFila4,casilla)
          }

          if (casilla.fila == 2) {
            this.validarCasilla(arrayByFila5,casilla)
          }

          if (casilla.fila == 3) {
            this.validarCasilla(arrayByFila6,casilla)
          }

        });
      }

      if (zona.fila == 3) {
        zona.casillas.forEach(casilla => {
          
          if (casilla.fila == 1) {
            this.validarCasilla(arrayByFila7,casilla)
          }

          if (casilla.fila == 2) {
            this.validarCasilla(arrayByFila8,casilla)
          }

          if (casilla.fila == 3) {
            this.validarCasilla(arrayByFila9,casilla)
          }

        });
      }


    })


   /*  console.log(arrayByFila1,arrayByFila2,arrayByFila3,arrayByFila4,arrayByFila5,arrayByFila6,arrayByFila7,arrayByFila8,arrayByFila9);
     */

    if (arrayByFila1.isCorrect == false || arrayByFila2.isCorrect == false ||
      arrayByFila3.isCorrect == false ||arrayByFila4.isCorrect == false ||
      arrayByFila5.isCorrect == false ||arrayByFila6.isCorrect == false ||
      arrayByFila7.isCorrect == false ||arrayByFila8.isCorrect == false ||
      arrayByFila9.isCorrect == false  ) {
        this.sudokuIsvalid = false 
      this.mensaje = 'No esta armado correctamente'
    } else {
      this.sudokuIsvalid = true 
      this.mensaje = 'SI esta armado correctamente'
    }

    

  }


  porVertical(){
    let arrayByColumna1:ArrayByColumna= {numeros:[],isCorrect:true}
    let arrayByColumna2:ArrayByColumna= {numeros:[],isCorrect:true}
    let arrayByColumna3:ArrayByColumna= {numeros:[],isCorrect:true}
    let arrayByColumna4:ArrayByColumna= {numeros:[],isCorrect:true}
    let arrayByColumna5:ArrayByColumna= {numeros:[],isCorrect:true}
    let arrayByColumna6:ArrayByColumna= {numeros:[],isCorrect:true}
    let arrayByColumna7:ArrayByColumna= {numeros:[],isCorrect:true}
    let arrayByColumna8:ArrayByColumna= {numeros:[],isCorrect:true}
    let arrayByColumna9:ArrayByColumna= {numeros:[],isCorrect:true}

    this.miSudoku.zonas.forEach(zona =>{

      //reviso zonas con col 1
      if (zona.columna == 1) {
        //aqui va a caer 11 12 13
        zona.casillas.forEach(casilla => {
          
          if (casilla.columna == 1) {
            this.validarCasilla(arrayByColumna1,casilla)
          }

          if (casilla.columna == 2) {
            this.validarCasilla(arrayByColumna2,casilla)
          }

          if (casilla.columna == 3) {
            this.validarCasilla(arrayByColumna3,casilla)
          }

        });

      }

      if (zona.columna == 2) {
        zona.casillas.forEach(casilla => {
          
          if (casilla.columna == 1) {
            this.validarCasilla(arrayByColumna4,casilla)
          }

          if (casilla.columna == 2) {
            this.validarCasilla(arrayByColumna5,casilla)
          }

          if (casilla.columna == 3) {
            this.validarCasilla(arrayByColumna6,casilla)
          }

        });
      }

      if (zona.columna == 3) {
        zona.casillas.forEach(casilla => {
          
          if (casilla.columna == 1) {
            this.validarCasilla(arrayByColumna7,casilla)
          }

          if (casilla.columna == 2) {
            this.validarCasilla(arrayByColumna8,casilla)
          }

          if (casilla.columna == 3) {
            this.validarCasilla(arrayByColumna9,casilla)
          }

        });
      }


    })


   /*  console.log(arrayByColumna1,arrayByColumna2,arrayByColumna3,arrayByColumna4,
      arrayByColumna5,arrayByColumna6,arrayByColumna7,arrayByColumna8,arrayByColumna9);
     */

    if (arrayByColumna1.isCorrect == false || arrayByColumna2.isCorrect == false ||
      arrayByColumna3.isCorrect == false ||arrayByColumna4.isCorrect == false ||
      arrayByColumna5.isCorrect == false ||arrayByColumna6.isCorrect == false ||
      arrayByColumna7.isCorrect == false ||arrayByColumna8.isCorrect == false ||
      arrayByColumna9.isCorrect == false  ) {
        this.sudokuIsvalid = false 
      this.mensaje = 'No esta armado correctamente'
    } else {
      this.sudokuIsvalid = true 
      this.mensaje = 'SI esta armado correctamente'
    }
  }





  validarCasilla(arrayByfila:ArrayByFila,casilla:Casilla){

    if (arrayByfila.numeros.includes(casilla.valor)== true) {
              
      arrayByfila.isCorrect= false
    }else{

      if(casilla.valor <1 || casilla.valor>9){
        arrayByfila.isCorrect= false
      }else{
        arrayByfila.numeros.push(casilla.valor)
      }

      
    }
  }




}
