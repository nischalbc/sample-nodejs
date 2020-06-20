

const requestHandler = (req, res) => {
    const url = req.url;
    res.setHeader('Content-Type', 'text/html')
    res.write('<html lang="en-us">');
    res.write('<head><title>Nodejs Sample</title></head>');
    if(url === '/') {
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
    }

    if(url === '/users') {
        res.write('<body><ul> <li> Drake sienskei </li> <li> Josh greenman</li> </ul></body>');
    }

    if(url === '/create-user') {
        console.log('thikknd');
    }

    res.write('</html>');
    return res.end();
};

module.exports = requestHandler;





