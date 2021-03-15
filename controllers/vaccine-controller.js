var con = require('../common/database.js');

exports.get_all_posts = function(req, res){
    res.setHeader('Access-Control-Allow-Origin','*');
    let sql = "select u.userId, u.userName, c.cityId, name as cityName, content, dateCreated from Posts p" + 
            " inner join Users u on p.userId = u.userId" + 
            " inner join Cities c on c.cityId = u.cityId" ;
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
}

exports.get_all_cities = function(req, res){
    res.setHeader('Access-Control-Allow-Origin','*');
    let sql = "select * from Cities";
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
}

exports.get_posts_by_city = function(req, res){
    res.setHeader('Access-Control-Allow-Origin','*');
    let sql = "select u.userId, u.userName, c.cityId, name as cityName, content from Posts p inner join Users u on u.userId = p.userId " + 
            "inner join Cities c on u.cityId = c.cityId where c.cityId = " + req.params.cityId  ;
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
}

exports.post_data = function(req, res){
    res.setHeader('Access-Control-Allow-Origin','*');

    var dateLocal = (new Date ((new Date((new Date(new Date())).toISOString() )).getTime() -
        ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ');

    const name = req.body.name.replace(/'/g, "''");
    const city = req.body.city.replace(/'/g, "''");
    const comments = req.body.comments.replace(/'/g, "''");
    let sql = "call createPost('" + name + "', '" + city + "', '" + comments + "', '" + dateLocal + "')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
}

// select u.userId, u.userName, c.cityId, name as cityName, content from Posts p
//inner join Users u on p.userId = u.userId
//inner join Cities c on c.cityId = u.cityId