<script>
    let visible = false;
    function toggleVisible() {
        visible = !visible
    }
    export let categoryData = {};
    const { HEADING, ALLCAT } = categoryData;
</script>
<!------------------------------------------->
  <!----------------MARKUP----------------------->
  <!------------------------------------------->
  <section id="drawings" class="section">
    <div class="container text-center">
      <h2 class="title text-center">{HEADING}</h2>
      <div class="row mx-5">
        {#each ALLCAT as list}
        <div class="col-md-3">
          <a
            href="{list.url}"
            target="_blank">
            <img src={list.image} alt={list.name} class="service-img" />
          </a>
        </div>
        {/each}
        {#if visible}
            <p>
                This text will hide.
            </p>
        {/if}
      </div>
    </div>
  </section>
  <!------------------------------------------->
  <!----------------STYLE----------------------->
  <!------------------------------------------->
  <style>
    a:hover {
      text-decoration: none;
    }

    .service-img {
      width: auto;
      height: auto;
      margin-top: 30px;
    }
  
    .title {
      text-transform: uppercase;
    }
  
    .title::before {
      content: "";
      background: linear-gradient(90deg, #0072ff 0%, #00d4ff 100%);
      height: 5px;
      width: 200px;
      margin-left: auto;
      margin-right: auto;
      display: block;
      transform: translateY(60px);
    }
  
    .title::after {
      content: "";
      background: linear-gradient(90deg, #0072ff 0%, #00d4ff 100%);
      height: 10px;
      width: 50px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 40px;
      display: block;
      transform: translateY(14px);
    }
  
    @media screen and (max-width:560px){
    h2{
        font-size:25px !important;
    }   
}
 </style>