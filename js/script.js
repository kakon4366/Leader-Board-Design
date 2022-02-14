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
