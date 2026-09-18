(async () => {

  const fs = require('fs/promises')

  try {

    const file = await fs.readFile('./data/data.json', 'utf-8')
    data = JSON.parse(file)


    let filter = data.filter(element => {
      return element['TERRITORIO#es'] !== "Illes Balears" &&
        element['TERRITORIO#es'] !== "Eivissa y Formentera" &&
        element['TERRITORIO#es'] !== "Eivissa" &&
        element['TERRITORIO#es'] !== "Formentera" &&
        element['TERRITORIO#es'] !== "Menorca" &&
        element['ESTADO_OBSERVACION#es'] !== "Valor estimado" &&
        element['ESTADO_OBSERVACION#es'] !== "Valor provisional"
    })

    let filterData = filter.reduce((acumulator, element) => {
      const municipio = element['TERRITORIO#es']
      const observaciones = element['ESTADO_OBSERVACION#es']
      const cantidad = element['OBS_VALUE']
      const [dia, mes, año] = element['TIME_PERIOD#es'].split('/')




      acumulator.push({
        municipio,
        cantidad,
        observaciones,
        dia,
        mes,
        año
      })

      return acumulator


    }, [])



    await fs.writeFile('./data/total.json', JSON.stringify(filterData, null, 2))

  } catch (error) {
    console.log(error)
  }
})()