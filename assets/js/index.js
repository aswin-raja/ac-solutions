
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
  }
  
  function toggleSide() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('open');
  }
  function isClickInsideSidebar(event) {
    var sidebar = document.getElementById("sidebar");
    return sidebar.contains(event.target);
  }
  
  document.addEventListener("click", function (event) {
    var sidebar = document.getElementById("sidebar");
    var header = document.querySelector(".header");
  
    
    if (!isClickInsideSidebar(event) && !header.contains(event.target)) {
      sidebar.classList.remove("open");
    }
  });


  $(document).ready(function() {
    $("#news-slider").owlCarousel({
      items: 3,
      navigationText: ["", ""],
      pagination: true,
      autoPlay: true,
      responsive: {
        0: {
          items: 1 // 1 item on screens less than 600px
        },
        600: {
          items: 2 // 2 items on screens between 600px and 979px
        },
        980: {
          items: 3 // 3 items on screens between 980px and 1199px
        },
        1200: {
          items: 3 // 3 items on screens larger than 1200px
        }
      }
    });
  });



function chatformOpen() {
  var chatform = document.getElementById('chatform');
  const chatIcon = document.getElementById('chatIcon');
  console.log("chatIcon", chatIcon)
  console.log("chatIcon outside", chatIcon.classList)

  if (chatIcon.classList.contains('bi-chat-dots')) {
    console.log("chatIcon inside", chatIcon.classList)
    chatIcon.classList.remove('bi-chat-dots');
    chatIcon.classList.add('bi-x');
    chatform.style.display = 'block';
  } else {
    chatIcon.classList.remove('bi-x');
    chatIcon.classList.add('bi-chat-dots');
    chatform.style.display = 'none';
  }
}


function emailSend() {
  // const name = document.getElementById("name").value;
  // const email = document.getElementById("email").value;
  // const message = document.getElementById("message").value;

  // const data = {
  //   name: name,
  //   email: email,
  //   message: message
  // };

    const data = {
  "name": "Test",
  "email": "test@gmail.com",
  "message": "Test Message",
  "phone": "8098436516",
  "mobile": "04652-260511"
};



  // Call the sendEmail function with the data
  sendEmail(data);
}

function sendEmail(data) {
  const apiUrl = 'https://ezp9wr8del.execute-api.us-east-1.amazonaws.com/dev'; // Your API endpoint
  console.log(data, 'inside');

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    alert('Email sent successfully: ' + JSON.stringify(responseData));
  } catch (error) {
    alert('Error sending email: ' + error.message);
    // Handle errors here
  }
}
