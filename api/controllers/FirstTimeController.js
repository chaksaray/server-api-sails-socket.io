module.exports = {
    firstFun: async function (req, res) {
        // var data = await apps.findOne({
        //     where: {
        //       app_id: req.body.app_id
        //     }
        //   });
        //   if (!data) {
        //   }
        let rules = {
            email: "required|email",
            id: "required"
        };
        
        if (!utils.Lodash().isNull(utils.Validator(req.body, rules))) {
            return res.badRequest(utils.Validator(req.body, rules));
        }

        return res.json({ message: "Hello, your first time now you done first part" });
    },
    writeLog: function(req,res){
        sails.log.customL(" my info log is written");
        return  res.json({message:"log is written!"});
    }
};
