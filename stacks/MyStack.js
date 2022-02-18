import * as sst from "@serverless-stack/resources";
import { Table, TableFieldType } from "@serverless-stack/resources";

export default class MyStack extends sst.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);

        // Create a Table
        const table = new Table(this, "Lincoln", {
            fields: {
                PK: TableFieldType.STRING,
                SK: TableFieldType.STRING,
            },
            primaryIndex: { partitionKey: "PK", sortKey: "SK" },
        });

        // Create a HTTP API
        const api = new sst.Api(this, "Api", {
            defaultFunctionProps: {
                bundle: {
                    loader: {
                        ".html": "text",
                    },
                },
            },
            routes: {
                "GET /": "src/lambda.handler",
                "GET /login": "src/functions/login.handler",
                "GET /dashboard": "src/functions/dashboard.handler",
                "GET /dashboard/article/create": "src/functions/dashboard-article-get-create.handler",
                "POST /dashboard/article/create": "src/functions/dashboard-article-post-create.handler",
            },
        });

        // Show the endpoint in the output
        this.addOutputs({
            ApiEndpoint: api.url,
        });
    }
}