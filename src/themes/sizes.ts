const base = 2;

const times = {
  times2: base * 2,
  times3: base * 3,
  times4: base * 4,
};

const fonts = {
  default: base * 7,
  defaultTitle: base * 10,
  screenTitle: base * 8,
  sectionTitle: base * 9,
};

export default {
  base,
  fonts,
  ...times,
};
