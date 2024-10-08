function triangle(value1, type1, value2, type2) {

    const validTypes = ['leg', 'hypotenuse', 'adjacent angle', 'opposite angle', 'angle'];
    if (!validTypes.includes(type1) || !validTypes.includes(type2)) {
        console.log("Invalid type input. Please try again.");
        return "failed";
    }

    if (value1 <= 0 || value2 <= 0) {
        console.log("Zero or negative input");
        return "Zero or negative input";
    }

    let a, b, c, alpha, beta;

    if (type1 === 'leg' && type2 === 'hypotenuse') {
        a = value1;
        c = value2;
        if (a >= c) {
            console.log("Leg cannot be greater than or equal to the hypotenuse.");
            return "Leg cannot be greater than or equal to the hypotenuse.";
        }
        b = Math.sqrt(c * c - a * a);
        alpha = Math.asin(a / c) * (180 / Math.PI);
        beta = 90 - alpha;
    } else if (type1 === 'hypotenuse' && type2 === 'leg') {
        return triangle(value2, 'leg', value1, 'hypotenuse');
    } else if (type1 === 'opposite angle' && type2 === 'leg') {
        alpha = value1;
        a = value2;
        if (alpha <= 0 || alpha >= 90) {
            console.log("Angle must be acute.");
            return "Angle must be acute.";
        }
        c = a / Math.sin(alpha * Math.PI / 180);
        b = Math.sqrt(c * c - a * a);
        beta = 90 - alpha;
    } else if (type1 === 'angle' && type2 === 'hypotenuse') {
        alpha = value1;
        c = value2;
        if (alpha <= 0 || alpha >= 90) {
            console.log("Angle must be acute.");
            return "Angle must be acute.";
        }
        a = c * Math.sin(alpha * Math.PI / 180);
        b = c * Math.cos(alpha * Math.PI / 180);
        beta = 90 - alpha;
    } else {
        console.log("Invalid or unsupported type combination.");
        return "failed";
    }

    console.log(`c (hypotenuse): ${c}`);
    console.log(`a (leg): ${a}`);
    console.log(`b (leg): ${b}`);
    console.log(`alpha (angle opposite to a): ${alpha} degrees`);
    console.log(`beta (angle opposite to b): ${beta} degrees`);

    return "success";
}

console.log(triangle(7, "leg", 18, "hypotenuse"))
