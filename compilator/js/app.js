// uikit handle modals 
$(document).ready(function() {
    // hidden the headers modals 
    UIkit.modal(pictures_modal).hide();
    UIkit.modal(contacts_modal).hide();
    UIkit.modal(bio_modal).hide();
    // pictures swiper 
    const picturesSwiper = new Swiper('.pictures_swiper_container', {
        direction: 'horizontal',
        observeParents: true,
        observer: true,
        loop: true,

        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      });
});
