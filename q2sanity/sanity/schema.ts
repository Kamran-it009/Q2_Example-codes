import { type SchemaTypeDefinition } from "sanity";
import Pet from "./pet";
import Poster from "./poster";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Pet],
};
