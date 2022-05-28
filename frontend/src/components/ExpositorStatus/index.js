import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import styles from './styles';

import ShowMoreButtonWithThreeDots from './../../assets/icons/ShowMoreButtonWithThreeDots';

import Texto   from './../Texto';

import encurtar  from './../../functions/encurtar';
import formatarDia from './../../functions/formatarDia';

import paleta from './../../stylesheets/paleta';

import moment from 'moment';

import ProgressCircle from 'react-native-progress-circle';

import { LinearGradient } from 'expo-linear-gradient';

function porcento(dec = 1, radius = 32, casas = 2) {
  return Number((dec * radius).toFixed(casas));
}

function ExpositorStatus({
  _id,
  contato,
  status = [],
  qtdStatusNaoVisualizados,
  usuario = {},
  ultimoExpositor
}) {
  const [dia, setDia] = useState('');
  const [horario, setHorario] = useState('');
  const [porcentagem, setPorcentagem] = useState(0);

  const ultimoStatus = [...status].pop();
  const escritor   = usuario._id === contato._id;
  const { tipo } = ultimoStatus;
  const radius = 32;

  function calcularPorcentagem() {
    let porcentagem = (qtdStatusNaoVisualizados * 1e2) / status.length;
    setPorcentagem(porcentagem);
  }

  function formatarDataEnvio() {
    let { envio } = [...status].pop();
    
    let dia = formatarDia(envio);
    let horario = moment(envio).format('HH[:]mm');

    setDia(dia);
    setHorario(horario);
  }

  useEffect(() => {
    if(!escritor) calcularPorcentagem();
    formatarDataEnvio();
  }, [qtdStatusNaoVisualizados, status]);

  return (
    <>
      <View style={styles.expositorStatus} key={`expositor-status-${_id}`}>
        <TouchableOpacity style={styles.preview}>
          <ProgressCircle
            radius={radius}
            percent={porcentagem}
            borderWidth={porcento(859 / 1e4, radius)}
            shadowColor={paleta.silver}
            bgColor="white"
            color={paleta.peterRiver}>

            {tipo === 'Texto' ? (
              <LinearGradient style={styles.previewTexto} colors={[paleta.wetAsphaltTenPercentIncreased, paleta.peterRiver]}>
                <Texto style={styles.textoPreviewTexto} traduzir={false}>
                  {encurtar(ultimoStatus.texto, 32)}
                </Texto>
              </LinearGradient>

            ) : tipo === 'Imagem' ? (
              <Image source={{ uri: ultimoStatus.imagem }} style={{
                width:  1.625 * radius,
                height: 1.625 * radius,
                borderRadius: radius,
              }} />

            ) : null}
          </ProgressCircle>

          <View style={styles.textos}>
            <Texto style={styles.apelido} traduzir={escritor}>
              {escritor ? 'Meu status' : contato.apelido}
            </Texto>

            <Texto style={styles.envio}>
              <Texto>{dia}</Texto>
              <Texto traduzir={false}>&nbsp;</Texto>
              <Texto traduzir={false}>{horario}</Texto>
            </Texto>
          </View>
        </TouchableOpacity>

        {escritor ? (
          <TouchableOpacity style={styles.abrirMenu}>
            <ShowMoreButtonWithThreeDots
              width={16}
              height={16}
              fill={paleta.wetAsphalt}
              style={styles.showMoreButtonWithThreeDots} />
          </TouchableOpacity>
        ) : null}
      </View>

      {!ultimoExpositor && !escritor ? (
        <View style={styles.rodape}>
          <View style={styles.linhaExterna} />
        </View>
      ) : null}
    </>
  );
}

export default ExpositorStatus;