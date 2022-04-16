var resultado = 0;

const Tablas = () => {
  var opcion = parseInt(
    prompt("1.- Tablas por ciclos for | 2.-Tablas por do/while Elija Opción")
  );

  switch (opcion) {
    case 1:
      {
        console.log("Realizando tablas por medio de For");
        for (let nt = 1; nt <= 10; nt++) {
          var ntAux = nt;
          let filaActual = document
            .getElementById("tablaDinamica")
            .insertRow(ntAux - 1);

          console.log("****Tabla del número: " + nt + "*******");
          for (let tablaN = 1; tablaN <= 10; tablaN++) {
            let celda = filaActual.insertCell(tablaN - 1);
            resultado = nt * tablaN;
            console.log(nt + " X " + tablaN + " = " + resultado);

            celda.innerHTML = `${tablaN} X ${nt} = ${resultado}`;
          }
        }
      }
      break;
    case 2:
      {
        console.log("Realizando tablas por medio de While");
        var nt = 1,
          tablaN = 1,
          resultado = 0;
        do {
          console.log("****Tabla del número: " + tablaN + "*******");
          let filaActual = document
            .getElementById("tablaDinamica")
            .insertRow(tablaN-1);
          while (nt <= 10) {
            let celda = filaActual.insertCell(nt-1);
            resultado = nt * tablaN;
            console.log(nt + " X " + tablaN + " = " + resultado);
            celda.innerHTML = `${nt} X ${tablaN} = ${resultado}`;
            nt++;
          }
          tablaN++;
          resultado = 0;
          nt = 1;
        } while (tablaN <= 10);
      }
      break;

    default:
      {
        console.log("Opción no valida");
        alert("Opción no valida");  
       
      }
      break;
  }
};

const limpiar = () => {
  window.location.reload();
};
