import { TestExecutionStatusEnum } from "./enums";

export class Build {
    id: number;
    title: string;
    version: string;
    description: string;
    active: boolean;
    project_id: number;

    constructor(id: number, title: string, version: string, description: string, active: boolean, project_id: number) {
        this.id = id;
        this.title = title;
        this.version = version;
        this.description = description;
        this.active = active;
        this.project_id = project_id;
    }
}

export class Execution {
    id: number;
    start_date: string;
    status: number;
    comments: string;
    end_date: string;
    test_plan_id: number;
    build_id: number;
    testCases?: TestCase[];
    testPlan?: TestPlan;
    build?: Build;

    constructor(id: number, start_date: string, end_date: string, test_plan_id: number, build_id: number, status: number, comments: string) {
        this.id = id;
        this.start_date = start_date;
        this.end_date = end_date;
        this.test_plan_id = test_plan_id;
        this.build_id = build_id;
        this.status = status;
        this.comments = comments;
    }
    
    mapStatusToString = () => {
        return TestExecutionStatusEnum[this.status]
    }
}

export class TestCase {
    id: number
    name: string
    description: string
    steps: string
    test_scenario_id: string
    test_execution_test_case_id?: number
    testscenario ?: TestScenario
    files ?: File[]
    status ?: number
    comment ?: string
    created_at ?: string
    
    constructor(id: number, name: string, description: string, steps: string, test_scenario_id: string) {
        this.id = id
        this.description = description
        this.steps = steps
        this.test_scenario_id = test_scenario_id
        this.name = name
        this.status = 0;
    } 

    mapStatusToString = () => {
        if(this.status === 0)
            return "Não executado"
        if(this.status === 1)
            return "Sucesso"
        if(this.status === 2)
            return "Pulado"
        if(this.status === 3)
            return "Com erros"
        return ""
    }
}

export class TestExecutionTestCase {
    id ?: number
    created_at: string
    comment: string
    passed: number
    skipped: number
    failed: number
    test_execution_id: number
    test_case_id: number

    constructor(
        created_at: string,
        comment: string,
        passed: number,
        skipped: number,
        failed: number,
        test_execution_id: number,
        test_case_id: number
    ) {
        this.created_at = created_at
        this.comment = comment
        this.passed = passed
        this.skipped = skipped
        this.failed = failed
        this.test_execution_id = test_execution_id
        this.test_case_id = test_case_id
    }
}

export class TestPlan {
    id: number;
    name: string;
    description: string;
    active: boolean;
    project_id: number;
    testCases: number[] = [];

    constructor(id: number, name: string, description: string, active: boolean, project_id: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.active = active;
        this.project_id = project_id;
    }
}

export class TestScenario {
    id: number;
    test_id: string
    name: string;
    description: string;
    testProjectId: number;
    isOpen?: boolean;
    testCases: TestCase[] = [];

    constructor(id: number, test_id: string, name: string, description: string, testProjectId: number) {
        this.id = id;
        this.test_id = test_id;
        this.name = name;
        this.description = description;
        this.testProjectId = testProjectId;
        this.isOpen = true;
    }
}

export class Project {
    id: number
    name: string
    description: string
    active: boolean

    constructor(id: number, name: string, description: string, active: boolean) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.active = active;
    }
}

export class User {
    id: number;
    name: string;
    email: string;

    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}