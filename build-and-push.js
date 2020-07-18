const { exec } = require('child_process');

function toc (){
  // TODO create separate read me creation for each recursive directory
    try {
      exec('node ./toc.js > README.md' , (err, listing, stderr) => {
    
        if (err) {
          // node couldn't execute the command
          console.log(err);
          return;
        }
      })
    }
    catch(e){
    
    }
  }


function push(){
  var commitMessage = 'commit' 
  if (!typeof(process.argv[2]) != undefined ){
    commitMessage = process.argv[2];
  }

  try {
    exec('git add . ' , (err, listing, stderr) => {

      if (err) {
        // node couldn't execute the command
        console.log(err);
        return;
      }
    })
  }
  catch(e){
    return;
  }

  try {
    exec(`git commit -m '${commitMessage}' ` , (err, listing, stderr) => {

      if (err) {
        // node couldn't execute the command
        console.log(err);
        return;
      }
    })
  }
  catch(e){
    return;
  }

  try {
    exec('git push' , (err, listing, stderr) => {

      if (err) {
        // node couldn't execute the command
        console.log(err);
        return;
      }
    })
  }
  catch(e){
    return;
  }
}

toc();
push();