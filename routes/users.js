var express = require('express');
var router = express.Router();


var cheerio=require('cheerio');
var path=require('path');
var fs=require('fs');
var request = require('request');

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/
var ratin;
var text=[];
var  title, release, rating;
router.get('/login',function (req,res) {
    res.render('error',{rat:text});
});
var c=1;
router.post('/l',function(req,res){
    console.log("into the page");
     ratin = req.body.rating;
    console.log(ratin);
    //ratin=10;
    //res.render('error',{rating :ratin});

       text = [];
        var url = 'http://www.imdb.com/chart/top?ref_=nv_mv_250_6';
        request(url, function (err, res, body) {
            console.log("1");
            var $ = cheerio.load(body);
            console.log("2");
            $('.titleColumn').each(function () {
                 //var rat=$('.ratingColumn');
                // console.log(rat);
               //  if(rat>=ratin) {
                     var img = $(this).text();
                     text.push(img);
                 //}
            });
            console.log(text);
             //c=0;
        });
     //while (c==1){}

     res.redirect('/answer/login');

    });



module.exports = router;
