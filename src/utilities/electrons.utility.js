


const electron_dot_structure_utility = (p5, number, radius, offset, r_e_max) => {

    // number of electrons equals number of protons
    let total_remaining = number;
    let values;
    const orbitals = [2,8,8,18,18,32,32];

    // console.log("number: ", number, " total_remaining: ", total_remaining);

    let energy_levels;

    if (number <= 2) {
        // console.log("1st energy level endpoint");
        energy_levels = 1;
    }
    if (number > 2  &&  number <= 10) {
        // console.log("2nd energy level endpoint");
        energy_levels = 2;
    }
    if (number > 10  &&  number <= 18) {
        // console.log("3rd energy level endpoint");
        energy_levels = 3;
    }
    if (number > 18  &&  number <= 36) {
        // console.log("4th energy level endpoint");
        energy_levels = 4;
    }
    if (number > 36  &&  number <= 54) {
        energy_levels = 5;
    }
    if (number > 54  &&  number <= 86) {
        energy_levels = 6;
    }
    if (number > 86  &&  number <= 118) {
        energy_levels = 7;
    }

    let delta = p5.width/2 / (energy_levels +2);

    let proceed = true;

    for (let i = 0; i < energy_levels; i++) {

        const r_n = delta*(2 + i);
        const r_e = r_e_max;
        const orbital_i = orbitals[i];

        if (total_remaining < orbital_i) {
            values = total_remaining;
            proceed = false;
        }
        else {
            values = orbital_i;
        }
        

        // p5.stroke("#c8c8c849");
        // p5.stroke("#515151");
        p5.stroke(218);
        p5.strokeWeight(0.5);
        p5.noFill();
        p5.circle(0, 0, r_n -1);

        for (let j = 0; j < values; j++) {

            p5.fill("#ffffff");
            p5.stroke(218);
            p5.strokeWeight(0.5);

            // const x = r_n * p5.cos(360 * j/orbital_i);
            // const y = r_n * p5.sin(360 * j/orbital_i);
            const x = r_n * p5.cos(360 * j/values);
            const y = r_n * p5.sin(360 * j/values);

            p5.circle(x, y, r_e);
        }

        if (proceed) {
            total_remaining -= orbital_i;
        }
        // console.log("total_remaining: ", total_remaining);
    }

}

export default electron_dot_structure_utility;