import Paragraph from "./Paragraph";
import BoldText from "./BoldText";
import Heading from "./Heading";
import ModuleInfo from "./ModuleInfo";
import ModuleImage from "./ModuleImage";
import ModuleTechnical from "./ModuleTechnical";
import ModuleList from "./ModuleList";

export default {
	base: [Heading, Paragraph, BoldText, ModuleInfo, ModuleImage, ModuleTechnical, ModuleList],
};
