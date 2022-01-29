import { Component, OnInit } from '@angular/core';
import { ArrayByFila, Casilla, Sudoku, Zona } from './sudoku.models';

@Component({
  selector: 'app-sudokutable',
  templateUrl: './sudokutable.component.html',
  styleUrls: ['./sudokutable.component.css']
})
export class SudokutableComponent implements OnInit {


  magicSum = 45
  mensaje:string = '________________'


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

  constructor() { }

  ngOnInit(): void {
  }


  revisar(){
    //this.porZona()
    this.porHorizontal()
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
      //console.log(arrayValXzona);

    })

    this.miSudoku.zonas.forEach(zona => {

      if (zona.isCorrect == false) {
        this.mensaje = 'NO esta armado correctamente'
      }else{
        this.mensaje = 'SI esta armado correctamente'
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


    if (arrayByFila1.isCorrect == false || arrayByFila2.isCorrect == false ||
      arrayByFila3.isCorrect == false ||arrayByFila4.isCorrect == false ||
      arrayByFila5.isCorrect == false ||arrayByFila6.isCorrect == false ||
      arrayByFila7.isCorrect == false ||arrayByFila8.isCorrect == false ||
      arrayByFila9.isCorrect == false  ) {
      this.mensaje = 'No esta armado correctamente'
    } else {
      this.mensaje = 'SI esta armado correctamente'
    }

    

  }


  validarCasilla(arrayByfila:ArrayByFila,casilla:Casilla){
    if (arrayByfila.numeros.includes(casilla.valor)== true) {
              
      arrayByfila.isCorrect= false
    }else{
      arrayByfila.numeros.push(casilla.valor)
    }
  }




}
