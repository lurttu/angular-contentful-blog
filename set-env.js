const fs = require("fs");
// Configure Angular `environment.ts` file path
const targetPath = "./src/environments/environment.ts";
require("dotenv").config({ path: ".env" });
// `environment.ts` file structure
const envConfigFile = `export const environment = {
    production: false,
    contentful: {
      space: "${process.env.SPACE_ID}",
      accessToken: "${process.env.CONTENTFUL_ACCESS_TOKEN}",

      contentTypeIds: {
        blogPost: 'blogPost' // EXAMPLE
      }
    }
  };
`;
console.log(
  "The file `environment.ts` will be written with the following content: \n"
);
console.log(envConfigFile);
fs.writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    throw console.error(err);
  } else {
    console.log(
      `Angular environment.ts file generated correctly at ${targetPath} \n`
    );
  }
});
