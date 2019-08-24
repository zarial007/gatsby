const path = require('path')
const axios = require('axios')

const url = 'https://jsonplaceholder.typicode.com/users'
const album = 'https://jsonplaceholder.typicode.com/albums?_limit=5'


exports.createPages = async ({ actions }) => {
    const { createPage } = actions

    try {
        const { data } = await axios.get(url)
        const users = data

        createPage({
            path: '/users',
            component: path.resolve(__dirname, 'src', 'templates', 'users.jsx'),
            context: {
                users: users
            }
        })

        users.forEach(each => {
            createPage({
                path: `/user/${each.username.toLowerCase()}`,
                component: path.resolve(__dirname, 'src', 'templates', 'user.jsx'),
                context: {
                    user : each
                }
            })
        })


    } catch (err) {
        return Promise.reject(err)
    }


    try{
        const { data } = await axios.get(album)
        const albums = data
        createPage({
            path: '/albums',
            component: path.resolve(__dirname, 'src', 'templates', 'albums.jsx'),
            context: {
                albums: albums
            }
        })

        albums.forEach(each => {
            createPage({
                path: `/album/${each.id}`,
                component: path.resolve(__dirname, 'src', 'templates', 'album.jsx'),
                context: {
                    album : each
                }
            })
        })

    }catch(ex){
        return Promise.reject(ex)
    }


    const People = path.resolve(__dirname, 'src', 'templates', 'people.jsx')
    const Person = path.resolve(__dirname, 'src', 'templates', 'person.jsx')

    const people = ['John', 'Jack', 'Mike']

    createPage({
        path: '/people',
        component: People,
        context: {
            people: people
        }
    })

    people.forEach(each => {
        createPage({
            path: `/${each.toLowerCase()}`,
            component: Person,
            context: {
                name: each
            }
        })
    })
}
