const path=require('path')
exports.home = (req,res) => {
    // res.send(`${__dirname}`);
    res.sendFile("D:/Webproject/Web_Project/view/"+'index.html')

    
}


