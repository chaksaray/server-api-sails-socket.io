define({ "api": [
  {
    "type": "get",
    "url": "/do",
    "title": "How to Run API",
    "name": "How_To_Run",
    "group": "Run_API",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"Go go install sails\":\"https://sailsjs.com/\",\n    \"Go to root api\":\"cd cotafer-api\",\n    \"Install node modules from config\":\"npm install\",\n    \"Install single node modules \":\"npm install module --save\",\n    \"Run Server\": \"sails lift\",\n    \"Run API Doc\": \"npm run doc\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/apidoc/HowToRun.js",
    "groupTitle": "Run_API",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/do"
      }
    ]
  },
  {
    "type": "post",
    "url": "/test",
    "title": "Testing API Doc",
    "name": "testing",
    "group": "Testing",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "media",
            "description": "<p>Field name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/apidoc/firstTime.js",
    "groupTitle": "Testing",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/test"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"Bearer $2a$10$FMTJr/oDp93I3VsYlXE4zObd90FCS63azugEJob6GOUsnznXYPNrS\""
            ],
            "optional": false,
            "field": "token",
            "description": "<p>Bearer token authorize by useing sha256 to encryption(client_id+client_secret)</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>Device name</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "session-id",
            "description": "<p>Device Id.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "os-version",
            "description": "<p>device os version.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"token\": \"Bearer $2a$10$FMTJr/oDp93I3VsYlXE4zObd90FCS63azugEJob6GOUsnznXYPNrS\",\n    \"session-id\": \"123456\",\n    \"model\": \"web\",\n    \"os-version\": \"web\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
