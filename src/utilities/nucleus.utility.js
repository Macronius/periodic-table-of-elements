

const nucleus_utility = (p5, fundamental_masses, mass, number) => {

    const {proton, neutron, electron} = fundamental_masses;
    const mass_protons = number * 1.007316;
    const mass_electrons = number * 0.000549;
    const mass_neutrons = mass - (mass_protons + mass_electrons);

    const num_protons = number;
    const num_electrons = number;
    const num_neutrons = mass_neutrons / 1.008781;

    const num_total = num_protons + num_neutrons;

    // const total_num1 = number + [ mass - mass_protons - mass_electrons ] / 1.008781;
    // const total_num2 = number + [ mass - number*1.007316 - number*0.000549 ] / 1.008781;
    // const total_num3 = number + [ mass - number*(1.007316 + 0.000549) ] / 1.008781;
    // const total_num4 = number + [ mass*number/number - number*(1.007316 + 0.000549) ] / 1.008781;
    // const total_num5 = number*(1 + mass/number - (1.007865) ) / 1.008781;

    // console.log(num_total);
    // console.log(`${total_num1} ${total_num2} ${total_num3} ${total_num4} ${total_num5}`);
}

export default nucleus_utility;