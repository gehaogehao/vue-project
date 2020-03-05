const path = require('path')
const data = require("./data.json")

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave:false,
    devServer:{
        open:true,
        /*before(app){
            //app 相当于我们express的app对象
            app.get("/api/sellers",(req,res)=>{
                res.json({
                    errorno:0,
                    data:data.sellers
                })
            });
            app.get("/api/goods",(req,res)=>{
                res.json({
                    errorno:0,
                    data:data.goods
                })
            });
            app.get("/api/ratings",(req,res)=>{
                res.json({
                    errorno:0,
                    data:data.ratings
                })
            });
        }*/
    },
    configureWebpack:{
        resolve: {
            alias: {
              'components': resolve('src/components'),
              'pages': resolve('src/pages'),
            }
        }
    }
}