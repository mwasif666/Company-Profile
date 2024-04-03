// $(document).ready(function () {
//   var header = $(".card-header");
//   var headerOffset = header.offset().top;

//   $(window).scroll(function () {
//     // Get the current scroll position
//     var scrollPosition = $(window).scrollTop();

//     // Check if the scroll position is greater than or equal to the initial offset of the header
//     if (scrollPosition >= headerOffset) {
//       // If so, add the sticky class to the header
//       header.addClass("sticky");
//     } else {
//       // If not, remove the sticky class from the header
//       header.removeClass("sticky");
//     }
//   });
// });

// $(document).ready(function () {
//   $(".img-1-sti").on("click", function () {
//     $(".img-1-sti").hide();
//     $(".hide-image").show();
//   });
//   $(".img-2-sti").on("click", function () {
//     $(".img-1-sti").show();
//     $(".hide-image").hide();
//   });

//   $(".hide-image").on("click", function () {
//     $(".hide-image").hide();
//     $(".img-1-sti").show();
//   });
// });
// $(document).ready(function () {
//   var isCard3Visible = false; // Flag to track if card-3 is visible

//   $(window).scroll(function () {
//     // Calculate the offset and height of the card-3 section
//     var card3Offset = $(".card-body-3").offset().top;
//     var windowHeight = $(window).height();
//     var scrollPosition = $(this).scrollTop();

//     // Check if the card-3 section is in the viewport
//     if (card3Offset < scrollPosition + windowHeight && !isCard3Visible) {
//       // If card-3 section becomes visible, add black-background class to card-header
//       $(".card-header-3").addClass("black-background");
//       isCard3Visible = true; // Set flag to true to prevent repetitive execution
//     } else if (card3Offset > scrollPosition + windowHeight && isCard3Visible) {
//       // If card-3 section is scrolled out of view, remove black-background class from card-header
//       $(".card-header-3").removeClass("black-background");
//       isCard3Visible = false; // Reset the flag
//     }
//   });
// });
$(document).ready(function () {
  var headerOffset = $(".card-header-3").offset().top;

  $(window).scroll(function () {
    var scrollPosition = $(this).scrollTop();

    if (scrollPosition >= headerOffset) {
      $(".card-header-3").addClass("sticky").css("background-color", "black");
    } else {
      $(".card-header-3")
        .removeClass("sticky")
        .css("background-color", "transparent");
    }
  });
});
$(document).ready(function () {
  var headerOffset = $(".card-heading-5").offset().top;

  $(window).scroll(function () {
    var scrollPosition = $(this).scrollTop();

    if (scrollPosition >= headerOffset) {
      $(".card-heading-5").addClass("sticky2").css("background-color", "black");
    } else {
      $(".card-heading-5")
        .removeClass("sticky2")
        .css("background-color", "#edecec");
    }
  });
});


// Counter

function animateCounterWhenVisible(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter();
      observer.unobserve(entry.target);
    }
  });
}

function animateCounter() {
  const counters = document.querySelectorAll('.counter');
  const speed = 100; // Adjust the speed of counting (lower is faster)

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const inc = target / speed;
    let count = 0;

    const updateCount = () => {
      if (count < target) {
        count += inc;
        counter.innerText = Math.ceil(count);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target.toLocaleString(); // Format number with commas
      }
    };

    updateCount();
  });
}

const observer = new IntersectionObserver(animateCounterWhenVisible, { threshold: 0 });

document.querySelectorAll('.animation-start').forEach(item => {
  observer.observe(item);
});
