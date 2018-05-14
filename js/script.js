drawTree(11);

function drawTree(treeHeight) {
    var star = '';
    var space = '';
    for (var i = 0; i <= treeHeight; i++) {
        space = '';
        for (var j = treeHeight; j > i; j--) {
            space += " ";
        }
        star += '* ';
        console.log(space + star);
    }
}
