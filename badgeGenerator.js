//create a function that will take in the choice made by inquirer, and generate a badge based on that selection

let badgeImage = (licenseChoice) => {
    if(licenseChoice === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    if (licenseChoice === "Apache-2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
    if (licenseChoice === "GPL-3.0") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    }
    if (licenseChoice === "BSD-2-Clause") {
        return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    }
    if (licenseChoice === "BSD-3-Clause") {
        return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    }
    if (licenseChoice === "BSD-4-Clause") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
}

//export this so that it can be used in index.js
module.exports = badgeImage;


