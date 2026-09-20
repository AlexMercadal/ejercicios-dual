(async () => {

  const fs = require('fs/promises')

  try {

    const file = await fs.readFile('./data/data.json', 'utf-8')
    data = JSON.parse(file)



    let filter = data.filter(element => {
      return element['TERRITORIO#es'] !== "Illes Balears" &&
        element['TERRITORIO#es'] !== "Mallorca" &&
        element['TERRITORIO#es'] !== "Menorca" &&
        element['TERRITORIO#es'] !== "Eivissa" &&
        element['TERRITORIO#es'] !== "Formentera" &&
        element['TERRITORIO#es'] !== "Cabrera" &&
        element['EDAD_MEDIA'] !== null &&
        // el ranking 50 por territorio -->
        element['TERRITORIO#es'] === "Lloseta" &&
        element['RANKING'] <= 50
      // // el apellido que ocupa la posicion numero 1 en el ranking por poblacion -->
      // element['RANKING'] === 1


    })

    // ordena del 1 al 50 dentro de ranking
    filter.sort((a, b) => {
      return a['RANKING'] - b['RANKING']
    })

    let filterData = filter.reduce((acumulator, element) => {
      const municipio = element['TERRITORIO#es']
      const apellido = element['APELLIDOS_PERSONAS#es']
      const edadMedia = Math.trunc(element['EDAD_MEDIA'])
      const poblacion = element['POBLACION']
      const ranking = element['RANKING']


      acumulator.push({
        municipio,
        apellido,
        edadMedia,
        poblacion,
        ranking,
      })

      return acumulator


    }, [])



    await fs.writeFile('./data/total.json', JSON.stringify(filterData, null, 2))

  } catch (error) {
    console.log(error)
  }
})()
