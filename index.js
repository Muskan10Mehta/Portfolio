$("document").ready(function () {
  $(".home-block").hover(
    function () {
      $(".home-block").css({ "background-color": "white", color: "coral" });
      $("body").css({ "background-color": "coral" });
    },
    function () {
      $(".home-block").css({ "background-color": "black", color: "white" });
      $("body").css({ "background-color": "white" });
    }
  );

  $(".education-block").hover(
    function () {
      $(this).css({ "background-color": "white", color: "#94C973" });
      $("body").css({ "background-color": "#94C973" });
      $("hr").css({ "background-color": "#94C973" });
    },
    function () {
      $(this).css({ "background-color": "black", color: "white" });
      $("body").css({ "background-color": "white" });
      $("hr").css({ "background-color": "white" });
    }
  );

  $(".activity-block").hover(
    function () {
      $(this).css({ "background-color": "white", color: "#7EC8E3" });
      $("body").css({ "background-color": "#7EC8E3" });
      $("hr").css({ "background-color": "#7EC8E3" });
    },
    function () {
      $(this).css({ "background-color": "black", color: "white" });
      $("body").css({ "background-color": "white" });
      $("hr").css({ "background-color": "white" });
    }
  );

  $(".competency-block").hover(
    function () {
      $(this).css({ "background-color": "white", color: "#FDDD5C" });
      $("body").css({ "background-color": "#FDDD5C" });
      $("hr").css({ "background-color": "#FDDD5C" });
    },
    function () {
      $(this).css({ "background-color": "black", color: "white" });
      $("body").css({ "background-color": "white" });
      $("hr").css({ "background-color": "white" });
    }
  );

  $(".projects-block").hover(
    function () {
      $(this).css({ "background-color": "white", color: "#b19cd9" });
      $("body").css({ "background-color": "#b19cd9" });
      $("hr").css({ "background-color": "#b19cd9" });
    },
    function () {
      $(this).css({ "background-color": "black", color: "white" });
      $("body").css({ "background-color": "white" });
      $("hr").css({ "background-color": "white" });
    }
  );

  $(".zine-block").hover(
    function () {
      $(this).css({ "background-color": "white", color: "#FB8DA0" });
      $("body").css({ "background-color": "FB8DA0" });
      $("hr").css({ "background-color": "#FB8DA0" });
    },
    function () {
      $(this).css({ "background-color": "black", color: "white" });
      $("body").css({ "background-color": "white" });
      $("hr").css({ "background-color": "white" });
    }
  );
});
