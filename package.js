Package.describe({
    summary: "Bitters - Scaffold styles, variables and structure for Bourbon projects."
});

Package.on_use(function (api) {
    api.use(['scss','bourbon-scss'], 'client');
});