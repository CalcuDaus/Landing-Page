document.querySelector('.menu').addEventListener('click',()=>{
    const dropdown = document.querySelector('.dropdown');
    if(dropdown.classList.contains('h-[164px]')){
        dropdown.classList.replace('h-[164px]','h-0');
        dropdown.classList.replace('p-4','p-0');
    } else if(dropdown.classList.contains('h-0')){
        dropdown.classList.replace('h-0','h-[164px]');
        dropdown.classList.replace('p-0','p-4');
    }
})

document.querySelector('.darkmode').addEventListener('click',()=>{
    document.documentElement.classList.toggle('dark')
})