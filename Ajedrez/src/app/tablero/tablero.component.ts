import { Component, OnInit } from '@angular/core';
import { Casilla, Fila, Tablero } from '../models/tablero.model';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css'],
})
export class TableroComponent implements OnInit {
  tableroMain: Tablero = { filas: [] };
  correcto:boolean = false
  mensaje:string = '_'


  constructor() {
    this.buildTablero();
  }

  ngOnInit(): void {}

  buildTablero() {
    var fila1: Fila = {
      fila: [
        { fila: 1, columna: 1, valor: true },
        { fila: 1, columna: 2, valor: false },
        { fila: 1, columna: 3, valor: false },
        { fila: 1, columna: 4, valor: false },
        { fila: 1, columna: 5, valor: false },
        { fila: 1, columna: 6, valor: false },
        { fila: 1, columna: 7, valor: false },
        { fila: 1, columna: 8, valor: false },
      ],
    };
    var fila2: Fila = {
      fila: [
        { fila: 2, columna: 1, valor: false },
        { fila: 2, columna: 2, valor: false },
        { fila: 2, columna: 3, valor: false },
        { fila: 2, columna: 4, valor: false },
        { fila: 2, columna: 5, valor: true },
        { fila: 2, columna: 6, valor: false },
        { fila: 2, columna: 7, valor: false },
        { fila: 2, columna: 8, valor: false },
      ],
    };
    var fila3: Fila = {
      fila: [
        { fila: 3, columna: 1, valor: false },
        { fila: 3, columna: 2, valor: false },
        { fila: 3, columna: 3, valor: false },
        { fila: 3, columna: 4, valor: false },
        { fila: 3, columna: 5, valor: false },
        { fila: 3, columna: 6, valor: false },
        { fila: 3, columna: 7, valor: false },
        { fila: 3, columna: 8, valor: true },
      ],
    };
    var fila4: Fila = {
      fila: [
        { fila: 4, columna: 1, valor: false },
        { fila: 4, columna: 2, valor: false },
        { fila: 4, columna: 3, valor: false },
        { fila: 4, columna: 4, valor: false },
        { fila: 4, columna: 5, valor: false },
        { fila: 4, columna: 6, valor: true },
        { fila: 4, columna: 7, valor: false },
        { fila: 4, columna: 8, valor: false },
      ],
    };
    var fila5: Fila = {
      fila: [
        { fila: 5, columna: 1, valor: false },
        { fila: 5, columna: 2, valor: false },
        { fila: 5, columna: 3, valor: true },
        { fila: 5, columna: 4, valor: false },
        { fila: 5, columna: 5, valor: false },
        { fila: 5, columna: 6, valor: false },
        { fila: 5, columna: 7, valor: false },
        { fila: 5, columna: 8, valor: false },
      ],
    };
    var fila6: Fila = {
      fila: [
        { fila: 6, columna: 1, valor: false },
        { fila: 6, columna: 2, valor: false },
        { fila: 6, columna: 3, valor: false },
        { fila: 6, columna: 4, valor: false },
        { fila: 6, columna: 5, valor: false },
        { fila: 6, columna: 6, valor: false },
        { fila: 6, columna: 7, valor: true },
        { fila: 6, columna: 8, valor: false },
      ],
    };
    var fila7: Fila = {
      fila: [
        { fila: 7, columna: 1, valor: false },
        { fila: 7, columna: 2, valor: true },
        { fila: 7, columna: 3, valor: false },
        { fila: 7, columna: 4, valor: false },
        { fila: 7, columna: 5, valor: false },
        { fila: 7, columna: 6, valor: false },
        { fila: 7, columna: 7, valor: false },
        { fila: 7, columna: 8, valor: false },
      ],
    };
    var fila8: Fila = {
      fila: [
        { fila: 8, columna: 1, valor: false },
        { fila: 8, columna: 2, valor: false },
        { fila: 8, columna: 3, valor: false },
        { fila: 8, columna: 4, valor: true },
        { fila: 8, columna: 5, valor: false },
        { fila: 8, columna: 6, valor: false },
        { fila: 8, columna: 7, valor: false },
        { fila: 8, columna: 8, valor: false },
      ],
    };

    this.tableroMain.filas = [
      fila1,
      fila2,
      fila3,
      fila4,
      fila5,
      fila6,
      fila7,
      fila8,
    ];

    this.tableroMain.filas[1].fila[1].fila;
  }

 


  Revisar(){
    this.correcto = true
    this.mensaje = 'Bien armado'
    //console.log(this.tableroMain);
    //this.revisarHorizontal();
    //this.revisarVertical()

  }


  revisarHorizontal(){
    
    let numeroReynas=0
    this.tableroMain.filas.forEach(fila => {
      numeroReynas=0
      fila.fila.forEach(casilla =>{
        //console.log(casilla.fila,casilla.columna);
          if (casilla.valor == true ) {
            numeroReynas = numeroReynas +1
          }
      })

      //console.log(numeroReynas);
      if (numeroReynas > 1) {
        this.correcto = false
        this.mensaje = 'NO Esta armado correctamente'
         
      }
      
    })
  }


  revisarVertical(){
    //array para guardar N de reynas por columna
    let numeroReynasColumna=[0,0,0,0,0,0,0,0]

    this.tableroMain.filas.forEach(fila =>{
      
      
      fila.fila.forEach(casilla =>{
          for (let i = 0; i < 8; i++) {
            if (casilla.columna== i+1) {
             // console.log(casilla.fila,casilla.columna);
             // console.log(casilla.valor);
              
              if (casilla.valor == true ) {
                numeroReynasColumna[i] = numeroReynasColumna[i] + 1
              }
            }
          }
      })
    })

    //console.log(numeroReynasColumna);
    
    numeroReynasColumna.forEach(reynas => {
      if (reynas > 1) {
       
          this.correcto = false
          this.mensaje = 'NO Esta armado correctamente'
          
        
      }
    })
  }

  revisarDiagonal(){


    


  }




}
