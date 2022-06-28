# Challenge técnico: Career Switch 2022 ⛓️

Aplicación que ordena una cadena de bloques dado un correo electronico, consultando una API ⚔️

![CC_RH](https://i.imgur.com/GTTN3jH.png"CC_RH")

### 🛠️ Instalación

Haz un git clone y luego

```
yarn install
yarn dev
```

Happy Hack:D

### 🔴 Live

Link para ver este proyecto en ejecución
[Challenge técnico: Career Switch 2022](https://62bad1bf3b507b02fc008f12--spiffy-kitsune-6f8b61.netlify.app/ "Challenge técnico: Career Switch 2022")

### ⚒️ Explicacion de la solución

💡 Antes que nada queria darle un plus mas visual para aterrizar mis ideas asi que implemente una interfaz en frontend con los pasos para poder resolver este challange, espero no haya problemas.

El algoritmo para poder ordenar la cadena de bloques y hallar el hash fue el siguiente
1. Obtener el token atraves del endpoint
2. Obtener el arreglo de bloques desordenados con el token del endpoint obtenido en el paso previo
3. Algoritmo de ordenamiento
    - Almacenar el arreglo de bLoques en un array
    - Crear un arreglo que guarde las posiciones correctas 
    - Recorrer el arreglo de posiciones aleatorias y estas compararlas con cada una de las posiciones
    - cuando el resultado de la peticion sea true, almacenar ese arreglo en el array de posiciones correctas
    - Luego de hacer estas iteraciones por iteraciones, obtendremos los bloques ordenados
4. Luego tomar esa arreglo de bloques ordenados y hacer un reduce en js para obtener el hash en forma correcta

💡 El algoritmo principal se encuentra implementado en src/components/Step2.jsx en la funcion getHash() 

⚠️ este algoritmo  me parecio algo ineficiente debiido a que prueba todas  las permutaciones teniendo una complejidad de o^n asi que decidi hacer una variente en donde cuando encuentra el bloque correcto en una iterancion elimina ese bloque sin embargo tuve problemas con la mutabilidad, y en este algoritmo presentando tuve problemas con la asincronia, asi que este algoritmo funciona parcialmente pero queria enviar este avance.

Espero puedan darme feedback de esto para saber como mejorarlo y continuar en mi camino de crecimiento profesional, espero poder quedar, saludos y gracias por este reto.