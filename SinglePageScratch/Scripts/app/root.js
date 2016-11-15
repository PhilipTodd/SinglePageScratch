agencyManager.component('root', {
    templateUrl: '/Scripts/app/root.html',
    $routeConfig: [
          { path: '/', name: 'Home', component: 'home', useAsDefault: true },
          { path: '/agency', name: 'Agency', component: 'agency' },
    ]
});

agencyManager.value('$routerRootComponent', 'root');
