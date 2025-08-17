const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse");

const csvFilePath = path.join(__dirname, "../data/products-100.csv");

exports.readProductsFromCSV = () => {
  return new Promise((resolve, reject) => {
    const results = [];

    fs.createReadStream(csvFilePath)
      .pipe(parse({ columns: true, trim: true }))
      .on("data", (data) => results.push(data))
      .on("end", () => resolve(results))
      .on("error", (err) => reject(err));
  });
};
