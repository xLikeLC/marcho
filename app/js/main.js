$(function () {
  $(".top-slider__inner").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpead: 2000,
  });

  $(".star").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffdb9d",
    readOnly: true,
  });
});
