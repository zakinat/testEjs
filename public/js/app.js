

const listItems= document.querySelector('#listItems')

document.getElementById('numberItems').addEventListener('input',function(e){
    const N = e.target.value
    listItems.querySelectorAll('*').forEach(n => n.remove());
    for (let i=0; i< N; i++){
        listItems.append(htmlFormat(i+1))
    }
   },false);




   function htmlFormat(n){
       const span =document.createElement('span');
       span.innerHTML=n
       span.classList.add('item__number')
       const div =document.createElement('div');
       div.appendChild(span)
       div.classList.add('item')

       return div
   }




