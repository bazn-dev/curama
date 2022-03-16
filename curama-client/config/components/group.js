import {
  required,
  requiredIf,
  minLength,
  maxLength,
  minValue,
  maxValue,
  between,
  alpha,
  alphaNum,
  numeric,
  integer,
  decimal,
  email,
  ipAddress,
  macAddress,
  sameAs,
  url
} from "vuelidate/lib/validators";

export const CONFIG = {
  name: "groups",
  title: "Группы",
  headers: [{text: "Название", value: "title"}, {
    text: "Действия",
    value: "actions",
    align: "right",
    sortable: false
  }],
  fields: [{
    name: "title",
    label: "Название",
    type: "text",
    disabled: false,
    clearable: true,
    hint: "Title hint",
    mask: "",
    persistentHint: true,
    readonly: false
  }],
  validations: {
    editedItem: {
      title: {
        required
      }
    }
  },
  editedItem: {title: ""},
  defaultItem: {title: ""}
};
