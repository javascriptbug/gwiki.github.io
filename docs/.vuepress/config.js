module.exports = {
    title:'Hello VuePress',
    base:'/gfe/gwiki',
    themeConfig: {
        sidebar: [
            '/',
            '/api/cli',
            ['/api/node', 'Explicit link text']
          ],
        nav: [
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    {
                        text: 'Group1',
                        items: [
                            {text: 'Chinese', link: '/language/chinese/'},
                            { text: 'Japanese', link: '/language/japanese/'}
                        ]
                    },
                    {
                        text: 'Group2', 
                        items: [
                            { text: 'Chinese', link: '/language/chinese/' },
                            { text: 'Japanese', link: '/language/japanese/' }
                        ]
                    }
        ]
    }],
        logo: '/assets/img/logo-new.png',
}
}