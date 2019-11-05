import http from 'http'
import ejs from 'ejs'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { matchRoutes } from 'react-router-config'
import routes from '../common/config/routes'

const Index = props => <h1>{ props.data.title }</h1>
const fetch = () => ({ 
    title: 'react ssr', 
    data: [] 
})

const __dirname = path.resolve("")
// 声明路由
http.createServer((req, res) => {
    const url = req.url;
    if(url.indexOf('.') > -1) { 
        res.end(''); 
        return false;
    }
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    const data = fetch();
    const branch =  matchRoutes(routes, url);
    const Component = branch[0].route.component;
    console.log('type', Component.type);
    console.log('data', data);
    const html = renderToString(<Component data={data}/>);
    res.end(html);
}).listen(3000, function() {
    console.log('server is running on port 3000')
})