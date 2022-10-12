<!--src/Components/Banner/Banner.svelte-->

<script>
    import Carousel from 'svelte-carousel'
    let currentSlideItem = 0;
    export let bannerData = {};
    const { HEADING, DECRIPTION, TUTORIAL_URL, WATCH_TUTORIAL, CAROUSEL_DATA } = bannerData;
  </script>
  <!------------------------------------------->
  <!----------------MARKUP----------------------->
  <!------------------------------------------->
  <section class="main-bgcolor light-color" id="banner">
    <div class="container">
      <div class="row">
        <!-- <div class="col-md-6">
          <h1>{HEADING}</h1>
          <p>{DECRIPTION}</p>
          <a href={TUTORIAL_URL} target="_blank" class="light-color">
            <i class="far fa-play-circle fa-2x watch-btn" />
            {WATCH_TUTORIAL}
          </a>
        </div>
        <div class="col-md-6">
          <img src="images/home.png" alt="" class="img-fluid" />
        </div> -->
        <Carousel
			    autoplay 
			    autoplayDuration={5000}
		    >
        {#each bannerData as item}
          <a href={item.curl} target="_blank" class="light-color">
            <img src={item.cimage} alt={item.ctext} width={400} height={300}/>
          </a>
        {/each}
        </Carousel>
      </div>
    </div>
    <img src="images/wave1.png" alt="" class="wave-img" />
  </section>
  <!------------------------------------------->
  <!----------------STYLE----------------------->
  <!------------------------------------------->
  <style>
    section {
      padding-top: 5%;
    }
  
    h1 {
      font-size: 40px;
      font-weight: 600;
      margin-top: 100px;
      text-transform: uppercase;
    }
  
    .watch-btn {
      margin: auto 20px;
      position: relative;
      top: 8px;
    }
  
    section a {
      text-decoration: none;
    }
  
    .wave-img {
      width: 100%;
      height: auto;
    }
  </style>