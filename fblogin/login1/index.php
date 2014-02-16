<!doctype html>
<?php 
error_reporting(E_ALL & ~E_NOTICE);
   //include 'funciones/funciones.php'; 
   session_start();
   $_SESSION = array();
   session_destroy();
?>
<html>
<head>
<meta charset="utf-8">
<title></title>
<link rel="stylesheet" type="text/css" href="styleindex.css" />

<script>
  window.fbAsyncInit = function() {
  FB.init({
    appId      : '632915023441526',
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true  // parse XFBML
  });

  FB.Event.subscribe('auth.authResponseChange', function(response) {
    //Verifica si esta conectado a fb y a la aplicacion
    if (response.status === 'connected') {
      //se procede a las acciones que designemos
      seLogueo();
    } else if (response.status === 'not_authorized') {
      //si no esta autorizado, es decir esta conectado a fb pero no ha concedido los permisos para la aplicacion
      //se ejecuta el metodo login(). para que ingrese sus credenciales
      FB.login();
    } else {
      //si no esta autorizado, ni conectado al fb
      //se ejecuta el metodo login(). para que ingrese sus credenciales
      FB.login();
    }
  });
  };

  // Load the SDK asynchronously
  (function(d){
   var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement('script'); js.id = id; js.async = true;
   js.src = "//connect.facebook.net/es_ES/all.js";
   ref.parentNode.insertBefore(js, ref);
  }(document));

  //Aqui definimos las acciones a realizar cuando ya esta logueado
  function seLogueo() {
    console.log('Bienvenido');
    FB.api('/me', function(response) {
      alert('Bienvenido: ' + response.name + '.');
      document.location.href = "logueado.html";
    });
  }
</script>

</head>
<body>
<div id="fb-root"></div>
<div class="titulo font-effect-3d">
  <p>XtroverSion Login</p>
</div>
<div class='login' id='main'>

  <div id='credenciales'>

    <form action="" method="post">

     <label class = "loginV" for="user">Usuario:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <input class = "pass" name="usuario" type="text" id="user" maxlength="10" />
      <br>
      <label class = "loginV" for="pass2">Contraseña:&nbsp;</label>
      <input class = "pass" name="password" type="password" id="pass" />
      <br>
      <div class = "loginFB">
        <input class = "loginB" name="enviar" type="submit" id="Enviar" value="INGRESAR" />
      </div>
      <fb:login-button max_rows="1" class="fb_button" size="xlarge" show_faces="false" auto_logout_link="true"></fb:login-button>

      <br>
    </form>
    
  </div>

</div>

<?php 
  switch ($_POST['enviar']) {
    case 'INGRESAR':
      //todo lo que tengas que hacer con tu conexion a la base de datos
      //y autenticacion de tus usuarios
  }
?>

</body>
</html>