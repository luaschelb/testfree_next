export enum TestCaseStatusEnum {
    "Não executado" = 0,
    "Sucesso" = 1,
    "Pulado" = 2,
    "Com erros" = 3
}

export enum TestExecutionStatusEnum {
    "Não executado" = 0,
    "Em execução" = 1,
    "Finalizada" = 2,
    "Sucesso" = 3,
    "Com erros" = 4,
}

export enum TestScenarioMenuControlEnum {
    DEFAULT,
    CREATE_TEST_CASE,
    EDIT_TEST_CASE,
    CREATE_TEST_SCENARIO,
    EDIT_TEST_SCENARIO
}
