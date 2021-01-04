export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff27f723aa24029ed35cb2f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5z51a5sh',
                  apiId: '496efd45-219d-4e38-bb0f-daaaad6836a9'
                },
                {
                  buildHookId: '5ff27f72f09007f1eff142cd',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-fe97ooo8',
                  apiId: '56843753-23fb-4018-8054-7fef1225bd61'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/darcy504/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-fe97ooo8.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
