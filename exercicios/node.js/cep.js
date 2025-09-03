#!/usr/bin/env node

const axios = require('axios');

// Função para validar se o CEP é válido
function validarCEP(cep) {
  return /^\d{8}$/.test(cep);
}

// Função para consultar a API do ViaCEP
async function consultarCEP(cep) {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    console.log(response)
    const data = response.data;

    if (data.erro) {
      console.error("❌ CEP não encontrado.");
      process.exit(1);
    }

    console.log("\n📍 Endereço encontrado:");
    console.log(`  Logradouro: ${data.logradouro}`);
    console.log(`  Bairro:     ${data.bairro}`);
    console.log(`  Cidade:     ${data.localidade}`);
    console.log(`  Estado:     ${data.uf}`);
    console.log(`  CEP:        ${data.cep}`);

  } catch (error) {
    console.error("❌ Erro ao consultar o CEP:", error.message);
    process.exit(1);
  }
}

// Função principal
function main() {
  const args = process.argv.slice(2);

  if (args.length !== 1) {
    console.error("Uso: node cep-cli.js <CEP>");
    process.exit(1);
  }

  const cep = args[0];

  if (!validarCEP(cep)) {
    console.error("❌ CEP inválido. Deve conter exatamente 8 dígitos numéricos.");
    process.exit(1);
  }

  consultarCEP(cep);
}

main();
