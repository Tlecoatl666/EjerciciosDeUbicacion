export interface Tablero {

    filas:Fila[]
    
      
}


export interface Fila {

       fila:Casilla[]  
}

export interface Casilla {

       fila:number;
       columna:number;
       valor:boolean;  
}