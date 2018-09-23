const cowsay = require('cowsay');
const shell = require('shelljs');

shell.cp('-R', 'dist/static/js/*', 'snippets');
shell.cp('-R', 'dist/static/css/*', 'snippets');

shell.cp('snippets/app.css', 'snippets/abo-styles.php');
shell.cp('snippets/app.js', 'snippets/abo-app.php');
shell.cp('snippets/vendor.js', 'snippets/abo-vendor.php');
shell.cp('snippets/manifest.js', 'snippets/abo-manifest.php');

shell.rm('snippets/app.css.map');
shell.rm('snippets/app.js.map');
shell.rm('snippets/manifest.js.map');
shell.rm('snippets/vendor.js.map');

shell.rm('snippets/app.css');
shell.rm('snippets/app.js');
shell.rm('snippets/manifest.js');
shell.rm('snippets/vendor.js');


// copy snippets folder to schluck Repo
shell.cp('-R', 'snippets/*', '../schluck/site/snippets/');

console.log(cowsay.say({
  text: 'Files renamed, copied and saved in "snippets"',
  e: 'oO',
  T: 'U'
}));
