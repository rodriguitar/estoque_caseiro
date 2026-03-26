const { iniciarMenu } = require("./ui/menu");
const { carregarDados } = require("./services/fileService");

carregarDados();
iniciarMenu();