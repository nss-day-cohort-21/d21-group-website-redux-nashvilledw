console.log("joblisting");
/********************************
PAGE: JOBLISTING
*********************************/


/* JavaScript pushes "openJobs" in the "jobs" array to "joblisting.html" */

let jobs = [
{
  name: "Employee Character Artist",
  description: "Draw our employees.   Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." 
},
{
  name: "Watch Designer",
  description: "Make mad-dope watches.   Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." 
},
{
  name: "Marketing Guru",
  description: "Get people to buy our stuff.  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." 
},
{
  name: "Watch Tinker",
  description: "Tinker, Tinker, Tinker.   Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." 
}
];

jobs.forEach(function(item){
  document.getElementById("openJobs").innerHTML += `<li><h2>${item.name}</h2></li> <ul><li>${item.description}</li></ul> <ul><li><a href="apply.html">Click To Apply</a></li></ul>`
});






