import Paragraph from "./Paragraph";
import BoldText from "./BoldText";
import Heading from "./Heading";
import ModuleInfo from "./ModuleInfo";
import ModuleImage from "./ModuleImage";
import ModuleVideo from "./ModuleVideo";
import ModuleTechnical from "./ModuleTechnical";
import ModuleList from "./ModuleList";
import ResearchModalHeader from "./ResearchModalHeader";
import ResearchModalList from "./ResearchModalList";
import ResearchImageWithText from "./ResearchImageWithText";

export default {
	base: [Heading, Paragraph, BoldText, ModuleInfo, ModuleImage, ModuleVideo, ModuleTechnical, ModuleList, ResearchModalHeader, ResearchModalList, ResearchImageWithText],
};
