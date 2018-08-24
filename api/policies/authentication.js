module.exports = async function (req, res, next) {
    let rules = {
        app_id: 'required'
    };
    if (!utils.Lodash().isNull(utils.Validator(req.body, rules))) {
        return res.badRequest(utils.Validator(req.body, rules));
    }
    // var data = await apps.findOne({
    //   where: {
    //     app_id: req.body.app_id
    //   }
    // });
    // if (!data) {
    //   res.status(401);
    //   return res.json({
    //     "error": {
    //       "message": "Application not found.",
    //       "type": "OAuth2Exception",
    //       "code": utils.ErrorCode.invalid_token
    //     },
    //     "data": {
    //       "message": "Application not found."
    //     }
    //   });
    // }
    // var iShashClientApp = utils.Hexh256(data.app_id + ":" + data.secret_id);
    // var iShashFromClient = req.headers['authorization'] ? req.headers['authorization'].split(" ")[1] : "";
    // if (iShashClientApp != iShashFromClient) {
    //   res.status(401);
    //   return res.json({
    //     "error": {
    //       "message": "Unauthorized",
    //       "type": "OAuth2Exception",
    //       "code": utils.ErrorCode.invalid_token
    //     },
    //     "data": {
    //       "message": "Unauthorized"
    //     }
    //   });
    // }
    return next();
}
