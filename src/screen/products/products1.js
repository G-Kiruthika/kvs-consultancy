let previewMenu=document.querySelector(".products-card-preview-wrapper");

let previewBox=previewMenu.querySelectorAll(".products-card-preview");

document.querySelector('.products-card-wrapper .products-card').forEach(product => {
     product.onclick = () =>{
        previewMenu.getElementsByClassName.dsiplay = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = product.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active')
            }
        });

     };
    });

previewBox.forEach(close=>{
    close.querySelector('.fa-xmark').onclick = () =>{
        close.classList.remove('active');
        previewMenu.style.display = 'none'
    }
})