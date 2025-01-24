import { db } from '@vercel/postgres';
import { projects, builds, testScenarios, testCases, testPlans, testPlansTestCases, testExecutionsTestCases, files, users} from '../lib/placeholder-data';

const client = await db.connect();

async function seedProjects() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS projects (
      id SERIAL PRIMARY KEY,
      testcase_counter INT DEFAULT 1,
      testscenario_counter INT DEFAULT 1,
      testexecutions_counter INT DEFAULT 1,
      name VARCHAR(255),
      description TEXT,
      active BOOLEAN
    );
  `;

  const insertedProjects = await Promise.all(
    projects.map(
      (project) => client.sql`
        INSERT INTO projects (testcase_counter, testscenario_counter, testexecutions_counter, name, description, active)
        VALUES (${project.testcase_counter}, ${project.testscenario_counter}, ${project.testexecutions_counter}, ${project.name}, ${project.description}, ${project.active})
        ON CONFLICT DO NOTHING;
      `
    )
  );

  return insertedProjects;
}

async function seedBuilds() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS builds (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255),
      version VARCHAR(50),
      description TEXT,
      active BOOLEAN,
      project_id INT,
      FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
    );
  `;

  const insertedBuilds = await Promise.all(
    builds.map(
      (build) => client.sql`
        INSERT INTO builds (title, version, description, active, project_id)
        VALUES (${build.title}, ${build.version}, ${build.description}, ${build.active}, ${build.project_id})
        ON CONFLICT DO NOTHING;
      `
    )
  );

  return insertedBuilds;
}

async function seedTestScenarios() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS test_scenarios (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      count INT,
      description TEXT,
      "order" INT,
      test_project_id INT,
      FOREIGN KEY (test_project_id) REFERENCES projects(id) ON DELETE CASCADE
    );
  `;

  const insertedTestScenarios = await Promise.all(
    testScenarios.map(
      (scenario) => client.sql`
        INSERT INTO test_scenarios (name, count, description, "order", test_project_id)
        VALUES (${scenario.name}, ${scenario.count}, ${scenario.description}, ${scenario.order}, ${scenario.test_project_id})
        ON CONFLICT DO NOTHING;
      `
    )
  );

  return insertedTestScenarios;
}

async function seedTestCases() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS test_cases (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      "order" INT,
      count INT,
      description TEXT,
      steps TEXT,
      enabled BOOLEAN,
      can_edit BOOLEAN,
      test_scenario_id INT,
      FOREIGN KEY (test_scenario_id) REFERENCES test_scenarios(id) ON DELETE CASCADE
    );
  `;

  const insertedTestCases = await Promise.all(
    testCases.map(
      (testCase) => client.sql`
        INSERT INTO test_cases (name, "order", count, description, steps, enabled, can_edit, test_scenario_id)
        VALUES (${testCase.name}, ${testCase.order}, ${testCase.count}, ${testCase.description}, ${testCase.steps}, ${testCase.enabled}, ${testCase.can_edit}, ${testCase.test_scenario_id})
        ON CONFLICT DO NOTHING;
      `
    )
  );

  return insertedTestCases;
}

async function seedtestplans_testcases() {
  await client.sql`CREATE TABLE IF NOT EXISTS testplans_testcases (
    id SERIAL PRIMARY KEY,
    test_plan_id INTEGER,
    test_case_id INTEGER,
    FOREIGN KEY (test_plan_id) REFERENCES test_plans(id) ON DELETE CASCADE,
    FOREIGN KEY (test_case_id) REFERENCES test_cases(id) ON DELETE CASCADE
  );`

  const insertedTestPlansTestCases = await Promise.all(
    testPlansTestCases.map(
      (testCase) => client.sql`
        INSERT INTO testplans_testcases (test_plan_id, test_case_id)
        VALUES (${testCase.test_plan_id}, ${testCase.test_case_id})
        ON CONFLICT DO NOTHING;
      `
    )
  );

  return insertedTestPlansTestCases;
}

async function seedTestPlans() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS test_plans (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      description TEXT,
      active BOOLEAN,
      project_id INT,
      FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
    );
  `;

  await Promise.all(
    testPlans.map((plan) =>
      client.sql`
        INSERT INTO test_plans (name, description, active, project_id)
        VALUES (${plan.name}, ${plan.description}, ${plan.active}, ${plan.project_id})
        ON CONFLICT DO NOTHING;
      `
    )
  );
}

async function seedTestExecutions() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS test_executions (
      id SERIAL PRIMARY KEY,
      start_date TIMESTAMP,
      end_date TIMESTAMP,
      test_plan_id INT,
      build_id INT,
      status INT DEFAULT 1,
      comments TEXT,
      FOREIGN KEY (test_plan_id) REFERENCES test_plans(id) ON DELETE CASCADE,
      FOREIGN KEY (build_id) REFERENCES builds(id) ON DELETE CASCADE
    );
  `;

  await client.sql`
    INSERT INTO test_executions (start_date, end_date, test_plan_id, build_id, status, comments)
    VALUES 
      ('2024-09-28T00:00:00Z', '2024-09-28T14:00:00Z', 1, 1, 2, 'Primeira execução de testes do plano 1'),
      ('2024-09-28T00:00:00Z', '2024-09-29T14:00:00Z', 1, 1, 1, 'Execução de testes com observações')
    ON CONFLICT DO NOTHING;
  `;
}

async function seedTestPlansTestCases() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS testplans_testcases (
      id SERIAL PRIMARY KEY,
      test_plan_id INT,
      test_case_id INT,
      FOREIGN KEY (test_plan_id) REFERENCES test_plans(id) ON DELETE CASCADE,
      FOREIGN KEY (test_case_id) REFERENCES test_cases(id) ON DELETE CASCADE
    );
  `;

  await client.sql`
    INSERT INTO testplans_testcases (test_plan_id, test_case_id)
    VALUES 
      (1, 1),
      (1, 2),
      (1, 3)
    ON CONFLICT DO NOTHING;
  `;
}

async function seedTestExecutionsTestCases() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS test_executions_test_cases (
      id SERIAL PRIMARY KEY,
      created_at TIMESTAMP,
      comment TEXT,
      passed BOOLEAN,
      skipped BOOLEAN,
      failed BOOLEAN,
      test_execution_id INT,
      test_case_id INT,
      FOREIGN KEY (test_execution_id) REFERENCES test_executions(id) ON DELETE CASCADE,
      FOREIGN KEY (test_case_id) REFERENCES test_cases(id) ON DELETE CASCADE
    );
  `;

  await client.sql`
    INSERT INTO test_executions_test_cases (created_at, comment, passed, skipped, failed, test_execution_id, test_case_id)
    VALUES 
      ('2024-09-28T14:01:00Z', 'Senha recuperada com sucesso', true, false, false, 1, 1),
      ('2024-09-28T14:03:00Z', 'Foi acusado credenciais inválidas com as credenciais válidas Admin@Admin', false, false, true, 1, 2),
      ('2024-09-28T14:05:00Z', 'Categoria cadastrada corretamente', true, false, false, 1, 3),
      ('2024-09-28T14:14:00Z', 'Categoria cadastrada corretamente', true, false, false, 2, 3)
    ON CONFLICT DO NOTHING;
  `;
}

async function seedFiles() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS files (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      path VARCHAR(255),
      test_executions_test_cases_id INT,
      FOREIGN KEY (test_executions_test_cases_id) REFERENCES test_executions_test_cases(id) ON DELETE CASCADE
    );
  `;

  await client.sql`
    INSERT INTO files (name, path, test_executions_test_cases_id)
    VALUES 
      ('screenshot-login-sucesso.png', '/screenshots/img1.png', 3),
      ('screenshot-login-falha.png', '/screenshots/img2.png', 2),
      ('screenshot-cadastro-produto.png', '/screenshots/img3.png', 1)
    ON CONFLICT DO NOTHING;
  `;
}

async function seedUsers() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      login VARCHAR(255),
      email VARCHAR(255),
      password VARCHAR(255),
      role VARCHAR(50)
    );
  `;

  await client.sql`
    INSERT INTO users (name, login, email, password, role)
    VALUES 
      ('Admin', 'admin', 'admin@loja.com', 'admin123', 'admin'),
      ('Tester', 'tester', 'tester@loja.com', 'tester123', 'tester')
    ON CONFLICT DO NOTHING;
  `;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedProjects();
    await seedBuilds();
    await seedTestScenarios();
    await seedTestCases();
    await seedTestPlans();
    await seedtestplans_testcases();
    await seedTestExecutions();
    await seedTestPlansTestCases();
    await seedTestExecutionsTestCases();
    await seedFiles();
    await seedUsers();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error : any) {
    await client.sql`ROLLBACK`;
    return Response.json({ error: error.message }, { status: 500 });
  }
}