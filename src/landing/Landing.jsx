import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ExtraFooter from './ExtraFooter.jsx'
import Hero from './Hero.jsx'
import WhyChoose from './WhyChoose.jsx'
import FAQ from './FAQ.jsx'
import Plans from './Plans.jsx'
import Subscription from './Subscription.jsx'
import Testimonials from './Testimonials.jsx'

function Landing() {

  return (
    <>
    <div id="Hero">
            <Hero/>
        </div>
        <div id="WhyChoose">
        <WhyChoose/>
        </div>
        <FAQ/>
        <div id="Plans">
        <Plans/>
        </div>
        <div id="Contact">
        <Subscription/>
        </div>
        <Testimonials/>
        </>
    );
};


export default Landing
