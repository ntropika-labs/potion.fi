interface PropsStringMap {
  [iterator: string]: string;
};

interface PropsNumberMap {
  [iterator: string]: number;
};

const iconWeights = ["bold", "light", "thin", "regular"];
const strokeWeightMap: PropsNumberMap = {
  bold: 24,
  light: 12,
  thin: 8,
  regular: 16,
};

const weightValidator = (value: string) => iconWeights.includes(value);
const weightToStroke = (weight: string) => strokeWeightMap[weight];

export {
  PropsStringMap,
  weightValidator,
  weightToStroke,
}
