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
  name: "estates",
  title: "Имущество",
  headers: [{text: "Название", value: "title"}, {
    text: "Действия",
    value: "actions",
    align: "right",
    sortable: false
  }],
  fields: [{
    name: "fullName",
    label: "ФИО",
    type: "text",
    disabled: false,
    clearable: true,
    hint: "Name hint",
    mask: "",
    persistentHint: true,
    readonly: false
  }, {
    name: "username",
    label: "Логин",
    type: "text",
    disabled: false,
    clearable: true,
    hint: "Login hint",
    mask: "",
    persistentHint: true,
    readonly: false
  }, {
    name: "password",
    label: "Пароль",
    type: "password",
    disabled: false,
    clearable: true,
    hint: "Password hint",
    mask: "",
    persistentHint: true,
    readonly: false
  }],
  validations: {
    editedItem: {
      fullName: {
        required
      },
      username: {
        required
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  },
  editedItem: {fullName: "", username: "", password: ""},
  defaultItem: {fullName: "", username: "", password: ""}
};
