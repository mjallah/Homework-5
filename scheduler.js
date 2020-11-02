$(".btn").click(function () {
    let row = $(this).closest('tr');
    let inputText = row.find('input').val();
    localStorage.setItem('rows' + row.index(), inputText);
});

$(document).ready(function () {
    $("#currentDay").text(moment().format('dddd, MMMM Do'));
    loadSettings();
});

function loadSettings() {
    $('.rows').each(function () {
        let value = localStorage.getItem('rows' + $(this).index());
        $(this).find('input').val(value);
    })
};