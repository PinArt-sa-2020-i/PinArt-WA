<template>
  <div class="home">

   <div class="user__profile">
     <div class="user__header-wrapper">
       <div class="user__header-left">
         <h1>Jungkook</h1>
         <div  class="user__follow">
           <div>
             <p>6</p>
             <h6>Seguidores</h6>
           </div>
           <div>
             <p>6</p>
             <h6>Siguiendo</h6>
           </div>
         </div>
       </div>
       <div class="user__header-right">
         <figure class="image is-128x128">
          <img src="//i.imgur.com/XTNBAGt.jpg" class="is-rounded" >
         </figure>
       </div>
     </div>
     <div class="user__profile-content">
       <h3>Pins</h3>
       <div class="user__pins">
         <pin-card class="card--create" @click.native="isActive = true" :hasOverlay="false">
           <div class="card__content">
             <div class="card__create-icon">
               <svg class="svg__icon" height="40" width="40" viewBox="0 0 24 24"><title></title>
                 <path d="M17.75,
                 13.25 L13.25,
                 13.25 L13.25,
                 17.75 C13.25,
                 18.44 12.69,
                 19.00 12.00,
                 19.00 C11.31,
                 19.00 10.75,
                 18.44 10.75,
                 17.75 L10.75,
                 13.25 L6.25,
                 13.25 C5.56,
                 13.25 5.00,
                 12.69 5.00,
                 12.00 C5.00,
                 11.31 5.56,
                 10.75 6.25,
                 10.75 L10.75,
                 10.75 L10.75,
                 6.25 C10.75,
                 5.56 11.31,
                 5.00 12.00,
                 5.00 C12.69,
                 5.00 13.25,
                 5.56 13.25,
                 6.25 L13.25,
                 10.75 L17.75,
                 10.75 C18.44,
                 10.75 19.00,
                 11.31 19.00,
                 12.00 C19.00,
                 12.69 18.44,
                 13.25 17.75,
                 13.25 M12.00,
                 0.00 C5.37,
                 0.00 0.00,
                 5.37 0.00,
                 12.00 C0.00,
                 18.63 5.37,
                 24.00 12.00,
                 24.00 C18.63,
                 24.00 24.00,18.63 24.00,12.00 C24.00,5.37 18.63,0.00 12.00,0.00"></path>
               </svg>
             </div>
           </div>
           <h5 slot="meta">Create Pin</h5>
         </pin-card>
       </div>
     </div>
    </div>

  </div>

</template>
