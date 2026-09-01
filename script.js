/* =============================================================
   GESSO ROMEIROS — script.js
   Configure os links da loja aqui embaixo.
   ============================================================= */

// 1) Cole o link da loja da Shopee entre as aspas:
const SHOPEE_URL = "https://shopee.com.br/gessoromeiros";

// 2) Número de WhatsApp da loja, com DDI + DDD, apenas números:
//    Exemplo para (11) 4210-1263 -> "5511942101263" (confirme o 9º dígito com a loja)
const WHATSAPP_NUMBER = "5511978311181";

// Mensagem pré-preenchida enviada ao abrir o WhatsApp
const WHATSAPP_MESSAGE = "Olá! Vim pelo site da Gesso Romeiros e gostaria de consultar um produto.";

// Endereço usado no botão "Como chegar"
const STORE_ADDRESS = "Estr. dos Romeiros, 3486 - Vila São Silvestre, Barueri - SP, 06417-000";

(function () {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(STORE_ADDRESS)}`;

  document.querySelectorAll(".js-shopee").forEach((el) => {
    el.setAttribute("href", SHOPEE_URL);
  });

  document.querySelectorAll(".js-whatsapp").forEach((el) => {
    el.setAttribute("href", whatsappUrl);
  });

  const comoChegar = document.getElementById("comoChegar");
  if (comoChegar) comoChegar.setAttribute("href", directionsUrl);

  // Header com sombra ao rolar
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Menu mobile
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
// Evento Google Analytics - clique no WhatsApp
document.querySelectorAll('.js-whatsapp').forEach(function(botao) {
  botao.addEventListener('click', function() {
    if (typeof gtag === 'function') {
      gtag('event', 'clique_whatsapp', {
        event_category: 'Contato',
        event_label: 'WhatsApp'
      });
    }
  });
});
// Evento Google Analytics - clique na Shopee
document.querySelectorAll('.js-shopee').forEach(function(botao) {
  botao.addEventListener('click', function() {
    if (typeof gtag === 'function') {
      gtag('event', 'clique_shopee', {
        event_category: 'Venda',
        event_label: 'Shopee'
      });
    }
  });
});
