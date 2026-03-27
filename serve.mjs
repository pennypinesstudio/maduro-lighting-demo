#!/usr/bin/env node
/**
 * serve.mjs
 * Checks if the Next.js dev server is already running on port 3000.
 * If not, starts it. If yes, reports it's already running.
 */

import { createServer } from 'net'
import { spawn } from 'child_process'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const PORT = 3000

function isPortInUse(port) {
  return new Promise((resolve) => {
    const tester = createServer()
      .once('error', () => resolve(true))
      .once('listening', () => {
        tester.close()
        resolve(false)
      })
      .listen(port, '127.0.0.1')
  })
}

async function main() {
  const inUse = await isPortInUse(PORT)

  if (inUse) {
    console.log(`Dev server already running at http://localhost:${PORT}`)
  } else {
    console.log(`Starting Next.js dev server on port ${PORT}...`)
    const projectDir = resolve(__dirname)

    const child = spawn('npm', ['run', 'dev'], {
      cwd: projectDir,
      stdio: 'inherit',
      detached: false,
      shell: true,
    })

    child.on('error', (err) => {
      console.error('Failed to start dev server:', err)
      process.exit(1)
    })

    process.on('SIGINT', () => {
      child.kill('SIGINT')
      process.exit(0)
    })

    process.on('SIGTERM', () => {
      child.kill('SIGTERM')
      process.exit(0)
    })
  }
}

main()
