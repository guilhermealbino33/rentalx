**RF** => Requisitos Funcionais
**RNF** => Requisitos não Funcionais
**RN** => Regra de Negócio

# Cadastro de carro

**RF**
Deve ser possível cadastrar um novo carro.
Deve ser possível listar todas as categorias.

**RN**
Não deve ser possível cadastar um novo carro com placa já existente.
Não deve ser possível a placa de um carro já cadastrado.
O carro deve ser cadastrado com disponibilidade, por padrão.
Apenas um usuário administrador tem permissão para realizar cadastro.

# Listagem de carros

**RF**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
Deve ser possível listar todos os carros disponíveis pelo nome da marca.
Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**
O usuário não precisa estar logado no sistema para realizar a listagem.

# Cadastro de Especificações no Carro

**RF**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.

**RN**
Não deve ser possível cadastrar uma especificação para um carro não existente.
Não deve ser possível cadastrar uma especificação já existente para um carro.
Apenas um usuário administrador tem permissão para realizar cadastro.

# Cadastro de Imagens do Carro

**RF**
Deve ser possível cadastrar a imagem d  o carro.
Deve ser possível listar todos os carros.

**RNF**
Utilizar o multer para o upload dos arquivos.
**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
Apenas um usuário administrador tem permissão para realizar cadastro.

# Aluguel

**RF**
Deve ser possível cadastrar um aluguel.

**RN**
O aluguel deve ter duração mínima de 24 horas.
Não deve ser possível cadastrar um aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um aluguel caso já exista um aberto para o mesmo carro.