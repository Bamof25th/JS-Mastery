








// document.getElementById('Test');

// document.getElementBytypeName('h1');

// document.getElementByclassName('test');

// document.querySelector('.test');

// document.querySelectorAll('.test');

const currmenur= (currEl) =>{
    const menuItems = document.getElementsByClassName('menu-item');

    for (let i = 0; i < menuItems.length; i++) {
         menuItems[i].classList.remove('active');
        
    }
    currEl.classList.add('active')
}








// const e = document.querySelector("#heading")

// console.log(e); => // VM151:1 <h1 class=​"test abc test1" id=​"heading">​Test!​</h1>​

//  e.classList  => // DOMTokenList(3) ['test', 'abc', 'test1', value: 'test abc test1']

// e.className =>// 'test abc test1'

// e.id => // 'heading'

// e.innerHTML => // 'Test!'

// e.outerHTML => // '<h1 class="test abc test1" id="heading">Test!</h1>'














