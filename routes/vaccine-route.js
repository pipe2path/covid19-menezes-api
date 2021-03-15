module.exports = function(app){
    var main = require('../controllers/vaccine-controller.js');

    app.route('/posts')
        .get(main.get_all_posts)

    app.route('/posts')
        .post(main.post_data)

    app.route('/cities')
        .get(main.get_all_cities)
    
    app.route('/posts/city/:cityId')
        .get(main.get_posts_by_city)   
}    