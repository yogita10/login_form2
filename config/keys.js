 dbPass = 'mongodb://yogita10:'+ encodeURIComponent('khurana10') + '@cluster0-shard-00-00.bkyqn.mongodb.net:27017,cluster0-shard-00-01.bkyqn.mongodb.net:27017,cluster0-shard-00-02.bkyqn.mongodb.net:27017/test?replicaSet=atlas-aoq975-shard-0&ssl=true&authSource=admin' 

module.exports = {
    mongoURI: dbPass 
};

 