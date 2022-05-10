

export default function determineColorScheme({
    Tinput, 
    boil, melt
}) {

    if (mode === "phase") {

        switch(Tinput) {
            case Tinput > boil:
                return "vapor";
            case Tinput > melt:
                return "liquid";
            case Tinput < melt:
                return "solid";
            default:
                return "";
        }
    }
}