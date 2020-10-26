module.exports = {
    router: {
        middleware: 'authenticated',
        linkActiveClass: 'active',
        extendRoutes(routes, resolve) {
            console.log(routes)
            // routes.push({
            //     name: 'custom',
            //     path: '*',
            //     componet
            // })
            console.log(__dirname,resolve(__dirname,'pages/layout'))
            routes.splice(0)
            routes.push(...[
                {
                    path: '/',
                    component: resolve(__dirname, 'pages/layout'),
                    children: [
                        {
                            path: '',
                            name: 'home',
                            component: resolve(__dirname, 'pages/home')
                        },
                        {
                            path: 'login',
                            name: 'login',
                            component: resolve(__dirname, 'pages/login')
                        },
                        {
                            path: 'register',
                            name: 'register',
                            component: resolve(__dirname, 'pages/login')
                        },
                        {
                            path: 'profile/:username',
                            name: 'profile',
                            component: resolve(__dirname, 'pages/profile')
                        },
                        {
                            name: 'settings',
                            path: 'settings',
                            component: resolve(__dirname, 'pages/settings')
                        },
                        {
                            name: 'editor',
                            path: 'editor',
                            component: resolve(__dirname, 'pages/editor')
                        },
                        {
                            name: 'article',
                            path: 'article/:slug',
                            component: resolve(__dirname, 'pages/article')
                        }
                    ]
                }
            ])
        }
    }
}