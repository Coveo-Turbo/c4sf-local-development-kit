# Coveo For Salesforce Local Development Kit

An adapter library to ease local development with Salesforce components.

This library is not a complete drop-in for the C4SF package and is meant to offer basic functionality for local development purposes.

Disclaimer: This component was built by the community at large and is not an official Coveo JSUI Component. Use this component at your own risk.

## Getting Started

Disclaimer: You do not want to bundle this code with your Salesforce package to avoid bugs and code conflicts so only script and link snippets will be provided in this Readme.

1. Add the script from unpkg

```html
<script src="https://unpkg.com/@coveops/c4-sf-local-development-kit@latest/dist/index.min.js"></script>
```

> Disclaimer: Unpkg should be used for testing but not for production.

2. Add the styles to use the `ResultActionMenu` for Salesforce Insight Panels.

```html
 <link rel="stylesheet" href="https://unpkg.com/@coveops/c4-sf-local-development-kit@latest/dist/css/index.css" />
```

3. Include the component in your template as follows:

Use the `SalesforceResultLink`, `ConsoleResultLink` or `SalesforceQuickview` as you would in the Salesforce environment and get the non-salesforce equivalent component returned from JSUI.

| Salesforce Component | Adapted Local Component |
| --- | --- |
| SalesforceResultLink | ResultLink |
| ConsoleResultLink | ResultLink |
| SalesforceQuickview | Quickview |

## Contribute

1. Clone the project
2. Copy `.env.dist` to `.env` and update the COVEO_ORG_ID and COVEO_TOKEN fields in the `.env` file to use your Coveo credentials and SERVER_PORT to configure the port of the sandbox - it will use 8080 by default.
3. Build the code base: `npm run build`
4. Serve the sandbox for live development `npm run serve`