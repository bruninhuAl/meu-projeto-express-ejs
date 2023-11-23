const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, nome: "Ração Pedigree", preco: "39,98", descricao: "Ração pedigree para pets", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYektwlSPSECcJSCN7TuNsrgwTMhxiFV3AnQ&usqp=CAU"},
  {id: 2, nome: "Kit Banho para Cães", preco: "40,38", descricao: "Kit contêm Shampoo e Condicionador", imagem: "https://down-br.img.susercontent.com/file/d9f93981e1839c51ec55b3a6d05571fc"},
  {id: 3, nome: "Polvo de Brinquedo", preco: "55,69", descricao: "Brinquedo para pets", imagem: "https://d2r9epyceweg5n.cloudfront.net/stores/002/494/748/products/s570ee7c48b66468c8c366577aa3839b1a-ebcfb2e42559d7858216666740563662-640-0.jpg"},
  {id: 4, nome: "Fonte para Pet 3L", preco: "327,87", descricao: "Bebedouro para pets", imagem: "https://d2r9epyceweg5n.cloudfront.net/stores/002/494/748/products/s1d3ab9eda2be4485a2c08b990dbf8592o-ac88efc65b9389629b16666738172202-640-0.jpg"},
  {id: 5, nome: "Coleira e Guia Personalizada", preco: "94,62", descricao: "Coleira para pets", imagem: "https://d2r9epyceweg5n.cloudfront.net/stores/002/494/748/products/h0cf0f8562d504a808621ed9ab2f59cc9k-c69ebaa3e313abf6fc16666732342159-640-0.jpg"},
  {id: 6, nome: "Silicone massageador para banho", preco: "57,62", descricao: "Massageador para banhos", imagem: "https://d2r9epyceweg5n.cloudfront.net/stores/002/494/748/products/s1f6d9dce5ac247239d93810f5ba229f0a-32142ed9d0ad7e64fc16663915363064-640-0.jpg"},
  {id: 7, nome: "Capa Impermeável para carro", preco: "378,86", descricao: "Capa para chuva para pets", imagem: "https://d2r9epyceweg5n.cloudfront.net/stores/002/494/748/products/s19f812401f1b462f8d5b953b1ea1c051n-01313f50c96bc466a116658341220369-640-0.jpg"},
  {id: 8, nome: "Colchão térmico para pets", preco: "78,86", descricao: "Colchão noturno térmico para uma boa noite", imagem: "https://d2r9epyceweg5n.cloudfront.net/stores/002/494/748/products/hf205bdcdf279459cb6408b2ac9cf0c76n-0bde284ad379e6b67016657973733083-640-0.jpg"},
  {id: 9, nome: "Guia Pet 3m/5m", preco: "101,83", descricao: "Coleira para pets", imagem: "https://d2r9epyceweg5n.cloudfront.net/stores/002/494/748/products/s45a6b6024e364675b18c15ca3b359791h-a8fb257c72d47ebe9416659559620495-640-0.jpg"},
  {id: 10, nome: "Casa DuraPets Dura House Preta", preco: "320,99", descricao: "Montagem simples, basta encaixar;", imagem: "https://images.petz.com.br/fotos/1643810757712.jpg"},
  {id: 11, nome: "Areia Higiênica Pipicat", preco: "42,99", descricao: "Controle de odores superior com pipicat odor block", imagem: "https://images.petz.com.br/fotos/1618514739796.jpg"},
  {id: 12, nome: "Antipulgas Elanco Capstar", preco: "22,95", descricao: "Indicado para cães de 1 a 11,4 kg a partir de 4 semanas de vida", imagem: "https://images.petz.com.br/fotos/1662658347727.jpg"},
]

function buscarProdutoPorID(id){
  const produto = produtos.find(produto => produto.id == id)
  return produto || null
}

app.get('/', (req, res) => {
  res.render('index', { message: 'Olá, Mundo!' });
});

app.get('/produtos', (req, res) => {
  res.render('produtos', { produtos });
});

app.get('/contato', (req, res) => {
  res.render('contato', { message: 'Olá, Mundo!' });
});

app.get('/sobre', (req, res) => {
  res.render('sobre', { message: 'Olá, Mundo!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});