import Layout from '@/components/layout/Layout';
import Pagetitle2 from '@/components/sections/Pagetitle2';
import Project1 from '@/components/sections/Project1';
import Feature2 from '@/components/sections/Feature2';
import Cta21 from '@/components/sections/Cta21';
import Cta3 from '@/components/sections/Cta3';
import Partner2 from '@/components/sections/Partner2';
import Faqs1 from '@/components/sections/Faqs1';
import Roadmap from '@/components/sections/Roadmap';
import Tiersystem from '@/components/sections/Tiersystem';
import Team2 from '@/components/sections/Team2';

import Project22 from '@/components/sections/Project22';
import Technology from '@/components/sections/Technology';
import Project23 from '@/components/sections/Project23';
import Token2 from '@/components/sections/Token2';
export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Pagetitle2 />
        <Project1 />
        <div className="bg_body">
          <div className="bg_h2">
            {/* <img src="/assets/images/backgroup/bg_home2.png" alt="" /> */}
          </div>
          {/* <Project22 />
            <Token2 />
            <Technology />
          <Project23 />
            */}
          <Tiersystem />
          <Feature2 />
          <Roadmap />
          <Team2 />
        </div>
        <Partner2 />
        <Cta21 />
        <Faqs1 />
        <Cta3 />
      </Layout>
    </>
  );
}
