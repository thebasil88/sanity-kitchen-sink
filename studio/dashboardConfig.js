export default {
  widgets: [
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
                  buildHookId: '608b039bb5c7664ebc45a943',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-65ks1p4r',
                  apiId: '30783447-8e5e-4955-98ef-aeb4eec92664'
                },
                {
                  buildHookId: '608b039b7a1356423c677d96',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-vq53tcpk',
                  apiId: 'c967aac4-08fe-4e89-8493-47ef20697d6a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thebasil88/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-vq53tcpk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
