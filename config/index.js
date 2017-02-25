var configValues = require('./config');

module.exports = {

    getDbConnectionString: function () {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds161109.mlab.com:61109/node_todo_app';
    }

};

//mongodb://<dbuser>:<dbpassword>@ds161109.mlab.com:61109/node_todo_app