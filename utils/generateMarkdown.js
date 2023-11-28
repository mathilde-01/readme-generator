// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  const badges = {
    MIT: "[![License: MIT](https://img.shields.io/badge/license-MIT-blue)]",
    "Apache 2.0":
      "[![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-blue)](https://www.apache.org/licenses/LICENSE-2.0)",
    GNU: "[![License: GNU](https://img.shields.io/badge/license-GNU-green)](https://www.gnu.org/licenses/)",
    Mozilla:
      "[![License: Mozilla](https://img.shields.io/badge/license-Mozilla-red)](https://opensource.org/licenses/MPL-2.0)",
  };

  return badges[license] || "";
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  const licenseLinks = {
    MIT: "https://opensource.org/licenses/MIT",
    "Apache 2.0": "https://www.apache.org/licenses/LICENSE-2.0",
    GNU: "https://www.gnu.org/licenses/gpl-3.0.html",
    Mozilla: "https://opensource.org/licenses/MPL-2.0",
  };

  return licenseLinks[license] || "";
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  return `## License    
  
  This project is licensed by [${license}](${renderLicenseLink(
    license
  )}) license.    
  
  ${renderLicenseBadge(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description  
  ${data.description || "Project description"}

  ## Table of contents
  - [Installation](#Installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)

  ## Installation
  ${data.installation || "Installation description"}

  ## Usage
  ${data.usage || "Usage information"}

  ## Contributing
 ${data.contributing || "Contributing information"}
 
  ## Tests
  ${data.tests || "Tests information"}

  ${renderLicenseSection(data.license)} 

  ## Questions  
  Please reach out to ${
    data.author
  } if you have any questions regarding this project.

`;
}

module.exports = generateMarkdown;
