import {glob} from 'glob';
import { execSync } from 'child_process';

const testFiles = glob.sync('tests/**/*.js'); // Busca todos los archivos .js en la carpeta tests y sus subcarpetas

async function runTests() {
  for (const testFile of testFiles) {
    console.log(`Ejecutando: ${testFile}`);
    try {
      execSync(`node ${testFile}`, { stdio: 'inherit' }); // Ejecuta el archivo utilizando node
    } catch (error) {
      console.error(`Error al ejecutar: ${testFile}`);
      console.error(error.stderr.toString());
    }
  }
}

runTests();