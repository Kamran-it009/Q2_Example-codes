// sanity/pet.ts
export default {
  name: "pet",
  type: "document",
  title: "Animal",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "color",
      type: "string",
      title: "Color of Animal",
    },
    {
      name: "age",
      type: "number",
      title: "Age of animal",
    },
    {
      name: "picture",
      type: "image",
      title: "Picture",
    },
  ],
};
