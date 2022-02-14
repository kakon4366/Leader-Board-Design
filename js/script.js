//task-1: top players and top blogs color change
const topPlayer = document.getElementById('top-player');
const topBlog = document.getElementById('top-blog');

topPlayer.style.color = 'rgba(163, 5, 165, 0.8)';
topBlog.style.color = 'rgba(163, 5, 165, 0.8)';

//task-2: player div background color
const playerBg = document.getElementsByClassName('player');
for(const player of playerBg){
    player.style.backgroundColor = 'rgba(163, 5, 165, 0.2)';
}

// task-3: ul list added and button click to list items add
document.getElementById('item-add-btn').addEventListener('click', function(){
    const li = document.createElement('li');
    const liText = document.createTextNode('item');
    const ul = document.getElementById('items');
    li.appendChild(liText);
    ul.appendChild(li);
})

//task-4 and 5: Increment input value and disabled increment btn
document.getElementById('increment').addEventListener('click', function(){
    const input = document.getElementById('input-value');
    let inputValue = parseInt(input.value);
    input.value = inputValue + 1;
    if(input.value == 5){
        const btn = document.getElementById('increment');
        btn.setAttribute('disabled', '');
        btn.style.backgroundColor = '#542eff8f';
    }
})
