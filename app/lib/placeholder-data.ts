const projects = [
  {
    testcase_counter: 5,
    testscenario_counter: 2,
    testexecutions_counter: 3,
    name: 'GESCAD - Gestão de Produtos',
    description: 'Plataforma para gerenciar produtos e vendas em uma loja virtual',
    active: 1,
  },
];

const builds = [
  {
    title: 'Versão 1.0-DEV',
    version: '1.0',
    description: 'Primeira versão estável do sistema',
    active: 1,
    project_id: 1,
  },
];

const testScenarios = [
  {
    name: 'Login e Autenticação',
    count: 1,
    description: 'Testes relacionados ao processo de login e autenticação do sistema',
    order: 1,
    test_project_id: 1,
  },
  {
    name: 'Gerenciamento de Produtos',
    count: 1,
    description: 'Testes de inserção, edição e exclusão de produtos',
    order: 2,
    test_project_id: 1,
  },
];

const testCases = [
  {
    name: 'Login com credenciais válidas',
    order: 1,
    count: 1,
    description: 'Login realizado com credenciais válidas',
    steps: `1. Acessar a página de login\n2. Inserir e-mail e senha válidos\n3. Clicar em Entrar\n4. Verificar se o login foi bem-sucedido`,
    enabled: 1,
    can_edit: 1,
    test_scenario_id: 1,
  },
  {
    name: 'Login com credenciais inválidas',
    order: 2,
    count: 1,
    description: 'Tentativa de login com senha incorreta',
    steps: `1. Acessar a página de login\n2. Inserir e-mail válido e senha inválida\n3. Verificar se a mensagem de erro é exibida`,
    enabled: 1,
    can_edit: 1,
    test_scenario_id: 1,
  },
  {
    name: 'Cadastro de produto válido',
    order: 1,
    count: 1,
    description: 'Cadastro de um novo produto com todos os dados obrigatórios',
    steps: `1. Acessar a página de produtos\n2. Clicar em "Adicionar Produto"\n3. Preencher os dados obrigatórios\n4. Clicar em "Salvar"\n5. Verificar se o produto foi adicionado`,
    enabled: 1,
    can_edit: 1,
    test_scenario_id: 2,
  },
];

const testPlans = [
  {
    name: 'Plano de Testes da Versão 1.0',
    description: 'Plano de testes para a versão 1.0 do sistema',
    active: 1,
    project_id: 1,
  },
];

const testExecutions = [
  {
    start_date: '2024-09-28',
    end_date: '2024-09-28 14:00',
    test_plan_id: 1,
    build_id: 1,
    status: 2,
    comments: 'Primeira execução de testes do plano 1',
  },
];

const testPlansTestCases = [
  { test_plan_id: 1, test_case_id: 1 },
  { test_plan_id: 1, test_case_id: 2 },
];

const testExecutionsTestCases = [
  {
    created_at: '2024-09-28 14:01',
    comment: 'Senha recuperada com sucesso',
    passed: 1,
    skipped: 0,
    failed: 0,
    test_execution_id: 1,
    test_case_id: 1,
  },
];

const files = [
  {
    name: 'screenshot-login-sucesso.png',
    path: '/screenshots/img1.png',
    test_executions_test_cases_id: 3,
  },
];

const users = [
  {
    name: 'Admin',
    login: 'admin',
    email: 'admin@loja.com',
    password: 'admin123',
    role: 'admin',
  },
  {
    name: 'Tester',
    login: 'tester',
    email: 'tester@loja.com',
    password: 'tester123',
    role: 'tester',
  },
];

export {
  projects,
  builds,
  testScenarios,
  testCases,
  testPlans,
  testExecutions,
  testPlansTestCases,
  testExecutionsTestCases,
  files,
  users
}