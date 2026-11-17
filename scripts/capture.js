import { execFile } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outDir = path.resolve('public/images/projects');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const targets = [
  {
    name: 'movesmart.png',
    url: 'https://move-smart-five.vercel.app/',
  },
  {
    name: 'stealthpay.png',
    url: 'https://stealth-pay-team1.vercel.app',
  },
];

async function capture() {
  for (const target of targets) {
    const outFile = path.join(outDir, target.name);
    console.log(`Capturing ${target.url} -> ${outFile}...`);
    try {
      const args = [
        '--headless=new',
        '--disable-gpu',
        '--no-sandbox',
        '--hide-scrollbars',
        '--window-size=1366,768',
        '--virtual-time-budget=6000',
        `--screenshot=${outFile}`,
        target.url,
      ];
      await execFileAsync(edgePath, args, { timeout: 30000 });
      if (fs.existsSync(outFile)) {
        const stats = fs.statSync(outFile);
        console.log(`Success: ${target.name} (${stats.size} bytes)`);
      } else {
        console.error(`Failed: file not created for ${target.name}`);
      }
    } catch (err) {
      console.error(`Error capturing ${target.name}:`, err.message);
    }
  }
}

capture();
