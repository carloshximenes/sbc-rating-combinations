const generateRangeOVR = (min, max) => {
    const arraySize = max - min + 1;
    return Array.from({ length: arraySize }, (v, k) => Number(min) + k);
}

export default generateRangeOVR;