const { chromium } = require('playwright')

const searchDolarValues = async () => {
  try {
    const browser = await chromium.launch()
    const page = await browser.newPage()
    await page.goto('https://www.lanacion.com.ar/dolar-hoy/')
    const text = await page.textContent('[class="dolar-subgroup --even "]')
    await browser.close()

    const regex = /Dólar\s(\w+)(Compra|Venta)\$([\d,]+)/g
    const matches = []
    let match

    while ((match = regex.exec(text))) {
      const [, tipoDolar, tipoOperacion, valor] = match
      matches.push({ tipoDolar, tipoOperacion, valor: parseFloat(valor.replace(',', '.')) });
    }

    return matches
  } catch (e) {
    throw new Error(e.message)
  }
}

module.exports = searchDolarValues
