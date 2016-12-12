export class App {
    router = null;

    configureRouter(config, router) {
        config.title = 'Pragma Products';
        config.map([
            {route: ['', 'welcome'], name: 'welcome', moduleId: 'views/welcome/welcome',      nav: true, title: 'Welcome'},
            {route: 'validation', name: 'validation', moduleId: 'views/validation/validation',      nav: true, title: 'Validation'}
        ]);

        this.router = router;
    }
}