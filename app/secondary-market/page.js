import Layout from '@/components/layout/Layout';

import Cta1 from '@/components/sections/.Cta1';
import Cta3 from '@/components/sections/.Cta3';
import Cta5 from '@/components/sections/.Cta5';
import Cta21 from '@/components/sections/.Cta21';
import Cta22 from '@/components/sections/.Cta22';

//import Faqs1 from '@/components/sections/.Faqs1';
import Faqs2 from '@/components/sections/.Faqs2';

import Feature1 from '@/components/sections/.Feature1';

import Pagetitle1 from '@/components/sections/.Pagetitle1';
import Pagetitle3 from '@/components/sections/.Pagetitle3';

import Partner1 from '@/components/sections/.Partner1';

import Partner3 from '@/components/sections/.Partner3';

import Project4 from '@/components/sections/.Project4';
import Project21 from '@/components/sections/.Project21';
import Project22 from '@/components/sections/.Project22';
import Project23 from '@/components/sections/.Project23';
import Project24 from '@/components/sections/.Project24';
import Project31 from '@/components/sections/.Project31';
import Project32 from '@/components/sections/.Project32';

import Supported from '@/components/sections/.Supported';

import Technology from '@/components/sections/.Technology';

import Threestep from '@/components/sections/.Threestep';

import Token1 from '@/components/sections/.Token1';
import Token2 from '@/components/sections/.Token2';

import ProfilCard from '@/components/sections/ProfilCard';
import ProfilList from '@/components/sections/ProfilList';

//import Articles from '@/components/sections/Articles';

export default function SecondaryMarket() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Component">
        <Cta1 />
        <Cta3 />
        <Cta5 />
        <Cta21 />
        <Cta22 />

        <Faqs2 />

        <Feature1 />

        <Pagetitle1 />
        <Pagetitle3 />

        <Partner1 />

        <Partner3 />

        <Project4 />
        <Project21 />
        <Project22 />
        <Project23 />
        <Project24 />
        <Project31 />
        <Project32 />

        <Supported />

        <Technology />

        <Threestep />

        <Token1 />
        <Token2 />

        <ProfilCard />
        <ProfilList />

        {/* <Articles /> */}
      </Layout>
    </>
  );
}
