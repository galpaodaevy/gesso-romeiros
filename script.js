(() => {
  'use strict';
  const STORE_ADDRESS = 'Estrada dos Romeiros, 3486 - Vila São Silvestre, Barueri - SP, 06417-000';
  const WHATSAPP = '5511978311181';
  const track = (name, label) => {if(typeof window.gtag==='function')window.gtag('event',name,{event_category:'Contato',event_label:label});};
  document.querySelectorAll('.js-whatsapp,.product-link').forEach(link=>{
    const product=link.dataset.product;
    const message=link.dataset.message||(product?`Olá! Vim pelo site da Gesso Romeiros e gostaria de consultar disponibilidade e preço de: ${product}.`:'Olá! Vim pelo site da Gesso Romeiros e gostaria de consultar materiais para minha obra.');
    link.href=`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
    link.addEventListener('click',()=>track('clique_whatsapp',product||'Contato geral'));
  });
  document.querySelectorAll('[data-track]').forEach(link=>link.addEventListener('click',()=>track(link.dataset.track,link.textContent.trim())));
  const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#main-nav');
  const closeMenu=()=>{nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu');};
  menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');nav.classList.toggle('is-open',open);});
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
  document.addEventListener('click',event=>{if(!event.target.closest('.site-header'))closeMenu();});
  const filters=[...document.querySelectorAll('[data-filter]')],cards=[...document.querySelectorAll('.product-card')];
  const filterProducts=category=>{
    const selected=category==='pintura-protecao'?['pintura','protecao']:[category];
    filters.forEach(button=>{const active=selected.includes(button.dataset.filter);button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
    let count=0;cards.forEach(card=>{const visible=category==='todos'||selected.includes(card.dataset.category);card.hidden=!visible;if(visible)count++;});
    document.querySelector('#drywall-inquiry').hidden=category!=='drywall';
    document.querySelector('#product-count').textContent=category==='drywall'?'Consulte a equipe':`${count} ${count===1?'produto':'produtos'}`;
    track('filtro_produto',category);
  };
  filters.forEach(button=>button.addEventListener('click',()=>filterProducts(button.dataset.filter)));
  document.querySelectorAll('[data-pick]').forEach(link=>link.addEventListener('click',()=>filterProducts(link.dataset.pick==='pintura'?'pintura-protecao':link.dataset.pick)));
  const copyButton=document.querySelector('.copy-address');
  copyButton.addEventListener('click',async()=>{
    const status=document.querySelector('.copy-status');
    try{
      if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(STORE_ADDRESS);
      else{const area=document.createElement('textarea');area.value=STORE_ADDRESS;area.setAttribute('readonly','');area.style.cssText='position:fixed;left:-9999px;top:0';document.body.appendChild(area);area.select();const copied=document.execCommand('copy');area.remove();copyButton.focus();if(!copied)throw new Error('copy failed');}
      status.textContent='Endereço copiado. Até já!';track('copiar_endereco',STORE_ADDRESS);
    }catch{status.textContent='Não foi possível copiar. Endereço: '+STORE_ADDRESS;}
  });
  const productDialog=document.querySelector('#product-dialog');
  document.querySelectorAll('.product-visual').forEach(link=>{
    const card=link.closest('.product-card');
    // Preserve a useful image link even if scripting or the dialog API is unavailable.
    link.href=link.querySelector('img').src;
    link.removeAttribute('target');
    link.setAttribute('aria-label','Ampliar imagem: '+card.querySelector('h3').textContent);
    link.addEventListener('click',event=>{
      if(!productDialog.showModal)return;
      event.preventDefault();
      const image=productDialog.querySelector('img');image.src=link.querySelector('img').src;image.alt=link.querySelector('img').alt;
      productDialog.querySelector('h2').textContent=card.querySelector('h3').textContent;
      productDialog.querySelector('.dialog-description').textContent=card.querySelector('.product-description').textContent;
      const contact=productDialog.querySelector('.dialog-contact');contact.href=card.querySelector('.product-link').href;contact.dataset.selectedProduct=card.querySelector('h3').textContent;
      productDialog.showModal();
    });
  });
  productDialog.querySelector('.dialog-close').addEventListener('click',()=>productDialog.close());
  productDialog.querySelector('.dialog-contact').addEventListener('click',event=>track('clique_whatsapp',event.currentTarget.dataset.selectedProduct));
  productDialog.addEventListener('click',event=>{if(event.target===productDialog){const rect=productDialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)productDialog.close();}});
  document.querySelector('#year').textContent=String(new Date().getFullYear());
})();
