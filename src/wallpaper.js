
const numItemsToGenerate = 1;

function renderItem(){
    fetch(`https://source.unsplash.com/1600x900/?technology`).then((response)=> {
        let item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
      <img class="random-image" src="${response.url}" alt="random image"/>
    `
        document.body.appendChild(item);
    })
}
for(let i=0;i<numItemsToGenerate;i++){
    renderItem();
}