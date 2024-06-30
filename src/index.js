const primsaClientInstance = require('./db.js')

primsaClientInstance.getAllUsers().then(response => console.log(response))

primsaClientInstance.getUserPosts(2).then(response => console.log(response))

primsaClientInstance.getUserWithProfile(1).then(response => console.log(response))

primsaClientInstance.updatePostContent(1, 'Some new content').then(response => console.log(response))

primsaClientInstance.deletePost(3).then(response => console.log(response))