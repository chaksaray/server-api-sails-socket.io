//api/services/utils.js
const uuidv1 = require('uuid/v1');
const uuidv4 = require('uuid/v4');
const validator = require("validatorjs");
const _ = require("underscore");
const _lodash = require('lodash');
const bcrypt = require('bcryptjs');
const crypto = require("crypto");
const useragent = require('useragent');
const moment = require('moment');
module.exports = {
    /**
       * get uuid V1
       * @return {String}
       * @api public
       */
    UuidV1: function () {
        return uuidv1().replace(/-/g, "");
    },
    /**
     * get uuid V4
     * @return {String}
     * @api public
     */
    UuidV4: function () {
        return uuidv4().replace(/-/g, "");
    },
    /**
     * 
     */
    Validator: function (body, option) {
        let validate = new validator(body, option, {});
        let res = null;
        if (validate.fails()) {
            res = {};
            let filteredIds = _.filter(_.keys(option), function (key) {
                let error = validate.errors.first(key);
                if (error) {
                    res[key] = error;
                }
            });
            return {
                "data": res
            };
        } else {
            return res;
        }
    },
    /**
    * 
    */
    Lodash: function () {
        return _lodash;
    },
    UDS: function () {
        return _;
    },
    RandomeNumber: function () {
        return Math.floor(100000 + Math.random() * 900000);
    },
    /**
     * 
     */
    RandomId: function (size) {
        var defaultSize = 8;
        if (size) {
            defaultSize = size;
        }
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < defaultSize; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    },
    /**
     * 
     */
    HashB64Sh256: function (data) {
        var options = {
            algorithms: "sha256",
            encoding: "base64"
        };
        var hash = crypto.createHash(options.algorithms);
        return hash.update(data).digest(options.encoding);
    },
    /**
     * 
     */
    HashB64Sh512: function (data) {
        var options = {
            algorithms: "sha512",
            encoding: "base64"
        };
        var hash = crypto.createHash(options.algorithms);
        return hash.update(data).digest(options.encoding);
    },
    /**
     * 
     */
    Hexh256: function (data) {
        var options = {
            algorithms: "sha256",
            encoding: "hex"
        };
        var hash = crypto.createHash(options.algorithms);
        return hash.update(data).digest(options.encoding);
    },
    /**
     * 
     */
    Hexh512: function (data) {
        var options = {
            algorithms: "sha512",
            encoding: "hex"
        };
        var hash = crypto.createHash(options.algorithms);
        return hash.update(data).digest(options.encoding);
    },
    /**
     * 
     */
    Agent: function (req) {
        var agent = useragent.parse(req.headers['user-agent']);
        var userAgent = agent.toAgent();
        var agentDeviceVersion = agent.device.toVersion();
        var agentDevice = agent.device.toString();
        var agentOs = agent.os;
        var agentOsVersion = agent.os.toVersion();
        var agents = userAgent + ":" + agentDeviceVersion + ":" + agentOs + ":" + agentOsVersion + ":" + req.headers['session-id'];
        return agents;
    },
    /**
     * 
     */
    Bcrypt: function (data) {
        var salt = bcrypt.genSaltSync(12);
        var hashBcrypt = bcrypt.hashSync(data, salt);
        return hashBcrypt;
    },
    /**
     * 
     */
    BcryptCompare: function (data_1, data_2) {
        var isValid = bcrypt.compareSync(data_1, data_2);
        return isValid;
    },
    /**
     * 
     */
    TokenBcrypt: function (agents) {
        var salt = bcrypt.genSaltSync(10);
        var hashToken = bcrypt.hashSync(agents, salt);
        return hashToken;
    },
    TokenCompare: function (agents, req) {
        var isValidToken = bcrypt.compareSync(agents, req.headers['token'] ? req.headers['token'].split(" ")[1] : "");
        return isValidToken;
    },
    /**
     * 
     */
    AccessTokenCompare: function (agents, req) {
        var isValidAccessToken = bcrypt.compareSync(agents, req.headers['access-token'] ? req.headers['access-token'].split(" ")[1] : "");
        req.access_token = req.headers['access-token'] ? req.headers['access-token'].split(" ")[1] : '';
        return isValidAccessToken;
    },
    /**
     * 
     */
    AccessTokenCompareOtherLog: function (agents, data) {
        var isValidAccessToken = bcrypt.compareSync(agents, data);
        return isValidAccessToken;
    }
};