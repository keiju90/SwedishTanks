welcome = (req, res) => {
  console.log('welcome page');
  
   res.status(200)
   res.send(
          `
            <h1>Welcome to SwissSwe</h1>
            <button onClick="tank()">tanks</button>       
           
            <script>
               function tank(){
                   console.log("clicked tank");
               }
            </script>
            `
       );
   };

module.exports = {
   welcome: welcome,
} 