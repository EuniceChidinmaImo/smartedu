import EdHeadsIntegration from "../Components/edheadintegration";
import FAQ from "../Components/faq";
import Features from "../Components/features";
import FinalCTA from "../Components/finalcta";
import Footer from "../Components/footer";
import Header from "../Components/header";
import Hero from "../Components/hero";
import Pricing from "../Components/pricing";
import ProblemSolution from "../Components/problemsolution";
import Testimonials from "../Components/testimonal";
import TrustBar from "../Components/trustbar";




function Home() {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <TrustBar/>
        <ProblemSolution/>
        <Features/>
        <Pricing/>
        <Testimonials/>
        <EdHeadsIntegration/>
        <FAQ/>
        <FinalCTA/>
      </main>
      <Footer/>
    </>
  );
}
export default Home;