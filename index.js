var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
    
    const userAgent = req.headers['user-agent'];
    let message;

    //This uses req res to identify what browser is being used and show appropriate statements
    if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) {
        message = "<p>You are using Google Chrome.</p>";
    } else if (userAgent.includes('Edg')) {
        message = "<p>You are using Microsoft Edge.</p>";
    } else {
        message = "<p>You are using a different browser.</p>";
    }

    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>MyPage</title>
            </head>
            <body>
                <h1>Hello, I'm Anushka Ishana</h1>
                <h2>Welcome to My Web App</h2>
                <p>I am second year Creative Computing undergrad at Goldsmiths, University of London</p>
                ${message}
                <p>This is to check whether git has been pulled to vm properly<p>
            </body>
        </html>
    `);
}).listen(port, function() { 
    console.log(`Node server is running on port ${port}...`); 
});


console.log ('The node server has to fia_')