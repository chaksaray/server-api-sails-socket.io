module.exports = async function (req, res, next) {
    
    return next();
    // let token = req.headers['token'] ? req.headers['token'].split(" ")[1] : "";
    // let isReadyToken = await auth_tokens.findOne({
    //   where: {
    //     token: token
    //   }
    // });
    // if (!isReadyToken) {
    //   res.status(401);
    //   return res.json({
    //     "error": {
    //       "message": "Invalid token",
    //       "type": "OAuth2Exception",
    //       "code": utils.ErrorCode.invalid_token
    //     },
    //     "data": {
    //       "message": "Token not found"
    //     }
    //   });
    // }
    // if (utils.TokenCompare(utils.Agent(req), req)) {
    //   return next();
    // } else {
    //   res.status(401);
    //   return res.json({
    //     "error": {
    //       "message": "Invalid token",
    //       "type": "OAuth2Exception",
    //       "code": utils.ErrorCode.invalid_token
    //     },
    //     "data": {
    //       "message": "Invalid token"
    //     }
    //   });
    // }

}
