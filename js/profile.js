/*************************************************************
** profile.js
**
** Manage of user auth.
** By Victor Malumbres - 09/02/2021
***************************************************************/

/****************** Constantes y variables ********************/

// Spotify Developer Tokens
const spotify_dev_client = {
	"id": "8b14be124dad4136a23aeab55d1a1170",
	"private": "7f9905ded68d41ab8dd325287e9ef233",
};

// Uri para login de usuario
const spotify_auth_uri = "https://accounts.spotify.com/authorize";

// Uri de redirección para auth. de usuarios
const redirection_uri = "http://example.com/callback/";

// Usuario de spotify de prueba
const spotify_test_user = {
	"email":"malum96@hotmail.com",
	"password":"XXXXXXXX",
};

/***************************** APP ****************************/
// Logging del módulo 
console.log("[LOG] Profile Module");

// App
window.onSpotifyWebPlaybackSDKReady = () => {
  
  // TEST DE AUTH. DE USUARIO

  // Uri con argumentos para logear usuario
  var uri = spotify_auth_uri + "?response_type=code" + "&client_id=" + spotify_dev_client.id + "&redirect_uri=" + redirection_uri;
  
  // Método GET a la api apra auth.
  //$.get(uri);

  $.ajax({
    url: uri,
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
    method: 'GET',
    dataType:'jsonp',
    success: function(data){
      console.log('succes: '+ data);
    }
  });
 
};

