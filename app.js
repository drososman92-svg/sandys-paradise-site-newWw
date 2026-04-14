
function openBookingPlaceholder(e){
  if(e){e.preventDefault();}
  const target = document.getElementById('booking');
  if(target){ target.scrollIntoView({behavior:'smooth'}); }
}
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-booking-placeholder]').forEach(a=>{
    a.addEventListener('click', openBookingPlaceholder);
  });
});
