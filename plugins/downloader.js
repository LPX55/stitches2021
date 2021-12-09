import Vue from 'vue'
// import fileDownload from 'js-file-download'
const fontAwesomePath =
  "https://use.fontawesome.com/releases/v5.6.3/css/all.css";
const fontAwesomeIntegrity =
  "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/";
const stitchesHTML = (html) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.4/tailwind.min.css">
    <link rel="stylesheet" href=${fontAwesomePath} integrity=${fontAwesomeIntegrity} crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
    html, body{
      font-family: 'IBM Plex Sans KR' !important;
    }
    .bg-dj-gold{
      background-color: #a68e5e;
    }
    </style>
    <title>Doongji Smart Portfolio</title>
    <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=9qtbyzo7a3"></script>

  </head>
  <body>

  ${html}
  </body>
</html>`;


Vue.use({
  install(vueInstance, options){
    vueInstance.prototype.$download = function(list) {
      Promise.all(
        list.map((template) =>
          fetch(`/templates/${template}.html`).then((response) => response.text())
        )
      ).then((templateString) => {
        const html = templateString.join("");
        localStorage.setItem('tempHTML', JSON.stringify(stitchesHTML(html)));
        // fileDownload(stitchesHTML(html), "stitches.html");
      });
    }
  }
})
