const axios = require("axios");
const fs = require("fs");

const url = process.argv[2];
const filePath = process.argv[3];

const downloadFile = (url, filePath) => {
  axios.get(url).then((response) => {
    const { data } = response;
    const bytes = data.length;

    fs.writeFile(filePath, data, () => {
      console.log(`Downloaded and saved ${bytes} bytes to ${filePath}`);
    });
  });
};

downloadFile(url, filePath);
