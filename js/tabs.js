function toggleDropDown(index) {

    var dropDown = document.getElementById('dropDown' + index);
    var arrowDown = dropDown.previousElementSibling.querySelector('.arrow-down');
    var arrowUp = dropDown.previousElementSibling.querySelector('.arrow-up');
      
    if (dropDown.style.display === 'block') {
        dropDown.style.display = 'none';
        arrowDown.style.display = 'inline-block';
        arrowUp.style.display = 'none';
        }
    else {
        dropDown.style.display = 'block';
        arrowDown.style.display = 'none';
        arrowUp.style.display = 'inline-block';
        }
    }
