function enviarEmail(corpo, para, callback){
  setTimeout(()=>{
    // ------Logica 

    callback("OK", 5, "8s", "Victor");
  }, 8000)
}

// Promise
function enviarPromise(corpo, para){
return new Promise((resolve, reject)=>{
  setTimeout(()=>{
    var deuErro = false;
     if(!deuErro){
      resolve() // Promessa ok!
     }else{
      reject()// Foi mal, falhou :(
     } 
  },4000)
});
}

enviarPromise("Olá mundo", "nayaranunes08@udemy.com").then(()=>{
   console.log("Promessa ok!")
}).catch(()=>{
  console.log("Erro")
});

// Async Await
function pegarUsuarios(){
return new Promise ((resolve, reject) =>{
  setTimeout(()=>{
    resolve([
      {name: "Victor", lang:"JS"},
      {name: "Vitoria", lang:"C#"},
      {name: "Daniel", lang:"Java"}
    ])
  })
})
}


