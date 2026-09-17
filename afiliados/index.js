(async () => {

  const fs = require('fs/promises')

  try {

    const file = await fs.readFile('./afiliados-por-municipio-sexo.json', 'utf-8')
    const data = JSON.parse(file)




    await fs.writeFile('./afiliados-por-municipio-sexo.json', JSON.stringify(filterData, null, 2))

  } catch (error) {
    console.log(error)
  }
})()