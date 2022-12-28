define({ "api": [
  {
    "type": "post",
    "url": "/api/app/admin/change-password",
    "title": "Change Password",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "change-password",
    "group": "Admin-Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwordCurrent",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\": 200,\n   \"message\": \"password changed successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n       \"status\": 400,\n       \"message\": \"Invalid password\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/AuthController.ts",
    "groupTitle": "Admin-Auth"
  },
  {
    "type": "post",
    "url": "/api/v1/admin/auth/login",
    "title": "Log In",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "login",
    "group": "Admin-Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n        \"status\": 200,\n        \"data\": {\n          \"admin\": {\n                  \"email\": \"admin@wefundus.com\",\n                  \"_id\": \"615bdfd735a0fd20a8d80d02\",\n                  \"name\": \"We Fund us\",\n                  \"createdAt\": \"2021-10-05T05:17:11.254Z\"\n                },\n                \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9UyZmViNDFkOGU1NDZ.....\"\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n       \"status\": 400,\n       \"message\": \"Incorrect email or password\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/AuthController.ts",
    "groupTitle": "Admin-Auth"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/banner",
    "title": "Get Banner list",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU3Njk1MzQzLCJleHAiOjE2NTc3ODE3NDN9.HAJ40QWHuL2QeXo3GVQZKziiiQHbLsq0hyuMM-SgfaY</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Get-banner-list",
    "group": "Admin-Banner",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"status\": 200,\n \"statusText\": \"SUCCESS\",\n  \"message\": \"Banner list fetch successfully\",\n    \"data\": {\n      \"list\": [\n     {\n        \"_id\": \"62d7a6c9827f44cf6eac3b8e\",\n        \"clickUrl\": \"dfjdjgerjrgrpggrrep\",\n        \"photo\": \"banner/1658300102695-aggregation.png\",\n        \"deviceType\": \"WEB\",\n        \"isActive\": true,\n        \"isDeleted\": false,\n        \"createdAt\": \"2022-07-20T06:55:05.539Z\",\n        \"updatedAt\": \"2022-07-20T06:55:05.539Z\"\n    },\n     {\n         \"_id\": \"62d7a3c6c20f9c2535949a82\",\n        \"clickUrl\": \"bgththjyjytjhtht\",\n        \"photo\": \"banner/1658299332562-Rahul Kannoujia(MCE336).jpeg\",\n       \"deviceType\": \"MOBILE\",\n        \"isActive\": true,\n       \"isDeleted\": false,\n       \"createdAt\": \"2022-07-20T06:42:14.078Z\",\n        \"updatedAt\": \"2022-07-20T06:42:14.078Z\"\n    }\n],\n }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/BannerController.ts",
    "groupTitle": "Admin-Banner"
  },
  {
    "type": "post",
    "url": "/api/v1/admin/banner",
    "title": "Add Banner",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4Mjk0OTQ5LCJleHAiOjE2NTgzODEzNDl9.PjHH-y-fKkDRD5Zw5fA8I029Iwc1ESWxnCYszaRTEpo</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "add-banner",
    "group": "Admin-Banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "photo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clickUrl",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n  \"photo\": FileType,\n  \"clickUrl\":\"bgththjyjytjhtht\",\n  \"deviceType\":\"WEB\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 created\n{\n\"status\": 201,\n\"statusText\": \"CREATED\",\n \"message\": \"banner_uploaded\",\n\"data\": {\n\"clickUrl\": \"dfjdjgerjrgrpggrrep\",\n\"photo\": \"banner/1658300139383-aggregation.png\",\n\"deviceType\": \"WEB\",\n\"isActive\": true,\n\"isDeleted\": false,\n\"_id\": \"62d7a6ed678ab2b95ae8d121\",\n\"createdAt\": \"2022-07-20T06:55:41.336Z\",\n\"updatedAt\": \"2022-07-20T06:55:41.336Z\",\n\"__v\": 0\n}\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/BannerController.ts",
    "groupTitle": "Admin-Banner"
  },
  {
    "type": "patch",
    "url": "/api/v1/admin/banner/_id/edit",
    "title": "Edit Banner",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4Mjk0OTQ5LCJleHAiOjE2NTgzODEzNDl9.PjHH-y-fKkDRD5Zw5fA8I029Iwc1ESWxnCYszaRTEpo</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "edit-banner",
    "group": "Admin-Banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "photo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clickUrl",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n  \"photo\": FileType,\n  \"clickUrl\":\"fkgkfkjgjbhgjgojrohjtpohjtohpjh\",\n  \"deviceType\":\"MOBILE\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 success\n {\n\"status\": 200,\n  \"statusText\": \"SUCCESS\",\n  \"message\": \"Banner edited successfully\",\n  \"data\": {\n    \"banner\": {\n   \"_id\": \"62d8f7558ecb874779972d57\",\n   \"clickUrl\": \"fkgkfkjgjbhgjgojrohjtpohjtohpjh\",\n   \"photo\": \"banner/1658744160299-aggregation.png\",\n   \"deviceType\": \"MOBILE\",\n   \"isActive\": true,\n   \"isDeleted\": false,\n   \"createdAt\": \"2022-07-21T06:51:01.706Z\",\n   \"updatedAt\": \"2022-07-21T06:51:01.706Z\",\n   \"__v\": 0\n},\n\"execTime\": 2053\n   }\n     }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/BannerController.ts",
    "groupTitle": "Admin-Banner"
  },
  {
    "type": "patch",
    "url": "/api/v1/admin/banner/_id/status",
    "title": "Update Status Banner",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4MzAyNzUzLCJleHAiOjE2NTgzODkxNTN9.sZHSncgjZAdM_gYbP7tIK8NTFTrAo2j10UkG4bHWhxs</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "update-status-banner",
    "group": "Admin-Banner",
    "description": "<p>pass banner _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"status\": 200,\n \"statusText\": \"SUCCESS\",\n \"message\": \"Banner update status successfully\",\n\"data\": {\n    \"_id\": \"62d7a3c6c20f9c2535949a82\",\n    \"clickUrl\": \"bgththjyjytjhtht\",\n   \"photo\": \"banner/1658299332562-Rahul Kannoujia(MCE336).jpeg\",\n    \"deviceType\": \"MOBILE\",\n    \"isActive\": false,\n     \"isDeleted\": false,\n     \"createdAt\": \"2022-07-20T06:42:14.078Z\",\n    \"updatedAt\": \"2022-07-20T06:42:14.078Z\",\n    \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/BannerController.ts",
    "groupTitle": "Admin-Banner"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/brand",
    "title": "Get Brand list",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU3Njk1MzQzLCJleHAiOjE2NTc3ODE3NDN9.HAJ40QWHuL2QeXo3GVQZKziiiQHbLsq0hyuMM-SgfaY</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Get-brand-list",
    "group": "Admin-Brand",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n       \"status\": 200,\n       \"statusText\": \"SUCCESS\",\n       \"message\": \"Brand list fetch successfully\",\n       \"data\": {\n       \"list\": [\n        {\n           \"_id\": \"62eb972b0060e0fa3cc17be0\",\n           \"name\": \"testChecked23\",\n           \"categories\": [\n               \"62dfda48fb89c4b45de45303\",\n               \"62df82e975c63052a810d5f1\"\n           ],\n           \"isActive\": true,\n           \"logo\": \"brands/toys.jpg\",\n           \"isDeleted\": false,\n           \"createdAt\": \"2022-08-04T09:53:47.167Z\",\n           \"updatedAt\": \"2022-08-04T09:53:47.167Z\",\n           \"timeStamp\": 1659606827167\n       },\n       {\n           \"_id\": \"62eb5eb14afaba1f287c38f8\",\n           \"name\": \"subham arya\",\n           \"categories\": [\n               \"62d0063bff9b93f5383b0109\"\n           ],\n           \"isActive\": false,\n           \"logo\": \"brands/rest.jpg\",\n           \"isDeleted\": false,\n           \"createdAt\": \"2022-08-04T05:52:49.767Z\",\n           \"updatedAt\": \"2022-08-04T05:52:49.767Z\",\n           \"timeStamp\": 1659592369767\n       },\n       {\n           \"_id\": \"62eb5ca30f9c56b060902273\",\n           \"name\": \"pukraj sir\",\n           \"categories\": [\n               \"62d0063bff9b93f5383b0109\"\n           ],\n           \"isActive\": true,\n           \"logo\": \"\",\n           \"isDeleted\": false,\n           \"createdAt\": \"2022-08-04T05:44:03.926Z\",\n           \"updatedAt\": \"2022-08-04T05:44:03.926Z\",\n           \"timeStamp\": 1659591843926\n       },\n       {\n           \"_id\": \"62ea652c08f178c2bb110fd9\",\n           \"name\": \"Subham Sir\",\n           \"categories\": [\n               \"62c565ce198c336e57acf4a7\",\n               \"62c6a900437247fa040492c9\"\n           ],\n           \"isActive\": true,\n           \"logo\": \"brands/test3.jpeg\",\n           \"isDeleted\": false,\n           \"createdAt\": \"2022-08-03T12:08:12.058Z\",\n           \"updatedAt\": \"2022-08-03T12:08:12.058Z\",\n           \"timeStamp\": 1659528492058\n       }\n   ],\n   \"count\": 4,\n   \"execTime\": 183\n     }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/BrandController.ts",
    "groupTitle": "Admin-Brand"
  },
  {
    "type": "put",
    "url": "/api/v1/admin/brand",
    "title": "Add Brand",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4Mjk0OTQ5LCJleHAiOjE2NTgzODEzNDl9.PjHH-y-fKkDRD5Zw5fA8I029Iwc1ESWxnCYszaRTEpo</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "add-brand",
    "group": "Admin-Brand",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "logoImage",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "categories",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body:",
          "content": "{\n  \"logo\": FileType,\n  \"name\":\"Shubham Arya\",\n  \"categories\":[]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "*HTTP/1.1 201 created\n\n{\n\"status\": 201,\n\"statusText\": \"CREATED\",\n\"message\": \"Brand added successfully\",\n\"data\": {\n\"brand\": {\n   \"name\": \"Ashraf sir\",\n   \"categories\": [\n       \"62d0063bff9b93f5383b0109\"\n   ],\n   \"isActive\": true,\n   \"logo\": \"brands/rest.jpg\",\n   \"isDeleted\": false,\n   \"_id\": \"62eb5eb14afaba1f287c38f8\",\n   \"createdAt\": \"2022-08-04T05:52:49.767Z\",\n   \"updatedAt\": \"2022-08-04T05:52:49.767Z\",\n   \"timeStamp\": 1659592369767,\n   \"__v\": 0\n  },\n \"execTime\": 1922\n  }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/BrandController.ts",
    "groupTitle": "Admin-Brand"
  },
  {
    "type": "patch",
    "url": "/api/v1/admin/brand/_id",
    "title": "Edit Brand",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4Mjk0OTQ5LCJleHAiOjE2NTgzODEzNDl9.PjHH-y-fKkDRD5Zw5fA8I029Iwc1ESWxnCYszaRTEpo</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "edit-brand",
    "group": "Admin-Brand",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "logoImage",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "categories",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body:",
          "content": "{\n  \"logo\": FileType,\n  \"name\":\"subham arya\",\n  \"categories\":[]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 success\n  {\n     \"status\": 200,\n      \"statusText\": \"SUCCESS\",\n     \"message\": \"Brand Updated Successfully\",\n  \"data\": {\n  \"brand\": {\n  \"_id\": \"62eb5eb14afaba1f287c38f8\",\n  \"name\": \"subham arya\",\n  \"categories\": [\n   \"62d0063bff9b93f5383b0109\"\n   ],\n  \"isActive\": true,\n  \"logo\": \"brands/rest.jpg\",\n  \"isDeleted\": false,\n  \"createdAt\": \"2022-08-04T05:52:49.767Z\",\n  \"updatedAt\": \"2022-08-04T05:52:49.767Z\",\n  \"timeStamp\": 1659592369767,\n  \"__v\": 0\n  },\n\"execTime\": 1704\n }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/BrandController.ts",
    "groupTitle": "Admin-Brand"
  },
  {
    "type": "patch",
    "url": "/api/v1/admin/brand/_id/status",
    "title": "Update Status Brand",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4MzAyNzUzLCJleHAiOjE2NTgzODkxNTN9.sZHSncgjZAdM_gYbP7tIK8NTFTrAo2j10UkG4bHWhxs</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "update-status-brand",
    "group": "Admin-Brand",
    "description": "<p>pass brand _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  \"status\": 200,\n  \"statusText\": \"SUCCESS\",\n  \"message\": \"Brand update status sucessfully\",\n  \"data\": {\n   \"_id\": \"62d7a3c6c20f9c2535949a82\",\n   \"name\": \"bgththjyjytjhtht\",\n   \"logo\": \"brand/toy.jpeg\",\n   \"deviceType\": \"MOBILE\",\n   \"isActive\": false,\n   \"isDeleted\": false,\n   \"createdAt\": \"2022-07-20T06:42:14.078Z\",\n   \"updatedAt\": \"2022-07-20T06:42:14.078Z\",\n   \"__v\": 0\n       }\n     }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/BrandController.ts",
    "groupTitle": "Admin-Brand"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/category/_id",
    "title": "Get Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Get-category",
    "group": "Admin-Category",
    "description": "<p>pass category _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"Category fetched successfully\",\n    \"data\": {\n        \"category\": {\n            \"_id\": \"62c3f223f65d83b1b59d0f60\",\n            \"name\": \"test7\",\n            \"image\": \"test7\",\n            \"isActive\": true,\n            \"isDeleted\": true,\n            \"createdAt\": \"2022-07-05T08:11:15.831Z\",\n            \"updatedAt\": \"2022-07-05T08:11:15.831Z\",\n            \"__v\": 0\n        },\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/CategoryController.ts",
    "groupTitle": "Admin-Category"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/category",
    "title": "Get Category list",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Get-category-list",
    "group": "Admin-Category",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n  \"status\": 200,\n  \"statusText\": \"SUCCESS\",\n  \"message\": \"Category list get successfully\",\n  \"data\": {\n      \"list\": [\n          {\n              \"_id\": \"62c6a900437247fa040492c9\",\n              \"name\": \"Men's Fashion\",\n              \"image\": \"category/1657103792052-test3.jpeg\",\n              \"isActive\": true,\n              \"isDeleted\": false,\n              \"createdAt\": \"2022-07-07T09:36:00.816Z\",\n              \"updatedAt\": \"2022-07-07T09:36:00.816Z\"\n          },\n          {\n              \"_id\": \"62c565ce198c336e57acf4a7\",\n              \"name\": \"Women's Fashion\",\n              \"image\": \"category/1657103792052-test3.jpeg\",\n              \"isActive\": true,\n              \"isDeleted\": false,\n              \"createdAt\": \"2022-07-06T10:37:02.361Z\",\n              \"updatedAt\": \"2022-07-06T10:37:02.361Z\"\n          }\n      ],\n      \"count\": 2,\n      \"execTime\": 126\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/CategoryController.ts",
    "groupTitle": "Admin-Category"
  },
  {
    "type": "post",
    "url": "/api/v1/admin/category",
    "title": "Add Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "add-category",
    "group": "Admin-Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n  \"name\": \"Men's Fashion\",\n   \"image\": \"category/1657093091432-test9.png\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n       \"status\": 201,\n       \"statusText\": \"CREATED\",\n       \"message\": \"Category created successfully\",\n           \"data\": {\n               \"category\": {\n                   \"name\": \"Men's Fashion\",\n                   \"image\": \"category/1657093091432-test9.png\",\n                   \"isActive\": true,\n                   \"isDeleted\": false,\n                   \"_id\": \"62c529be6208e8fd5ceeda28\",\n                   \"createdAt\": \"2022-07-06T06:20:46.771Z\",\n                   \"updatedAt\": \"2022-07-06T06:20:46.771Z\",\n                   \"__v\": 0\n               },\n               \"execTime\": 94\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/CategoryController.ts",
    "groupTitle": "Admin-Category"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/category/:id/attributes",
    "title": "Add Update attributes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "attributes",
    "group": "Admin-Category",
    "parameter": {
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n     \"attributes\": [\n         \"attr1\",\n         \"attr2\",\n         \"attr3\"\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n         \"status\": 200,\n         \"statusText\": \"SUCCESS\",\n         \"message\": \"Attributes added\",\n         \"data\": {\n             \"category\": {\n                 \"_id\": \"62f3940b9244e1b9fcc9c575\",\n                 \"name\": \"shirtcategory\",\n                 \"image\": \"category/1660130309635-shirt2.jpeg\",\n                 \"isActive\": true,\n                 \"isDeleted\": false,\n                 \"productSold\": 0,\n                 \"createdAt\": \"2022-08-10T11:18:35.493Z\",\n                 \"updatedAt\": \"2022-08-19T10:39:43.830Z\",\n                 \"__v\": 2,\n                 \"slug\": \"shirtcategory\",\n                 \"attributes\": [\n                     \"attr1\",\n                     \"attr2\",\n                     \"attr3\"\n                 ]\n             },\n             \"execTime\": 129\n         }\n     }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/CategoryController.ts",
    "groupTitle": "Admin-Category"
  },
  {
    "type": "delete",
    "url": "/api/v1/admin/category/_id",
    "title": "Delete Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "delete-category",
    "group": "Admin-Category",
    "description": "<p>pass category _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\": 200,\n   \"statusText\": \"SUCCESS\",\n   \"message\": \"Category deleted successfully\",\n       \"data\": {\n           \"category\": {\n               \"_id\": \"62c3f223f65d83b1b59d0f60\",\n               \"name\": \"test7\",\n               \"image\": \"test7\",\n               \"isActive\": true,\n               \"isDeleted\": true,\n               \"createdAt\": \"2022-07-05T08:11:15.831Z\",\n               \"updatedAt\": \"2022-07-05T08:11:15.831Z\",\n               \"__v\": 0\n           },\n           \"execTime\": 79\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/CategoryController.ts",
    "groupTitle": "Admin-Category"
  },
  {
    "type": "patch",
    "url": "/api/v1/admin/category/_id",
    "title": "Update Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "update-category",
    "group": "Admin-Category",
    "description": "<p>pass category _id as params</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of category</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>image url of category</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n       \"status\": 200,\n       \"statusText\": \"SUCCESS\",\n       \"message\": \"Category updated successfully\",\n           \"data\": {\n               \"category\": {\n                   \"_id\": \"62c3f223f65d83b1b59d0f60\",\n                   \"name\": \"test7\",\n                   \"image\": \"test7\",\n                   \"isActive\": true,\n                   \"isDeleted\": true,\n                   \"createdAt\": \"2022-07-05T08:11:15.831Z\",\n                   \"updatedAt\": \"2022-07-05T08:11:15.831Z\",\n                   \"__v\": 0\n               },\n               \"execTime\": 75\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/CategoryController.ts",
    "groupTitle": "Admin-Category"
  },
  {
    "type": "patch",
    "url": "/api/v1/admin/category/_id/status",
    "title": "Update Status Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4NDAxNzE4LCJleHAiOjE2NTg0ODgxMTh9.XD0OhucPIiCOyEEmAu7xUAaI1VdtiE6WgU8NOk_FpWU</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "update-status-category",
    "group": "Admin-Category",
    "description": "<p>pass category _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n  {\n   \"status\": 200,\n   \"statusText\": \"SUCCESS\",\n   \"message\": \"category_update\",\n   \"data\": {\n       \"_id\": \"62c565ce198c336e57acf4a7\",\n       \"name\": \"Women's Fashion\",\n       \"image\": \"category/1657103792052-test3.jpeg\",\n       \"isActive\": false,\n       \"isDeleted\": false,\n       \"createdAt\": \"2022-07-06T10:37:02.361Z\",\n       \"updatedAt\": \"2022-07-06T10:37:02.361Z\",\n       \"__v\": 0\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/CategoryController.ts",
    "groupTitle": "Admin-Category"
  },
  {
    "type": "put",
    "url": "/api/v1/admin/category",
    "title": "Upload Category Image",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "upload-image",
    "group": "Admin-Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image.",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\"status\":201,\"statusText\":\"CREATED\",\"message\":\"Image uploaded successfully\",\"data\":{\"url\":\"category/1657018612759-test9.png\"}}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/CategoryController.ts",
    "groupTitle": "Admin-Category"
  },
  {
    "type": "post",
    "url": "/api/v1/admin/color",
    "title": "Add Color",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDkzODExMDgyMDE1MGUzODI5MjgxOCIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU5Njc3OTczLCJleHAiOjE2NTk3NjQzNzN9.4aQEjRkddmVNQZ3glPrbsoCXMtuwJ6I2iWPQZ-QHIbU</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "add-color",
    "group": "Admin-Color",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n \"name\":\"Magenta\",\n \"code\":\"#FF00FF\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 201 created\n{\n\"status\": 201,\n\"statusText\": \"CREATED\",\n\"message\": \"New color added\",\n\"data\": {\n  \"color\": {\n      \"name\": \"Magenta\",\n      \"code\": \"#FF00FF\",\n      \"_id\": \"62ecaf8729081a8c25f07451\",\n      \"createdAt\": \"2022-08-05T05:49:59.258Z\",\n      \"updatedAt\": \"2022-08-05T05:49:59.258Z\",\n      \"__v\": 0  \n},\n     * \"execTime\": 326\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/ColorController.ts",
    "groupTitle": "Admin-Color"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/_id",
    "title": "Delete Color",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDkzODExMDgyMDE1MGUzODI5MjgxOCIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU5Njg0NTc2LCJleHAiOjE2NTk3NzA5NzZ9.LvpKDBotBbAbdv-hNBtHe6Oa3bqjJct5kH4UA5WBkcg</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "delete-color",
    "group": "Admin-Color",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n\"status\": 200,\n\"statusText\": \"SUCCESS\",\n\"message\": \"Color deleted successfully\",\n\"data\": {\n   \"category\": {\n       \"_id\": \"62ecaf8729081a8c25f07451\",\n       \"name\": \"Magenta\",\n       \"code\": \"#FF00FF\",\n       \"createdAt\": \"2022-08-05T05:49:59.258Z\",\n       \"updatedAt\": \"2022-08-05T05:49:59.258Z\",\n       \"__v\": 0\n   },\n   \"execTime\": 96\n}\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/ColorController.ts",
    "groupTitle": "Admin-Color"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/color?search=Red",
    "title": "Get Color",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDkzODExMDgyMDE1MGUzODI5MjgxOCIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU5Njg0NTc2LCJleHAiOjE2NTk3NzA5NzZ9.LvpKDBotBbAbdv-hNBtHe6Oa3bqjJct5kH4UA5WBkcg</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "list-color",
    "group": "Admin-Color",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n      {\n          \"status\": 200,\n          \"statusText\": \"SUCCESS\",\n          \"message\": \"Color list fetched successfully\",\n          \"data\": {\n              \"list\": [\n                  {\n                      \"_id\": \"62ecae3b29081a8c25f07433\",\n                      \"name\": \"Red\",\n                      \"code\": \"#FF0000\",\n                      \"createdAt\": \"2022-08-05T05:44:27.228Z\",\n                      \"updatedAt\": \"2022-08-05T05:44:27.228Z\",\n                      \"__v\": 0\n                  }\n              ],\n              \"execTime\": 80\n          }\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/ColorController.ts",
    "groupTitle": "Admin-Color"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/filter",
    "title": "Filter List",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "filter-list",
    "group": "Admin-Filter",
    "success": {
      "examples": [
        {
          "title": "Success-Response-1:",
          "content": "  {\n   \"status\": 200,\n   \"statusText\": \"SUCCESS\",\n  \"message\": \"Filter list fetch successfully\",\n  \"data\": {\n \"list\": [\n   {\n       \"subcategories\": {\n           \"displayName\": \"product categories\",\n           \"queryKey\": \"subcategory\",\n           \"list\": [\n               {\n                   \"name\": \"Kid's crafts\",\n                   \"_id\": \"62dfd43efb89c4b45de44f18\"\n               }\n           ]\n       },\n       \"brands\": {\n           \"displayName\": \"brands\",\n           \"queryKey\": \"brands\",\n           \"list\": [\n               {\n                   \"name\": \"My Brnad\",\n                   \"_id\": \"62f20e7b462b16cab5e16fbf\"\n               }\n           ]\n       },\n       \"price\": {\n           \"displayKey\": \"price\",\n           \"queryKey\": \"price\",\n           \"minPrice\": 40,\n           \"maxPrice\": 450000\n       },\n       \"color\": {\n           \"displayKey\": \"color\",\n           \"queryKey\": \"colors\",\n           \"list\": [\n               \"red\",\n               \"blue\"\n           ]\n       },\n       \"attributes\": {\n           \"queryKey\": \"attributes\",\n           \"attributes\": [\n               {\n                   \"displayKey\": \"sizes\",\n                   \"queryKey\": \"sizes\",\n                   \"list\": [\n                       \"x\",\n                       \"M\",\n                       \"XL\",\n                       \"XXL\",\n                       \"xs\"\n                   ]\n               },\n               {\n                   \"displayKey\": \"fabric\",\n                   \"queryKey\": \"fabric\",\n                   \"list\": [\n                       \"nylon\"\n                   ]\n               },\n               {\n                   \"displayKey\": \"patters\",\n                   \"queryKey\": \"patters\",\n                   \"list\": [\n                       \"regular\"\n                   ]\n               }\n           ]\n       },\n       \"_id\": \"62f24134f340f9f48352e9a3\",\n       \"categoryId\": \"62df8560920908884958dd49\"\n   },\n   {\n       \"subcategories\": {\n           \"displayName\": \"product categories\",\n           \"queryKey\": \"subcategory\",\n           \"list\": [\n               {\n                   \"name\": \"Kid's crafts\",\n                   \"_id\": \"62dfd43efb89c4b45de44f18\"\n               }\n           ]\n       },\n       \"brands\": {\n           \"displayName\": \"brands\",\n           \"queryKey\": \"brands\",\n           \"list\": [\n               {\n                   \"name\": \"My Brnad\",\n                   \"_id\": \"62f20e7b462b16cab5e16fbf\"\n               }\n           ]\n       },\n       \"price\": {\n           \"displayKey\": \"price\",\n           \"queryKey\": \"price\",\n           \"minPrice\": 2000,\n           \"maxPrice\": 2000\n       },\n       \"color\": {\n           \"displayKey\": \"color\",\n           \"queryKey\": \"colors\",\n           \"list\": []\n       },\n       \"attributes\": {\n           \"queryKey\": \"attributes\",\n           \"attributes\": []\n       },\n       \"_id\": \"62f35113cc6f503ef4ab815f\",\n       \"categoryId\": \"62e224b0fb89c4b45de4655e\"\n   },\n   {\n       \"subcategories\": {\n           \"displayName\": \"product categories\",\n           \"queryKey\": \"subcategory\",\n           \"list\": [\n               {\n                   \"name\": \"shirtSubcategory\",\n                   \"_id\": \"62f394349244e1b9fcc9c586\"\n               }\n           ]\n       },\n       \"brands\": {\n           \"displayName\": \"brands\",\n           \"queryKey\": \"brands\",\n           \"list\": [\n               {\n                   \"name\": \"My Brnad\",\n                   \"_id\": \"62f20e7b462b16cab5e16fbf\"\n               }\n           ]\n       },\n       \"price\": {\n           \"displayKey\": \"price\",\n           \"queryKey\": \"price\",\n           \"minPrice\": 2000,\n           \"maxPrice\": 2000\n       },\n       \"color\": {\n           \"displayKey\": \"color\",\n           \"queryKey\": \"colors\",\n           \"list\": []\n       },\n       \"attributes\": {\n           \"queryKey\": \"attributes\",\n           \"attributes\": []\n       },\n       \"_id\": \"62f3955d9244e1b9fcc9c5cd\",\n       \"categoryId\": \"62f3940b9244e1b9fcc9c575\"\n   },\n   {\n       \"subcategories\": {\n           \"displayName\": \"product categories\",\n           \"queryKey\": \"subcategory\",\n           \"list\": [\n               {\n                   \"name\": \"Cricket Bat\",\n                   \"_id\": \"62f5dd0b20098408379216bf\"\n               }\n           ]\n       },\n       \"brands\": {\n           \"displayName\": \"brands\",\n           \"queryKey\": \"brands\",\n           \"list\": [\n               {\n                   \"name\": \"MRF\",\n                   \"_id\": \"62f5e10b2009840837921794\"\n               }\n           ]\n       },\n       \"price\": {\n           \"displayKey\": \"price\",\n           \"queryKey\": \"price\",\n           \"minPrice\": 2000,\n           \"maxPrice\": 6000\n       },\n       \"color\": {\n           \"displayKey\": \"color\",\n           \"queryKey\": \"colors\",\n           \"list\": [\n               \"Red\",\n               \"Blue\",\n               \"Green\",\n               \"Yellow\",\n               \"Pink\"\n           ]\n       },\n       \"attributes\": {\n           \"queryKey\": \"attributes\",\n           \"attributes\": []\n       },\n       \"_id\": \"62f5e309f3a7e3dfc73ace45\",\n       \"categoryId\": \"62f5dcf020098408379216ae\"\n   }\n],\n\"count\": 4,\n\"execTime\": 99\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/FilterController.ts",
    "groupTitle": "Admin-Filter"
  },
  {
    "type": "patch",
    "url": "/api/v1/admin/group",
    "title": "Delete Groups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Delete_Group",
    "group": "Admin-Group",
    "parameter": {
      "examples": [
        {
          "title": "Request-body",
          "content": "{\n  groupIds = [\"631eddcced7496146e770bf1\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"status\": 200,\n   \"statusText\": \"SUCCESS\",\n   \"message\": \"Group deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/GroupController.ts",
    "groupTitle": "Admin-Group"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/group",
    "title": "Group list",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "get-group-list",
    "group": "Admin-Group",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"status\": 200,\n       \"statusText\": \"SUCCESS\",\n       \"message\": \"Group list fetched\",\n       \"data\": {\n           \"list\": [\n               {\n                   \"_id\": \"631867a72f264cd844f1949b\",\n                   \"groupIcon\": null,\n                   \"groupCode\": \"GT5301681\",\n                   \"name\": \"test\",\n                   \"purposeId\": \"631747bcd77165ad9c3a8575\",\n                   \"purposeText\": \"testing purpose 123\",\n                   \"description\": \"this is testing.\",\n                   \"goalInterval\": \"1\",\n                   \"goalPrice\": 100,\n                   \"showContactInfo\": true,\n                   \"phoneNumber\": \"1234567890\",\n                   \"email\": \"test@gmail.com\",\n                   \"address\": \"this is address\",\n                   \"showSocialInfo\": true,\n                   \"facebookUrl\": \"fb.com\",\n                   \"twitterUrl\": \"twitter.com\",\n                   \"members\": [\n                       \"62dfcb21fb89c4b45de44685\"\n                   ],\n                   \"createdBy\": \"62dfcb21fb89c4b45de44685\",\n                   \"totalMembers\": 1,\n                   \"totalSubgroup\": 0,\n                   \"subGroupLimit\": 0,\n                   \"isDeleted\": false,\n                   \"createdAt\": \"2022-09-07T09:43:03.164Z\",\n                   \"updatedAt\": \"2022-09-07T09:43:03.164Z\",\n                   \"__v\": 0\n               }\n           ],\n           \"count\": 2,\n           \"execTime\": 131\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/GroupController.ts",
    "groupTitle": "Admin-Group"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/group/:id",
    "title": "Group Details",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU3Njk1MzQzLCJleHAiOjE2NTc3ODE3NDN9.HAJ40QWHuL2QeXo3GVQZKziiiQHbLsq0hyuMM-SgfaY</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "group-details",
    "group": "Admin-Group",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"status\": 200,\n     \"statusText\": \"SUCCESS\",\n     \"message\": \"Group details\",\n     \"data\": {\n         \"group\": {\n             \"_id\": \"631867a72f264cd844f1949b\",\n             \"groupIcon\": null,\n             \"groupCode\": \"GT5301681\",\n             \"name\": \"test\",\n             \"description\": \"this is testing.\",\n             \"goalInterval\": \"1\",\n             \"goalPrice\": 100,\n             \"showContactInfo\": true,\n             \"phoneNumber\": \"1234567890\",\n             \"email\": \"test@gmail.com\",\n             \"address\": \"this is address\",\n             \"showSocialInfo\": true,\n             \"facebookUrl\": \"fb.com\",\n             \"twitterUrl\": \"twitter.com\",\n             \"city\": \"Test\",\n             \"state\": \"Test\",\n             \"zipCode\": \"1233\",\n             \"totalSubgroup\": 0,\n             \"subGroupLimit\": 0,\n             \"createdBy\": {\n                 \"_id\": \"62dfcb21fb89c4b45de44685\",\n                 \"avatar\": \"user-profiles/1659706277298-pukhraj_saini_mce242.png\",\n                 \"displayName\": \"pk\",\n                 \"customerCode\": \"WFU516341\"\n             },\n            \"purpose\": {\n            \"_id\": \"631eddcced7496146e770bf1\",\n            \"text\": \"Fund Raising for Birds\"\n             },\n             \"totalMembers\": 1,\n             \"isJoined\": true,\n             \"isAdmin\": true\n         },\n         \"execTime\": 135\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/GroupController.ts",
    "groupTitle": "Admin-Group"
  },
  {
    "type": "delete",
    "url": "/api/v1/admin/product/_id",
    "title": "Delete Product",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Delete_Product",
    "group": "Admin-Product",
    "description": "<p>pass product _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n{\n\"status\": 200,\n\"statusText\": \"SUCCESS\",\n\"message\": \"Product deleted successfully\",\n\"data\": {\n \"product\": {\n     \"_id\": \"62ce65a3aa1ac7033c583ec9\",\n     \"name\": \"Watercooler\",\n     \"sku\": \"QL8E9T9JJG\",\n     \"price\": 50000,\n     \"categoryId\": \"62c565ce198c336e57acf4a7\",\n     \"categoryName\": \"Electronics\",\n     \"subcategoryName\": \"Digital\",\n     \"subcategoryId\": \"62cbf77a217ec71559014f5d\",\n     \"author\": \"samsung\",\n     \"stock\": 56,\n     \"description\": \"this is very amazing\",\n     \"regularPrice\": 40000,\n     \"salePrice\": 45000,\n     \"taxClass\": \"abc\",\n     \"taxStatus\": \"acceepted\",\n     \"stockQuantity\": 45,\n     \"allowBackOrders\": true,\n     \"lowStockThreshold\": 34,\n     \"soldIndividualStock\": 677,\n     \"weight\": 500,\n     \"weightUnit\": \"gjjgg\",\n     \"dimensions\": \"vfjdfjf\",\n     \"shippingClass\": \"firstclass\",\n     \"upSells\": true,\n     \"crossSells\": true,\n     \"color\": \"blue\",\n     \"material\": \"fjfgjj\",\n     \"purchasedNote\": \"gfknfk\",\n     \"menuOrder\": \"htgt\",\n     \"isReviewEnabled\": true,\n     \"adminCommissionType\": \"defg\",\n     \"adminCommission\": 890,\n     \"cashbackTypes\": [\n         {\n             \"cashbackType\": \"rtgphhh\",\n             \"_id\": \"62ce65a3aa1ac7033c583eca\"\n         }\n     ],\n     \"photos\": [],\n     \"__v\": 0,\n     \"isDeleted\": true\n },\n \"execTime\": 67\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/ProductController.ts",
    "groupTitle": "Admin-Product"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/product",
    "title": "Get Product list",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU3Njk1MzQzLCJleHAiOjE2NTc3ODE3NDN9.HAJ40QWHuL2QeXo3GVQZKziiiQHbLsq0hyuMM-SgfaY</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Get-product-list",
    "group": "Admin-Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK   \n  {\n\"status\": 200,\n\"statusText\": \"SUCCESS\",\n\"message\": \"product_list\",\n \"data\": {\n  \"list\": [\n     {\n      \"isActive\": true,\n      \"_id\": \"62cfb67426bd109f9ae2d7cf\",\n      \"name\": \"Mobile\",\n      \"sku\": \"XUUW1V49R9\",\n      \"price\": 50000,\n      \"categoryId\": \"62c565ce198c336e57acf4a7\",\n      \"categoryName\": \"Electronics\",\n      \"subcategoryName\": \"Digital\",\n      \"subcategoryId\": \"62cbf77a217ec71559014f5d\",\n      \"author\": \"samsung\",\n      \"stock\": 56,\n      \"description\": \"this is very amazing\",\n      \"regularPrice\": 40000,\n      \"salePrice\": 45000,\n      \"taxClass\": \"abc\",\n      \"taxStatus\": \"acceepted\",\n      \"stockQuantity\": 45,\n      \"allowBackOrders\": true,\n      \"lowStockThreshold\": 34,\n      \"soldIndividualStock\": 677,\n      \"weight\": 500,\n      \"weightUnit\": \"gjjgg\",\n      \"dimensions\": \"vfjdfjf\",\n      \"shippingClass\": \"firstclass\",\n      \"upSells\": true,\n      \"crossSells\": true,\n      \"color\": \"blue\",\n      \"material\": \"fjfgjj\",\n      \"purchasedNote\": \"gfknfk\",\n      \"menuOrder\": \"htgt\",\n      \"isReviewEnabled\": true,\n      \"adminCommissionType\": \"defg\",\n      \"adminCommission\": 890,\n      \"isDeleted\": false,\n      \"cashbackTypes\": [\n                   {\n                       \"cashbackType\": \"rtgphhh\",\n                       \"_id\": \"62cfb67426bd109f9ae2d7d0\"\n                   }\n               ],\n               \"photos\": [],\n               \"coverPhoto\": \"product/62cfb67426bd109f9ae2d7cf/cover-photo/default.png\"\n           },\n           {\n               \"isActive\": true,\n               \"_id\": \"62cfb9dc26bd109f9ae2d7dd\",\n               \"name\": \"tablefan\",\n               \"sku\": \"S7XKETDN6G\",\n               \"price\": 50000,\n               \"categoryId\": \"62c565ce198c336e57acf4a7\",\n               \"categoryName\": \"Electronics\",\n               \"subcategoryName\": \"Digital\",\n               \"subcategoryId\": \"62cbf77a217ec71559014f5d\",\n               \"author\": \"samsung\",\n               \"stock\": 56,\n               \"description\": \"this is very amazing\",\n               \"regularPrice\": 40000,\n               \"salePrice\": 45000,\n               \"taxClass\": \"abc\",\n               \"taxStatus\": \"acceepted\",\n               \"stockQuantity\": 45,\n               \"allowBackOrders\": true,\n               \"lowStockThreshold\": 34,\n               \"soldIndividualStock\": 677,\n               \"weight\": 500,\n               \"weightUnit\": \"gjjgg\",\n               \"dimensions\": \"vfjdfjf\",\n               \"shippingClass\": \"firstclass\",\n               \"upSells\": true,\n               \"crossSells\": true,\n               \"color\": \"blue\",\n               \"material\": \"fjfgjj\",\n               \"purchasedNote\": \"gfknfk\",\n               \"menuOrder\": \"htgt\",\n               \"isReviewEnabled\": true,\n               \"adminCommissionType\": \"defg\",\n               \"adminCommission\": 890,\n               \"isDeleted\": false,\n               \"cashbackTypes\": [\n                   {\n                       \"cashbackType\": \"rtgphhh\",\n                       \"_id\": \"62d1088d6b016289b16830dd\"\n                   }\n               ],\n               \"photos\": [\n                   \"product/62cfb9dc26bd109f9ae2d7dd/photos/annie-spratt-ncQ2sguVlgo-unsplash.jpg\"\n               ],\n               \"coverPhoto\": \"product/62cfb9dc26bd109f9ae2d7dd/cover-photo/default.jpeg\"\n           },\n           {\n               \"_id\": \"62d673902c91e3167bfd75fc\",\n               \"name\": \"Tesla Car\",\n               \"sku\": \"BYJB1GP0VI\",\n               \"price\": 50000,\n               \"categoryId\": \"62c565ce198c336e57acf4a7\",\n               \"categoryName\": \"Electronics\",\n               \"subcategoryName\": \"Digital\",\n               \"subcategoryId\": \"62cbf77a217ec71559014f5d\",\n               \"author\": \"peter\",\n               \"stock\": 56,\n               \"description\": \"this is very amazing\",\n               \"regularPrice\": 450000,\n               \"salePrice\": 40000,\n               \"taxClass\": \"firstclass\",\n               \"taxStatus\": \"acceepted\",\n               \"stockQuantity\": 45,\n               \"allowBackOrders\": true,\n               \"lowStockThreshold\": 34,\n               \"soldIndividualStock\": 677,\n               \"weight\": 500,\n               \"weightUnit\": \"kilogram\",\n               \"dimensions\": \"2d\",\n               \"shippingClass\": \"firstclass\",\n               \"upSells\": true,\n               \"crossSells\": true,\n               \"color\": \"blue\",\n               \"material\": \"copper\",\n               \"purchasedNote\": \"gfknfk\",\n               \"menuOrder\": \"tltmt\",\n               \"isReviewEnabled\": true,\n               \"adminCommissionType\": \"paytm\",\n               \"adminCommission\": 890,\n               \"isDeleted\": false,\n               \"isActive\": true,\n               \"cashbackTypes\": [\n                   {\n                       \"cashbackType\": \"rtgphhh\",\n                       \"_id\": \"62d673902c91e3167bfd75fd\"\n                   }\n               ],\n               \"photos\": []\n           }\n       ],\n       \"count\": 4,\n       \"execTime\": 468\n   }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/ProductController.ts",
    "groupTitle": "Admin-Product"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/product-reports",
    "title": "Get Product Reports",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "list-product-Report",
    "group": "Admin-ProductReport",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": 200,\n\"statusText\": \"SUCCESS\",\n\"message\": \"Product Report fetch successfully\",\n\"data\": [\n      {\n     \"reports\": [\n         {\n             \"_id\": \"62f0ec78def05cf024e98d7c\",\n             \"reasonText\": \"shoes size does not match pls actual size provided and pls exchange my shoes\",\n             \"createdAt\": \"2022-08-08T10:59:04.835Z\",\n             \"product\": {\n                 \"_id\": \"62d7c92286616ebe475db3fa\",\n                 \"name\": \"Samasung\",\n                 \"salePrice\": 3000\n             },\n             \"reporter\": {\n                 \"_id\": \"62dfcb21fb89c4b45de44685\",\n                 \"name\": \"puhraj saini\"\n             }\n         },\n         {\n             \"_id\": \"62f0c032dc5b8cf8ea66c808\",\n             \"reasonText\": \"my dress are defected pls exchange my dress\",\n             \"createdAt\": \"2022-08-08T07:50:10.639Z\",\n             \"product\": {\n                 \"_id\": \"62d6aec0504d41e6c4a5d50f\",\n                 \"name\": \"Tesla Car\",\n                 \"_id\": \"62d7cccc86616ebe475db688\",\n                 \"name\": \"samsung\",\n                 \"salePrice\": 2000,\n                 \"coverPhoto\": \"product/62d7cccc86616ebe475db688/cover-photo/default.jpeg\"\n             },\n             \"reporter\": {\n                 \"_id\": \"62dfcb21fb89c4b45de44685\",\n                 \"name\": \"puhraj saini\"\n             }\n         },\n         {\n             \"_id\": \"62f0bf4424efcc4ad8b7c867\",\n             \"reasonText\": \"my dress are defected pls exchange my dress\",\n             \"createdAt\": \"2022-08-08T07:46:12.746Z\",\n             \"product\": {\n                 \"_id\": \"62d687fff055ab9d06da8925\",\n                 \"name\": \"testedd\",\n                 \"salePrice\": 3000\n             },\n             \"reporter\": {\n                 \"_id\": \"62dfcb21fb89c4b45de44685\",\n                 \"name\": \"puhraj saini\"\n             }\n         },\n         {\n             \"_id\": \"62f0b6d23b1ac3fe288960dd\",\n             \"reasonText\": \"my dress are defected pls exchange my dress\",\n             \"createdAt\": \"2022-08-08T07:10:10.464Z\",\n             \"product\": {\n                 \"_id\": \"62d687fff055ab9d06da8925\",\n                 \"name\": \"testedd\",\n                 \"salePrice\": 3000\n             },\n             \"reporter\": {\n                 \"_id\": \"62dfcb21fb89c4b45de44685\",\n                 \"name\": \"puhraj saini\"\n             }\n         },\n         {\n             \"_id\": \"62f0b5cf4957029d836c0f82\",\n             \"reasonText\": \"my dress are defected pls exchange my dress\",\n             \"createdAt\": \"2022-08-08T07:05:51.867Z\",\n             \"product\": {\n                 \"_id\": \"62d687fff055ab9d06da8925\",\n                 \"name\": \"testedd\",\n                 \"salePrice\": 3000\n             },\n             \"reporter\": {\n                 \"_id\": \"62dfcb21fb89c4b45de44685\",\n                 \"name\": \"puhraj saini\"\n             }\n         },\n         {\n             \"_id\": \"62ed07e6cb37425f25558172\",\n             \"reasonText\": \"mobile display is damaged pls exchange my mobile\",\n             \"createdAt\": \"2022-08-05T12:07:02.484Z\",\n             \"product\": {\n                 \"_id\": \"62cfb67426bd109f9ae2d7cf\",\n                 \"name\": \"Mobile\",\n                 \"salePrice\": 45000,\n                 \"coverPhoto\": \"product/62cfb67426bd109f9ae2d7cf/cover-photo/default.png\"\n             },\n             \"reporter\": {\n                 \"_id\": \"62dfcb21fb89c4b45de44685\",\n                 \"name\": \"puhraj saini\"\n             }\n         }\n     ],\n     \"count\": 7\n            }\n          ]\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/ProductReportController.ts",
    "groupTitle": "Admin-ProductReport"
  },
  {
    "type": "post",
    "url": "/api/v1/admin/product",
    "title": "Add Product",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU3NjkxMjY4LCJleHAiOjE2NTc3Nzc2Njh9.JmW836-NhCtMxWtkD3ezP4aRidSLshjTIgzhIkMYe3w</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "add-product",
    "group": "Admin-Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcategoryId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcategoryName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stock",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "regularPrice",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "salesPrice",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taxClass",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taxStatus",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "stockQuantity",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "allowBackOrders",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lowstockThreshold",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "soldIndividualStock",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "weightUnit",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dimension",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shippingClass",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "upSells",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "crossSells",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "material",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "purchaseNote",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "menuOrder",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isReviewEnabled",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adminCommissionType",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "adminCommission",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sectionName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "cashbackTypes",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": " {\n   \"name\":\"Tesla Car\",\n   \"price\":50000,\n   \"categoryId\":\"62c565ce198c336e57acf4a7\",\n   \"subcategoryId\":\"62cbf77a217ec71559014f5d\",\n   \"categoryName\":\"Electronics\",\n   \"subcategoryName\":\"Digital\",\n   \"author\":\"peter\",\n   \"sectionName\":\"B\",\n   \"stock\":56,\n   \"description\":\"this is very amazing\",\n   \"regularPrice\":\"450000\",\n   \"salePrice\":40000,\n   \"taxClass\":\"firstclass\",\n   \"taxStatus\":\"acceepted\",\n   \"stockQuantity\":45,\n   \"allowBackOrders\":true,\n   \"lowStockThreshold\":34,\n   \"soldIndividualStock\":677,\n   \"weight\":500,\n   \"weightUnit\":\"kilogram\",\n   \"dimensions\":\"2d\",\n   \"shippingClass\":\"firstclass\",\n   \"upSells\":true,\n   \"crossSells\":true,\n   \"color\":\"blue\",\n   \"material\":\"copper\",\n   \"purchasedNote\":\"gfknfk\",\n   \"menuOrder\":\"tltmt\",\n   \"isReviewEnabled\":true,\n   \"adminCommissionType\":\"paytm\",\n   \"adminCommission\":\"890\",\n  \"cashbackTypes\":[{\"cashbackType\":\"rtgphhh\",\"amout\":4500}]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"status\": 201,\n \"statusText\": \"CREATED\",\n\"message\": \"product_created\",\n\"data\": {\n\"product\": {\n   \"name\": \"Tesla Car\",\n   \"sku\": \"BYJB1GP0VI\",\n   \"price\": 50000,\n   \"categoryId\": \"62c565ce198c336e57acf4a7\",\n   \"categoryName\": \"Electronics\",\n   \"subcategoryName\": \"Digital\",\n   \"subcategoryId\": \"62cbf77a217ec71559014f5d\",\n   \"author\": \"peter\",\n   \"stock\": 56,\n   \"description\": \"this is very amazing\",\n   \"regularPrice\": 450000,\n   \"salePrice\": 40000,\n   \"taxClass\": \"firstclass\",\n   \"taxStatus\": \"acceepted\",\n   \"stockQuantity\": 45,\n   \"allowBackOrders\": true,\n   \"lowStockThreshold\": 34,\n   \"soldIndividualStock\": 677,\n   \"weight\": 500,\n   \"weightUnit\": \"kilogram\",\n   \"dimensions\": \"2d\",\n   \"shippingClass\": \"firstclass\",\n   \"upSells\": true,\n   \"crossSells\": true,\n   \"color\": \"blue\",\n   \"material\": \"copper\",\n   \"purchasedNote\": \"gfknfk\",\n   \"menuOrder\": \"tltmt\",\n   \"isReviewEnabled\": true,\n   \"adminCommissionType\": \"paytm\",\n   \"adminCommission\": 890,\n   \"isDeleted\": false,\n   \"isActive\": true,\n   \"cashbackTypes\": [\n       {\n           \"cashbackType\": \"rtgphhh\",\n           \"_id\": \"62d673902c91e3167bfd75fd\"\n       }\n   ],\n   \"photos\": [],\n   \"_id\": \"62d673902c91e3167bfd75fc\",\n   \"__v\": 0\n},\n\"execTime\": 103\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/ProductController.ts",
    "groupTitle": "Admin-Product"
  },
  {
    "type": "patch",
    "url": "/api/v1/admin/product/_id/attributes",
    "title": "Add attributes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDkzODExMDgyMDE1MGUzODI5MjgxOCIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4NDAyODU4LCJleHAiOjE2NTg0ODkyNTh9.OdgFA-wyMD82itAqPFaLdPGh-HitGUA9ft9l_vGWcDo</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "attributes",
    "group": "Admin-Product",
    "description": "<p>pass product _id as params</p>",
    "parameter": {
      "examples": [
        {
          "title": "Request body",
          "content": "{\n       \"attributes\": [\n           {\n               \"name\": \"sizes\",\n               \"values\": [\n                   \"x\",\n                   \"M\",\n                   \"XL\"\n               ]\n           },\n           {\n               \"name\": \"fabric\",\n               \"values\": [\"cotten\"]\n           },\n           {\n               \"name\": \"patters\",\n               \"values\":[\"stripped\"]\n           }\n       ]\n   }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"status\": 200,\n       \"statusText\": \"SUCCESS\",\n       \"message\": \"attributes_added\",\n       \"data\": {\n           \"product\": {\n               \"_id\": \"62f211f7e5b04048b1531639\",\n               \"attributes\": [\n                   {\n                       \"name\": \"sizes\",\n                       \"values\": [\n                           \"x\",\n                           \"M\",\n                           \"XL\"\n                       ]\n                   },\n                   {\n                       \"name\": \"fabric\",\n                       \"values\": [\n                           \"cotten\"\n                       ]\n                   },\n                   {\n                       \"name\": \"patters\",\n                       \"values\": [\n                           \"stripped\"\n                       ]\n                   }\n               ]\n           },\n           \"execTime\": 593\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/ProductController.ts",
    "groupTitle": "Admin-Product"
  },
  {
    "type": "put",
    "url": "/api/v1/admin/product/_id",
    "title": "Change CoverPhoto Product",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "change-coverImage",
    "group": "Admin-Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "coverPhot",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\"status\":200,\"statusText\":\"SUCCESS\",\"message\":\"coverPhoto_uploaded\",\"data\":{\"product\":{\"_id\":\"62cfb67426bd109f9ae2d7cf\",\"name\":\"Mobile\",\"sku\":\"XUUW1V49R9\",\"price\":50000,\"categoryId\":\"62c565ce198c336e57acf4a7\",\"categoryName\":\"Electronics\",\"subcategoryName\":\"Digital\",\"subcategoryId\":\"62cbf77a217ec71559014f5d\",\"author\":\"samsung\",\"stock\":56,\"description\":\"this is very amazing\",\"regularPrice\":40000,\"salePrice\":45000,\"taxClass\":\"abc\",\"taxStatus\":\"acceepted\",\"stockQuantity\":45,\"allowBackOrders\":true,\"lowStockThreshold\":34,\"soldIndividualStock\":677,\"weight\":500,\"weightUnit\":\"gjjgg\",\"dimensions\":\"vfjdfjf\",\"shippingClass\":\"firstclass\",\"upSells\":true,\"crossSells\":true,\"color\":\"blue\",\"material\":\"fjfgjj\",\"purchasedNote\":\"gfknfk\",\"menuOrder\":\"htgt\",\"isReviewEnabled\":true,\"adminCommissionType\":\"defg\",\"adminCommission\":890,\"isDeleted\":false,\"cashbackTypes\":[{\"cashbackType\":\"rtgphhh\",\"_id\":\"62cfb67426bd109f9ae2d7d0\"}],\"photos\":[],\"__v\":1,\"coverPhoto\":\"product/62cfb67426bd109f9ae2d7cf/cover-photo/default.png\"},\"execTime\":11064}}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/ProductController.ts",
    "groupTitle": "Admin-Product"
  },
  {
    "type": "put",
    "url": "/api/v1/admin/product/edit/id",
    "title": "Edit Product",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU3Nzk4NTU4LCJleHAiOjE2NTc4ODQ5NTh9.8K6BRcRLY49xmeAx-nHYRh12QclyhA6YF2A0RBypjdQ</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "edit-product",
    "group": "Admin-Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcategoryId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcategoryName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stock",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "regularPrice",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "salesPrice",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taxClass",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taxStatus",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "stockQuantity",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "allowBackOrders",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lowstockThreshold",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "soldIndividualStock",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "weightUnit",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dimension",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shippingClass",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "upSells",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "crossSells",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "material",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "purchaseNote",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "menuOrder",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isReviewEnabled",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adminCommissionType",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "adminCommission",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sectionName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "cashbackTypes",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n   \"name\":\"Ball\",\n    \"price\":5000,\n    \"categoryId\":\"62f5dcf020098408379216ae\",\n    \"subcategoryId\":\"62f5dd0b20098408379216bf\",\n    \"categoryName\":\"Sports\",\n    \"subcategoryName\":\"Cricket Bat\",\n    \"author\":\"SportsZone\",\n   \"sectionName\":\"Sports\",\n   \"stock\":200,\n   \"brandId\":\"62f5e10b2009840837921794\",\n   \"description\":\"it is used for play for children\",\n   \"regularPrice\":\"3000\",\n   \"salePrice\":2000,\n   \"taxClass\":\"School Supplies\",\n   \"taxStatus\":\"acceepted\",\n   \"stockQuantity\":200,\n   \"allowBackOrders\":true,\n   \"lowStockThreshold\":30,\n   \"soldIndividualStock\":300,\n   \"weight\":20,\n   \"weightUnit\":\"kg\",\n   \"dimensions\":\"3 dimensions\",\n   \"shippingClass\":\"cashOn\",\n   \"upSells\":true,\n   \"crossSells\":true,\n   \"colors\":[\"blue\",\"Red\",\"Green\"],\n   \"material\":\"woods\",\n   \"purchasedNote\":\"this bat is used for leather\",\n   \"menuOrder\":\"sportcomplex\",\n   \"isReviewEnabled\":true,\n   \"adminCommissionType\":\"gold\",\n   \"adminCommission\":\"890\",\n   \"cashbackTypes\":[{\"cashbackType\":\"silver\"}]\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "        async delete(req: ReqInterface, res: ResInterface, next: NextFunction) {\n        try {\n            const wishlistId = req.params.id;\n            const wishlist = await WishlistService.delete(wishlistId);\n            if (wishlist) {\n                res.logMsg = 'Wishlist deleted successfully';\n                ResponseHelper.ok(res, res.__('wishlist_deleted'), { wishlist });\n            }\n        } catch (error) {\n            next(error);\n        }\n    }*    HTTP/1.1 200 OK\n    {\n   \"status\": 200,\n   \"statusText\": \"SUCCESS\",\n   \"message\": \"Product edited successfully\",\n  \"data\": {\n    \"product\": {\n   \"_id\": \"62f5ee73f3a7e3dfc73acf00\",\n   \"name\": \"Ball\",\n   \"sku\": \"7R3K2VGYDZ\",\n   \"categoryId\": \"62f5dcf020098408379216ae\",\n   \"categoryName\": \"Sports\",\n   \"subcategoryName\": \"Cricket Bat\",\n        async delete(req: ReqInterface, res: ResInterface, next: NextFunction) {\n        try {\n            const wishlistId = req.params.id;\n            const wishlist = await WishlistService.delete(wishlistId);\n            if (wishlist) {\n                res.logMsg = 'Wishlist deleted successfully';\n                ResponseHelper.ok(res, res.__('wishlist_deleted'), { wishlist });\n            }\n        } catch (error) {\n            next(error);\n        }\n    }*    \"author\": \"SportsZone\",\n   \"stock\": 200,\n   \"description\": \"it is used for play for children\",\n   \"regularPrice\": 3000,\n   \"salePrice\": 2000,\n   \"taxClass\": \"School Supplies\",\n   \"taxStatus\": \"acceepted\",\n   \"taxClassCode\": \"81111705A0000\",\n   \"stockQuantity\": 200,\n   \"allowBackOrders\": true,\n   \"lowStockThreshold\": 30,\n   \"soldIndividualStock\": 300,\n   \"weight\": 20,\n        async delete(req: ReqInterface, res: ResInterface, next: NextFunction) {\n        try {\n            const wishlistId = req.params.id;\n            const wishlist = await WishlistService.delete(wishlistId);\n            if (wishlist) {\n                res.logMsg = 'Wishlist deleted successfully';\n                ResponseHelper.ok(res, res.__('wishlist_deleted'), { wishlist });\n            }\n        async delete(req: ReqInterface, res: ResInterface, next: NextFunction) {\n        try {\n            const wishlistId = req.params.id;\n            const wishlist = await WishlistService.delete(wishlistId);\n            if (wishlist) {\n                res.logMsg = 'Wishlist deleted successfully';\n                ResponseHelper.ok(res, res.__('wishlist_deleted'), { wishlist });\n            }\n        } catch (error) {\n            next(error);\n        }\n    }} catch (error) {\n            next(error);\n        }\n    }*    \"weightUnit\": \"kg\",\n   \"dimensions\": \"3 dimensions\",\n   \"shippingClass\": \"cashOn\",\n   \"upSells\": true,\n   \"crossSells\": true,\n   \"material\": \"woods\",\n   \"purchasedNote\": \"this bat is used for leather\",\n   \"menuOrder\": \"sportcomplex\",\n   \"isReviewEnabled\": true,\n   \"adminCommissionType\": \"gold\",\n   \"adminCommission\": 890,\n   \"isDeleted\": false,\n   \"isActive\": true,\n   \"cashbackTypes\": [\n       {\n           \"cashbackType\": \"silver\",\n           \"_id\": \"62f5f5382dade01b343347c2\"\n       }\n   ],\n   \"photos\": [\n       \"product/62f5ee73f3a7e3dfc73acf00/photos/bats.jpg\",\n       \"product/62f5ee73f3a7e3dfc73acf00/photos/profile.png\",\n       \"product/62f5ee73f3a7e3dfc73acf00/photos/shirt.jpg\",\n       \"product/62f5ee73f3a7e3dfc73acf00/photos/shirt2.jpeg\"\n   ],\n   \"colors\": [\n       \"blue\",\n       \"Red\",\n       \"Green\"\n   ],\n   \"ratingsTotal\": 0,\n   \"ratingsAvg\": 0,\n   \"totalReports\": 0,\n   \"productSold\": 0,\n   \"attributeValues\": [],\n   \"attributes\": [],\n   \"createdAt\": \"2022-08-12T06:08:51.618Z\",\n   \"updatedAt\": \"2022-08-12T06:37:44.551Z\",\n   \"__v\": 0,\n   \"coverPhoto\": \"product/62f5ee73f3a7e3dfc73acf00/cover-photo/default.jpeg\"\n},\n\"execTime\": 75\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/ProductController.ts",
    "groupTitle": "Admin-Product"
  },
  {
    "type": "patch",
    "url": "/api/v1/admin/product/_id/status",
    "title": "Update Status Product",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDkzODExMDgyMDE1MGUzODI5MjgxOCIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4NDAyODU4LCJleHAiOjE2NTg0ODkyNTh9.OdgFA-wyMD82itAqPFaLdPGh-HitGUA9ft9l_vGWcDo</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "update-status-product",
    "group": "Admin-Product",
    "description": "<p>pass product _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": 200,\n\"statusText\": \"SUCCESS\",\n \"message\": \"Product update status  successfully\",\n \"data\": {\n   \"_id\": \"62d7cccc86616ebe475db688\",\n   \"name\": \"samsung\",\n   \"sku\": \"54JI1QD9BL\",\n   \"categoryId\": \"62d0136cff9b93f5383b08b1\",\n   \"categoryName\": \"does nt updated trying 32\",\n   \"subcategoryName\": \"testinggg\",\n   \"subcategoryId\": \"62d15e22ff9b93f5383b5815\",\n   \"author\": \"testedd\",\n   \"stock\": 3400,\n   \"description\": \"testeddddd\",\n   \"regularPrice\": 1000,\n   \"salePrice\": 2000,\n   \"taxClass\": \"testedd\",\n   \"taxStatus\": \"accepted\",\n   \"stockQuantity\": 2000,\n   \"allowBackOrders\": true,\n   \"lowStockThreshold\": 300,\n   \"soldIndividualStock\": 2000,\n   \"weight\": 24,\n   \"weightUnit\": \"kg\",\n   \"dimensions\": \"3dimensions\",\n   \"shippingClass\": \"2000\",\n   \"upSells\": true,\n   \"crossSells\": false,\n   \"color\": \"red\",\n   \"material\": \"teteddddd\",\n   \"purchasedNote\": \"testedd\",\n   \"menuOrder\": \"testedd\",\n   \"isReviewEnabled\": true,\n   \"adminCommissionType\": \"tetedd\",\n   \"adminCommission\": 200,\n   \"isDeleted\": false,\n   \"isActive\": false,\n   \"cashbackTypes\": [\n       {\n           \"cashbackType\": \"IndividualUser\",\n           \"amount\": 1000,\n           \"_id\": \"62d7d698c075177dd13a9006\"\n       },\n       {\n           \"cashbackType\": \"GoldCashback\",\n           \"amount\": 5000,\n           \"_id\": \"62d7d698c075177dd13a9007\"\n       },\n       {\n           \"cashbackType\": \"BronzeCashback\",\n           \"amount\": 3000,\n           \"_id\": \"62d7d698c075177dd13a9008\"\n       },\n       {\n           \"cashbackType\": \"SilverCashback\",\n           \"amount\": 6000,\n           \"_id\": \"62d7d698c075177dd13a9009\"\n       }\n   ],\n   \"photos\": [\n       \"product/62d7cccc86616ebe475db688/photos/download.jpeg\",\n       \"product/62d7cccc86616ebe475db688/photos/download (1).jpeg\",\n       \"product/62d7cccc86616ebe475db688/photos/profile.png\"\n   ],\n   \"__v\": 0,\n   \"coverPhoto\": \"product/62d7cccc86616ebe475db688/cover-photo/default.jpeg\",\n   \"sectionName\": \"tesedd checkingg\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/ProductController.ts",
    "groupTitle": "Admin-Product"
  },
  {
    "type": "put",
    "url": "/api/v1/admin/product/_id",
    "title": "Upload Product Image",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "upload-image",
    "group": "Admin-Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image.",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\"status\":201,\"statusText\":\"CREATED\",\"message\":\"photo_uploaded\",\"data\":{\"product\":{\"_id\":\"62ce65a3aa1ac7033c583ec9\",\"name\":\"Watercooler\",\"sku\":\"QL8E9T9JJG\",\"price\":50000,\"categoryId\":\"62c565ce198c336e57acf4a7\",\"categoryName\":\"Electronics\",\"subcategoryName\":\"Digital\",\"subcategoryId\":\"62cbf77a217ec71559014f5d\",\"author\":\"samsung\",\"stock\":56,\"description\":\"this is very amazing\",\"regularPrice\":40000,\"salePrice\":45000,\"taxClass\":\"abc\",\"taxStatus\":\"acceepted\",\"stockQuantity\":45,\"allowBackOrders\":true,\"lowStockThreshold\":34,\"soldIndividualStock\":677,\"weight\":500,\"weightUnit\":\"gjjgg\",\"dimensions\":\"vfjdfjf\",\"shippingClass\":\"firstclass\",\"upSells\":true,\"crossSells\":true,\"color\":\"blue\",\"material\":\"fjfgjj\",\"purchasedNote\":\"gfknfk\",\"menuOrder\":\"htgt\",\"isReviewEnabled\":true,\"adminCommissionType\":\"defg\",\"adminCommission\":890,\"cashbackTypes\":[{\"cashbackType\":\"rtgphhh\",\"_id\":\"62ce65a3aa1ac7033c583eca\"}],\"photos\":[\"product/62ce65a3aa1ac7033c583ec9/photos/wefundUS.png\"],\"__v\":0,\"isDeleted\":true,\"coverPhoto\":\"product/62ce65a3aa1ac7033c583ec9/cover-photo/default.png\"},\"execTime\":12430}}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/ProductController.ts",
    "groupTitle": "Admin-Product"
  },
  {
    "type": "post",
    "url": "/api/v1/admin/report-reason",
    "title": "Add ReportReason",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDkzODExMDgyMDE1MGUzODI5MjgxOCIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU5NTI3MDgwLCJleHAiOjE2NTk2MTM0ODB9.7V57OGXkv3ZmB39agsQ1ZV7R9Kc50z8v8Tjf551NW78</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "add-reportreason",
    "group": "Admin-ReportReason",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n\"categoryId\":\"62c565ce198c336e57acf4a7\",\n\"title\":\" t-shirt issue\",\n\"text\":\"t-shirt size does not match pls actual size provided and pls exchange my t-shirt\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"status\": 201,\n \"statusText\": \"CREATED\",\n \"message\": \"ReportReason added successfully\",\n \"data\": {\n   \"reportreason\": {\n       \"categoryId\": \"62c565ce198c336e57acf4a7\",\n       \"title\": \" t-shirt issue\",\n       \"text\": \"t-shirt size does not match pls actual size provided and pls exchange my t-shirt\",\n       \"isActive\": true,\n       \"_id\": \"62fb85d1eef894946d6c09e8\",\n       \"createdAt\": \"2022-08-16T11:56:01.916Z\",\n       \"updatedAt\": \"2022-08-16T11:56:01.916Z\",\n       \"__v\": 0\n   },\n   \"execTime\": 90\n  }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/ReportReasonController.ts",
    "groupTitle": "Admin-ReportReason"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/report-reason/",
    "title": "Get ReportReason",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "list-reportreason",
    "group": "Admin-ReportReason",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"status\": 200,\n      \"statusText\": \"SUCCESS\",\n      \"message\": \"ReportReason list fetch successfully\",\n      \"data\": {\n          \"list\": [\n          \"_id\": \"62fb85d1eef894946d6c09e8\",\n            \"categoryId\": \"62c565ce198c336e57acf4a7\",\n            \"title\": \" t-shirt issue\",\n            \"text\": \"t-shirt size does not match pls actual size provided and pls exchange my t-shirt\",\n            \"isActive\": true,\n            \"createdAt\": \"2022-08-16T11:56:01.916Z\",\n            \"updatedAt\": \"2022-08-16T11:56:01.916Z\",\n          \"__v\": 0\n      },\n          ],\n          \"count\": 4,\n          \"execTime\": 81\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/ReportReasonController.ts",
    "groupTitle": "Admin-ReportReason"
  },
  {
    "type": "patch",
    "url": "/api/v1/admin/report-reason/_id",
    "title": "Update reportreason",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "update-reportreason",
    "group": "Admin-ReportReason",
    "description": "<p>pass section _id as params</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n  \"title\":\"dresses\",\n  \"text\":\"my dress are defected pls exchange my dress\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n\n\"status\": 200,\n\"statusText\": \"SUCCESS\",\n\"message\": \"ReportReason updated successfully\",\n\"data\": {\n    \"reportreason\": {\n        \"_id\": \"62fb7d7069f7efa9afa1a3e7\",\n        \"categoryId\": \"62c565ce198c336e57acf4a7\",\n        \"title\": \"sports\",\n        \"text\": \"my bats are scratched pls exchange my bats\",\n        \"isActive\": true,\n        \"createdAt\": \"2022-08-16T11:20:16.589Z\",\n        \"updatedAt\": \"2022-08-16T11:26:12.182Z\",\n        \"__v\": 0\n    },\n    \"execTime\": 56\n   }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/ReportReasonController.ts",
    "groupTitle": "Admin-ReportReason"
  },
  {
    "type": "patch",
    "url": "/api/v1/admin/report-reason/_id/status",
    "title": "Update Status ReportReason",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDkzODExMDgyMDE1MGUzODI5MjgxOCIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU5NTI3MDgwLCJleHAiOjE2NTk2MTM0ODB9.7V57OGXkv3ZmB39agsQ1ZV7R9Kc50z8v8Tjf551NW78</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "update-status-reportreason",
    "group": "Admin-ReportReason",
    "description": "<p>pass section _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n           \"status\": 200,\n           \"statusText\": \"SUCCESS\",\n           \"message\": \"ReportReason  status changed successfully\",\n           \"data\": {\n               \"_id\": \"62ea61e7258089711f8cafa4\",\n               \"categoryId\": \"62c565ce198c336e57acf4a7\",\n               \"title\": \"mobile display\",\n               \"text\": \"mobile display is damaged pls exchange my mobile\",\n               \"isActive\": false,\n               \"createdAt\": \"2022-08-03T11:54:15.268Z\",\n               \"updatedAt\": \"2022-08-03T11:54:15.268Z\",\n               \"__v\": 0\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/ReportReasonController.ts",
    "groupTitle": "Admin-ReportReason"
  },
  {
    "type": "delete",
    "url": "/api/v1/admin/section/_id",
    "title": "Delete Section",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Delete_Section",
    "group": "Admin-Section",
    "description": "<p>pass section _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": 200,\n\"statusText\": \"SUCCESS\",\n\"message\": \"Section deleted successfully\",\n\"data\": {\n    \"section\": {\n       \"_id\": \"62c6a9725336da285a65cc84\",\n       \"category\": \"62c6a900437247fa040492c9\",\n       \"subcategory\": \"62c6a92d437247fa040492ce\",\n       \"name\": \"mandresss\",\n       \"isActive\": true,\n      \"isDeleted\": false,\n      \"createdAt\": \"2022-07-07T09:37:54.016Z\",\n     \"updatedAt\": \"2022-07-07T09:37:54.016Z\",\n       \"__v\": 0\n   },\n   \"execTime\": 63\n}\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/SectionController.ts",
    "groupTitle": "Admin-Section"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/section/_id",
    "title": "Get section",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Get-Section",
    "group": "Admin-Section",
    "description": "<p>pass section _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n\"status\": 200,\n\"statusText\": \"SUCCESS\",\n\"message\": \"Section list get successfully\",\n\"data\": {\n*   \"section\": {\n       \"_id\": \"62c57985e157e053e48266ce\",\n       \"category\": \"62c565ce198c336e57acf4a7\",\n       \"subcategory\": \"62c57716f96069e70cf20b57\",\n       \"name\": \"dresses\",\n       \"isActive\": true,\n       \"isDeleted\": false,\n       \"createdAt\": \"2022-07-06T12:01:09.501Z\",\n      \"updatedAt\": \"2022-07-06T12:01:09.501Z\",\n      \"__v\": 0\n },\n  \"execTime\": 88\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/SectionController.ts",
    "groupTitle": "Admin-Section"
  },
  {
    "type": "post",
    "url": "/api/v1/admin/section",
    "title": "Add Section",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "add-section",
    "group": "Admin-Section",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcategory",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n       \"category\": \"62c565ce198c336e57acf4a7\",\n       \"subcategory\": \"62c57716f96069e70cf20b57\",\n       \"name\": \"dresses\"\n   }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n       \"status\": 201,\n       \"statusText\": \"CREATED\",\n       \"message\": \"Section created successfully\",\n       \"data\": {\n           \"section\": {\n               \"category\": \"62c565ce198c336e57acf4a7\",\n               \"subcategory\": \"62c57716f96069e70cf20b57\",\n               \"name\": \"dresses\",\n               \"isActive\": true,\n               \"isDeleted\": false,\n               \"_id\": \"62c57985e157e053e48266ce\",\n               \"createdAt\": \"2022-07-06T12:01:09.501Z\",\n               \"updatedAt\": \"2022-07-06T12:01:09.501Z\",\n               \"__v\": 0\n           }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/SectionController.ts",
    "groupTitle": "Admin-Section"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/section/_id",
    "title": "Get Section List",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "list-section",
    "group": "Admin-Section",
    "description": "<p>pass subcategory _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n  \"status\": 200,\n  \"statusText\": \"SUCCESS\",\n  \"message\": \"Section list get successfully\",\n  \"data\": {\n      \"list\": [\n          {\n              \"_id\": \"62c6a963437247fa040492d4\",\n              \"category\": \"62c6a900437247fa040492c9\",\n              \"subcategory\": \"62c6a92d437247fa040492ce\",\n              \"name\": \"man dresss\",\n              \"isActive\": true,\n              \"isDeleted\": false,\n              \"createdAt\": \"2022-07-07T09:37:39.752Z\",\n              \"updatedAt\": \"2022-07-07T09:37:39.752Z\"\n          }\n      ],\n      \"count\": 1,\n      \"execTime\": 100\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/SectionController.ts",
    "groupTitle": "Admin-Section"
  },
  {
    "type": "patch",
    "url": "/api/v1/admin/section/_id",
    "title": "Update section",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "update-section",
    "group": "Admin-Section",
    "description": "<p>pass section _id as params</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcategory",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n       \"category\": \"62c565ce198c336e57acf4a7\",\n       \"subcategory\": \"62c57716f96069e70cf20b57\",\n       \"name\": \"dresses\"\n   }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n       \"status\": 201,\n       \"statusText\": \"SUCCESS\",\n       \"message\": \"Section updated successfully\",\n       \"data\": {\n           \"section\": {\n               \"category\": \"62c565ce198c336e57acf4a7\",\n               \"subcategory\": \"62c57716f96069e70cf20b57\",\n               \"name\": \"dresses\",\n               \"isActive\": true,\n               \"isDeleted\": false,\n               \"_id\": \"62c57985e157e053e48266ce\",\n               \"createdAt\": \"2022-07-06T12:01:09.501Z\",\n               \"updatedAt\": \"2022-07-06T12:01:09.501Z\",\n               \"__v\": 0\n           },\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/SectionController.ts",
    "groupTitle": "Admin-Section"
  },
  {
    "type": "patch",
    "url": "/api/v1/admin/section/_id/status",
    "title": "Update Status Section",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4NDAxMDc2LCJleHAiOjE2NTg0ODc0NzZ9.zvsp9yJKoXl9FUfp76BxnG3fDbUCVeRUNqf8jqQbBgw</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "update-status-section",
    "group": "Admin-Section",
    "description": "<p>pass section _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"section_update\",\n    \"data\": {\n        \"_id\": \"62c57985e157e053e48266ce\",\n        \"category\": \"62c565ce198c336e57acf4a7\",\n        \"subcategory\": \"62c57716f96069e70cf20b57\",\n        \"name\": \"dresses\",\n        \"isActive\": false,\n        \"isDeleted\": false,\n        \"createdAt\": \"2022-07-06T12:01:09.501Z\",\n        \"updatedAt\": \"2022-07-06T12:01:09.501Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/SectionController.ts",
    "groupTitle": "Admin-Section"
  },
  {
    "type": "delete",
    "url": "/api/v1/admin/subcategory/_id",
    "title": "Delete Subcategory",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Delete_Subcategory",
    "group": "Admin-SubCategory",
    "description": "<p>pass subcategory _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\"status\":201,\"statusText\":\"SUCCESS\",\"message\":\"Subcategory Deleted\",\"data\":{\"subcategory\":{\"_id\":\"62c4211e5c4a60984a062837\",\"name\":\"Gajodhar\",\"category\":\"62bfe0cf17bbe6f6672739f3\",\"image\":\"jack.jpg\",\"isActive\":true,\"isDeleted\":true,\"createdAt\":\"2022-07-05T11:31:42.330Z\",\"updatedAt\":\"2022-07-05T11:31:42.330Z\",\"__v\":0},\"execTime\":59}}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/SubcategoryController.ts",
    "groupTitle": "Admin-SubCategory"
  },
  {
    "type": "post",
    "url": "/api/v1/admin/subcategory/",
    "title": "Add Subcategory",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "add-subcategory",
    "group": "Admin-SubCategory",
    "description": "<p>pass required value as params</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\"status\":201,\"statusText\":\"CREATED\",\"message\":\"SubCategory created successfully\",\"data\":{\"subcategory\":{\"name\":\"Subcategory1\",\"category\":\"62bfe0cf17bbe6f6672739f3\",\"image\":\"subcat.jpg\",\"isActive\":true,\"isDeleted\":false,\"_id\":\"62c52786e666528d21bf6fd3\",\"createdAt\":\"2022-07-06T06:11:18.600Z\",\"updatedAt\":\"2022-07-06T06:11:18.600Z\",\"__v\":0},\"execTime\":106}}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/SubcategoryController.ts",
    "groupTitle": "Admin-SubCategory"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/subcategory/_id",
    "title": "Get SubCategory List",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "list-section",
    "group": "Admin-SubCategory",
    "description": "<p>pass category _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": 200,\n   \"statusText\": \"SUCCESS\",\n   \"message\": \"Subcategory List successfully\",\n   \"data\": {\n       \"count\": 1,\n       \"list\": [\n           {\n               \"_id\": \"62c6a92d437247fa040492ce\",\n               \"name\": \"men's Clothings\",\n               \"category\": \"62c6a900437247fa040492c9\",\n               \"image\": \"category/1657103792052-test3.jpeg\",\n               \"isActive\": true,\n               \"isDeleted\": false,\n               \"createdAt\": \"2022-07-07T09:36:45.907Z\",\n               \"updatedAt\": \"2022-07-07T09:36:45.907Z\"\n           }\n       ],\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/SubcategoryController.ts",
    "groupTitle": "Admin-SubCategory"
  },
  {
    "type": "patch",
    "url": "/api/v1/admin/subcategory/_id",
    "title": "Update Subcategory",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "update-category",
    "group": "Admin-SubCategory",
    "description": "<p>pass required value as params</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\"status\":201,\"statusText\":\"UPDATED\",\"message\":\"SubCategory updated successfully\",\"data\":{\"subcategory\":{\"name\":\"Subcategory1\",\"category\":\"62bfe0cf17bbe6f6672739f3\",\"image\":\"subcat.jpg\",\"isActive\":true,\"isDeleted\":false,\"_id\":\"62c52786e666528d21bf6fd3\",\"createdAt\":\"2022-07-06T06:11:18.600Z\",\"updatedAt\":\"2022-07-06T06:11:18.600Z\",\"__v\":0},\"execTime\":106}}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/SubcategoryController.ts",
    "groupTitle": "Admin-SubCategory"
  },
  {
    "type": "patch",
    "url": "/api/v1/admin/subcategory/_id/status",
    "title": "Update Status SubCategory",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4NDAxNzE4LCJleHAiOjE2NTg0ODgxMTh9.XD0OhucPIiCOyEEmAu7xUAaI1VdtiE6WgU8NOk_FpWU</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "update-status-subcategory",
    "group": "Admin-SubCategory",
    "description": "<p>pass subcategory _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": 200,\n\"statusText\": \"SUCCESS\",\n\"message\": \"Subcategory update status successfully\",\n\"data\": {\n   \"_id\": \"62c6a92d437247fa040492ce\",\n   \"name\": \"men's Clothings\",\n   \"category\": \"62c6a92d437247fa040492ce\",\n   \"image\": \"category/1657103792052-test3.jpeg\",\n   \"isActive\": false,\n   \"isDeleted\": false,\n   \"createdAt\": \"2022-07-07T09:36:45.907Z\",\n   \"updatedAt\": \"2022-07-07T09:36:45.907Z\",\n   \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/SubcategoryController.ts",
    "groupTitle": "Admin-SubCategory"
  },
  {
    "type": "put",
    "url": "/api/v1/admin/subcategory",
    "title": "Upload Category Image",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "upload-image",
    "group": "Admin-SubCategory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image.",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\"status\":201,\"statusText\":\"CREATED\",\"message\":\"Image uploaded successfully\",\"data\":{\"url\":\"subcategory/1657018612759-test9.png\"}}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/SubcategoryController.ts",
    "groupTitle": "Admin-SubCategory"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/subgroup",
    "title": "Subgroup list",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "get-subgroup-list",
    "group": "Admin-Subgroup",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "\n{\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"Subgroup list fetched.\",\n    \"data\": {\n        \"count\": 3,\n        \"list\": [\n            {\n                \"_id\": \"6329bfe5078d13c6551f0096\",\n                \"name\": \"test subgroup\",\n                \"description\": \"testing description\",\n                \"icon\": \"subgroup-icons/1663680483894-1658308824367-Screenshot_1.png\",\n                \"totalMember\": 1,\n                \"memberLimit\": 20,\n                \"createdBy\": {\n                    \"_id\": \"62dfcb21fb89c4b45de44685\",\n                    \"avatar\": \"user-profiles/1659706277298-pukhraj_saini_mce242.png\",\n                    \"displayName\": \"pk\",\n                    \"name\": \"pukhraj saini\"\n                },\n                \"createdAt\": \"2022-09-20T13:28:05.563Z\",\n                \"group\": {\n                    \"_id\": \"631867a72f264cd844f1949b\",\n                    \"groupIcon\": null,\n                    \"name\": \"test\",\n                    \"email\": \"test@gmail.com\"\n                },\n                \"isJoined\": true\n            }\n        ],\n        \"execTime\": 83\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/SubgroupController.ts",
    "groupTitle": "Admin-Subgroup"
  },
  {
    "type": "get",
    "url": "api/v1/admin/subgroup/:id",
    "title": "Subgroup Details",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "subgroup-details",
    "group": "Admin-Subgroup",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n\"status\": 200,\n\"statusText\": \"SUCCESS\",\n\"message\": \"subgroup_details\",\n\"data\": {\n  \"subgroup\": {\n       \"_id\": \"6331315a4451d28defe29202\",\n      \"groupId\": \"6322cd3986d65b0926de0cfa\",\n       \"groupName\": \"Down\",\n       \"description\": \"rhefbe\",\n       \"icon\": \"subgroup-icons/1664358096623-image_1648533556788.png\",\n      \"totalMember\": 1,\n       \"memberLimit\": 20,\n       \"createdBy\": {\n           \"_id\": \"631f29486ec923e37efccb94\",\n           \"email\": \"deepanshu.sharma@mobilecoderz.com\",\n           \"customerCode\": \"WFU193230\",\n           \"avatar\": \"user-profiles/1663574288842-Screenshot (4).png\",\n           \"displayName\": \"SharmaDeepanshu\",\n           \"name\": \"Deepanshu Sharma\"\n       },\n       \"group\": [\n           {\n               \"_id\": \"6322cd3986d65b0926de0cfa\",\n               \"groupIcon\": \"group-icons/1663226219359-Screenshot (4).png\",\n               \"groupCode\": \"GT2240198\",\n               \"name\": \"Down\",\n               \"description\": \"Basic\",\n               \"email\": \"ved@123gmail.com\"\n           }\n       ]\n   },\n   \"execTime\": 106\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/SubgroupController.ts",
    "groupTitle": "Admin-Subgroup"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/category/tax/categorylist",
    "title": "Get Tax Category list",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Get-tax-category-list",
    "group": "Admin-Tax",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"Category list get successfully\",\n    \"data\": [\n        {\n            \"_id\": \"62d8e798fa500418c5d0ae23\",\n            \"name\": \"Hair Loss Products - Medicated\",\n            \"product_tax_code\": \"51182001A0001\",\n            \"description\": \"Topical foams, creams, gels, etc. that prevent hair loss and promote hair regrowth.  These products contain a \\\"drug facts\\\" panel or a statement of active ingredients.  This code is intended for sales directly to end consumers that are NOT healthcare providers.\",\n            \"createdAt\": \"2022-07-21T05:43:52.487Z\",\n            \"updatedAt\": \"2022-07-21T05:43:52.487Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"62d8e798fa500418c5d0ae24\",\n            \"name\": \"Children's Books\",\n            \"product_tax_code\": \"35010001\",\n            \"description\": \"Children's books including picture books, painting, drawing, and activity books.\",\n            \"createdAt\": \"2022-07-21T05:43:52.487Z\",\n            \"updatedAt\": \"2022-07-21T05:43:52.488Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"62d8e798fa500418c5d0ae25\",\n            \"name\": \"Restocking Fee\",\n            \"product_tax_code\": \"93151599A0000\",\n            \"description\": \"A separately stated charge for a return or cancellation of merchandise where the entire original sales price is refunded or credited to the customer.  The restocking fee is normally charged to compensate the seller for costs related to returning the merchandise to the seller’s inventory\",\n            \"createdAt\": \"2022-07-21T05:43:52.488Z\",\n            \"updatedAt\": \"2022-07-21T05:43:52.488Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"62d8e798fa500418c5d0ae26\",\n            \"name\": \"Bibles\",\n            \"product_tax_code\": \"81121\",\n            \"description\": \"Bibles\",\n            \"createdAt\": \"2022-07-21T05:43:52.488Z\",\n            \"updatedAt\": \"2022-07-21T05:43:52.488Z\",\n            \"__v\": 0\n        }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/CategoryController.ts",
    "groupTitle": "Admin-Tax"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/user/_id",
    "title": "Get UserById",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Get-user",
    "group": "Admin-User",
    "description": "<p>pass user _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": 200,\n\"statusText\": \"SUCCESS\",\n\"message\": \"User fetched successfully\",\n\"data\": {\n    \"user\": {\n        \"_id\": \"62daa7c9df7ccbd75ff90c18\",\n        \"email\": \"rahul@123gmail.com\",\n        \"isEmailVerified\": true,\n        \"isAccountActive\": true,\n        \"__v\": 0,\n        \"accountNumber\": 37378731355699,\n        \"avatar\": \"user-profiles/1658497014545-mobilebanner4.jpeg\",\n        \"description\": \"bnkbnkbnkbrkbr\",\n        \"displayName\": \"rahulkannoujia\",\n        \"firstName\": \"ankit\",\n        \"lastName\": \"kannoujia\",\n        \"name\": \"ankit kannoujia\",\n        \"paypalEmail\": \"rahul@127gmail.com\"\n    },\n    \"execTime\": 71\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/UserController.ts",
    "groupTitle": "Admin-User"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/user",
    "title": "Get User List",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "list-user",
    "group": "Admin-User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n \"status\": 200,\n \"statusText\": \"SUCCESS\",\n \"message\": \"User list fetched successfully\",\n \"data\": {\n   \"count\": 127,\n   \"list\": [\n       {\n           \"_id\": \"62d8ef88c075177dd13aa9bd\",\n           \"email\": \"chandranshurajsingh@gmail.com\",\n           \"isEmailVerified\": true,\n           \"isAccountActive\": true\n       },\n       {\n           \"_id\": \"62da57b132cd49d7e9350cbb\",\n           \"email\": \"rajat1010114@yopmail.com\",\n           \"isEmailVerified\": false,\n           \"isAccountActive\": false\n       },\n       {\n           \"_id\": \"62d016d1ff9b93f5383b097f\",\n           \"email\": \"freed@free.commd\",\n           \"isEmailVerified\": false,\n           \"isAccountActive\": false\n       },\n       {\n           \"_id\": \"62d6898ef055ab9d06da8aee\",\n           \"email\": \"vishwa92.piyush1@gmail.com\",\n           \"isEmailVerified\": true,\n           \"isAccountActive\": true\n       },\n       {\n           \"_id\": \"62d01e3aff9b93f5383b0bf6\",\n           \"email\": \"kamal@test.com\",\n           \"isEmailVerified\": false,\n           \"isAccountActive\": false\n       },\n        ],\n   \"execTime\": 111\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/UserController.ts",
    "groupTitle": "Admin-User"
  },
  {
    "type": "patch",
    "url": "/api/v1/admin/banner/_id/status",
    "title": "Update Status User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4MzAyNzUzLCJleHAiOjE2NTgzODkxNTN9.sZHSncgjZAdM_gYbP7tIK8NTFTrAo2j10UkG4bHWhxs</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "update-status-user",
    "group": "Admin-User",
    "description": "<p>pass user _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n \"status\": 200,\n \"statusText\": \"SUCCESS\",\n \"message\": \"User update status  successfully\",\n \"data\": {\n   \"_id\": \"62dfcb21fb89c4b45de44685\",\n   \"email\": \"najariya.query@gmail.com\",\n   \"isEmailVerified\": true,\n   \"isAccountActive\": false,\n   \"__v\": 0,\n   \"currentDeviceType\": \"IOS\",\n   \"accountNumber\": 20231949278,\n   \"avatar\": \"user-profiles/1659434425401-test3.jpeg\",\n   \"description\": \"it is good\",\n   \"displayName\": \"ASDF\",\n   \"firstName\": \"Pukhraj\",\n   \"lastName\": \"Saini\",\n   \"name\": \"pukhraj Saini\",\n   \"paypalEmail\": \"pukhraj.saini97@gmail.com\",\n   \"changedEmail\": \"pukhraj.query@gmail.com\"\n  }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/UserController.ts",
    "groupTitle": "Admin-User"
  },
  {
    "type": "post",
    "url": "/api/v1/app/auth/resend-verification",
    "title": "Resend Verification Link",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'ANDROID'|'IOS'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Resend-Verification-Link",
    "group": "App-Auth",
    "parameter": {
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n             \"email\": \"test@gmail.com\"\n         }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\":200,\"statusText\":\"SUCCESS\",\"message\":\"Verification link sent successfully on your mail\",\"data\":{\"user\":{\"_id\":\"62ce9d6b201f67d39d8c4e98\",\"email\":\"test@gmail.com.com\",\"isEmailVerified\":true,\"isAccountActive\":true,\"__v\":0},\"execTime\":78}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response1:",
          "content": "{\"status\":400,\"statusText\":\"BAD_REQUEST\",\"message\":\"Invalid Email\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/AuthController.ts",
    "groupTitle": "App-Auth"
  },
  {
    "type": "patch",
    "url": "/api/v1/app/auth/verify-account",
    "title": "Verify Account",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'ANDROID'|'IOS'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Verify-Account",
    "group": "App-Auth",
    "parameter": {
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n    \"verifyAccountToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmYzZTg1MDk5MTIzYTdjNDYwMTMyMyIsInJvbGUi\"\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\":200,\"statusText\":\"SUCCESS\",\"message\":\"Account verified successfully\",\"data\":{\"user\":{\"_id\":\"62ce9d6b201f67d39d8c4e98\",\"email\":\"sumit.vishwakarma@mobilecoderz.com\",\"isEmailVerified\":true,\"isAccountActive\":true,\"__v\":0},\"execTime\":81}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response1:",
          "content": "{\"status\":400,\"statusText\":\"BAD_REQUEST\",\"message\":\"Invalid verification token\",\"data\":{}}",
          "type": "json"
        },
        {
          "title": "Error-Response",
          "content": "{\"status\":401,\"message\":\"Token Expired\"}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/AuthController.ts",
    "groupTitle": "App-Auth"
  },
  {
    "type": "post",
    "url": "/api/v1/app/auth/forgot-password",
    "title": "Forgot password",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'ANDROID'|'IOS'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "forgot-password",
    "group": "App-Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n    \"email\": \"pukhraj1@mailinator.com\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\":200,\"statusText\":\"SUCCESS\",\"message\":\"Password reset link sent to your email.\",\"data\":{\"resetUrl\":\"http://localhost/reset-password?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmYzZTg1MDk5MTIzYTdjNDYwMTMyMyIsInJvbGUiOiJGT1JHT1RfUEFTU1dPUkQiLCJpYXQiOjE2NTY5Mzc5MjgsImV4cCI6MTY1NjkzODUyOH0.jVOTnoqzXqJvWPpvqCHvLIXSe3ag4aLRavaYvLnlkHQ\",\"execTime\":45}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response1:",
          "content": "{\"status\":403,\"statusText\":\"FORBIDDEN\",\"message\":\"No account exists with this email\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/AuthController.ts",
    "groupTitle": "App-Auth"
  },
  {
    "type": "post",
    "url": "/api/v1/app/auth/login",
    "title": "Log in",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "login",
    "group": "App-Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "loginType",
            "description": "<p>'WEB'|'ANDROID'|'IOS'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n    \"email\": \"pukhraj1@mailinator.com\",\n    \"password\": \"Test@1234\",\n    \"deviceType\": \"IOS\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\":200,\"statusText\":\"SUCCESS\",\"message\":\"Login successfully\",\"data\":{\"user\":{\"_id\":\"62c2bf3302eb83542c409e24\",\"email\":\"pukhraj1@mailinator.com\",\"isEmailVerified\":false,\"isAccountActive\":false,\"__v\":0,\"currentDeviceType\":\"IOS\"},\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzJiZjMzMDJlYjgzNTQyYzQwOWUyNCIsImVtYWlsIjoicHVraHJhajFAbWFpbGluYXRvci5jb20iLCJkZXZpY2VUeXBlIjoiSU9TIiwiaWF0IjoxNjU2OTMzMDMxLCJleHAiOjE2NTcwMTk0MzF9.dj3KwQ3o4XY1Zqv5dpv4LbZstURHL_O8BbXa7IYQiP0\",\"execTime\":169}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response1:",
          "content": "{\"status\":400,\"statusText\":\"BAD_REQUEST\",\"message\":\"Invalid email or password\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/AuthController.ts",
    "groupTitle": "App-Auth"
  },
  {
    "type": "post",
    "url": "/api/v1/app/auth/reset-password",
    "title": "Reset password",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'ANDROID'|'IOS'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "reset-password",
    "group": "App-Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Email Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resetToken",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n             \"resetToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmYzZTg1MDk5MTIzYTdjNDYwMTMyMyIsInJvbGUi,\n             \"password\": \"Test@1234\"\n         }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\":200,\"statusText\":\"SUCCESS\",\"message\":\"Password reset successfully\",\"data\":{\"user\":{\"_id\":\"62bf3e85099123a7c4601323\",\"email\":\"pukhraj@mailinator.com\",\"isEmailVerified\":false,\"isAccountActive\":false,\"__v\":0},\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmYzZTg1MDk5MTIzYTdjNDYwMTMyMyIsImVtYWlsIjoicHVraHJhakBtYWlsaW5hdG9yLmNvbSIsImlhdCI6MTY1Njk0MTY2MiwiZXhwIjoxNjU3MDI4MDYyfQ.IlInnF61OUgNdFeoA5ZbdJkgbiWmGrZnBEQx8n8qxrQ\",\"execTime\":157}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response1:",
          "content": "{\"status\":400,\"statusText\":\"BAD_REQUEST\",\"message\":\"Invalid reset token\",\"data\":{}}",
          "type": "json"
        },
        {
          "title": "Error-Response",
          "content": "{\"status\":401,\"message\":\"Token Expired, please logIn again\"}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/AuthController.ts",
    "groupTitle": "App-Auth"
  },
  {
    "type": "post",
    "url": "/api/v1/app/auth/signup",
    "title": "Sign up",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "signup",
    "group": "App-Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>if user invited for a group on email</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n    \"email\": \"pukhraj1@mailinator.com\",\n    \"password\": \"Test@1234\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\":201,\"message\":\"User Sign up successfully\",\"execTime\":167,\"data\":{\"user\":{\"email\":\"pukhraj1@mailinator.com\",\"isEmailVerified\":false,\"isAccountActive\":false,\"_id\":\"62c2bf3302eb83542c409e24\",\"__v\":0},   \"verifyAccountToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2ZlMzc4MjIxYzgwNjU3NTViNjM5YyIsInJvbGUiOiJWRVJJRllfQUNDT1VOVCIsImlhdCI6MTY1Nzc5MTM1MiwiZXhwIjoxNjU3ODc3NzUyfQ.cH4FsJNZUaKQUH590MwqHXUqR4Eh8GNpJmxrNvvI7QA\",}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response1:",
          "content": "{\"status\":409,\"statusText\":\"CONFLICT\",\"message\":\"User already exists\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/AuthController.ts",
    "groupTitle": "App-Auth"
  },
  {
    "type": "get",
    "url": "/api/v1/app/banner",
    "title": "Banner listing",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "search",
    "group": "App-Banner",
    "success": {
      "examples": [
        {
          "title": "Success-Response-1:",
          "content": "{\n      \"status\": 200,\n      \"statusText\": \"SUCCESS\",\n      \"message\": \"Banner list\",\n      \"data\": {\n          \"banners\": [\n              {\n                  \"_id\": \"62d8f7558ecb874779972d57\",\n                  \"clickUrl\": \"ffogbrfogfrbfbbb\",\n                  \"photo\": \"banner/1658386260254-Slider_01.png\",\n                  \"deviceType\": \"WEB\",\n                  \"isActive\": true,\n                  \"isDeleted\": false,\n                  \"createdAt\": \"2022-07-21T06:51:01.706Z\",\n                  \"updatedAt\": \"2022-07-21T06:51:01.706Z\",\n                  \"__v\": 0\n              }\n          ],\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/BannerController.ts",
    "groupTitle": "App-Banner"
  },
  {
    "type": "post",
    "url": "/api/v1/app/cart",
    "title": "Add 2 Cart",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "add-cart",
    "group": "App-Cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "products",
            "description": "<p>array of productId and quantity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n   \"products\": [\n      {\n      \"productId\":\"62cfb67426bd109f9ae2d7cf\",\n      \"quantity\":16\n    }\n    ]\n      \n   }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": 201,\n    \"statusText\": \"CREATED\",\n     \"message\": \"Product has been added in your cart\",\n   \"data\": {\n      \"cart\": {\n        \"productId\": \"62cfb67426bd109f9ae2d7cf\",\n        \"userId\": \"62e0e20233728726535d2de1\",\n        \"quantity\": 16,\n         \"_id\": \"62f0d21a63975314768ee3e7\",\n        \"createdAt\": \"2022-08-08T09:06:34.032Z\",\n        \"updatedAt\": \"2022-08-08T09:06:34.032Z\",\n         \"__v\": 0\n  },\n\"execTime\": 118\n}\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/CartController.ts",
    "groupTitle": "App-Cart"
  },
  {
    "type": "get",
    "url": "/api/v1/app/cart",
    "title": "MyCart listing",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "cart-list",
    "group": "App-Cart",
    "success": {
      "examples": [
        {
          "title": "Success-Response-1:",
          "content": "{\n      \"status\": 200,\n      \"statusText\": \"SUCCESS\",\n      \"message\": \"Cart list fetch successfully\",\n      \"data\": {\n          \"priceSubTotal\": 90000,\n          \"tax\": 23,\n          \"priceTotal\": 90023,\n          \"list\": [\n              {\n                  \"_id\": \"63070c96dee2905ca2484b86\",\n                  \"productId\": \"62cfb67426bd109f9ae2d7cf\",\n                  \"quantity\": 2,\n                  \"attributes\": [\n                      {\n                          \"name\": \"sizes\",\n                          \"value\": \"xl\",\n                          \"_id\": \"630762fe61693f8bd2d2d488\"\n                      }\n                  ],\n                  \"color\": \"red\",\n                  \"product\": {\n                      \"_id\": \"62cfb67426bd109f9ae2d7cf\",\n                      \"name\": \"Mobile\",\n                      \"categoryName\": \"Electronics\",\n                      \"subcategoryName\": \"Digital\",\n                      \"regularPrice\": 40000,\n                      \"salePrice\": 45000,\n                      \"coverPhoto\": \"product/62cfb67426bd109f9ae2d7cf/cover-photo/default.png\",\n                      \"categorySlug\": \"women's-fashion\",\n                      \"subcategorySlug\": \"women's-bottoms\"\n                  },\n                  \"priceTotal\": 90000\n              }\n          ],\n          \"execTime\": 132\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/CartController.ts",
    "groupTitle": "App-Cart"
  },
  {
    "type": "delete",
    "url": "/api/v1/app/cart",
    "title": "Clear Cart",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWJhZjQyYzYzZGE5OWRhODJjZTcyOCIsImVtYWlsIjoicmFodWxAMTI1Z21haWwuY29tIiwiaWF0IjoxNjU5NjEyOTk0LCJleHAiOjE2NTk2OTkzOTR9.BgVLC42cM61I2A0Y456FprkCbKskGrH1qa3kqljq9g0</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "clear-cart",
    "group": "App-Cart",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "*HTTP/1.1 200 OK\n\n {\n   \"status\": 200,\n\"statusText\": \"SUCCESS\",\n \"message\": \"Cart all clear\",\n \"data\": {\n     \"execTime\": 105\n }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/CartController.ts",
    "groupTitle": "App-Cart"
  },
  {
    "type": "delete",
    "url": "/api/v1/app/cart/_id",
    "title": "Delete Product from cart",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "delete-cart",
    "group": "App-Cart",
    "description": "<p>pass cart _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": 200,\n \"statusText\": \"SUCCESS\",  \n \"message\": \"Cart deleted successfully\",\n \"data\": {\n     \"cart\": {\n     \"_id\": \"62eb77913cdbc3fc3ad9a813\",\n     \"productId\": \"62cfb67426bd109f9ae2d7cf\",\n     \"userId\": \"62e0e20233728726535d2de1\",\n     \"quantity\": 12,\n     \"createdAt\": \"2022-08-04T07:38:57.480Z\",\n     \"updatedAt\": \"2022-08-04T07:38:57.480Z\",\n     \"__v\": 0\n },\n  \"execTime\": 102\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/CartController.ts",
    "groupTitle": "App-Cart"
  },
  {
    "type": "patch",
    "url": "/api/v1/app/cart/_id/inc",
    "title": "Update Cart",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWI4YTk3YmViMWRiZmFjMTdmZDg1YiIsImVtYWlsIjoicmFodWxAMTI1Z21haWwuY29tIiwiaWF0IjoxNjU5NjAzNjA3LCJleHAiOjE2NTk2OTAwMDd9.IX0HiOYvZd0eteYvH6z2wRFxLtjtyfjDzPtA8ElNMcI</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "update-cart",
    "group": "App-Cart",
    "description": "<p>pass cart _id as params, and order  'inc'|'dec' after cart _id</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n {\n \"status\": 200,\n  \"statusText\": \"SUCCESS\",\n   \"message\": \"Cart updated successfully\",\n   \"data\": {\n       \"cart\": {\n          \"_id\": \"62f0d21a63975314768ee3e7\",\n          \"productId\": \"62cfb67426bd109f9ae2d7cf\",\n           \"userId\": \"62e0e20233728726535d2de1\",\n           \"quantity\": 15,\n           \"createdAt\": \"2022-08-08T09:06:34.032Z\",\n           \"updatedAt\": \"2022-08-08T09:06:34.032Z\",\n          \"__v\": 0\n      },\n      \"execTime\": 78\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/CartController.ts",
    "groupTitle": "App-Cart"
  },
  {
    "type": "get",
    "url": "/api/v1/app/category",
    "title": "Category List",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "category-list",
    "group": "App-Category",
    "success": {
      "examples": [
        {
          "title": "Success-Response-1:",
          "content": "{\n      \"status\": 200,\n      \"statusText\": \"SUCCESS\",\n      \"message\": \"Category list get successfully\",\n      \"data\": {\n          \"categories\": [\n              {\n                  \"_id\": \"62c565ce198c336e57acf4a7\",\n                  \"name\": \"Women's Fashion\",\n                  \"image\": \"category/1657103792052-test3.jpeg\"\n              }\n          ],\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/CategoryController.ts",
    "groupTitle": "App-Category"
  },
  {
    "type": "get",
    "url": "/api/v1/app/category/list",
    "title": "Category List All",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "category-list-all",
    "group": "App-Category",
    "success": {
      "examples": [
        {
          "title": "Success-Response-1:",
          "content": "{\n      \"status\": 200,\n      \"statusText\": \"SUCCESS\",\n      \"message\": \"Category list get successfully\",\n      \"data\": {\n          \"categories\": [\n              {\n                  \"_id\": \"62c565ce198c336e57acf4a7\",\n                  \"name\": \"Women's Fashion\",\n                  \"createdAt\": \"2022-07-06T10:37:02.361Z\",\n                  \"updatedAt\": \"2022-07-06T10:37:02.361Z\",\n                  \"subcategories\": [\n                      {\n                          \"_id\": \"62c57716f96069e70cf20b57\",\n                          \"name\": \"Women's Clothings\",\n                          \"category\": \"62c565ce198c336e57acf4a7\",\n                          \"createdAt\": \"2022-07-06T11:50:46.672Z\",\n                          \"updatedAt\": \"2022-07-06T11:50:46.672Z\",\n                          \"sections\": [\n                              {\n                                  \"_id\": \"62c57985e157e053e48266ce\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62c57716f96069e70cf20b57\",\n                                  \"name\": \"dresses\",\n                                  \"createdAt\": \"2022-07-06T12:01:09.501Z\",\n                                  \"updatedAt\": \"2022-07-06T12:01:09.501Z\"\n                              }\n                          ]\n                      },\n                      {\n                          \"_id\": \"62cbf6f7217ec71559014f10\",\n                          \"name\": \"Women Shoes\",\n                          \"category\": \"62c565ce198c336e57acf4a7\",\n                          \"createdAt\": \"2022-07-11T10:09:59.139Z\",\n                          \"updatedAt\": \"2022-07-11T10:09:59.139Z\",\n                          \"sections\": [\n                              {\n                                  \"_id\": \"62cbf717217ec71559014f16\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf6f7217ec71559014f10\",\n                                  \"name\": \"section\",\n                                  \"createdAt\": \"2022-07-11T10:10:31.469Z\",\n                                  \"updatedAt\": \"2022-07-11T10:10:31.469Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf71d217ec71559014f1c\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf6f7217ec71559014f10\",\n                                  \"name\": \"section2\",\n                                  \"createdAt\": \"2022-07-11T10:10:37.202Z\",\n                                  \"updatedAt\": \"2022-07-11T10:10:37.202Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf721217ec71559014f22\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf6f7217ec71559014f10\",\n                                  \"name\": \"section3\",\n                                  \"createdAt\": \"2022-07-11T10:10:41.907Z\",\n                                  \"updatedAt\": \"2022-07-11T10:10:41.907Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf728217ec71559014f28\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf6f7217ec71559014f10\",\n                                  \"name\": \"section4\",\n                                  \"createdAt\": \"2022-07-11T10:10:48.625Z\",\n                                  \"updatedAt\": \"2022-07-11T10:10:48.625Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf72e217ec71559014f2e\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf6f7217ec71559014f10\",\n                                  \"name\": \"section5\",\n                                  \"createdAt\": \"2022-07-11T10:10:54.059Z\",\n                                  \"updatedAt\": \"2022-07-11T10:10:54.059Z\"\n                              }\n                          ]\n                      },\n                      {\n                          \"_id\": \"62cbf741217ec71559014f33\",\n                          \"name\": \"Plus Size\",\n                          \"category\": \"62c565ce198c336e57acf4a7\",\n                          \"createdAt\": \"2022-07-11T10:11:13.554Z\",\n                          \"updatedAt\": \"2022-07-11T10:11:13.554Z\",\n                          \"sections\": [\n                              {\n                                  \"_id\": \"62cbf752217ec71559014f39\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf741217ec71559014f33\",\n                                  \"name\": \"section1\",\n                                  \"createdAt\": \"2022-07-11T10:11:30.687Z\",\n                                  \"updatedAt\": \"2022-07-11T10:11:30.687Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf757217ec71559014f3f\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf741217ec71559014f33\",\n                                  \"name\": \"section2\",\n                                  \"createdAt\": \"2022-07-11T10:11:35.803Z\",\n                                  \"updatedAt\": \"2022-07-11T10:11:35.803Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf75d217ec71559014f45\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf741217ec71559014f33\",\n                                  \"name\": \"section3\",\n                                  \"createdAt\": \"2022-07-11T10:11:41.428Z\",\n                                  \"updatedAt\": \"2022-07-11T10:11:41.428Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf764217ec71559014f4b\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf741217ec71559014f33\",\n                                  \"name\": \"section4\",\n                                  \"createdAt\": \"2022-07-11T10:11:48.132Z\",\n                                  \"updatedAt\": \"2022-07-11T10:11:48.132Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf769217ec71559014f51\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf741217ec71559014f33\",\n                                  \"name\": \"section5\",\n                                  \"createdAt\": \"2022-07-11T10:11:53.945Z\",\n                                  \"updatedAt\": \"2022-07-11T10:11:53.945Z\"\n                              }\n                          ]\n                      },\n                      {\n                          \"_id\": \"62cbf77a217ec71559014f5d\",\n                          \"name\": \"Women's bottems\",\n                          \"category\": \"62c565ce198c336e57acf4a7\",\n                          \"createdAt\": \"2022-07-11T10:12:10.631Z\",\n                          \"updatedAt\": \"2022-07-11T10:12:10.631Z\",\n                          \"sections\": [\n                              {\n                                  \"_id\": \"62cbf78d217ec71559014f63\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf77a217ec71559014f5d\",\n                                  \"name\": \"bottems 1\",\n                                  \"createdAt\": \"2022-07-11T10:12:29.933Z\",\n                                  \"updatedAt\": \"2022-07-11T10:12:29.933Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf792217ec71559014f69\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf77a217ec71559014f5d\",\n                                  \"name\": \"bottems 2\",\n                                  \"createdAt\": \"2022-07-11T10:12:34.558Z\",\n                                  \"updatedAt\": \"2022-07-11T10:12:34.558Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf799217ec71559014f6f\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf77a217ec71559014f5d\",\n                                  \"name\": \"bottems 3\",\n                                  \"createdAt\": \"2022-07-11T10:12:41.492Z\",\n                                  \"updatedAt\": \"2022-07-11T10:12:41.492Z\"\n                              }\n                          ]\n                      },\n                      {\n                          \"_id\": \"62cbf7a9217ec71559014f74\",\n                          \"name\": \"Women's Top\",\n                          \"category\": \"62c565ce198c336e57acf4a7\",\n                          \"createdAt\": \"2022-07-11T10:12:57.423Z\",\n                          \"updatedAt\": \"2022-07-11T10:12:57.423Z\",\n                          \"sections\": [\n                              {\n                                  \"_id\": \"62cbf7b8217ec71559014f7a\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf7a9217ec71559014f74\",\n                                  \"name\": \"Top 1\",\n                                  \"createdAt\": \"2022-07-11T10:13:12.001Z\",\n                                  \"updatedAt\": \"2022-07-11T10:13:12.001Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf7bd217ec71559014f80\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf7a9217ec71559014f74\",\n                                  \"name\": \"Top 2\",\n                                  \"createdAt\": \"2022-07-11T10:13:17.058Z\",\n                                  \"updatedAt\": \"2022-07-11T10:13:17.058Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf7c1217ec71559014f86\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf7a9217ec71559014f74\",\n                                  \"name\": \"Top 3\",\n                                  \"createdAt\": \"2022-07-11T10:13:21.776Z\",\n                                  \"updatedAt\": \"2022-07-11T10:13:21.776Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf7c6217ec71559014f8c\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf7a9217ec71559014f74\",\n                                  \"name\": \"Top 4\",\n                                  \"createdAt\": \"2022-07-11T10:13:26.753Z\",\n                                  \"updatedAt\": \"2022-07-11T10:13:26.753Z\"\n                              }\n                          ]\n                      },\n                      {\n                          \"_id\": \"62cbf82d217ec71559014fa8\",\n                          \"name\": \"Women's Jwellary\",\n                          \"category\": \"62c565ce198c336e57acf4a7\",\n                          \"createdAt\": \"2022-07-11T10:15:09.993Z\",\n                          \"updatedAt\": \"2022-07-11T10:15:09.993Z\",\n                          \"sections\": [\n                              {\n                                  \"_id\": \"62cbf83d217ec71559014fb5\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf82d217ec71559014fa8\",\n                                  \"name\": \"jw 4\",\n                                  \"createdAt\": \"2022-07-11T10:15:25.741Z\",\n                                  \"updatedAt\": \"2022-07-11T10:15:25.741Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf843217ec71559014fbb\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf82d217ec71559014fa8\",\n                                  \"name\": \"jw 1\",\n                                  \"createdAt\": \"2022-07-11T10:15:31.089Z\",\n                                  \"updatedAt\": \"2022-07-11T10:15:31.089Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf848217ec71559014fcf\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf82d217ec71559014fa8\",\n                                  \"name\": \"jw 2\",\n                                  \"createdAt\": \"2022-07-11T10:15:36.169Z\",\n                                  \"updatedAt\": \"2022-07-11T10:15:36.169Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf84c217ec71559014fdc\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf82d217ec71559014fa8\",\n                                  \"name\": \"jw 3\",\n                                  \"createdAt\": \"2022-07-11T10:15:40.621Z\",\n                                  \"updatedAt\": \"2022-07-11T10:15:40.621Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf851217ec71559014fe2\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf82d217ec71559014fa8\",\n                                  \"name\": \"jw 4\",\n                                  \"createdAt\": \"2022-07-11T10:15:45.399Z\",\n                                  \"updatedAt\": \"2022-07-11T10:15:45.399Z\"\n                              }\n                          ]\n                      }\n                  ]\n              },\n          ],\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/CategoryController.ts",
    "groupTitle": "App-Category"
  },
  {
    "type": "get",
    "url": "/api/v1/app/category/section-list/:subcategorySlug",
    "title": "Sections list",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "section-list",
    "group": "App-Category",
    "description": "<p>pass categorySlug, subcategorySlug as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response-1:",
          "content": "{\n      \"status\": 200,\n      \"statusText\": \"SUCCESS\",\n      \"message\": \"Section list get successfully\",\n      \"data\": {\n          \"sections\": [\n              {\n                  \"_id\": \"62dfdac2fb89c4b45de45382\",\n                  \"category\": \"62c6a900437247fa040492c9\",\n                  \"subcategory\": \"62dfd4dffb89c4b45de44f77\",\n                  \"name\": \"section2\",\n                  \"createdAt\": \"2022-07-26T12:14:58.953Z\",\n                  \"updatedAt\": \"2022-09-06T11:58:53.467Z\",\n                  \"slug\": \"section2-1-2\",\n                  \"image\": \"section/2022-02-25 (2).png\",\n                  \"productCount\": 0\n              }\n          ],\n          \"execTime\": 97\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/CategoryController.ts",
    "groupTitle": "App-Category"
  },
  {
    "type": "get",
    "url": "/api/v1/app/category/store",
    "title": "Store List",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "store-list",
    "group": "App-Category",
    "success": {
      "examples": [
        {
          "title": "Success-Response-1:",
          "content": "{\n      \"status\": 200,\n      \"statusText\": \"SUCCESS\",\n      \"message\": \"Store list fetch successfully\",\n      \"data\": {\n          \"stores\": [\n              {\n                  \"_id\": \"62c6a900437247fa040492c9\",\n                  \"name\": \"Babies, Kids and toys\",\n                  \"image\": \"category/1658833169064-download (5).jfif\",\n                  \"updatedAt\": \"2022-07-07T09:36:00.816Z\",\n                  \"productCount\": 0\n              }\n          ],\n          \"execTime\": 42\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/CategoryController.ts",
    "groupTitle": "App-Category"
  },
  {
    "type": "get",
    "url": "/api/v1/app/category/sub-list-id/:id",
    "title": "Sub Category List",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "subcategory-list-id",
    "group": "App-Category",
    "description": "<p>pass category _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response-1:",
          "content": "{\n      \"status\": 200,\n      \"statusText\": \"SUCCESS\",\n      \"message\": \"Subcategory List\",\n      \"data\": {\n          \"subcategories\": [\n              {\n                  \"_id\": \"62c57716f96069e70cf20b57\",\n                  \"name\": \"Women's Clothings\",\n                  \"category\": \"62c565ce198c336e57acf4a7\",\n                  \"createdAt\": \"2022-07-06T11:50:46.672Z\",\n                  \"updatedAt\": \"2022-07-06T11:50:46.672Z\",\n                  \"sections\": [\n                      {\n                          \"_id\": \"62c57985e157e053e48266ce\",\n                          \"category\": \"62c565ce198c336e57acf4a7\",\n                          \"subcategory\": \"62c57716f96069e70cf20b57\",\n                          \"name\": \"dresses\",\n                          \"createdAt\": \"2022-07-06T12:01:09.501Z\",\n                          \"updatedAt\": \"2022-07-06T12:01:09.501Z\"\n                      }\n                  ]\n              }\n          ],\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/CategoryController.ts",
    "groupTitle": "App-Category"
  },
  {
    "type": "get",
    "url": "/api/v1/app/category/sub-list-slug/:categorySlug",
    "title": "Sub Category List For web",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "subcategory-list-slug",
    "group": "App-Category",
    "description": "<p>pass category slug as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response-1:",
          "content": "{\n      \"status\": 200,\n      \"statusText\": \"SUCCESS\",\n      \"message\": \"Subcategory list successfully\",\n      \"data\": {\n          \"subcategories\": [\n              {\n                  \"_id\": \"62c57716f96069e70cf20b57\",\n                  \"name\": \"women's clothings\",\n                  \"category\": \"62c565ce198c336e57acf4a7\",\n                  \"image\": \"category/1658837115264-download (17).jfif\",\n                  \"createdAt\": \"2022-07-06T11:50:46.672Z\",\n                  \"updatedAt\": \"2022-09-02T09:50:18.262Z\",\n                  \"slug\": \"womens-clothings-1\",\n                  \"sections\": true\n              }\n          ],\n          \"execTime\": 83\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/CategoryController.ts",
    "groupTitle": "App-Category"
  },
  {
    "type": "post",
    "url": "/api/v1/app/filter/breadcrumb",
    "title": "Breadcrumb List",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "breadcrumb",
    "group": "App-Filter",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "categorySlug",
            "description": "<p>categorySlug</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "subcategorySlug",
            "description": "<p>subcategorySlug</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n    \"subcategorySlug\": \"women-shoes\"\n}",
          "type": "json"
        },
        {
          "title": "Request-body 2",
          "content": "{\n        \"productSlug\": \"lece-maxi-dress-adjustable-shoulder-strap-button--63087b2f224cb585fce762a6\"\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-1:",
          "content": "{\n       \"status\": 200,\n       \"statusText\": \"SUCCESS\",\n       \"message\": \"Breadcrumb list\",\n       \"data\": {\n           \"breadcrumb\": [\n               {\n                   \"name\": \"women's fashion\",\n                   \"slug\": \"women's-fashion\",\n                   \"queryKey\": \"categorySlug\"\n               },\n               {\n                   \"name\": \"women shoes\",\n                   \"slug\": \"women-shoes\",\n                   \"queryKey\": \"subcategorySlug\"\n               }\n           ],\n           \"execTime\": 96\n       }\n   }",
          "type": "json"
        },
        {
          "title": "Success-Response-2: ",
          "content": "{\n       \"status\": 200,\n       \"statusText\": \"SUCCESS\",\n       \"message\": \"Breadcrumb list\",\n       \"data\": {\n           \"breadcrumb\": [\n               {\n                   \"name\": \"women's fashion\",\n                   \"slug\": \"women's-fashion\",\n                   \"queryKey\": \"categorySlug\"\n               },\n               {\n                   \"name\": \"women's top\",\n                   \"slug\": \"women's-top\",\n                   \"queryKey\": \"subcategorySlug\"\n               },\n               {\n                   \"name\": \"lece maxi dress adjustable shoulder strap button \",\n                   \"slug\": \"lece-maxi-dress-adjustable-shoulder-strap-button--63087b2f224cb585fce762a6\",\n                   \"queryKey\": \"productSlug\"\n               }\n           ],\n           \"execTime\": 41\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/FilterController.ts",
    "groupTitle": "App-Filter"
  },
  {
    "type": "get",
    "url": "/api/v1/app/filter/list-by-id:categoryId",
    "title": "Filter List",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "filter-list-by-id",
    "group": "App-Filter",
    "description": "<p>pass categoryId as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response-1:",
          "content": "{\n      \"status\": 200,\n      \"statusText\": \"SUCCESS\",\n      \"message\": \"Filter list\",\n      \"data\": {\n          \"filter\": {\n              \"subcategories\": {\n                  \"displayKey\": \"product categories\",\n                  \"queryKey\": \"subcategory\",\n                  \"list\": [\n                      {\n                          \"name\": \"Kid's crafts\",\n                          \"_id\": \"62dfd43efb89c4b45de44f18\"\n                      }\n                  ]\n              },\n              \"brands\": {\n                  \"displayKey\": \"brands\",\n                  \"queryKey\": \"brands\",\n                  \"list\": [\n                      {\n                          \"name\": \"My Brnad\",\n                          \"_id\": \"62f20e7b462b16cab5e16fbf\"\n                      }\n                  ]\n              },\n              \"price\": {\n                  \"displayKey\": \"price\",\n                  \"queryKey\": \"price\",\n                  \"minPrice\": 0,\n                  \"maxPrice\": 450000\n              },\n              \"color\": {\n                  \"displayKey\": \"color\",\n                  \"queryKey\": \"colors\",\n                  \"list\": [\n                      \"red\",\n                      \"blue\"\n                  ]\n              },\n              \"attributes\": {\n                  \"queryKey\": \"attributes\",\n                  \"attributes\": [\n                      {\n                          \"displayKey\": \"sizes\",\n                          \"queryKey\": \"sizes\",\n                          \"list\": [\n                              \"x\",\n                              \"M\",\n                              \"XL\",\n                              \"XXL\"\n                          ],\n                          \"_id\": \"62f2421ddf9b18de4e98c587\"\n                      },\n                      {\n                          \"displayKey\": \"fabric\",\n                          \"queryKey\": \"fabric\",\n                          \"list\": [\n                              \"cotten\",\n                              \"nylon\"\n                          ],\n                          \"_id\": \"62f2421ddf9b18de4e98c588\"\n                      },\n                      {\n                          \"displayKey\": \"patters\",\n                          \"queryKey\": \"patters\",\n                          \"list\": [\n                              \"stripped\",\n                              \"regular\"\n                          ],\n                          \"_id\": \"62f2421ddf9b18de4e98c589\"\n                      }\n                  ]\n              },\n              \"_id\": \"62f24134f340f9f48352e9a3\",\n              \"categoryId\": \"62df8560920908884958dd49\",\n              \"__v\": 3\n          },\n          \"execTime\": 111\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/FilterController.ts",
    "groupTitle": "App-Filter"
  },
  {
    "type": "get",
    "url": "/api/v1/app/filter/list-by-slug:categorySlug",
    "title": "Filter List By Slug for web",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "filter-list-by-slug",
    "group": "App-Filter",
    "description": "<p>pass categorySlug as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response-1:",
          "content": "{\n      \"status\": 200,\n      \"statusText\": \"SUCCESS\",\n      \"message\": \"Filter list\",\n      \"data\": {\n          \"filter\": {\n              \"subcategories\": {\n                  \"displayKey\": \"product categories\",\n                  \"queryKey\": \"subcategory\",\n                  \"list\": [\n                      {\n                          \"name\": \"Kid's crafts\",\n                          \"_id\": \"62dfd43efb89c4b45de44f18\"\n                      }\n                  ]\n              },\n              \"brands\": {\n                  \"displayKey\": \"brands\",\n                  \"queryKey\": \"brands\",\n                  \"list\": [\n                      {\n                          \"name\": \"My Brnad\",\n                          \"_id\": \"62f20e7b462b16cab5e16fbf\"\n                      }\n                  ]\n              },\n              \"price\": {\n                  \"displayKey\": \"price\",\n                  \"queryKey\": \"price\",\n                  \"minPrice\": 0,\n                  \"maxPrice\": 450000\n              },\n              \"color\": {\n                  \"displayKey\": \"color\",\n                  \"queryKey\": \"colors\",\n                  \"list\": [\n                      \"red\",\n                      \"blue\"\n                  ]\n              },\n              \"attributes\": {\n                  \"queryKey\": \"attributes\",\n                  \"attributes\": [\n                      {\n                          \"displayKey\": \"sizes\",\n                          \"queryKey\": \"sizes\",\n                          \"list\": [\n                              \"x\",\n                              \"M\",\n                              \"XL\",\n                              \"XXL\"\n                          ],\n                          \"_id\": \"62f2421ddf9b18de4e98c587\"\n                      },\n                      {\n                          \"displayKey\": \"fabric\",\n                          \"queryKey\": \"fabric\",\n                          \"list\": [\n                              \"cotten\",\n                              \"nylon\"\n                          ],\n                          \"_id\": \"62f2421ddf9b18de4e98c588\"\n                      },\n                      {\n                          \"displayKey\": \"patters\",\n                          \"queryKey\": \"patters\",\n                          \"list\": [\n                              \"stripped\",\n                              \"regular\"\n                          ],\n                          \"_id\": \"62f2421ddf9b18de4e98c589\"\n                      }\n                  ]\n              },\n              \"_id\": \"62f24134f340f9f48352e9a3\",\n              \"categoryId\": \"62df8560920908884958dd49\",\n              \"__v\": 3\n          },\n          \"execTime\": 111\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/FilterController.ts",
    "groupTitle": "App-Filter"
  },
  {
    "type": "post",
    "url": "/api/v1/app/group/add-member",
    "title": "Add member in a group",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.......</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "add-member",
    "group": "App-Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>adding user Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>group Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body",
          "content": "{\n       \"groupId\": \"631867c02f264cd844f194ab\",\n       \"userId\": \"62c56a08fea0ffa25a222127\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"status\": 200,\n     \"statusText\": \"SUCCESS\",\n     \"message\": \"Group request send successfully\",\n     \"data\": {\n         \"groupRequest\": {\n             \"group\": \"631867c02f264cd844f194ab\",\n             \"groupCode\": \"GT6596499\",\n             \"member\": \"631ae66af08c192dadce8e90\",\n             \"isAdmin\": false,\n             \"isMuted\": false,\n             \"isLeft\": false,\n             \"leftTime\": null,\n             \"isRemoved\": false,\n             \"removeTime\": null,\n             \"isDeleted\": false,\n             \"groupRequestStatus\": 1,\n             \"_id\": \"631edcf9ce6a946b2993f042\",\n             \"createdAt\": \"2022-09-12T07:17:13.877Z\",\n             \"updatedAt\": \"2022-09-12T07:17:13.877Z\",\n             \"__v\": 0\n         },\n         \"execTime\": 248\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error1 : Request-Exists",
          "content": "{\n       \"status\": 409,\n       \"statusText\": \"CONFLICT\",\n       \"message\": \"Group request sent already\",\n       \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error2 : Member already exists",
          "content": "{\n       \"status\": 409,\n       \"statusText\": \"CONFLICT\",\n       \"message\": \"User is already member of ths group\",\n       \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error3 : Invalid group Id",
          "content": "{\n       \"status\": 400,\n       \"statusText\": \"BAD_REQUEST\",\n       \"message\": \"Invalid group id\",\n       \"data\": {\n           \"groupId\": \"631867c02f264cd844f194ad\"\n       }\n   }",
          "type": "json"
        },
        {
          "title": "Error3 : Not allowed",
          "content": "{\n       \"status\": 410,\n       \"statusText\": \"EXPIRED\",\n       \"message\": \"Only admin can send request\",\n       \"data\": {}\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/GroupRequestController.ts",
    "groupTitle": "App-Group"
  },
  {
    "type": "get",
    "url": "api/v1/app/group/all-list?search=dow&page=1&limit=10,",
    "title": "All Group List",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "all-group-list",
    "group": "App-Group",
    "description": "<p>Pass the group name as search value.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n \"status\": 200,\n \"statusText\": \"SUCCESS\",\n \"message\": \"All group list\",\n \"data\": {\n     \"result\": {\n         \"count\": 2,\n         \"list\": [\n             {\n                 \"_id\": \"6322cd3986d65b0926de0cfa\",\n                 \"groupCode\": \"GT2240198\",\n                 \"groupIcon\": \"group-icons/1663743143375-download.png\",\n                 \"name\": \"Down\",\n                 \"phoneNumber\": \"9657412300\",\n                  \"email\": \"testing@yopmail.com\",\n                 \"address\": \"delhi-95\",\n                 \"createdBy\": {\n                    \"_id\": \"62ff730eb8867883b915a85e\",\n                     \"email\": \"ss1@yopmail.com\",\n                     \"avatar\": \"user-profiles/1663570153670-/EB7C1389-2FFC-4A57-B388-B5667C701D4A.jpg\",\n                     \"name\": \"Sss Hey\"\n                 },\n                 \"totalSubgroup\": 0,\n                 \"isJoined\": false,\n                 \"isFavorite\": true\n             },\n             {\n                 \"_id\": \"63200c58899361dbc2535ebd\",\n                 \"groupCode\": \"GT4748542\",\n                 \"groupIcon\": \"group-icons/1663743143375-download.png\",\n                 \"name\": \"Down\",\n                 \"phoneNumber\": \"9657412300\",\n                 \"email\": \"testing@yopmail.com\",\n                 \"address\": \"delhi-95\",\n                 \"createdBy\": {\n                    \"_id\": \"62ff730eb8867883b915a85e\",\n                     \"email\": \"ss1@yopmail.com\",\n                     \"avatar\": \"user-profiles/1663570153670-/EB7C1389-2FFC-4A57-B388-B5667C701D4A.jpg\",\n                     \"name\": \"Sss Hey\"\n                 },\n                 \"totalSubgroup\": 0,\n                 \"isJoined\": false,\n                 \"isFavorite\": true\n             }\n         ]\n     },\n     \"execTime\": 105\n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/GroupController.ts",
    "groupTitle": "App-Group"
  },
  {
    "type": "post",
    "url": "api/v1/app/group/create",
    "title": "Create Group",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMu</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "create-group",
    "group": "App-Group",
    "description": "<p>request body send as form data</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "groupIcon",
            "description": "<p>group Icon</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "goalInterval",
            "description": "<p>1 for 'daily', 2 for 'weekly', 3 for 'yearly'</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "goalPrice",
            "description": "<p>target</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "showContactInfo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "showSocialInfo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "facebookUrl",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "twitterUrl",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "state",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "zipCode",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "purpose",
            "description": "<p>send either _id OR string if Other is true.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "others",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n      \"status\": 201,\n      \"statusText\": \"CREATED\",\n      \"message\": \"Group created\",\n      \"data\": {\n          \"group\": {\n              \"groupIcon\": null,\n              \"groupCode\": \"GT002071\",\n              \"name\": \"test\",\n              \"purposeId\": \"631747bcd77165ad9c3a8575\",\n              \"purposeText\": \"testing purpose 123\",\n              \"description\": \"this is testing.\",\n              \"goalInterval\": \"1\",\n              \"goalPrice\": 100,\n              \"showContactInfo\": true,\n              \"phoneNumber\": \"1234567890\",\n              \"email\": \"mailto:test@gmail.com\",\n              \"address\": \"this is address\",\n              \"showSocialInfo\": true,\n              \"facebookUrl\": \"fb.com\",\n              \"twitterUrl\": \"twitter.com\",\n              \"members\": [\n                  \"62dfcb21fb89c4b45de44685\"\n              ],\n              \"createdBy\": \"62dfcb21fb89c4b45de44685\",\n              \"_id\": \"63184ba488bd4c83c23bb897\",\n              \"createdAt\": \"2022-09-07T07:43:32.193Z\",\n              \"updatedAt\": \"2022-09-07T07:43:32.193Z\",\n              \"__v\": 0\n          },\n          \"execTime\": 246\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/GroupController.ts",
    "groupTitle": "App-Group"
  },
  {
    "type": "delete",
    "url": "api/v1/app/group/delete/:id",
    "title": "Delete Group",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMu</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "delete-group",
    "group": "App-Group",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n   \"status\": 200,\n   \"statusText\": \"SUCCESS\",\n   \"message\": \"Group deleted\",\n   \"data\": {\n       \"group\": {\n           \"_id\": \"631867c02f264cd844f194ab\",\n           \"groupIcon\": \"group-icons/1662632226790-85e642626dbbbee704edf3f6f33ef837.jpg\",\n           \"groupCode\": \"GT6596499\",\n           \"name\": \"testing edit\",\n           \"purposeId\": \"631747bcd77165ad9c3a8575\",\n           \"purposeText\": \"testing purpose 123\",\n           \"description\": \"this is testing edit.\",\n           \"goalInterval\": \"2\",\n           \"goalPrice\": 101,\n           \"showContactInfo\": true,\n           \"phoneNumber\": \"12345678901\",\n           \"email\": \"testedit@gmail.com\",\n           \"address\": \"this is address edit\",\n           \"showSocialInfo\": true,\n           \"facebookUrl\": \"fb.com\",\n           \"twitterUrl\": \"twitter.com\",\n           \"members\": [\n               \"62dfcb21fb89c4b45de44685\"\n           ],\n           \"createdBy\": \"62dfcb21fb89c4b45de44685\",\n           \"totalMembers\": 1,\n           \"totalSubgroup\": 0,\n           \"subGroupLimit\": 0,\n           \"isDeleted\": true,\n           \"createdAt\": \"2022-09-07T09:43:28.367Z\",\n           \"updatedAt\": \"2022-09-08T11:21:55.449Z\",\n           \"__v\": 0\n       },\n       \"execTime\": 167\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/GroupController.ts",
    "groupTitle": "App-Group"
  },
  {
    "type": "patch",
    "url": "api/v1/app/group/edit/:id",
    "title": "Edit Group",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMu</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "edit-group",
    "group": "App-Group",
    "description": "<p>request body send as form data</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "groupIcon",
            "description": "<p>group Icon</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "goalInterval",
            "description": "<p>1 for 'daily', 2 for 'weekly', 3 for 'yearly'</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "goalPrice",
            "description": "<p>target</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "showContactInfo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phoneNumber",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "showSocialInfo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "facebookUrl",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "twitterUrl",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "city",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "state",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "zipCode",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"Group edited\",\n    \"data\": {\n        \"group\": {\n            \"_id\": \"631867c02f264cd844f194ab\",\n            \"groupIcon\": \"group-icons/1662632226790-85e642626dbbbee704edf3f6f33ef837.jpg\",\n            \"groupCode\": \"GT6596499\",\n            \"name\": \"testing edit\",\n            \"purposeId\": \"631747bcd77165ad9c3a8575\",\n            \"purposeText\": \"testing purpose 123\",\n            \"description\": \"this is testing edit.\",\n            \"goalInterval\": \"2\",\n            \"goalPrice\": 101,\n            \"showContactInfo\": true,\n            \"phoneNumber\": \"12345678901\",\n            \"email\": \"testedit@gmail.com\",\n            \"address\": \"this is address edit\",\n            \"showSocialInfo\": true,\n            \"facebookUrl\": \"fb.com\",\n            \"twitterUrl\": \"twitter.com\",\n            \"members\": [\n                \"62dfcb21fb89c4b45de44685\"\n            ],\n            \"createdBy\": \"62dfcb21fb89c4b45de44685\",\n            \"totalMembers\": 1,\n            \"totalSubgroup\": 0,\n            \"subGroupLimit\": 0,\n            \"isDeleted\": false,\n            \"createdAt\": \"2022-09-07T09:43:28.367Z\",\n            \"updatedAt\": \"2022-09-08T10:17:08.368Z\",\n            \"__v\": 0\n        },\n        \"execTime\": 1781\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/GroupController.ts",
    "groupTitle": "App-Group"
  },
  {
    "type": "get",
    "url": "api/v1/app/group/favourite-group",
    "title": "Favourite Group",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "favourite-group-list",
    "group": "App-Group",
    "description": "<p>send page number and limit in query params.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"Favourite group list fetched\",\n    \"data\": {\n       \"count\": 1,\n        \"list\": [\n            {\n                \"_id\": \"63281a39f4437a9ce78f5078\",\n                \"group\": {\n                    \"_id\": \"6321d770c49be8f2c62454ac\",\n                    \"groupIcon\": null,\n                    \"name\": \"Fund Raiser\",\n                    \"email\": \"munendra.singh@mobilecoderz.com\",\n                    \"description\": \"this is testing.\",\n                    \"showContactInfo\": true,\n                    \"phoneNumber\": \"1234567890\",\n                    \"address\": \"this is address\",\n                    \"purpose\": \"Hello Birds\",\n                    \"city\": \"city\",\n                   \"state\": \"delhi\",\n                   \"zipCode\": \"5555555555\",\n                    \"members\": [\n                        \"62dfcb21fb89c4b45de44685\",\n                        \"631ae66af08c192dadce8e90\"\n                    ],\n                    \"createdBy\": {\n                        \"_id\": \"62dfcb21fb89c4b45de44685\",\n                        \"avatar\": \"user-profiles/1659706277298-pukhraj_saini_mce242.png\",\n                        \"displayName\": \"pk\",\n                        \"name\": \"puhraj saini\",\n                        \"customerCode\": \"WFU516341\"\n                    },\n                    \"isMember\": true\n                }\n            }\n        ],\n        \"execTime\": 120\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/GroupFavouriteController.ts",
    "groupTitle": "App-Group"
  },
  {
    "type": "get",
    "url": "api/v1/app/group/featured-groups?page=1&limit=3",
    "title": "Featured Groups list",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "featured-groups",
    "group": "App-Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>default 1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>default 3</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n     \"status\": 200,\n     \"statusText\": \"SUCCESS\",\n     \"message\": \"Featured group list\",\n     \"data\": {\n         \"count\": 18,\n         \"list\": [\n             {\n                 \"city\": null,\n                 \"state\": null,\n                 \"_id\": \"631eddcded7496146e770bf4\",\n                 \"groupIcon\": \"group-icons/1662967245111-bird nest.jpg\",\n                 \"groupCode\": \"GT7878910\",\n                 \"name\": \"Birds\",\n                 \"purposeText\": \"Fund Raising for Birds\",\n                 \"description\": \"For Food and Nest\"\n             }\n         ],\n         \"execTime\": 242\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/GroupController.ts",
    "groupTitle": "App-Group"
  },
  {
    "type": "get",
    "url": "/api/v1/app/group/list",
    "title": "Group list",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU3Njk1MzQzLCJleHAiOjE2NTc3ODE3NDN9.HAJ40QWHuL2QeXo3GVQZKziiiQHbLsq0hyuMM-SgfaY</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "get-group-list",
    "group": "App-Group",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"status\": 200,\n       \"statusText\": \"SUCCESS\",\n       \"message\": \"Group list fetched\",\n       \"data\": {\n           \"list\": [\n               {\n                   \"_id\": \"631867a72f264cd844f1949b\",\n                   \"groupIcon\": null,\n                   \"groupCode\": \"GT5301681\",\n                   \"name\": \"test\",\n                   \"purposeId\": \"631747bcd77165ad9c3a8575\",\n                   \"purposeText\": \"testing purpose 123\",\n                   \"description\": \"this is testing.\",\n                   \"goalInterval\": \"1\",\n                   \"goalPrice\": 100,\n                   \"showContactInfo\": true,\n                   \"phoneNumber\": \"1234567890\",\n                   \"email\": \"test@gmail.com\",\n                   \"address\": \"this is address\",\n                   \"showSocialInfo\": true,\n                   \"facebookUrl\": \"fb.com\",\n                   \"twitterUrl\": \"twitter.com\",\n                   \"members\": [\n                       \"62dfcb21fb89c4b45de44685\"\n                   ],\n                   \"createdBy\": \"62dfcb21fb89c4b45de44685\",\n                   \"totalMembers\": 1,\n                   \"totalSubgroup\": 0,\n                   \"subGroupLimit\": 0,\n                   \"isDeleted\": false,\n                   \"createdAt\": \"2022-09-07T09:43:03.164Z\",\n                   \"updatedAt\": \"2022-09-07T09:43:03.164Z\",\n                   \"__v\": 0\n               }\n           ],\n           \"count\": 2,\n           \"execTime\": 131\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/GroupController.ts",
    "groupTitle": "App-Group"
  },
  {
    "type": "get",
    "url": "/api/v1/app/group/details/:id",
    "title": "Group Details",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU3Njk1MzQzLCJleHAiOjE2NTc3ODE3NDN9.HAJ40QWHuL2QeXo3GVQZKziiiQHbLsq0hyuMM-SgfaY</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "group-details",
    "group": "App-Group",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n       \"status\": 200,\n       \"statusText\": \"SUCCESS\",\n       \"message\": \"Group details\",\n       \"data\": {\n           \"group\": {\n               \"_id\": \"631867a72f264cd844f1949b\",\n               \"groupIcon\": null,\n               \"groupCode\": \"GT5301681\",\n               \"name\": \"test\",\n               \"description\": \"this is testing.\",\n               \"goalInterval\": \"1\",\n               \"goalPrice\": 100,\n               \"showContactInfo\": true,\n               \"phoneNumber\": \"1234567890\",\n               \"email\": \"test@gmail.com\",\n               \"address\": \"this is address\",\n               \"showSocialInfo\": true,\n               \"facebookUrl\": \"fb.com\",\n               \"twitterUrl\": \"twitter.com\",\n               \"city\": \"Test\",\n               \"state\": \"Test\",\n               \"zipCode\": \"1233\",\n               \"totalSubgroup\": 0,\n               \"subGroupLimit\": 0,\n               \"createdBy\": {\n                   \"_id\": \"62dfcb21fb89c4b45de44685\",\n                   \"avatar\": \"user-profiles/1659706277298-pukhraj_saini_mce242.png\",\n                   \"displayName\": \"pk\",\n                   \"customerCode\": \"WFU516341\"\n               },\n              \"purpose\": {\n              \"_id\": \"631eddcced7496146e770bf1\",\n              \"text\": \"Fund Raising for Birds\"\n               },\n               \"totalMembers\": 1,\n               \"isJoined\": true,\n               \"isAdmin\": true\n           },\n           \"execTime\": 135\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/GroupController.ts",
    "groupTitle": "App-Group"
  },
  {
    "type": "get",
    "url": "/api/v1/app/group/member-list/:id",
    "title": "Group Member list",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU3Njk1MzQzLCJleHAiOjE2NTc3ODE3NDN9.HAJ40QWHuL2QeXo3GVQZKziiiQHbLsq0hyuMM-SgfaY</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "group-member-list",
    "group": "App-Group",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "*HTTP/1.1 200 OK\n   {\n       \"status\": 200,\n       \"statusText\": \"SUCCESS\",\n       \"message\": \"Group member list\",\n       \"data\": {\n           \"result\": {\n               \"count\": 1,\n               \"list\": [\n                   {\n                       \"_id\": \"631867a72f264cd844f1949d\",\n                       \"member\": {\n                           \"_id\": \"62dfcb21fb89c4b45de44685\",\n                           \"email\": \"pukhraj47@mailinator.com\",\n                           \"displayName\": \"pk\",\n                           \"firstName\": \"puhraj\",\n                           \"lastName\": \"saini\",\n                           \"avatar\": \"user-profiles/1659706277298-pukhraj_saini_mce242.png\",\n                           \"customerCode\": \"WFU516341\"\n                       },\n                       \"isAdmin\": true,\n                       \"groupRequestStatus\": 1\n                   }\n               ]\n           },\n           \"execTime\": 81\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/GroupController.ts",
    "groupTitle": "App-Group"
  },
  {
    "type": "get",
    "url": "/api/v1/app/group-purpose/list",
    "title": "Group Purpose list",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU3Njk1MzQzLCJleHAiOjE2NTc3ODE3NDN9.HAJ40QWHuL2QeXo3GVQZKziiiQHbLsq0hyuMM-SgfaY</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "group-purpose-list",
    "group": "App-Group",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "*HTTP/1.1 200 OK\n{\n   \"status\": 200,\n   \"statusText\": \"SUCCESS\",\n   \"message\": \"Group purpose list\",\n   \"data\": {\n       \"list\": [\n           {\n               \"_id\": \"631747bcd77165ad9c3a8575\",\n               \"isActive\": true,\n               \"text\": \"testing purpose 123\",\n               \"createdAt\": \"2022-09-06T13:14:36.554Z\",\n               \"updatedAt\": \"2022-09-06T13:14:36.554Z\",\n               \"__v\": 0\n           },\n           {\n               \"_id\": \"631747695e2c139b364514b8\",\n               \"isActive\": true,\n               \"text\": \"testing purpose\",\n               \"createdAt\": \"2022-09-06T13:13:13.237Z\",\n               \"updatedAt\": \"2022-09-06T13:13:13.237Z\",\n               \"__v\": 0\n           }\n       ],\n       \"count\": 2,\n       \"execTime\": 151\n   }\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/GroupController.ts",
    "groupTitle": "App-Group"
  },
  {
    "type": "post",
    "url": "api/v1/app/group/invite-member",
    "title": "Invite a member to join wefundus and a group via email",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "invite-member",
    "group": "App-Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "emails",
            "description": "<p>array of email ids</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body",
          "content": "{\n        \"groupId\": \"6321d770c49be8f2c62454ac\",\n        \"emails\": [\n            \"pukhraj@mailinator.com\",\n            \"pukhraj1@mailinator.com\",\n            \"pukhraj2@mailinator.com\",\n            \"pukhraj3@mailinator.com\",\n            \"pukhraj4@mailinator.com\",\n            \"pukhraj5@mailinator.com\"\n        ],\n        \"content\": \"aaiye or join wefundus for growing an orgnasition\"\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n      \"status\": 200,\n      \"statusText\": \"SUCCESS\",\n      \"message\": \"Invitation sent successfully\",\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/GroupInviteController.ts",
    "groupTitle": "App-Group"
  },
  {
    "type": "post",
    "url": "api/v1/app/group/join",
    "title": "Join Group",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "join-group",
    "group": "App-Group",
    "description": "<p>Pass the group _id in body.</p>",
    "parameter": {
      "examples": [
        {
          "title": "req-body ",
          "content": "{\n    \"groupId\": \"631b2645ed7496146e76f6f8\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"status\": 201,\n    \"statusText\": \"CREATED\",\n    \"message\": \"Group joined\",\n    \"data\": {\n        \"group\": {\n            \"city\": null,\n            \"state\": null,\n            \"zipCode\": null,\n            \"_id\": \"631b2645ed7496146e76f6f8\",\n            \"groupIcon\": null,\n            \"groupCode\": \"GT5083122\",\n            \"name\": \"Fund Raiser\",\n            \"purposeId\": \"631747bcd77165ad9c3a8575\",\n            \"purposeText\": \"testing purpose 123\",\n            \"description\": \"Just for test\",\n            \"goalInterval\": \"1\",\n            \"goalPrice\": 2000,\n            \"showContactInfo\": true,\n            \"phoneNumber\": \"9648484848\",\n            \"email\": \"gaurav.roy@mobilecoderz.com\",\n            \"address\": \"ghaziabad up india\",\n            \"showSocialInfo\": true,\n            \"facebookUrl\": \"https://www.facebook.com/MobileCoderz/\",\n            \"twitterUrl\": \"https://twitter.com/mobilecoderz\",\n            \"members\": [\n                \"62e0eabbfb89c4b45de45c5f\",\n                \"62dfcb21fb89c4b45de44685\"\n            ],\n            \"createdBy\": \"62e0eabbfb89c4b45de45c5f\",\n            \"totalMembers\": 2,\n            \"totalSubgroup\": 0,\n            \"subGroupLimit\": 0,\n            \"isDeleted\": true,\n            \"createdAt\": \"2022-09-09T11:40:53.277Z\",\n            \"updatedAt\": \"2022-09-19T12:58:00.594Z\",\n            \"__v\": 2,\n            \"featuredRank\": 0,\n            \"groupSubscribed\": false,\n            \"subGroupSubscribed\": false,\n            \"totalCashback\": 0\n        },\n        \"execTime\": 269\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/GroupController.ts",
    "groupTitle": "App-Group"
  },
  {
    "type": "delete",
    "url": "api/v1/app/group/leave/:id",
    "title": "Leave Group",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "leave-group",
    "group": "App-Group",
    "description": "<p>Pass the group _id in params.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n \"status\": 200,\n \"statusText\": \"SUCCESS\",\n \"message\": \"User left group\",\n \"data\": {\n     \"data\": {\n         \"group\": {\n             \"city\": null,\n             \"state\": null,\n             \"zipCode\": null,\n             \"_id\": \"6321d770c49be8f2c62454ac\",\n             \"groupIcon\": null,\n             \"groupCode\": \"GT4952029\",\n             \"name\": \"Fund Raiser\",\n             \"purposeId\": \"631747bcd77165ad9c3a8575\",\n             \"purposeText\": \"testing purpose 123\",\n             \"description\": \"this is testing.\",\n             \"goalInterval\": \"2\",\n             \"goalPrice\": 10000,\n             \"showContactInfo\": true,\n             \"phoneNumber\": \"1234567890\",\n             \"email\": \"test@gmail.com\",\n             \"address\": \"this is address\",\n             \"showSocialInfo\": true,\n             \"facebookUrl\": \"fb.com\",\n             \"twitterUrl\": \"twitter.com\",\n             \"members\": [\n                 \"62dfcb21fb89c4b45de44685\"\n             ],\n             \"createdBy\": \"62dfcb21fb89c4b45de44685\",\n             \"totalMembers\": 0,\n             \"totalSubgroup\": 0,\n             \"subGroupLimit\": 0,\n             \"isDeleted\": false,\n             \"groupSubscribed\": false,\n             \"subGroupSubscribed\": false,\n             \"createdAt\": \"2022-09-14T13:30:24.813Z\",\n             \"updatedAt\": \"2022-09-16T11:01:10.504Z\",\n             \"__v\": 4,\n             \"featuredRank\": 0,\n             \"totalCashback\": 0\n         }\n     },\n     \"execTime\": 645\n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/GroupController.ts",
    "groupTitle": "App-Group"
  },
  {
    "type": "post",
    "url": "api/v1/app/group/mark-as-favourite",
    "title": "Mark Favourite",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMu</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "mark-favourite",
    "group": "App-Group",
    "description": "<p>Send group _id in body.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example-",
          "content": "{\n     \"groupId\": \"6321d770c49be8f2c62454ac\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"status\": 201,\n    \"statusText\": \"CREATED\",\n    \"message\": \"Group marked as favourite\",\n    \"data\": {\n        \"favGroup\": {\n            \"_id\": \"6327fe3f8add991102651d86\",\n            \"groupId\": \"6321d770c49be8f2c62454ac\",\n            \"userId\": \"62dfcb21fb89c4b45de44685\",\n            \"createdAt\": \"2022-09-19T05:29:35.786Z\",\n            \"updatedAt\": \"2022-09-19T05:29:35.786Z\",\n            \"__v\": 0\n        },\n        \"execTime\": 310\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/GroupFavouriteController.ts",
    "groupTitle": "App-Group"
  },
  {
    "type": "delete",
    "url": "api/v1/app/group/remove-from-favourite/:id",
    "title": "Remove from Favourite",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMu</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "remove-from-favourite",
    "group": "App-Group",
    "description": "<p>Send group _id in params.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"Removed from favourite\",\n    \"data\": {\n        \"execTime\": 108\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/GroupFavouriteController.ts",
    "groupTitle": "App-Group"
  },
  {
    "type": "patch",
    "url": "api/v1/app/group/remove-member/:id",
    "title": "Remove member from group",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "remove-member",
    "group": "App-Group",
    "description": "<p>pass group _id as params</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "memberId",
            "description": "<p>member of group</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body",
          "content": "{\n      \"memberId\": \"631867a72f264cd844f1949b\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"Group member removed\",\n    \"data\": {\n        \"group\": {\n            \"_id\": \"631867c02f264cd844f194ab\",\n            \"groupIcon\": \"group-icons/1662632226790-85e642626dbbbee704edf3f6f33ef837.jpg\",\n            \"groupCode\": \"GT6596499\",\n            \"name\": \"testing edit\",\n            \"purposeId\": \"631747bcd77165ad9c3a8575\",\n            \"purposeText\": \"testing purpose 123\",\n            \"description\": \"this is testing edit.\",\n            \"goalInterval\": \"2\",\n            \"goalPrice\": 101,\n            \"showContactInfo\": true,\n            \"phoneNumber\": \"12345678901\",\n            \"email\": \"testedit@gmail.com\",\n            \"address\": \"this is address edit\",\n            \"showSocialInfo\": true,\n            \"facebookUrl\": \"fb.com\",\n            \"twitterUrl\": \"twitter.com\",\n            \"members\": [\n                \"62dfcb21fb89c4b45de44685\"\n            ],\n            \"createdBy\": \"62dfcb21fb89c4b45de44685\",\n            \"totalMembers\": 1,\n            \"totalSubgroup\": 0,\n            \"subGroupLimit\": 0,\n            \"isDeleted\": false,\n            \"createdAt\": \"2022-09-07T09:43:28.367Z\",\n            \"updatedAt\": \"2022-09-08T10:17:08.368Z\",\n            \"__v\": 0\n        },\n        \"execTime\": 1781\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/GroupController.ts",
    "groupTitle": "App-Group"
  },
  {
    "type": "patch",
    "url": "/api/v1/app/group/request-action/:id",
    "title": "Accept Reject group join request",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.......</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "request-action",
    "group": "App-Group",
    "description": "<p>pass group _id as params</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isAccept",
            "description": "<p>true if accept, false if reject</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body-1: Accept request and join group",
          "content": "{\n       \"isAccept\": true\n }",
          "type": "json"
        },
        {
          "title": "Request-Body-2 : Reject request",
          "content": "{\n       \"isAccept\": false\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: Group joined",
          "content": "{\n     \"status\": 200,\n     \"statusText\": \"SUCCESS\",\n     \"message\": \"Group join successfully\",\n     \"data\": {\n         \"group\": {\n             \"_id\": \"631867c02f264cd844f194ab\",\n             \"groupIcon\": \"group-icons/1662632226790-85e642626dbbbee704edf3f6f33ef837.jpg\",\n             \"groupCode\": \"GT6596499\",\n             \"name\": \"testing edit\",\n             \"purposeId\": \"631747bcd77165ad9c3a8575\",\n             \"purposeText\": \"testing purpose 123\",\n             \"description\": \"this is testing edit.\",\n             \"goalInterval\": \"2\",\n             \"createdBy\": \"62dfcb21fb89c4b45de44685\",\n             \"totalMembers\": 1,\n             \"totalSubgroup\": 0,\n             \"subGroupLimit\": 0,\n             \"isDeleted\": true,\n             \"createdAt\": \"2022-09-07T09:43:28.367Z\",\n             \"updatedAt\": \"2022-09-09T13:07:49.317Z\",\n             \"__v\": 2\n         },\n         \"execTime\": 263\n     }\n }",
          "type": "json"
        },
        {
          "title": "Success-Response: Request rejected",
          "content": "{\n     \"status\": 206,\n     \"statusText\": \"REJECTED\",\n     \"message\": \"Group join request rejected\",\n     \"data\": {\n         \"group\": {\n             \"_id\": \"631867c02f264cd844f194ab\",\n             \"groupIcon\": \"group-icons/1662632226790-85e642626dbbbee704edf3f6f33ef837.jpg\",\n             \"groupCode\": \"GT6596499\",\n             \"name\": \"testing edit\",\n             \"purposeId\": \"631747bcd77165ad9c3a8575\",\n             \"purposeText\": \"testing purpose 123\",\n             \"description\": \"this is testing edit.\",\n             \"goalInterval\": \"2\",\n             \"createdBy\": \"62dfcb21fb89c4b45de44685\",\n             \"totalMembers\": 1,\n             \"totalSubgroup\": 0,\n             \"subGroupLimit\": 0,\n             \"isDeleted\": true,\n             \"createdAt\": \"2022-09-07T09:43:28.367Z\",\n             \"updatedAt\": \"2022-09-09T13:07:49.317Z\",\n             \"__v\": 2\n         },\n         \"execTime\": 263\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error1 : Request not found",
          "content": "{\n       \"status\": 400,\n       \"statusText\": \"BAD_REQUEST\",\n       \"message\": \"Join request not found\",\n       \"data\": {\n           \"groupId\": \"631867c02f264cd844f194ab\"\n       }\n   }",
          "type": "json"
        },
        {
          "title": "Error3 : Invalid group Id",
          "content": "{\n       \"status\": 400,\n       \"statusText\": \"BAD_REQUEST\",\n       \"message\": \"Invalid group id\",\n       \"data\": {\n           \"groupId\": \"631867c02f264cd844f194ad\"\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/GroupRequestController.ts",
    "groupTitle": "App-Group"
  },
  {
    "type": "get",
    "url": "/api/v1/app/group/request-list",
    "title": "Group request list for a user",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.......</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "request-list",
    "group": "App-Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>number of records per page</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>page number default = 1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>search by group name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: Users List",
          "content": "{\n       \"status\": 200,\n       \"statusText\": \"SUCCESS\",\n       \"message\": \"Group request list\",\n       \"data\": {\n           \"count\": 1,\n           \"list\": [\n               {\n                   \"_id\": \"631edda11e346f50e1313190\",\n                   \"group\": {\n                       \"_id\": \"631867c02f264cd844f194ab\",\n                       \"groupIcon\": \"group-icons/1662632226790-85e642626dbbbee704edf3f6f33ef837.jpg\",\n                       \"groupCode\": \"GT6596499\",\n                       \"name\": \"testing edit\",\n                       \"purposeText\": \"testing purpose 123\"\n                   },\n                   \"groupRequestStatus\": 1,\n                   \"createdAt\": \"2022-09-12T07:20:01.606Z\",\n                   \"updatedAt\": \"2022-09-15T10:42:48.197Z\",\n                   \"requestSentBy\": \"62dfcb21fb89c4b45de44685\",\n                   \"sentBy\": {\n                       \"_id\": \"62dfcb21fb89c4b45de44685\",\n                       \"avatar\": \"user-profiles/1659706277298-pukhraj_saini_mce242.png\",\n                       \"name\": \"puhraj saini\"\n                   }\n               }\n           ],\n           \"execTime\": 123\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/GroupRequestController.ts",
    "groupTitle": "App-Group"
  },
  {
    "type": "get",
    "url": "api/v1/app/group/search?search=purposeText,test",
    "title": "Search groups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "search",
    "group": "App-Group",
    "description": "<p>pass data as query string eg name,test| state,searchValue|city,searchValue|purposeText|searchValue</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"Searched group list\",\n    \"data\": {\n        \"count\": 4,\n        \"list\": [\n            {\n                \"_id\": \"63200c33899361dbc2535e89\",\n                \"groupIcon\": \"group-icons/1663044659455-image_1648533556788 (1).png\",\n                \"groupCode\": \"GT8506095\",\n                \"name\": \"Deep\",\n                \"purposeText\": \"Hello Birds\",\n                \"description\": \"basic\",\n                \"showContactInfo\": true,\n                \"phoneNumber\": \"7894556123\",\n                \"email\": \"harsh@123gmail.com\",\n                \"address\": \"Ghaziabad  \",\n                \"showSocialInfo\": true,\n                \"facebookUrl\": \"https://www.google.com/search?q=facebook&rlz=1C1CHBF_enIN1007IN1007&oq=facebook&aqs=chrome.0.69i59j69i57j0i271l2j69i60.1335j0j7&sourceid=chrome&ie=UTF-8\",\n                \"twitterUrl\": \"https://www.google.com/search?q=facebook&rlz=1C1CHBF_enIN1007IN1007&oq=facebook&aqs=chrome.0.69i59j69i57j0i271l2j69i60.1335j0j7&sourceid=chrome&ie=UTF-8\",\n                \"createdBy\": {\n                    \"_id\": \"631f29486ec923e37efccb94\",\n                    \"email\": \"deepanshu.sharma@mobilecoderz.com\",\n                    \"customerCode\": \"WFU193230\",\n                    \"avatar\": \"user-profiles/1663574288842-Screenshot (4).png\",\n                    \"displayName\": \"SharmaDeepanshu\",\n                    \"name\": \"Deepanshu Sharma\"\n                },\n                \"totalMembers\": 2,\n                \"isFavorite\": false,\n                \"isJoined\": false\n            }\n        ],\n        \"execTime\": 26\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/GroupController.ts",
    "groupTitle": "App-Group"
  },
  {
    "type": "get",
    "url": "api/v1/app/group/search-suggestions?search=purposeText,test",
    "title": "Search Suggestions foGroup search",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "search-suggestions",
    "group": "App-Group",
    "description": "<p>pass data as query string eg name,test| state,searchValue|city,searchValue|purposeText|searchValue</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n     \"status\": 200,\n     \"statusText\": \"SUCCESS\",\n     \"message\": \"Search list\",\n     \"data\": {\n         \"results\": [\n             \"Test\",\n             \"TestGroup\"\n         ],\n         \"execTime\": 102\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/GroupController.ts",
    "groupTitle": "App-Group"
  },
  {
    "type": "get",
    "url": "api/v1/app/group/top-cashback-groups?page=1&limit=3",
    "title": "Top Cashback Groups list",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "top-cashback-groups",
    "group": "App-Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>default 1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>default 3</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n     \"status\": 200,\n     \"statusText\": \"SUCCESS\",\n     \"message\": \"Top cashback group list\",\n     \"data\": {\n         \"count\": 18,\n         \"list\": [\n             {\n                 \"city\": null,\n                 \"state\": null,\n                 \"_id\": \"631eddcded7496146e770bf4\",\n                 \"groupIcon\": \"group-icons/1662967245111-bird nest.jpg\",\n                 \"groupCode\": \"GT7878910\",\n                 \"name\": \"Birds\",\n                 \"purposeText\": \"Fund Raising for Birds\",\n                 \"description\": \"For Food and Nest\"\n             }\n         ],\n         \"execTime\": 242\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/GroupController.ts",
    "groupTitle": "App-Group"
  },
  {
    "type": "get",
    "url": "/api/v1/app/group/user-list/:id",
    "title": "user list for a group to add member",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.......</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "user-list",
    "group": "App-Group",
    "description": "<p>pass group _id as params</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>number of records per page</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>page number default = 1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: Users List",
          "content": "{\n   \"status\": 200,\n   \"statusText\": \"SUCCESS\",\n   \"message\": \"users_list\",\n   \"data\": {\n       \"count\": 65,\n       \"list\": [\n           {\n               \"_id\": \"62da9963b647612af2d9b831\",\n               \"email\": \"kamal.chauhan@mobilecoderz.com\",\n               \"avatar\": \"user-profiles/1663217637392-/5af03212-a4fd-40cd-b84c-5c209196be0d.jpg\",\n               \"description\": \"Write something for……\\n\",\n               \"firstName\": \"Kamal chauhan \",\n               \"lastName\": \"Vvipkamal\",\n               \"name\": \"Kamal chauhan  Vvipkamal\",\n               \"facebookProfileUrl\": \"https://www.facebook.com/pukhrajsaini\",\n               \"instagramUsername\": \"pukhrajsaini\",\n               \"linkedinProfileUrl\": \"https://www.linkedin.com/in/pukhrajsaini\",\n               \"twitterUsername\": \"@pukhrajsaini\",\n                \"customerCode\": \"WFU911547\"\n           }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/GroupRequestController.ts",
    "groupTitle": "App-Group"
  },
  {
    "type": "post",
    "url": "/api/v1/app/product-report",
    "title": "Add Product Report",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Add-product-Report",
    "group": "App-Product-Report",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reasonId",
            "description": "<p>selected reason id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-1:",
          "content": "{\n\"status\": 200,\n\"statusText\": \"SUCCESS\",\n\"message\": \"Product Report added successfully\",\n\"data\": {\n    \"data\": {\n        \"userId\": \"62dfcb21fb89c4b45de44685\",\n        \"productId\": \"62d7c92286616ebe475db3fa\",\n        \"reasonId\": \"62ea62f1258089711f8cafae\",\n        \"reasonText\": \"shoes size does not match pls actual size provided and pls exchange my shoes\"\n    },\n    \"execTime\": 229\n  }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/ProductReportController.ts",
    "groupTitle": "App-Product-Report"
  },
  {
    "type": "get",
    "url": "/api/v1/app/product/list?page=1&limit=10",
    "title": "Product List",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "list",
    "group": "App-Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>page no default 1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>default 20</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "product",
            "description": "<p>product id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "subcategory",
            "description": "<p>subcategory id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "section",
            "description": "<p>section id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-1:",
          "content": "{\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"Search results\",\n    \"data\": {\n        \"results\": [\n            {\n                \"_id\": \"631839c539987006d0011022\",\n                \"title\": \"american tourist\",\n                \"belongsTo\": 4,\n                \"categorySlug\": \"bags-and-luggage\",\n                \"subcategorySlug\": \"ladies-bags\",\n                \"sectionSlug\": \"luggage\",\n                \"categoryId\": \"62d0063bff9b93f5383b0109\",\n                \"subcategoryId\": \"62dfd514fb89c4b45de44fa8\",\n                \"sectionId\": \"62dfd690fb89c4b45de4501a\",\n                \"createdAt\": \"2022-09-07T06:27:17.727Z\",\n                \"updatedAt\": \"2022-09-07T06:27:17.727Z\",\n                \"__v\": 0\n            }\n        ],\n        \"execTime\": 42\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/ProductController.ts",
    "groupTitle": "App-Product"
  },
  {
    "type": "post",
    "url": "/api/v1/app/product/list",
    "title": "Product List with Filter",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "list-filter",
    "group": "App-Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>page no default 1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>default 16</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "categoryId",
            "description": "<p>required if slug not provided</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "categorySlug",
            "description": "<p>required if categoryId not provided</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "subcategory",
            "description": "<p>array of subcategory slugs</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "brands",
            "description": "<p>array of brand slugs</p>"
          },
          {
            "group": "Parameter",
            "type": "Sting[]",
            "optional": true,
            "field": "colors",
            "description": "<p>array of colors name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "price",
            "description": "<p>[minPrice, maxPrice]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>default,  popularity eg: price|-price|name|-name|rating|-rating|newestFirst</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "userId",
            "description": "<p>when user logged in</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body",
          "content": "{\n       \"page\": 1,\n        \"categoryId\": \"62dfd43efb89c4b45de44199\",\n       \"limit\": 10,\n       \"price\": [450, 5000],\n        \"sort\": \"-price\",\n       \"subcategory\": [\"dresses\"]\n   }",
          "type": "json"
        },
        {
          "title": "Request-Body 2 ",
          "content": "{\n       \"page\": 1,\n       \"limit\": 29,\n       \"sort\": \"-price\",\n       \"userId\": \"62e0e20233728726535d2de1\",\n       \"attributes\": [\n           {\n               \"queryKey\": \"fabric\",\n               \"values\": [\"regular\", \"nylon\"]\n           },\n           {\n               \"queryKey\": \"sizes\",\n               \"values\": [\"xs\"]\n           }\n       ]\n   }",
          "type": "json"
        }
      ]
    },
    "description": "<p>categoryId is mandatory, send query keys from filter list given every key in filter list. keyname 'queryKey'</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"status\": 200,\n       \"statusText\": \"SUCCESS\",\n       \"message\": \"Product fetched successfully\",\n       \"data\": {\n           \"count\": 1,\n           \"products\": [\n               {\n                   \"_id\": \"62dfd626fb89c4b45de44fee\",\n                   \"name\": \"Toys\",\n                   \"regularPrice\": 3000,\n                   \"salePrice\": 2000,\n                   \"coverPhoto\": \"product/62dfd626fb89c4b45de44fee/cover-photo/default.jpeg\"\n               }\n           ],\n           \"execTime\": 143\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/ProductController.ts",
    "groupTitle": "App-Product"
  },
  {
    "type": "get",
    "url": "/api/v1/app/product/details/_id?",
    "title": "Product Details",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "product-detail",
    "group": "App-Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>if user logged in</p>"
          }
        ]
      }
    },
    "description": "<p>pass product _id as param, send userId as query params when user logged in</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response-1:",
          "content": "{\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"Product details fetched successfully\",\n    \"data\": {\n        \"product\": {\n            \"_id\": \"62fe12f0cc3eefbecc5226b2\",\n            \"name\": \"cricketBat\",\n            \"sku\": \"DYVZW5ENH3\",\n            \"categoryId\": \"62f5dcf020098408379216ae\",\n            \"categoryName\": \"sports\",\n            \"subcategoryName\": \"cricket bat\",\n            \"subcategoryId\": \"62f5dd0b20098408379216bf\",\n            \"sectionId\": \"62f5dd1a20098408379216d9\",\n            \"sectionName\": \"sports\",\n            \"brandId\": \"62f5e10b2009840837921794\",\n            \"brandName\": \"mrf\",\n            \"author\": \"SG Brand\",\n            \"stock\": 23,\n            \"description\": \"<p>it is used for check price and services</p>\",\n            \"regularPrice\": 3000,\n            \"salePrice\": 2000,\n            \"taxClass\": \"Spray Water Sprinkler Bodies - WaterSense\",\n            \"taxStatus\": \"accepted\",\n            \"taxClassCode\": \"21101803A0001\",\n            \"stockQuantity\": 20,\n            \"allowBackOrders\": true,\n            \"lowStockThreshold\": 12,\n            \"soldIndividualStock\": 10,\n            \"weight\": 20,\n            \"weightUnit\": \"kg\",\n            \"dimensions\": \"20X45\",\n            \"shippingClass\": \"delievery boy\",\n            \"upSells\": true,\n            \"crossSells\": false,\n            \"material\": \"plastic\",\n            \"purchasedNote\": \"checkedd \",\n            \"menuOrder\": \"it is used\",\n            \"isReviewEnabled\": true,\n            \"adminCommissionType\": \"cased\",\n            \"adminCommission\": 23,\n            \"isDeleted\": false,\n            \"isActive\": true,\n            \"cashbackTypes\": [\n                {\n                    \"cashbackType\": \"IndividualUser\",\n                    \"amount\": 200,\n                    \"_id\": \"62fe1559cc3eefbecc522797\"\n                },\n                {\n                    \"cashbackType\": \"GoldCashback\",\n                    \"amount\": 300,\n                    \"_id\": \"62fe1559cc3eefbecc522798\"\n                },\n                {\n                    \"cashbackType\": \"BronzeCashback\",\n                    \"amount\": 400,\n                    \"_id\": \"62fe1559cc3eefbecc522799\"\n                },\n                {\n                    \"cashbackType\": \"SilverCashback\",\n                    \"amount\": 500,\n                    \"_id\": \"62fe1559cc3eefbecc52279a\"\n                }\n            ],\n            \"photos\": [\n                \"product/62fe12f0cc3eefbecc5226b2/photos/090c67b15b6dde2b626622d49ed5b098.jpg\",\n                \"product/62fe12f0cc3eefbecc5226b2/photos/bats.jpg\",\n                \"product/62fe12f0cc3eefbecc5226b2/photos/shirt.jpg\"\n            ],\n            \"colors\": [\n                \"Red\",\n                \"Blue\",\n                \"Green\",\n                \"Yellow\"\n            ],\n            \"ratingsTotal\": 0,\n            \"ratingsAvg\": 0,\n            \"totalReports\": 0,\n            \"productSold\": 0,\n            \"attributeValues\": [],\n            \"attributes\": [],\n            \"createdAt\": \"2022-08-18T10:22:40.130Z\",\n            \"updatedAt\": \"2022-08-18T10:32:57.226Z\",\n            \"__v\": 2,\n            \"coverPhoto\": \"product/62fe12f0cc3eefbecc5226b2/cover-photo/default.jpeg\",\n            \"isCart\": false,\n            \"isReported\": false,\n            \"isWishlist\": false\n        },\n        \"relatedProducts\": [\n            {\n                \"_id\": \"62f5ee73f3a7e3dfc73acf00\",\n                \"name\": \"Ball\",\n                \"regularPrice\": 3000,\n                \"salePrice\": 2000,\n                \"ratingsTotal\": 0,\n                \"ratingsAvg\": 0,\n                \"coverPhoto\": \"product/62f5ee73f3a7e3dfc73acf00/cover-photo/default.jpeg\",\n                \"isWishlist\": false,\n                \"isCart\": false\n            },\n            {\n                \"_id\": \"62fe12f0cc3eefbecc5226b2\",\n                \"name\": \"cricketBat\",\n                \"regularPrice\": 3000,\n                \"salePrice\": 2000,\n                \"ratingsTotal\": 0,\n                \"ratingsAvg\": 0,\n                \"coverPhoto\": \"product/62fe12f0cc3eefbecc5226b2/cover-photo/default.jpeg\",\n                \"isWishlist\": false,\n                \"isCart\": false\n            }\n        ],\n        \"execTime\": 166\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/ProductController.ts",
    "groupTitle": "App-Product"
  },
  {
    "type": "get",
    "url": "/api/v1/app/product/search?search='text'",
    "title": "Product Search",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>search text</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "userId",
            "description": "<p>if user logged in</p>"
          }
        ]
      }
    },
    "group": "App-Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response-1:",
          "content": "{\n ratingsTotal\n      \"data\": {\n          \"results\": [\n                         {\n                  \"_id\": \"62d672c8f055ab9d06da7821\",\n                  \"name\": \"testedd\",\n                  \"categoryId\": \"62d0136cff9b93f5383b08b1\",\n                  \"regularPrice\": 2500,\n                  \"salePrice\": 15000\n              }\n          ]\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/ProductController.ts",
    "groupTitle": "App-Product"
  },
  {
    "type": "delete",
    "url": "/api/v1/app/recent-search",
    "title": "Clear RecentSearch",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWJhZjQyYzYzZGE5OWRhODJjZTcyOCIsImVtYWlsIjoicmFodWxAMTI1Z21haWwuY29tIiwiaWF0IjoxNjU5NjEyOTk0LCJleHAiOjE2NTk2OTkzOTR9.BgVLC42cM61I2A0Y456FprkCbKskGrH1qa3kqljq9g0</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Clear-Recent-Search",
    "group": "App-Recent-Search",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n \"status\": 200,\n \"statusText\": \"SUCCESS\",\n \"message\": \"RecentSearch all clear\",\n\"data\": {\n   \"recentsearch\": {\n       \"acknowledged\": true,\n       \"deletedCount\": 2\n   },\n    \"execTime\": 78\n}\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/RecentSearchController.ts",
    "groupTitle": "App-Recent-Search"
  },
  {
    "type": "delete",
    "url": "/api/v1/app/recent-search/_id",
    "title": "Delete RecentSearch",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Delete_Recent-Search",
    "group": "App-Recent-Search",
    "description": "<p>pass recentsearch _id as param</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": 200,\n\"statusText\": \"SUCCESS\",\n\"message\": \"RecentSearch deleted successfully\",\n\"data\": {\n    \"recentsearch\": {\n        \"_id\": \"62fde156dc221a73564755f2\",\n        \"userId\": \"62e0e20233728726535d2de1\",\n        \"searchText\": \"shirts\",\n        \"createdAt\": \"2022-08-18T06:51:02.537Z\",\n        \"updatedAt\": \"2022-08-18T06:51:02.537Z\",\n        \"__v\": 0\n    },\n    \"execTime\": 93\n   }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/RecentSearchController.ts",
    "groupTitle": "App-Recent-Search"
  },
  {
    "type": "get",
    "url": "/api/v1/app/recent-search",
    "title": "Recent Search List",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWJhZjQyYzYzZGE5OWRhODJjZTcyOCIsImVtYWlsIjoicmFodWxAMTI1Z21haWwuY29tIiwiaWF0IjoxNjU5NjEyOTk0LCJleHAiOjE2NTk2OTkzOTR9.BgVLC42cM61I2A0Y456FprkCbKskGrH1qa3kqljq9g0</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "list",
    "group": "App-Recent-Search",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n       \"status\": 200,\n       \"statusText\": \"SUCCESS\",\n       \"message\": \"Recent search list\",\n       \"data\": {\n           \"recentSearch\": [\n               {\n                   \"_id\": \"63085f785c44819cd0da8518\",\n                   \"userId\": \"62dfcb21fb89c4b45de44685\",\n                   \"searchText\": \"hello\",\n                   \"createdAt\": \"2022-08-26T05:51:52.959Z\",\n                   \"updatedAt\": \"2022-08-26T05:51:52.959Z\",\n                   \"__v\": 0\n               }\n           ],\n           \"execTime\": 184\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/RecentSearchController.ts",
    "groupTitle": "App-Recent-Search"
  },
  {
    "type": "get",
    "url": "/api/v1/app/report/:categoryId",
    "title": "Get Report Reason",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Report-Reason-List",
    "group": "App-Report-Reason",
    "description": "<p>pass categoryId as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response-1:",
          "content": "\n{\n\"status\": 200,\n\"statusText\": \"SUCCESS\",\n\"message\": \"ReportReason list fetch successfully\",\n\"data\": {\n    \"reportReason\": [\n        {\n            \"_id\": \"62ea6213258089711f8cafa9\",\n            \"title\": \"jeans defected\",\n            \"text\": \"jeans color is defected pls exchange my jeans\",\n            \"isActive\": true,\n            \"createdAt\": \"2022-08-03T11:54:59.400Z\",\n            \"updatedAt\": \"2022-08-03T11:54:59.400Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"62ea62f1258089711f8cafae\",\n            \"title\": \" shoes issue\",\n            \"text\": \"shoes size does not match pls actual size provided and pls exchange my shoes\",\n            \"isActive\": true,\n            \"createdAt\": \"2022-08-03T11:58:41.377Z\",\n            \"updatedAt\": \"2022-08-03T11:58:41.377Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"62ea63a6258089711f8cafb3\",\n            \"title\": \"dresses\",\n            \"text\": \"my dress are defected pls exchange my dress\",\n            \"isActive\": true,\n            \"createdAt\": \"2022-08-03T12:01:42.473Z\",\n            \"updatedAt\": \"2022-08-03T12:01:42.473Z\",\n            \"__v\": 0\n        }\n    ],\n    \"execTime\": 33\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/ReportReasonController.ts",
    "groupTitle": "App-Report-Reason"
  },
  {
    "type": "post",
    "url": "/api/v1/app/review",
    "title": "Add Review",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Add-review",
    "group": "App-Review",
    "success": {
      "examples": [
        {
          "title": "Success-Response-1:",
          "content": "\n\"status\": 201,\n\"statusText\": \"CREATED\",\n\"message\": \"Review added successfully\",\n \"data\": {\n  \"review\": {\n    \"productId\": \"62cfba1f26bd109f9ae2d7e4\",\n      \"userId\": \"62e0e20233728726535d2de1\",\n       \"rating\": 5,\n       \"description\": \"this pen  is best performance\",\n       \"_id\": \"62fc974b3ef3e614562fa3f8\",\n       \"createdAt\": \"2022-08-17T07:22:51.079Z\",\n       \"updatedAt\": \"2022-08-17T07:22:51.079Z\",\n        \"__v\": 0\n            },\n            \"execTime\": 132\n             }   \n            }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/ReviewController.ts",
    "groupTitle": "App-Review"
  },
  {
    "type": "patch",
    "url": "/api/v1/app/review/_id",
    "title": "Edit Review",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4Mjk0OTQ5LCJleHAiOjE2NTgzODEzNDl9.PjHH-y-fKkDRD5Zw5fA8I029Iwc1ESWxnCYszaRTEpo</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "edit-review",
    "group": "App-Review",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n     \"rating\":4,\n     \"description\":\"this product  is best performance\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 success\n {\n \"status\": 200,\n  \"statusText\": \"SUCCESS\",\n   \"message\": \"Review updated  successfully\",\n   \"data\": {\n    \"review\": {\n       \"_id\": \"62fc974b3ef3e614562fa3f8\",\n        \"productId\": \"62cfba1f26bd109f9ae2d7e4\",\n         \"userId\": \"62e0e20233728726535d2de1\",\n         \"rating\": 4,\n        \"description\": \"this product  is best performance\",\n        \"createdAt\": \"2022-08-17T07:22:51.079Z\",\n        \"updatedAt\": \"2022-08-17T08:58:16.645Z\",\n     \"__v\": 0\n        },\n    \"execTime\": 81\n      }\n     }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/ReviewController.ts",
    "groupTitle": "App-Review"
  },
  {
    "type": "post",
    "url": "api/v1/app/subgroup/add-member",
    "title": "Add Member",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMu</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "add-member",
    "group": "App-Subgroup",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subgroupId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "memberId",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "req-body",
          "content": "{\n   \"subgroupId\": \"632d85681bd1704d0237a260\",\n   \"memberId\": \"62c2bf3302eb83542c409e24\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"status\": 201,\n    \"statusText\": \"CREATED\",\n    \"message\": \"Member added successfully\",\n    \"data\": {\n        \"subgroup\": {\n            \"_id\": \"632d85681bd1704d0237a260\",\n            \"name\": \"test subgroup\",\n            \"groupId\": \"6321d770c49be8f2c62454ac\",\n            \"groupName\": \"test wewewew\",\n            \"description\": \"testing description\",\n            \"icon\": \"subgroup-icons/1663927654184-file_example_PNG_500kB.png\",\n            \"isDeleted\": false,\n            \"totalMember\": 2,\n            \"memberLimit\": 20,\n            \"createdBy\": \"62dfcb21fb89c4b45de44685\",\n            \"members\": [\n                \"62dfcb21fb89c4b45de44685\",\n                \"632c6396731b6d708b3fb73e\",\n                \"62c2bf3302eb83542c409e24\"\n            ],\n            \"createdAt\": \"2022-09-23T10:07:36.899Z\",\n            \"updatedAt\": \"2022-09-23T10:08:45.095Z\",\n            \"__v\": 2\n        },\n        \"execTime\": 209\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/SubgroupController.ts",
    "groupTitle": "App-Subgroup"
  },
  {
    "type": "post",
    "url": "api/v1/app/subgroup/create",
    "title": "Create Subgroup",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMu</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "create-subgroup",
    "group": "App-Subgroup",
    "description": "<p>request body send as form data</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "icon",
            "description": "<p>group Icon</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupName",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"status\": 201,\n    \"statusText\": \"CREATED\",\n    \"message\": \"Subgroup created\",\n    \"data\": {\n        \"subgroup\": {\n            \"name\": \"test subgroup\",\n            \"groupId\": \"631867a72f264cd844f1949b\",\n            \"groupName\": \"test\",\n            \"description\": \"testing description\",\n            \"icon\": \"subgroup-icons/1663669796552-1658308824367-Screenshot_1.png\",\n            \"isDeleted\": false,\n            \"totalMember\": 0,\n            \"memberLimit\": 20,\n            \"createdBy\": \"62dfcb21fb89c4b45de44685\",\n            \"members\": [\n                \"62dfcb21fb89c4b45de44685\"\n            ],\n            \"_id\": \"6329962671f2088a688e8f00\",\n            \"createdAt\": \"2022-09-20T10:29:58.072Z\",\n            \"updatedAt\": \"2022-09-20T10:29:58.072Z\",\n            \"__v\": 0\n        },\n        \"execTime\": 1856\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/SubgroupController.ts",
    "groupTitle": "App-Subgroup"
  },
  {
    "type": "delete",
    "url": "api/v1/app/subgroup/delete/:_id",
    "title": "Delete subgroup",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMu</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "delete",
    "group": "App-Subgroup",
    "description": "<p>send subgroup _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "  \n{\n      \"status\": 200,\n      \"statusText\": \"SUCCESS\",\n      \"message\": \"Subgroup deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/SubgroupController.ts",
    "groupTitle": "App-Subgroup"
  },
  {
    "type": "patch",
    "url": "api/v1/app/subgroup/edit/:id",
    "title": "Edit Subgroup",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMu</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "edit-subgroup",
    "group": "App-Subgroup",
    "description": "<p>request body send as form data</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "icon",
            "description": "<p>group Icon</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "groupId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "groupName",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"status\": 201,\n    \"statusText\": \"CREATED\",\n    \"message\": \"subgroup_edited\",\n    \"data\": {\n        \"subgroup\": {\n            \"_id\": \"6332bf09a40d148e8c4dd51b\",\n            \"name\": \"testing\",\n            \"groupId\": \"63315a738cc30e709d3dc51f\",\n            \"groupName\": \"test\",\n            \"description\": \"lorem ipsum\",\n            \"icon\": \"subgroup-icons/1664270088090-85e642626dbbbee704edf3f6f33ef837.jpg\",\n            \"isDeleted\": false,\n            \"totalMember\": 0,\n            \"memberLimit\": 20,\n            \"createdBy\": \"62dfcb21fb89c4b45de44685\",\n            \"members\": [\n                \"62dfcb21fb89c4b45de44685\"\n            ],\n            \"createdAt\": \"2022-09-27T09:14:49.797Z\",\n            \"updatedAt\": \"2022-09-27T09:16:16.535Z\",\n            \"__v\": 0\n        },\n        \"execTime\": 169\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/SubgroupController.ts",
    "groupTitle": "App-Subgroup"
  },
  {
    "type": "get",
    "url": "api/v1/app/subgroup/group-member-list/:_id",
    "title": "Group member list for adding member to subgroup",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMu</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "group-member-list",
    "group": "App-Subgroup",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>search text</p>"
          }
        ]
      }
    },
    "description": "<p>pass subgroup id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n       \"status\": 200,\n       \"statusText\": \"SUCCESS\",\n       \"message\": \"Member list fetched successfully\",\n       \"data\": {\n           \"list\": [\n               {\n                   \"_id\": \"631ae66af08c192dadce8e90\",\n                   \"email\": \"pukhraj24@mailinator.com\",\n                   \"customerCode\": \"WFU134285\",\n                   \"avatar\": \"user-profiles/1664178007332-10x-featured-social-media-image-size.png\",\n                   \"description\": \"Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\",\n                   \"firstName\": \"puhraj\",\n                   \"lastName\": \"saini\",\n                   \"name\": \"puhraj saini\"\n               }\n           ],\n           \"count\": 1,\n           \"execTime\": 175\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/SubgroupController.ts",
    "groupTitle": "App-Subgroup"
  },
  {
    "type": "get",
    "url": "api/v1/app/subgroup/member-list",
    "title": "Member List",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMu</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "member-list",
    "group": "App-Subgroup",
    "description": "<p>pagination and searching implemented.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"Subgroup member list fetched\",\n    \"data\": {\n        \"count\": 1,\n        \"list\": [\n            {\n                \"_id\": \"632c6304d422846ce0f6e573\",\n                \"subgroupId\": \"632c6304d422846ce0f6e571\",\n                \"isAdmin\": true,\n                \"member\": {\n                    \"_id\": \"62dfcb21fb89c4b45de44685\",\n                    \"email\": \"pukhraj47@mailinator.com\",\n                    \"avatar\": \"user-profiles/1659706277298-pukhraj_saini_mce242.png\",\n                    \"displayName\": \"pk\",\n                    \"name\": \"puhraj saini\",\n                    \"customerCode\": \"WFU516341\"\n                }\n            }\n        ],\n        \"execTime\": 119\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/SubgroupController.ts",
    "groupTitle": "App-Subgroup"
  },
  {
    "type": "post",
    "url": "api/v1/app/subgroup/remove-member/:_id",
    "title": "Remove Member",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMu</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "remove-member",
    "group": "App-Subgroup",
    "description": "<p>send subgroup _id as params</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "memberId",
            "description": "<p>member _id of subgroup member</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "req-body",
          "content": "{\n   \"memberId\": \"62c2bf3302eb83542c409e24\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n       \"status\": 200,\n       \"statusText\": \"SUCCESS\",\n       \"message\": \"Subgroup member removed successfully\",\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/SubgroupController.ts",
    "groupTitle": "App-Subgroup"
  },
  {
    "type": "get",
    "url": "api/v1/app/subgroup/details/:id",
    "title": "Subgroup Details",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMu</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "subgroup-details",
    "group": "App-Subgroup",
    "description": "<p>send subgroup _id in param</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"Subgroup fetched\",\n    \"data\": {\n        \"subgroup\": {\n            \"_id\": \"6329bfe5078d13c6551f0096\",\n            \"name\": \"test subgroup\",\n            \"groupName\": \"test\",\n            \"description\": \"testing description\",\n            \"icon\": \"subgroup-icons/1663680483894-1658308824367-Screenshot_1.png\",\n            \"totalMember\": 1,\n            \"memberLimit\": 20,\n            \"createdBy\": {\n                \"_id\": \"62dfcb21fb89c4b45de44685\",\n                \"email\": \"pukhraj47@mailinator.com\",\n                \"avatar\": \"user-profiles/1659706277298-pukhraj_saini_mce242.png\",\n                \"displayName\": \"pk\",\n                \"name\": \"puhraj saini\",\n                \"customerCode\": \"WFU516341\"\n            },\n            \"group\": {\n                \"_id\": \"63315a738cc30e709d3dc51f\",\n                \"groupIcon\": \"group-icons/1664178802742-10x-featured-social-media-image-size.png\",\n                \"groupCode\": \"GT0441937\",\n                \"name\": \"Fund tester x2\"\n            },\n            \"createdAt\": \"2022-09-20T13:28:05.563Z\",\n            \"isAdmin\": true\n        },\n        \"execTime\": 126\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/SubgroupController.ts",
    "groupTitle": "App-Subgroup"
  },
  {
    "type": "get",
    "url": "api/v1/app/subgroup/list/:id",
    "title": "Subgroup List",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMu</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "subgroup-list",
    "group": "App-Subgroup",
    "description": "<p>send group _id in params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "\n{\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"Subgroup list fetched\",\n    \"data\": {\n        \"count\": 3,\n        \"list\": [\n            {\n                \"_id\": \"6329bfe5078d13c6551f0096\",\n                \"name\": \"test subgroup\",\n                \"description\": \"testing description\",\n                \"icon\": \"subgroup-icons/1663680483894-1658308824367-Screenshot_1.png\",\n                \"totalMember\": 1,\n                \"memberLimit\": 20,\n                \"createdBy\": {\n                    \"_id\": \"62dfcb21fb89c4b45de44685\",\n                    \"avatar\": \"user-profiles/1659706277298-pukhraj_saini_mce242.png\",\n                    \"displayName\": \"pk\",\n                    \"name\": \"pukhraj saini\"\n                },\n                \"createdAt\": \"2022-09-20T13:28:05.563Z\",\n                \"group\": {\n                    \"_id\": \"631867a72f264cd844f1949b\",\n                    \"groupIcon\": null,\n                    \"name\": \"test\",\n                    \"email\": \"test@gmail.com\"\n                },\n                \"isJoined\": true\n            }\n        ],\n        \"execTime\": 83\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/SubgroupController.ts",
    "groupTitle": "App-Subgroup"
  },
  {
    "type": "get",
    "url": "api/v1/app/subgroup/user-subgroup",
    "title": "User's Subgroup",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMu</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "user's-subgroup",
    "group": "App-Subgroup",
    "description": "<p>pagination and search implemented.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "\n{\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"Subgroup list fetched\",\n    \"data\": {\n        \"count\": 3,\n        \"list\": [\n            {\n                \"_id\": \"6329bfe5078d13c6551f0096\",\n                \"name\": \"test subgroup\",\n                \"description\": \"testing description\",\n                \"icon\": \"subgroup-icons/1663680483894-1658308824367-Screenshot_1.png\",\n                \"totalMember\": 1,\n                \"memberLimit\": 20,\n                \"createdBy\": {\n                    \"_id\": \"62dfcb21fb89c4b45de44685\",\n                    \"avatar\": \"user-profiles/1659706277298-pukhraj_saini_mce242.png\",\n                    \"displayName\": \"pk\",\n                    \"name\": \"puhraj saini\"\n                },\n                \"createdAt\": \"2022-09-20T13:28:05.563Z\",\n                \"group\": {\n                    \"_id\": \"631867a72f264cd844f1949b\",\n                    \"groupIcon\": null,\n                    \"name\": \"test\",\n                    \"email\": \"test@gmail.com\"\n                },\n                \"isJoined\": true\n            }\n        ],\n        \"execTime\": 83\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/SubgroupController.ts",
    "groupTitle": "App-Subgroup"
  },
  {
    "type": "patch",
    "url": "api/v1/app/user/change-password",
    "title": "Change Password",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMu</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "change-password",
    "group": "App-User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwordCurrent",
            "description": "<p>current password of user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>new password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "\n{\n       \"password\": \"asdfghjkl\",\n       \"passwordCurrent\": \"Test@123\"\n   }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success Response: ",
          "content": "{\n       \"status\": 200,\n       \"statusText\": \"SUCCESS\",\n       \"message\": \"Password changed successfully\",\n       \"data\": {\n           \"user\": {\n               \"_id\": \"62dfcb21fb89c4b45de44685\",\n               \"email\": \"pukhraj47@mailinator.com\",\n               \"isEmailVerified\": true,\n               \"isAccountActive\": true,\n               \"__v\": 0,\n               \"currentDeviceType\": \"IOS\",\n               \"accountNumber\": 20231949728,\n               \"avatar\": \"user-profiles/1659512469817-pukhraj_saini_mce242.png\",\n               \"description\": \"Mean stack developer\",\n               \"displayName\": \"pk\",\n               \"firstName\": \"puhraj\",\n               \"lastName\": \"saini\",\n               \"name\": \"puhraj saini\",\n               \"paypalEmail\": \"pukhraj.saini97@gmai.com\"\n           },\n           \"execTime\": 107\n       }\n   }\n                   *",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/UserController.ts",
    "groupTitle": "App-User"
  },
  {
    "type": "patch",
    "url": "api/v1/app/user/edit-profile",
    "title": "Edit Profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMu</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "edit-profile",
    "group": "App-User",
    "description": "<p>request body send as form data</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "profilePic",
            "description": "<p>user profile pic</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "displayName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accountNo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paypalEmail",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Profile-updated",
          "content": "{\n       \"status\": 200,\n       \"statusText\": \"SUCCESS\",\n       \"message\": \"UserProfile added successfully\",\n       \"data\": {\n           \"user\": {\n               \"_id\": \"62dfcb21fb89c4b45de44685\",\n               \"email\": \"najariya.query@gmail.com\",\n               \"isEmailVerified\": true,\n               \"isAccountActive\": true,\n               \"__v\": 0,\n               \"currentDeviceType\": \"IOS\",\n               \"accountNumber\": 20231949278,\n               \"avatar\": \"user-profiles/1659434425401-test3.jpeg\",\n               \"description\": \"asdfghjkl\",\n               \"displayName\": \"ASDF\",\n               \"firstName\": \"pukhraj\",\n               \"lastName\": \"saini\",\n               \"name\": \"pukhraj saini\",\n               \"paypalEmail\": \"pukhraj.saini97@gmail.com\",\n               \"changedEmail\": \"pukhraj.query@gmail.com\"\n           },\n           \"isEmailChanged\": false,\n           \"execTime\": 326\n       }\n   }",
          "type": "json"
        },
        {
          "title": "Profile updated and Email Changed",
          "content": "{\n           \"status\": 201,\n           \"statusText\": \"EMAIL_CHANGED\",\n           \"message\": \"profile updated and Verification link sent successfully on your mail\",\n           \"data\": {\n               \"user\": {\n                   \"_id\": \"62dfcb21fb89c4b45de44685\",\n                   \"email\": \"najariya.query@gmail.com\",\n                   \"isEmailVerified\": true,\n                   \"isAccountActive\": true,\n                   \"__v\": 0,\n                   \"currentDeviceType\": \"IOS\",\n                   \"accountNumber\": 20231949278,\n                   \"avatar\": \"user-profiles/1659434425401-test3.jpeg\",\n                   \"description\": \"asdfghjkl\",\n                   \"displayName\": \"ASDF\",\n                   \"firstName\": \"pukhraj\",\n                   \"lastName\": \"saini\",\n                   \"name\": \"pukhraj saini\",\n                   \"paypalEmail\": \"pukhraj.saini97@gmail.com\",\n                   \"changedEmail\": \"pukhraj.query@gmail.com\"\n               },\n               \"isEmailChanged\": true,\n               \"execTime\": 812\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response CONFLICT ",
          "content": "{\n       \"status\": 409,\n       \"statusText\": \"CONFLICT\",\n       \"message\": \"User already exists\",\n       \"data\": {\n           \"user\": {\n               \"name\": \"pukhraj saini\",\n               \"firstName\": \"pukhraj\",\n               \"lastName\": \"saini\",\n               \"displayName\": \"ASDF\",\n               \"email\": \"pukhraj@mailinator.com\",\n               \"accountNumber\": \"20231949278\",\n               \"paypalEmail\": \"pukhraj.saini97@gmail.com\",\n               \"description\": \"asdfghjkl\"\n           }\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/UserController.ts",
    "groupTitle": "App-User"
  },
  {
    "type": "get",
    "url": "api/v1/app/user/my-profile",
    "title": "My Profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMu</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "my-profile",
    "group": "App-User",
    "success": {
      "examples": [
        {
          "title": "Success-Example ",
          "content": "{\n         \"status\": 200,\n         \"statusText\": \"SUCCESS\",\n         \"message\": \"My Profile\",\n         \"data\": {\n             \"user\": {\n                 \"_id\": \"62dfcb21fb89c4b45de44685\",\n                 \"email\": \"pukhraj47@mailinator.com\",\n                 \"isEmailVerified\": true,\n                 \"isAccountActive\": true,\n                 \"__v\": 0,\n                 \"currentDeviceType\": \"IOS\",\n                 \"accountNumber\": 20231949728,\n                 \"avatar\": \"user-profiles/1659512469817-pukhraj_saini_mce242.png\",\n                 \"description\": \"MEAN STACK DEVELOPER\",\n                 \"displayName\": \"pk\",\n                 \"firstName\": \"puhraj\",\n                 \"lastName\": \"saini\",\n                 \"name\": \"puhraj saini\",\n                 \"paypalEmail\": \"pukhraj.saini97@gmai.com\",\n                 \"facebookProfileUrl\": \"https://facebook.com/pukhrajsaini\",\n                 \"instagramUsername\": \"pukhrajsaini\",\n                 \"linkedinProfileUrl\": \"https://www.linkedin.com/in/pukhrajsaini\",\n                 \"twitterUsername\": \"pukhrajsaini\"\n             },\n             \"execTime\": 71\n         }\n     }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/UserController.ts",
    "groupTitle": "App-User"
  },
  {
    "type": "patch",
    "url": "api/v1/app/user/update-social",
    "title": "Update Social",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "update-social",
    "group": "App-User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "facebookProfileUrl",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "linkedinProfileUrl",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "twitterUsername",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "instagramUsername",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-body ",
          "content": "{\n     \"facebookProfileUrl\": \"https://www.facebook.com/pukhrajsaini\",\n     \"linkedinProfileUrl\": \"https://www.linkedin.com/in/pukhrajsaini\",\n     \"twitterUsername\": \"pukhrajsaini\",\n     \"instagramUsername\": \"pukhrajsaini\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-1:",
          "content": "{\n          \"status\": 200,\n          \"statusText\": \"SUCCESS\",\n          \"message\": \"User social update successfully\",\n          \"data\": {\n              \"user\": {\n                  \"_id\": \"62dfcb21fb89c4b45de44685\",\n                  \"email\": \"pukhraj47@mailinator.com\",\n                  \"isEmailVerified\": true,\n                  \"isAccountActive\": true,\n                  \"__v\": 0,\n                  \"currentDeviceType\": \"IOS\",\n                  \"accountNumber\": 20231949728,\n                  \"avatar\": \"user-profiles/1659512469817-pukhraj_saini_mce242.png\",\n                  \"description\": \"MEAN STACK DEVELOPER\",\n                  \"displayName\": \"pk\",\n                  \"firstName\": \"puhraj\",\n                  \"lastName\": \"saini\",\n                  \"name\": \"puhraj saini\",\n                  \"paypalEmail\": \"pukhraj.saini97@gmai.com\",\n                  \"facebookProfileUrl\": \"https://facebook.com/pukhrajsaini\",\n                  \"instagramUsername\": \"pukhrajsaini\",\n                  \"linkedinProfileUrl\": \"https://www.linkedin.com/in/pukhrajsaini\",\n                  \"twitterUsername\": \"pukhrajsaini\"\n              },\n              \"execTime\": 128\n          }\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/UserController.ts",
    "groupTitle": "App-User"
  },
  {
    "type": "patch",
    "url": "api/v1/app/user/verify-email",
    "title": "Verify Email",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMu</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "verify-email",
    "group": "App-User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>email verification token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "\n{\n       \"email\": \"pukhraj47@mailinator.com\",\n       \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.0YjQ1ZGU0NDY4NSIsInJv....\n   }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success Response: ",
          "content": "{\n       \"status\": 200,\n       \"statusText\": \"SUCCESS\",\n       \"message\": \"Email verified successfully\",\n       \"data\": {\n           \"user\": {\n               \"_id\": \"62dfcb21fb89c4b45de44685\",\n               \"email\": \"pukhraj47@mailinator.com\",\n               \"isEmailVerified\": true,\n               \"isAccountActive\": true,\n               \"__v\": 0,\n               \"currentDeviceType\": \"IOS\",\n               \"accountNumber\": 20231949728,\n               \"avatar\": \"user-profiles/1659512469817-pukhraj_saini_mce242.png\",\n               \"description\": \"Mean stack developer\",\n               \"displayName\": \"pk\",\n               \"firstName\": \"puhraj\",\n               \"lastName\": \"saini\",\n               \"name\": \"puhraj saini\",\n               \"paypalEmail\": \"pukhraj.saini97@gmai.com\"\n           },\n           \"execTime\": 107\n       }\n   }\n                   *",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/UserController.ts",
    "groupTitle": "App-User"
  },
  {
    "type": "post",
    "url": "/api/v1/app/wishlist",
    "title": "Add Wishlist",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTBlMjAyMzM3Mjg3MjY1MzVkMmRlMSIsImVtYWlsIjoicmFodWxAMTI1Z21haWwuY29tIiwiaWF0IjoxNjU4OTg5MDY0LCJleHAiOjE2NTkwNzU0NjR9.R330qWuTXc_ghTYwDOyquNVORxvyWmws1tDYWRZd3hY</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "add-wishlist",
    "group": "App-Wishlist",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 success  \n     {\n \"status\": 201,\n \"statusText\": \"CREATED\",\n   \"message\": \"Product added in wishlist\",\n     \"data\": {\n     \"wishlist\": {\n        \"productId\": \"62d672c8f055ab9d06da7821\",\n       \"userId\": \"62e0e20233728726535d2de1\",\n       \"_id\": \"62e22a6b92e49c1f63903728\",\n      \"createdAt\": \"2022-07-28T06:19:23.068Z\",\n      \"updatedAt\": \"2022-07-28T06:19:23.069Z\",\n      \"__v\": 0\n },\n \"execTime\": 80\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/WishlistController.ts",
    "groupTitle": "App-Wishlist"
  },
  {
    "type": "delete",
    "url": "/api/v1/app/wishlist/_id",
    "title": "Delete product from wishlist Wishlist",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTBlMjAyMzM3Mjg3MjY1MzVkMmRlMSIsImVtYWlsIjoicmFodWxAMTI1Z21haWwuY29tIiwiaWF0IjoxNjU4OTg5MDY0LCJleHAiOjE2NTkwNzU0NjR9.R330qWuTXc_ghTYwDOyquNVORxvyWmws1tDYWRZd3hY</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "delete-wishlist",
    "group": "App-Wishlist",
    "description": "<p>pass productId (product _id    ) as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n\"status\": 200,\n\"statusText\": \"SUCCESS\",\n\"message\": \"Product deleted from wishlist successfully\",   \n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/WishlistController.ts",
    "groupTitle": "App-Wishlist"
  },
  {
    "type": "get",
    "url": "/api/v1/app/wishlist",
    "title": "My Wishlist",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTBlMjAyMzM3Mjg3MjY1MzVkMmRlMSIsImVtYWlsIjoicmFodWxAMTI1Z21haWwuY29tIiwiaWF0IjoxNjU4OTg5MDY0LCJleHAiOjE2NTkwNzU0NjR9.R330qWuTXc_ghTYwDOyquNVORxvyWmws1tDYWRZd3hY</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "my-wishlist",
    "group": "App-Wishlist",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n\"status\": 200,\n\"statusText\": \"SUCCESS\",\n\"message\": \"Wishlist fetch successfully\",\n\"data\": {\n  \"wishlist\": [\n        {\n             \"_id\": \"62e0eaf7ea9f933858a295b1\",\n            \"userId\": \"62e0e20233728726535d2de1\",\n             \"product\": {\n                 \"name\": \"Mobile\",\n                  \"regularPrice\": 40000,\n                  \"color\": \"blue\",\n                  \"salePrice\": 350,\n                  \"brandName\": \"nike\",\n                  \"coverPhoto\": \"product/63087b2f224cb585fce762a6/cover-photo/default.png\",\n                \"_id\": \"62cfb67426bd109f9ae2d7cf\"\n            }\n        },\n        {\n              \"_id\": \"62e0eba4ea9f933858a295b6\",\n            \"userId\": \"62e0e20233728726535d2de1\",\n           \"product\": {\n                 \"name\": \"tablefan\",\n                 \"regularPrice\": 40000,\n                 \"color\": \"blue\",\n                  \"salePrice\": 350,\n                  \"brandName\": \"nike\",\n                  \"coverPhoto\": \"product/63087b2f224cb585fce762a6/cover-photo/default.png\",\n                 \"_id\": \"62cfb9dc26bd109f9ae2d7dd\"\n             }\n        }\n    ],\n   \"execTime\": 114\n }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/WishlistController.ts",
    "groupTitle": "App-Wishlist"
  }
] });
