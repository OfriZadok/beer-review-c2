const beers = []
const addBeer = function (name, category) {
    let newbeer = { name: name, category: category }
    beers.push(newbeer)
}
$('.post-beer').on("click", function () {
    let val = $(".beer-input").val()
    let val2 = $(".category-input").val()
    addBeer(val, val2)
    renderBeers();
})




const renderBeers = function () {
    $('ul').empty();
    for (i = 0; i < beers.length; i++) {
        let ofri = ('<li>' + beers[i].name + ' ' + beers[i].category + '</li>')
        $('.Dogs-List').append(ofri); 
    
    }


}

const renderBeers = function () {
    $('ul').empty();
    for (i = 0; i < beers.length; i++) {
        let vv = '<li>' + beers[i].name + ' ' + beers[i].category + '</li>';
        $('.Dogs-list').append(vv);

    }

}