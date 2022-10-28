(function(){
    'use strict';
    const form = document.querySelector('.form');
    const radioInput = document.querySelectorAll('.form__radio-input')
    const ratingCard = document.querySelector('.rating-card')
    
    let ratingValue;
    console.log(radioInput);

    radioInput.forEach(function(input){
      input.addEventListener('change', function(evt){
        ratingValue = evt.target.value;
      })
    })

    form.addEventListener('submit', function(evt){
      evt.preventDefault()
      if(!ratingCard) return;
      renderThanksContent(ratingCard, ratingValue);
    })

    function renderThanksContent(container, ratingValue) {
      container.innerHTML =`
      <div class="thanks">
        <img src="images/illustration-thank-you.svg" alt="thankyou" class="thanks-img">
        <p class="result"> You selected ${ratingValue} out of 5</p>
        <h1 class="thanks__title">Thank you!</h1>
        <p class="thanks__desc">We appreciate you taking the time to give rating.
          If you ever need more support, don’t hesitate to get in touch!
        </p>
      </div>
      `
    }
})();