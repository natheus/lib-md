#!/usr/bin/env node

import process from "process";
import chalk from "chalk";
import pegaArquivo from "./index.js";
import validaURLs from "./http-validacao.js";

async function processaTexto() {
  const resultado = await pegaArquivo(process.argv[2]);
  if (process.argv[3] === "validar") {
    console.log(chalk.yellow("Links validados"), await validaURLs(resultado));
  } else {
    console.log(chalk.yellow("Lista de links:"), resultado);
  }
}

processaTexto(process.argv);
