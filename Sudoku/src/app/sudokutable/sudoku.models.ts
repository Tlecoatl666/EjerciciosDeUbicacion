
export interface Sudoku {

       zonas:Zona[]  
}


export interface Zona {

       fila:number;
       columna:number;  
       casillas:Casilla[]
       isCorrect:boolean
}

export interface Casilla {

       fila:number
       columna:number  
       valor:number
}