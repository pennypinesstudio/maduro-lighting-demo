#!/usr/bin/env node
/**
 * screenshot.mjs
 * Usage: node screenshot.mjs <url> <name>
 * Saves a screenshot to screenshots/<name>.png
 *
 * Example: node screenshot.mjs http://localhost:3000 homepage
 */

import puppeteer from 'puppeteer'
import { mkdir } from 'fs/promises'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function main() {
  const [, , url, name] = process.argv

  if (!url || !name) {
    console.error('Usage: node screenshot.mjs <url> <name>')
    console.error('Example: node screenshot.mjs http://localhost:3000 homepage')
    process.exit(1)
  }

  const screenshotsDir = resolve(__dirname, 'screenshots')
  await mkdir(screenshotsDir, { recursive: true })

  const outputPath = resolve(screenshotsDir, `${name}.png`)

  console.log(`Launching browser...`)
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  try {
    const page = await browser.newPage()

    await page.setViewport({
      width: 1440,
      height: 900,
      deviceScaleFactor: 2,
    })

    console.log(`Navigating to ${url}...`)
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 30000,
    })

    // Wait a bit for fonts to load
    await new Promise((r) => setTimeout(r, 1500))

    console.log(`Taking screenshot...`)
    await page.screenshot({
      path: outputPath,
      fullPage: true,
    })

    console.log(`Screenshot saved to: ${outputPath}`)
  } finally {
    await browser.close()
  }
}

main().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})
