$(document).ready(function () {

      $("#currentDay").text(moment().format("dddd, MMM DD, YYYY - h:mm:ss a")); 
    
      var modal = document.getElementById("myModal");
      var span = document.getElementsByClassName("sayNo")[0];
      var clear = document.getElementsByClassName("sayYes")[0];
      var btn = document.getElementById("clearTask");
    
      btn.onclick = function () {modal.style.display = "block";};
    
      window.onclick = function (event) {
      if (event.target == modal) {modal.style.display = "none";}
      };
    
      span.onclick = function () {modal.style.display = "none";};
    
      clear.onclick = function () {modal.style.display = "none";
      localStorage.clear();
      window.location.reload();
      };
      
      $(".saveBtn").on("click", function () {
        var content = $(this).siblings(".description").val(); 
        var timeStamp = $(this).parent().attr("id");
    
      localStorage.setItem(timeStamp, content);
      })
      $("#hour9 .description").val(localStorage.getItem("hour9"));
      $("#hour10 .description").val(localStorage.getItem("hour10"));
      $("#hour11 .description").val(localStorage.getItem("hour11"));
      $("#hour12 .description").val(localStorage.getItem("hour12"));
      $("#hour13 .description").val(localStorage.getItem("hour13"));
      $("#hour14 .description").val(localStorage.getItem("hour14"));
      $("#hour15 .description").val(localStorage.getItem("hour15"));
      $("#hour16 .description").val(localStorage.getItem("hour16"));
      $("#hour17 .description").val(localStorage.getItem("hour17"));
      $("#hour18 .description").val(localStorage.getItem("hour18"));
    
      function trackTime() {
      var currentHour = moment().hour(); 
    
      $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
    
      if (timeBlock < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
        }
      else if (timeBlock === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
        }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
        }
          })
      }
    //REPEAT THE TRACKER
      trackTime(); 
    })
    