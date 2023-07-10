const multer = require('multer');

const storage = multer.diskStorage({
    
    filename: function(req,file,cb){
        let nomeImagem = Date.now()+''+file.originalname;
        cb(null, nomeImagem);
    },
    destination: function(req,file,cb){
        let path = './imagens';
        cb(null, path)
    } 
});

var upload = multer({storage});

module.exports = upload;