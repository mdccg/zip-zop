import React from 'react';
import { ScrollView } from 'react-native';
import styles from './styles';

import Texto   from './../../components/Texto';
import Header   from './../../components/Header';
import Navegador from './../../components/Navegador';

function Home() {

  return (
    <>
      <ScrollView>
        <Header />
        <Navegador />

        <Texto negrito style={{ padding: 8 }}>Nunca pare até se orgulhar de você mesmo</Texto>
      </ScrollView>
    </>
  );
}

export default Home;