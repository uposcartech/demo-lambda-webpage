import MyStack from "./MyStack";

export default function main(app) {
    // Set default runtime for all functions
    app.setDefaultFunctionProps({
        runtime: "nodejs14.x",
        environment: { USERFRONT_KEY: process.env.USERFRONT_KEY },
    });

    let stack = new MyStack(app, "my-stack");

    //console.log(stack.getAllFunctions());

    // Add more stacks
}