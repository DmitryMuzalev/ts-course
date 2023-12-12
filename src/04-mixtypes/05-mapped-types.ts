type PcBrand = {
  name: string;
  country: string;
  createAt: Date;
};

type WellKnowBrands = "apple" | "dell" | "hp" | "huawei" | "microsoft";

type MyPcRecords = {
  [BrandKey in WellKnowBrands]?: PcBrand;
};

const brandRecordsExample: MyPcRecords = {
  apple: { country: "USA", createAt: new Date(1995, 11, 11), name: "lisa" },
};

function printPcRecords(catalog: MyPcRecords) {
  console.log(catalog.apple?.country);
}

type PartOfWindow = {
  [Key in "document" | "screen" | "navigator"]?: Window[Key];
};

const partExample: PartOfWindow = {
  document: window.document,
};
