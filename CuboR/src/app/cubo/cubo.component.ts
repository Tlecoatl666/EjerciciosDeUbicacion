import { Component, OnInit } from '@angular/core';
import { Cubo,Cara,Casilla } from './cubo.models';

@Component({
  selector: 'app-cubo',
  templateUrl: './cubo.component.html',
  styleUrls: ['./cubo.component.css']
})
export class CuboComponent implements OnInit {

  mensaje:string ='________'

  cara1:Cara= {casillas:[ {color:'black'},{color:'black'},{color:'black'},{color:'black'},{color:'black'},{color:'black'}  ] }
  cara2:Cara= {casillas:[ {color:'red'},{color:'red'},{color:'red'},{color:'red'},{color:'red'},{color:'red'}  ] }
  cara3:Cara= {casillas:[ {color:'yellow'},{color:'yellow'},{color:'yellow'},{color:'yellow'},{color:'yellow'},{color:'yellow'}  ] }
  cara4:Cara= {casillas:[ {color:'blue'},{color:'blue'},{color:'blue'},{color:'blue'},{color:'blue'},{color:'blue'}  ] }
  cara5:Cara= {casillas:[ {color:'white'},{color:'white'},{color:'white'},{color:'white'},{color:'white'},{color:'white'}  ] }
  cara6:Cara= {casillas:[ {color:'green'},{color:'green'},{color:'green'},{color:'green'},{color:'green'},{color:'green'}  ] }


  miCubo:Cubo = {
    caras:[this.cara1,this.cara2,this.cara3,this.cara4,this.cara5,this.cara6]
  }
  
  constructor() {
    
    
   }

  ngOnInit(): void {
    console.log(this.miCubo);
  }


  revisar(){
    this.mensaje = 'Si esta bien armado'
    let black:number,red:number,yellow:number,blue:number,white:number,green:number = 0
    let arrayCarasResultado = [0,0,0,0,0,0]
    let contador= 0
    this.miCubo.caras.forEach( cara =>{
      black = 0,red = 0,yellow = 0,blue = 0,white = 0,green = 0
      cara.casillas.forEach(casilla =>{

        switch (casilla.color) {
          case 'black':
            black = black + 1
            break;
          case 'red':
            red = red + 1
            break;
          case 'yellow':
            yellow = yellow + 1
            break;
          case 'blue':
            blue = blue + 1
            break;
          case 'white':
            white = white + 1
            break;
          case 'green':
            green = green + 1
            break;
        
            //no hay defaul , suponiendo que hay validaciones de no ingresar otro color diferente
          default:
            break;
        }

      })//fin revisar casillas

      console.log(black,red,yellow,blue,white,green);

      if (black == 6 || red == 6 || yellow == 6 || blue == 6 || white == 6 || green  == 6  ) {
        //entonces esta bien esta cara
        
        arrayCarasResultado[contador]=1
      }else{
        arrayCarasResultado[contador]=0
      }
      
      contador = contador +1
    })

    console.log(arrayCarasResultado);
    
    
    for (let index = 0; index < arrayCarasResultado.length; index++) {
      
      if (arrayCarasResultado[index] == 0) {
        this.mensaje = 'NO esta bien armado'
        break
      }
      
    }

  }







}
