const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {logging: false});
// logging: false would remove the sequel command from terminal when sync is run

const Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    slug: {
        type: Sequelize.STRING, //CHAR LIMIT OF 255
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT, //CHAR LIMIT OF 30K
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open','closed'), //ALLOWED VALUES
    }

})

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
});

module.exports = {db, Page, User}
// exports.default = db
// module.exports = db
