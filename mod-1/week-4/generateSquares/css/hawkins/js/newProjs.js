

console.log('Strange things are coming')
 
$(() => {
const addH2 = () => {
    let $h2 = $('<h2>').text("just getting started");
    $('body').append($h2);
}

addH2();
});

