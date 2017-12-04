var book = new Object();
book.page = 60;
book.color = 'black';
book.sfoglia = function (page){
    var i = 0;
    var nextPage = false;
    if (nextPage == false) {
        page;
    }else{
        page++;
    }
    return page;
}

console.log(book.sfoglia(book.page));