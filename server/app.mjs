import http from 'http'
import ejs from 'ejs'
import path from 'path'
import fs from 'fs'

const __dirname = path.resolve("")
// 声明路由
http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        ejs.renderFile(path.resolve('./server/views/index.ejs'), {
            title: 'react ssr', 
            data: '首页'
        }, 
        (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.end(data);
            }
        })
    }
}).listen(3000, function() {
    console.log('server is running on port 3000')
})