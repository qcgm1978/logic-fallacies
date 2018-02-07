// reference: https://beta.observablehq.com/d/c83816ec6a91ab91
const num_points=125;
const squared = (val) => Math.pow(val, 2)
const make_array = (n) => [...(new Array(n))]
const pairwise_distances = () => {
    // initialize some variables we use inside our loops
    let x_i, x_j, distance;
    // make_array is another helper function that just generates a new empty array of a given size.
    const pw_dists = make_array(squared(num_points));
    for (let i = 0; i < num_points; i++) {
        x_i = data[i].location;
        // deal with the point itself here.
        pw_dists[mat_ind(i, i)] = { source: i, target: i, distance: 0 };
        for (let j = i + 1; j < num_points; j++) {
            x_j = data[j].location;
            distance = calc_distance(x_i, x_j);
            pw_dists[mat_ind(i, j)] = { source: i, target: j, distance };
            pw_dists[mat_ind(j, i)] = { source: j, target: i, distance };
        }
    }
    return pw_dists
}