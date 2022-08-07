/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 Equilátero 3L iguais. Isósceles: 2L iguais. Escaleno: todos diferentes. 
 Crie uma função que recebe os comprimentos dos
  três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. */

  let classifiqTriangulo = (x,y,z)=>{

    if(((x == y) && (x != z) )||( (y == z) &&(z != x)) || ((x == z) && (x != y))){
          return console.log("Isósceles");

    }else if( x!=y && y!=z && x!=z){

      return console.log("Escaleno");

    }else{

      return console.log("Equilátero")
    }
  }


  console.log(classifiqTriangulo(2,2,2))
  console.log(classifiqTriangulo(4,2,2))
  console.log(classifiqTriangulo(2,3,6))

  //