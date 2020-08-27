

const requestHandler = (req, res) => {
    const url = req.url;
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html lang="en-us">');
        res.write('<head><title>Nodejs Sample</title></head>');
        res.write(`<body>
                        <div>
                            <h4>Hello </h4>
                        </div>
                        <div>
                            <form action="/create-user" method="post">
                                <label for="username">Username: </label>
                                <input type="text" name="username" placeholder="enter a username">
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                </body>`);
        res.write('</html>');
        return res.end();
    }

    if(url === '/users') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html lang="en-us">');
        res.write('<head><title>Nodejs Sample</title></head>');
        res.write('<body><ul> <li> Drake sienskei </li> <li> Josh greenman</li> </ul></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/create-user') {
        const data = [];
        req.on('data', (chunk) => {
            data.push(chunk)
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(data).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/')
        res.end();
    }

};

module.exports = requestHandler;





