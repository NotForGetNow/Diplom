document.addEventListener("DOMContentLoaded", function() {
    const dropdownItemsFirst = document.querySelectorAll('.dropdown-item-first');
    const dropdownButtonFirst = document.querySelector('.dropdown-toggle-first');

    dropdownItemsFirst.forEach(function(item) {
        item.addEventListener('click', function() {
            const text = item.textContent;
            dropdownButtonFirst.textContent = text;
        });
    });

    const dropdownItemsFourth = document.querySelectorAll('.dropdown-item-fourth');
    const dropdownButtonFourth = document.querySelector('.dropdown-toggle-fourth');

    dropdownItemsFourth.forEach(function(item) {
        item.addEventListener('click', function() {
            const text = item.textContent;
            dropdownButtonFourth.textContent = text;
        });
    });
});
