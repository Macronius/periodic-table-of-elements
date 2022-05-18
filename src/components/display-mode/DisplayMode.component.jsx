
import React, { useContext, useState } from 'react';

import { DisplayModeContext } from '../../contexts/displayMode.context';
import { TemperatureValueContext } from '../../contexts/temperatureValue.context';

import { CategoriesKeyElement } from '../../components/CategoriesKey.component';

import styled from 'styled-components';


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

const keys = Object.keys(colorMap_categories);
const categoriesKeys = [];
for (let i = 0; i < keys.length; i+=2) {
    categoriesKeys.push(keys[i]);
}


const DisplayModeSection = () => {

    let tempVal;
    const [tVal, setTVal] = useState(298);
    const [mode, setMode] = useState("categories");


    const {displayMode, setDisplayMode} = useContext(DisplayModeContext);
    const {setTemperatureValue} = useContext(TemperatureValueContext);


    const changeModeHandler = e => {
        e.preventDefault();
        const modeRange = document.getElementById("display-mode").value;
        console.log("modeRange: ", modeRange);
        setMode(modeRange);
        setDisplayMode(modeRange);
    }


    const changeTempHandler = e => {
        e.preventDefault();
        tempVal = e.target.value;
        setTVal(tempVal);
        setTemperatureValue(tempVal);
    }


    return (
        <DisplayModeSectionContainer>

            <TopSection>
                <div>
                    <h2>Choose a display mode</h2>
                </div>
                <div>
                    <form>
                        <SelectSection>
                            <select id="display-mode" onChange={changeModeHandler}>
                                <option value="categories">Categories</option>
                                <option value="phases">Phases</option>
                            </select>
                        </SelectSection>
                    </form>
                </div>
            </TopSection>

            <hr />

            <ContentContainer>
                <form>
                    <div className="second-container">
                        {
                            displayMode === "phases" ? (
                                <TempRangeContainer>

                                    <ControlsContainer>
                                        <label>
                                            Temperature (between 0 and 8000K):
                                            <br />
                                            <input 
                                                type="range"
                                                name="temperature"
                                                min="0"
                                                max="6000"
                                                value={tVal}
                                                onChange={changeTempHandler}
                                            />
                                        </label>
                                        <h3>Temp value: {tVal}</h3>
                                    </ControlsContainer>

                                    <ColoredKeyContainerPhases>

                                        <PhaseColorContainer>
                                            <div className="color-square" 
                                                style={
                                                    {
                                                        backgroundImage: `
                                                            
                                                            linear-gradient(45deg, #055B34, #07b265)
                                                        `,
                                                    }
                                                }
                                            />
                                            <h4>Gas:</h4>
                                        </PhaseColorContainer>

                                        <PhaseColorContainer>
                                            <div className="color-square" 
                                                style={
                                                    {
                                                        backgroundImage: `
                                                            linear-gradient(45deg, #106CAF, #1a9ffe)
                                                        `,
                                                    }
                                                }
                                            />
                                            <h4>Liquid:</h4>
                                        </PhaseColorContainer>

                                        <PhaseColorContainer>
                                            <div className="color-square" 
                                                style={
                                                    {
                                                        backgroundImage: `
                                                            linear-gradient(45deg, #ca1827, #fe2032)
                                                        `,
                                                    }
                                                }
                                            />
                                            <h4>Solid:</h4>
                                        </PhaseColorContainer>

                                    </ColoredKeyContainerPhases>

                                </TempRangeContainer>
                            ) : (
                                <ColoredKeyContainer>
                                    {
                                        categoriesKeys.map( category => {
                                            const color1 = colorMap_categories[category];
                                            const color2 = colorMap_categories[`${category}-a`];
                                            return (
                                                <CategoriesKeyElement 
                                                    key={category}
                                                    category={category}
                                                    colorOne={color1}
                                                    colorTwo={color2}
                                                />
                                            )
                                        })
                                    }

                                </ColoredKeyContainer>
                            )
                        }
                    </div>
                </form>
            </ContentContainer>

        </DisplayModeSectionContainer>
    )
}
export default DisplayModeSection;

const DisplayModeSectionContainer = styled.div`
    width: 692px;                   /* width*10.5 */
    height: calc(64px *3);          /* width*3 */
    margin: 0 auto;
    margin-left: 2px;
    padding: 0.5rem;
    box-shadow: 0 0 7px slategray;
    border-radius: 5px;

    h2 {
        font-size: 27px;
        font-weight: bold;
        text-align: center;
    }

    hr {
        padding: 2px;
        margin: 0;
        height: 3px;
        width: 100%;
        backgroundColor: yellow;
        border: none;
        outline: none;
    }
`

    

const TopSection = styled.div`
    height: 30%;
    display: flex;
    justify-content: space-evenly;
    padding: 1rem;
`

const SelectSection = styled.div`
    margin-left: 4rem;
    
    select {
        font-size: 2rem;
        border: none;
        border-radius: 7px;
        padding: .45rem;
        box-shadow: 0 0 0.5px lightgray;
    }
`

const ContentContainer = styled.div`
    width: 100%;
    height: 65%;
    display: flex;
    justify-content: space-around;

    .second-container {
        width: 100%;
        height: 100%;
    }

`



const TempRangeContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 1.75rem;
    border-radius: 17px;
`

const ControlsContainer = styled.div`
    padding: .75rem;
    background-color: #fff;
    height: 50%;
    border: none;
    border-radius: 7px;
    box-shadow: 0 0 0.5px lightgray;
`

const ColoredKeyContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 90%;
    height: 90%;
    margin: 1rem auto;
    padding: .5rem;
    border: none;
    border-radius: 7px;
    background-color: #fff;
`
const ColoredKeyContainerPhases = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenlty;
    align-items: space-around;
    width: 90%;
    height: 90%;
    margin: 1rem auto;
    margin-left: 2rem;
    padding: .5rem;
    border: none;
    border-radius: 7px;
    background-color: #fff;
`

const PhaseColorContainer = styled.div`
    display: flex;
    margin: 0.25rem 1rem;

    .color-square {
        margin-right: 1rem;
        width: 22px;
        height: 22px;
        border-radius: 3px;
    }
`