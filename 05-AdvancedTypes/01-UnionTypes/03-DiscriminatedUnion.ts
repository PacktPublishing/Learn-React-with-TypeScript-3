interface ITextbox {
  control: "Textbox";
  value: string;
  multiline: boolean;
}

interface IDatePicker {
  control: "DatePicker";
  value: Date;
}

interface INumberSlider {
  control: "NumberSlider";
  value: number;
}

interface ICheckbox {
  control: "Checkbox";
  value: boolean;
}

type Field = ITextbox | IDatePicker | INumberSlider | ICheckbox;

function intializeValue(field: Field) {
  switch (field.control) {
    case "Textbox":
      field.value = "";
      break;
    case "DatePicker":
      field.value = new Date();
      break;
    case "NumberSlider":
      field.value = 0;
      break;
    case "Checkbox":
      field.value = false;
      break;
    default:
      const shouldNotReach: never = field;
  }
}
