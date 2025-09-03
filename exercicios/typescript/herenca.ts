type Animal = {
  especie: string;
};

type Cachorro = Animal & {
  latir: () => void;
};