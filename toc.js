
String.prototype.toTitleCase = function () {

  var str = this.valueOf();
  
  var split = str.toLowerCase().split(" ");
  for (let i = 0; i < split.length; i++) {
    split[i] = split[i][0].toUpperCase() + split[i].slice(1);
  }
  
  return split.join(" ");
}


function toc (recurse){
// TODO create separate read me creation for each recursive directory
const { exec } = require('child_process');

try {
  var command = 'find . \( ! -regex \'.*\' \) -name \'*.md\'  ' ;

  if (recurse){
    command = 'find . \( ! -regex \'.*/\\..*\' \) -name \'*.md\'  ' ;
  }
  exec(command , (err, listing, stderr) => {

    if (err) {
      // node couldn't execute the command
      return;
    }

    const findDocument = /^(.*)(\.md)$/gm;
    const findTitle = /^((.*\/)*)(.*)(\.md)$/;

    const trimLeading = /^(\.\/)(.*)$/;


    var documents = listing.match(findDocument);
  
    for (const d of documents){

      var title = d.replace(findTitle, '$3')
      .replace('-',' ')
      .toTitleCase()
      ;
      
      var path = d.replace(trimLeading,'$2')

      console.log(`[${title}](${path})\n\n`);
    }   
  });
  
}
catch(e){

}
}


toc(true);
