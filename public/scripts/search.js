$('#business-search').on('input', function() {
 var search = $(this).serialize();
   if(search === "search=") {
     search = "all";
   }
   $.get('/business?' + search, function(data) {
     $('#business-grid').html('');
     data.forEach(function(business) {
       $('#business-grid').append(`
         <div class="col-md-3 col-sm-6">
           <div class="thumbnail">
             <img src="${ business.image }">
             <div class="caption">
               <h4>${ business.name }</h4>
               <p>${ business.address}</p>
               <p>${ business.subCategory}</p>
             </div>
             <p>
               <a href="/business/${ business._id }" class="btn btn-primary">Details</a>
             </p>
           </div>
         </div>
       `);
     });
   });
 });
 
 $('#business-search').submit(function(event) {
   event.preventDefault();
 }); 