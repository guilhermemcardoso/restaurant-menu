import {ENV} from '@env';

const log = ENV === 'development' ? console.log : () => {}

export default log;