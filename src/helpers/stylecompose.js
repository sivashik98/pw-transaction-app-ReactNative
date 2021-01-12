import flatMapDeep from 'lodash/flatMapDeep';

export const compose = (...styles) => flatMapDeep(styles).filter((v) => v);

export const when = (cond, ...styles) => (cond ? styles : null);
