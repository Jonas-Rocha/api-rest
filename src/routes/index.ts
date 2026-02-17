//Este arquivo index.ts dentro de "routes" serve para lidar com todas as rotas em um único lugar.

import { Router } from "express";

import { productsRoutes } from "./products-routes";

const routes = Router();

routes.use("/products", productsRoutes);
//routes.use("/users", arquivo2);
//routes.use("/clients", arquivo3);

//acima apenas demonstrando como seria a organização de outras rotas

export { routes };

/*

    Nesta aula, aprendemos a organizar as rotas de uma aplicação em arquivos separados para melhorar a organização do código. 
    Criamos um arquivo para as rotas de produtos e um arquivo index para reunir todas as rotas.
    Utilizamos o Express para criar as rotas e importamos os arquivos necessários.
    Ao definir os endereços das rotas, conseguimos simplificar o código e torná-lo mais enxuto. Essa organização facilita a manutenção e escalabilidade da aplicação.

 */
