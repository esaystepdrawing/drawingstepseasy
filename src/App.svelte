<!--src/App.svelte-->
<script>
	import Navbar from "./Components/Navbar/Navbar.svelte";
	import Banner from "./Components/Banner/Banner.svelte";
	import Drawings from "./Components/Drawings/Drawings.svelte";
	import About from "./Components/About/About.svelte";
	import Testimonials from "./Components/Testimonials/Testimonials.svelte";
	import Social from "./Components/Social/Social.svelte";
	import Footer from "./Components/Footer/Footer.svelte";
	import DATA from "./Data/data";
  import Category from "./Components/Category/Category.svelte";
</script>
  
  <!-- Navbar -->
  <Navbar navlists={DATA.NAVBAR_DATA} header={DATA.HEADER} />
  <!-- Banner -->
  <Banner bannerData={DATA.BANNER_DATA} } />
  <!-- Category -->
  <Category categoryData={DATA.CATEGORY_DATA} />
  <!-- Services -->
  <!-- <Drawings serviceData={DATA.SERVICE_DATA} /> -->
  <!-- About -->
  <About aboutData={DATA.ABOUT_DATA} />
  <!-- Testimonials -->
  <Testimonials testimonialData={DATA.TESTIMONIAL_DATA} />
  <!-- Social Media -->
  <Social socialData={DATA.SOCIAL_DATA} />
  <!-- Footer -->
  <Footer footerData={DATA.FOOTER_DATA} header={DATA.HEADER} />
