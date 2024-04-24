const btn = document.querySelector('button');
const inputEl = document.querySelector('input');
const ulEl = document.querySelector('ul');

btn.addEventListener('click', function() {
    const newCommentEl = document.createElement('li');
    const commentText = inputEl.value;
    newCommentEl.innerText = commentText;
    ulEl.append(newCommentEl);
    inputEl.value = '';
});

ulEl.addEventListener('click', function(evt) {
    console.log(evt.target);
})