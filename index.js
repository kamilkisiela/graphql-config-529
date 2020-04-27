const { loadConfigSync } = require("graphql-config");
const { printSchema } = require("graphql");
const { strictEqual } = require("assert");
const config = loadConfigSync({});

const schema = config.getDefault().getSchemaSync();

strictEqual(
  normalize(printSchema(schema)),
  normalize(
    /* GraphQL */ `
      type Query {
        foo: String!
      }
    `
  ),
  "Something is brokeeeeeennn"
);

console.log('It works!')

function normalize(block) {
  return block.replace(/(\s+)/g, " ").trim();
}
