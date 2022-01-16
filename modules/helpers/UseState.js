export default class UseState {
    value = "";
    onChange = () => {};
    constructor({ initValue, onChange }) {
        this.value = initValue;
        this.onChange = onChange;
    }

    setValue(value) {
        this.value = value;
        this.onChange(value);
    }
}