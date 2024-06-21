const policy = document.querySelector('#privacy');
const nda = document.querySelector('#nda');
document.querySelector('.privacy-policy').addEventListener('click', ()=>{
  policy.style.display = 'inline-block';
  nda.style.display = 'none';
});

document.querySelector('.non-disclosure').addEventListener('click', ()=>{
  policy.style.display = 'none';
  nda.style.display = 'inline-block';
});

document.querySelector('.goto-shop-btn').addEventListener('click', ()=>{
  document.location.href = 'menu.html'
})