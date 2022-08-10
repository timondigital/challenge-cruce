import IcoMoon, { iconList } from "react-icomoon";
import iconSet from "../../asset/icons/selection.json";

//list of icons
//console.log(iconList(iconSet));

const Icon = (props) => <IcoMoon iconSet={iconSet} {...props} />;

export default Icon;
