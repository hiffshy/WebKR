import "./styles.css";
import {Datepicker} from "vanillajs-datepicker";

const elem = document.getElementById("picker");
const datepicker = new Datepicker(elem, {});
const test = () => {
    document.getElementById("selected-date").innerHTML = datepicker.getDate("dd MM y");
};
elem.addEventListener("changeDate", test);
