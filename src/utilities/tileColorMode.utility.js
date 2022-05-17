
const colorMap_phases = {
    "gas": "#055B34",
    "liquid": "#106CAF",
    "solid": "#ca1827",
    "gas-a": "#2da46e",
    "liquid-a": "#37aafc",
    "solid-a": "#f05360",
}

const colorMap_categories = {
    'noble gas': '#77649B',
    'noble gas-a': '#ece3fc',
    'alkaline earth metal': '#F28832',
    'alkaline earth metal-a': '#ffdabc',
    'diatomic nonmetal': '#8384B0',
    'diatomic nonmetal-a': '#cecffd',
    'polyatomic nonmetal': '#5AA5DD',
    'polyatomic nonmetal-a': '#c5e6ff',
    'alkali metal': '#E43638',
    'alkali metal-a': '#ffa5a5',
    'transition metal': '#FAE122',
    'transition metal-a': '#fff6b6',
    'post-transition metal': '#5BAA58',
    'post-transition metal-a': '#bafab7',
    'lanthanide': '#9ABD47',
    'lanthanide-a': '#d6fc7d',
    'actinide': '#79B172',
    'actinide-a': '#d1ffcb',
    'metalloid': '#77B8B0',
    'metalloid-a': '#c8fcf6',
}


const tileColorMode_utility = (mode, value, elemObj) => {

    

    if (mode === "phases") {

        let melt, boil;

        if (elemObj) {
            ({melt, boil} = elemObj);
        }

        if (value) {
            if (value > boil) {
                return [colorMap_phases["gas"], colorMap_phases["gas-a"]];
            }
            else if (value > melt) {
                return [colorMap_phases["liquid"], colorMap_phases["liquid-a"]];
            }
            else if (value < melt) {
                return [colorMap_phases["solid"], colorMap_phases["solid-a"]];
            }
        }
    }
    else if (mode === "categories") {
        return [colorMap_categories[value], colorMap_categories[`${value}-a`]];
    }

}
export default tileColorMode_utility;