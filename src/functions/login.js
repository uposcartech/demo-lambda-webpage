import * as Eta from "eta";

export async function handler(event) {
    let html = await
    import ("../view/login.js");

    let body = Eta.render(html.default, {
        time: event.requestContext.time,
    });

    return {
        statusCode: 200,
        headers: { "Content-Type": "text/html" },
        body,
    };
}