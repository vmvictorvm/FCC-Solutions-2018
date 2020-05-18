<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('sendMessage').onclick=function(){
    
      var userName=document.getElementById('name').value;
      // Add your code below this line
      req=new XMLHttpRequest();
      req.open("POST",url,true);
      req.setRequestHeader('Content-Type','text/plain');
      req.onreadystatechange=function(){
        if(req.readyState==4 && req.status==200){
          document.getElementsByClassName('message')[0].innerHTML=req.responseText;
        }
      };
      req.send(userName);
      
      // Add your code above this line
    };
  });
</script>
<style>
  body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
  }
  button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
  }
</style>
<h1>Cat Friends</h1> 
<p class="message box">
  Reply from Server will be here
</p>
<p>
  <label for="name">Your name:
    <input type="text" id="name"/>
  </label>
  <button id="sendMessage">
    Send Message
  </button>
</p>