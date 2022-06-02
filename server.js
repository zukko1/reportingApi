const express = require("express");
const app = express();

const REPORTING_ENDPOINT_BASE = "https://reports-endpoint.glitch.me";
const REPORTING_ENDPOINT_MAIN = `${REPORTING_ENDPOINT_BASE}/main`;
const REPORTING_ENDPOINT_DEFAULT = `${REPORTING_ENDPOINT_BASE}/default`;
const REPORTS_DISPLAY_URL = REPORTING_ENDPOINT_BASE;
const CODE_URL = "https://glitch.com/edit/#!/reporting-api-demo";
const AUTHOR = "https://twitter.com/maudnals";

app.get("/", (request, response) => {
    response.sendStatus(200)
});
/*
app.use(express.static("public"));
app.set("view engine", "pug");

app.get("/", (request, response) => {
    response.redirect("/page");
});

// Middleware that sets
// - the policy and rules that will generate reports when violated
// - the reporting endpoint for *all* requests
app.use(function (request, response, next) {

    // Set the rules and policies (these will get violated for the demo)
    response.set(
        "Content-Security-Policy",
        `script-src 'self'; object-src 'none'; report-to main-endpoint;`
    );
    response.set("Document-Policy", `document-write=?0;report-to=main-endpoint`);
    // experimental
    response.set("Permissions-Policy", `microphone=()`);

    // Set the endpoints (API v1)
    response.set(
        "reporting-endpoints",
        `main-endpoint="${REPORTING_ENDPOINT_MAIN}", default="${REPORTING_ENDPOINT_DEFAULT}"`
    );
    // Set the endpoints (API v0)
    // ❌ Not needed here since we're using the API v1
    // const mainEndpoint = JSON.stringify({
    //   group: "main-endpoint",
    //   max_age: 10886400,
    //   endpoints: [{ url: `${REPORTING_ENDPOINT_MAIN}` }]
    // });
    // const defaultEndpoint = JSON.stringify({
    //   max_age: 10886400,
    //   endpoints: [{ url: `${REPORTING_ENDPOINT_DEFAULT}` }]
    // });
    // response.set("Report-To", `${mainEndpoint}, ${defaultEndpoint}`);

    next();
});

app.get("/page", (request, response) => {
    response.render("index", {
        version: "v1",
        reportsDisplayUrl: REPORTS_DISPLAY_URL,
        codeUrl: CODE_URL,
        author: AUTHOR
    });
});
*/

const listener = app.listen(39217, () => {
    console.log("Your app is listening on port " + listener.address().port);
});
