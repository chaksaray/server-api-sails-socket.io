module.exports = {
    writeLog: function(req,res){
        sails.log.customL(" my info log is written");
        return  res.json({message:"log is written!"});
    },
    testSock:function(req,res){
        if (!request.isSocket) {
            return response.badRequest();
          }

    },
    subscribeToFunRoom: function(req, res) {
        if (!req.isSocket) {
            return res.badRequest();
        }
        
        var roomName = req.param('roomName');
        sails.sockets.join(req, roomName, function(err) {
            if (err) {
            return res.serverError(err);
            }
        
            return res.json({
            message: 'Subscribed to a fun room called '+roomName+'!'
            });
        });
    },
    getSocketID: function(req, res) {
        if (!req.isSocket) {
            return res.badRequest();
        }
        
        var socketId = sails.sockets.getId(req);
        // => "BetX2G-2889Bg22xi-jy"
        
        sails.log('My socket ID is: ' + socketId);
        
        sails.sockets.broadcast('message', { greeting: 'Hola!' });
        
        return res.json(socketId);
    },
    // broadcastMsg: function(req, res){
    //     if (!req.isSocket) {
    //         return res.badRequest();
    //     }

        
    // }
};
