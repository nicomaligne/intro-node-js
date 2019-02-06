// window.App = window.App || {}

// window.App.showPostsForCurrentUser = (userId, cb) => {
//   window.App.getPostsForUser(userId, posts => {
//     const postTemplates = posts.map(post => {
//       return `
//       <div class="post">
//         ${post.title}
//         ${post.body}
//         ${post.createdBy}
//       </div>`
//     })
//     cb(postTemplates)
//   })
// }

// window.App.showUserProfile = (userId, cb) => {
//   window.App.getUserById(userId, user => {
//     const profile = `
//       <div>
//         ${user.name}
//       </div>
//     `
//     cb(user)
//   })
// }

const App = require("./data");
const { getPostsForUser, getUserById } = require("./api");
// const App = window.App || {}

const showPostsForCurrentUser = (userId, cb) => {
  getPostsForUser(userId, posts => {
    const postTemplates = posts.map(post => {
      return `
      <div class="post">
        ${post.title}
        ${post.body}
        ${post.createdBy}
      </div>`;
    });
    cb(postTemplates);
  });
};

const showUserProfile = (userId, cb) => {
  getUserById(userId, user => {
    const profile = `
      <div>
        ${user.name}
      </div>
    `;
    cb(user);
  });
};

module.exports = {
  showPostsForCurrentUser,
  showUserProfile,
};
