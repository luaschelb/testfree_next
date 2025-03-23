const projects = [
  {
    name: 'GESCAD - Product Management',
    description: 'Platform for managing products and sales in an online store',
    active: 1,
  },
];

const builds = [
  {
    title: 'Version 1.0-DEV',
    version: '1.0',
    description: 'First stable version of the system',
    active: 1,
    project_id: 1,
  },
];

const testScenarios = [
  {
    name: 'Login and Authentication',
    count: 1,
    description: 'Tests related to the login and authentication process of the system',
    order: 1,
    test_project_id: 1,
  },
  {
    name: 'Product Management',
    count: 1,
    description: 'Tests for adding, editing, and deleting products',
    order: 2,
    test_project_id: 1,
  },
];

const testCases = [
  {
    name: 'Login with valid credentials',
    order: 1,
    count: 1,
    description: 'Login performed with valid credentials',
    steps: `1. Access the login page\n2. Enter a valid email and password\n3. Click on Login\n4. Verify if the login was successful`,
    enabled: 1,
    can_edit: 1,
    test_scenario_id: 1,
  },
  {
    name: 'Login with invalid credentials',
    order: 2,
    count: 1,
    description: 'Attempt to log in with an incorrect password',
    steps: `1. Access the login page\n2. Enter a valid email and an invalid password\n3. Verify if the error message is displayed`,
    enabled: 1,
    can_edit: 1,
    test_scenario_id: 1,
  },
  {
    name: 'Valid product registration',
    order: 1,
    count: 1,
    description: 'Registering a new product with all required fields',
    steps: `1. Access the products page\n2. Click on "Add Product"\n3. Fill in the required fields\n4. Click on "Save"\n5. Verify if the product was added`,
    enabled: 1,
    can_edit: 1,
    test_scenario_id: 2,
  },
];

const testPlans = [
  {
    name: 'Test Plan for Version 1.0',
    description: 'Test plan for system version 1.0',
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
    comments: 'First test execution for plan 1',
  },
];

const testPlansTestCases = [
  { test_plan_id: 1, test_case_id: 1 },
  { test_plan_id: 1, test_case_id: 2 },
];

const testExecutionsTestCases = [
  {
    created_at: '2024-09-28 14:01',
    comment: 'Password successfully recovered',
    passed: 1,
    skipped: 0,
    failed: 0,
    test_execution_id: 1,
    test_case_id: 1,
  },
];

const files = [
  {
    name: 'screenshot-login-success.png',
    path: '/screenshots/img1.png',
    test_executions_test_cases_id: 1,
  },
];

const users = [
  {
    name: 'Admin',
    login: 'admin',
    email: 'admin@store.com',
    password: 'admin123',
    role: 'admin',
  },
  {
    name: 'Tester',
    login: 'tester',
    email: 'tester@store.com',
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
};
