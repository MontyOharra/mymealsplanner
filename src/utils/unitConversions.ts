export const weightConversionFactors = {
    grams: 1.000,
    kilograms: 1000.000,
    pounds: 453.592,
    ounces: 28.3495,
    milligrams: 1000,
};

export const volumeConversionFactors = {
    milliliters: 1000,
    liters: 1,
    gallons: 0.264172,
    pints: 0.568261,
    quarts: 0.125,
    cups: 0.00025,
};

export function convertGramsToWeightUnit(grams : number, unit : string) : number {
    switch (unit) {
        case 'grams':
            return grams * weightConversionFactors.grams;
        case 'kilograms':
            return grams * weightConversionFactors.kilograms;
        case 'pounds':
            return grams * weightConversionFactors.pounds;
        case 'ounces':
            return grams * weightConversionFactors.ounces;
    }
}
    return grams * weightConversionFactors.grams / weightConversionFactors.ounces;
}

export function convertWeightUnitToGrams(unit : string, weight : number) : number {
    switch (unit) {
        case 'grams':
            return weight * weightConversionFactors.grams;
        case 'kilograms':
            return weight * weightConversionFactors.kilograms;
        case 'pounds':
            return weight * weightConversionFactors.pounds;
        case 'ounces':
            return weight * weightConversionFactors.ounces;
    }
}