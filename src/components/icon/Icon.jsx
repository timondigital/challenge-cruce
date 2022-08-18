import IcoMoon, { iconList } from "react-icomoon";
import iconSet from "../../asset/icons/selection.json";

// descomentar el console para ver la lista de iconos completa o ver el demo en "asset/icomoon"
// console.log(iconList(iconSet));

const Icon = (props) => <IcoMoon iconSet={iconSet} {...props} />;

export default Icon;
