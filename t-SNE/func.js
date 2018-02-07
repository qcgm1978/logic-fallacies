// reference: https://beta.observablehq.com/d/c83816ec6a91ab91
const data =()=> {
    
    const make_centroid = (ndim) => {
      const low = -cluster_spread/2;
      const high = cluster_spread/2;
      const point_gen = d3.randomUniform(low, high);
      return () => [...(new Array(ndim))].map(point_gen);
    }
    
    const gen_centroids = (n, ndim) => {
      const center_maker = make_centroid(ndim);
      return [...(new Array(n))].map(center_maker)
    }
    
    const centroids = gen_centroids(num_clusters, num_dimensions)
  
    const sample_from_centroid = (nsamples, centroid, centroid_id) => {
      const rnorm = d3.randomNormal(0, random_noise_sd);
      const get_sample = () => ({group:centroid_id, location : centroid.map(d => d + rnorm())});
      return [...(new Array(nsamples))].map(get_sample);
    }
    
    function gen_data_from_centroids(centroids, nsamples){
      return centroids.reduce(
        (data, d, i) => [...data, ...sample_from_centroid(nsamples, d, i)], 
        [])
        .map((d,i) => (Object.assign({id: i},d,{}))) // add in node id in addition to the centroid one.
    }
    
    return gen_data_from_centroids(centroids, num_samples)
  }
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