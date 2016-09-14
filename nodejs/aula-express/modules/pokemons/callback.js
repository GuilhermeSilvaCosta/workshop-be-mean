'use strict'

const formataHtml = (data) => {
    let html = '';
    data.forEach(function (element, index, array) {
    console.log(element);
    html = html + '<ul>';
        html = html + '<li>' + element.id + '</li>';
        html = html + '<li>' + new Date(element.created) + '</li>';
        html = html + '<li>' + element.defense + '</li>';
        html = html + '<li>' + element.height + '</li>';
        html = html + '<li>' + element.name + '</li>';
        html = html + '<li>' + element.speed + '</li>';
        html = html + '<li>' + element.types.join(" - ") + '</li>';
        html = html + '<li>' + element.attack + '</li>';
        html = html + '</ul>';
    });
    return html;
}

module.exports = (err,data,res,page,maxPages) => {
    if (err) {
        console.log(err);
        res.status(404, err).end();
    }

    if ( page === 1 ) {
        res.links({
            next: 'http://localhost/pokemons?page='+ Number(page + 1) ,
            last: 'http://localhost/pokemons?page='+ maxPages
        });
    } else if (page > 1 && page < maxPages){
        res.links({
            first: 'http://localhost/pokemons?page=1',
            previous: 'http://localhost/pokemons?page='+ (page - 1),
            next: 'http://localhost/pokemons?page='+ (page + 1),
            last: 'http://localhost/pokemons?page='+ maxPages
        });
    }else if (page === maxPages){ 
        res.links({
            first: 'http://localhost/pokemons?page=1',
            previous: 'http://localhost/pokemons?page='+ (page - 1)
        });
    }

    res.format({
        'text/html' : function() {
            // res.set('ContentType','text/html');
            const html = formataHtml(data);
            res.type('html');
            res.send(html);
        }
        , 'application/json' : function() {
            //res.set('ContentType','json');
            res.type('json');
            res.json(data);
        }
        , 'default' : function() {
            res.status(406).send('Formato não aceito');
        } 
    });
};