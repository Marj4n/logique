// random avatars
fetch("https://randomuser.me/api/?results=5")
  .then((res) => res.json())
  .then((data) => {
    const container = document.querySelector(".testimonial-avatars");
    const users = data.results;
    const sizes = ["small", "medium", "large", "medium", "small"];
    users.forEach((user, index) => {
      const img = document.createElement("img");
      img.src = user.picture.medium;
      img.classList.add("avatar", sizes[index]);
      container.appendChild(img);
    });
  });

$(document).ready(function () {
  // toggle menu burger (mobile)
  $("#menu-toggle").on("click", function () {
    if ($(window).width() < 992) {
      $(this).toggleClass("active");
      $("#nav-links").toggleClass("show");
    }
  });

  // reset tampilan pas balik ke desktop
  $(window).on("resize", function () {
    if ($(window).width() >= 992) {
      $("#nav-links").removeAttr("style").removeClass("show");
      $("#menu-toggle").removeClass("active");
    }
  });

  // hover animasi jQuery (desktop only)
  $(".nav-links li a")
    .on("mouseenter", function () {
      if ($(window).width() >= 992) {
        $(this).stop(true).animate({ color: "#706fe5" }, 200);
      }
    })
    .on("mouseleave", function () {
      if ($(window).width() >= 992) {
        $(this).stop(true).animate({ color: "#1e1f4b" }, 200);
      }
    });
});

$(".hero-image").css({
  opacity: 0,
  position: "relative",
  right: "-100px",
});

$(window).on("load", function () {
  $(".hero-image")
    .animate({ opacity: 1, right: "0px" }, 900, "swing")
    .addClass("show");
});
