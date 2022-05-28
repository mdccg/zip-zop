import moment from 'moment';

import i18n from 'i18n-js';

function formatarDia(data) {
  let hoje  = false;
  let ontem  = false;
  let formato = 'MMM Do[,] YYYY';

  if(moment(data).format('DD/MM/YYYY') === moment().format('DD/MM/YYYY'))
    hoje = true;

  if(moment(data).format('DD/MM/YYYY') === moment().subtract(1, 'day').format('DD/MM/YYYY'))
    ontem = true;

  if(i18n.locale === 'pt-br') formato = 'DD [de] MMMM [de] YYYY';

  return (
    hoje ? i18n.t('Hoje', { defaultValue: 'Today' }) :
    ontem ? i18n.t('Ontem', { defaultValue: 'Yesterday' }) : 
    moment(data).format(formato)
  );
}

export default formatarDia;