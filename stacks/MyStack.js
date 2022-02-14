import * as sst from "@serverless-stack/resources";

export default class MyStack extends sst.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);

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
            },
        });

        // Show the endpoint in the output
        this.addOutputs({
            ApiEndpoint: api.url,
        });
    }
}