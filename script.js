const   scaleValue = document.querySelectorAll('.skill-rank__percentage'),
        masteredLevel = document.querySelectorAll('.skill-rank__mastered');

scaleValue.forEach( (item, iter) => {
    masteredLevel[iter].style.width = item.textContent
})
