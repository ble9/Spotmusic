const numItemsToGenerate = 1;

function renderItem(){
    fetch(`https://source.unsplash.com/1600x900/?EDM`).then((response)=> {
        let item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
      <img class="EDM-image" src="${response.url}" alt="Edm Images"/>
    `
        document.body.appendChild(item);
    })
}
for(let i=0;i<numItemsToGenerate;i++){
    renderItem();
}