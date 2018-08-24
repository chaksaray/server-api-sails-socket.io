module.exports = async function (req, res, next) {
    // if (utils.AccessTokenCompare(utils.Agent(req), req)) {
    //   let isExpired = await access_tokens.findOne({
    //     where: {
    //       access_token: req.access_token
    //     }
    //   });
    //   req.access_token = isExpired;
    //   return next();
    // } else {
    //   return res.badRequest({
    //     "data": {
    //       "message": "Invalid access token"
    //     }
    //   });
    // }
    return next();
}
