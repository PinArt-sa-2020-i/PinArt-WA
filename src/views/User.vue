<template>
  <div class="home">
    <div class="columns">
      <div class="container profile">
        <div class="modal" id="edit-preferences-modal">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Editar Perfil</p>
              <Button class="delete"></Button>
            </header>
          </div>
        </div>
        <div class="section profile-heading">
          <div class="columns is-mobile is-multiline">
            <div class="column is-2">
              <span class="header-icon user-profile-image">
                <img src="https://i.imgur.com/XTNBAGt.jpg">
              </span>
            </div>
            <div class="column is-4-tablet is-10-mobile name">
              <p>
                <span class="title is-bold">Tom Perez</span>
                <br/>
                <a class="button is-primary is-outlined" href="#" id="edit-preferences"
                   style="margin: 5px 0">
                  Editar Perfil
                </a>
                <br/>
              </p>
              <p class="tagline">
                La descripcion iria aca
              </p>
            </div>
            <div class="column is-2-tablet is-4-mobile has-text-centered">
              <p class="stat-val">30</p>
              <p class="stat-key">Seguidores</p>
            </div>
            <div class="column is-2-tablet is-4-mobile has-text-centered">
              <p class="stat-val">0</p>
              <p class="stat-key">Tableros</p>
            </div>
            <div class="column is-2-tablet is-4-mobile has-text-centered">
              <p class="stat-val">3</p>
              <p class="stat-key">Pines</p>
            </div>
          </div>
        </div>
        <div class="profile-options is-fullwidth">
          <div class="tabs is-fullwidth is-medium">
            <ul>
              <li class="link">
                <a>
              <span class="icon">
                <i class="fa fa-list"></i>
              </span>
                  <span>Tableros</span>
                </a>
              </li>
              <li class="link is-active">
                <a>
                  <span>Pines</span>
                </a>
              </li>
              <li class="link">
                <a>
                  <span>Seguidores</span>
                </a>
              </li>
<!--              <li class="link">
                <a>
                  <span>Etiquetas</span>
                </a>
              </li>-->
            </ul>
          </div>
        </div>
        <div class="columns is-mobile">
<!--          Ejemplo tablero-->
          <div class="column is-3-tablet is-6-mobile">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="http://placehold.it/300x225"/>
                </figure>
              </div>
              <div class="card-content">
                <span class="tag is-dark subtitle">#1</span>
                <p>Personal Notes on the Property </p>
              </div>
            </div>
          </div>
          <br/>
        </div>
      </div>
    </div>
  <!-- <div class="user__profile">
     <div class="user__header-wrapper">
       <div class="user__header-left">
         <h1>Example</h1>
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
      &lt;!&ndash; <div class="user__pins">
         <pin-card class="card&#45;&#45;create" @click.native="isActive = true" :hasOverlay="false">
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
       </div>&ndash;&gt;
     </div>
    </div>-->

  </div>

</template>

<script>
</script>
