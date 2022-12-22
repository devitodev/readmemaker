// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return ` ![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `* [License](#license)`;
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License \n this project is licensed under the ${license} license`;
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ${renderLicenseBadge(data.license)}
  ## Description: 
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  ${renderLicenseLink(data.license)}
  * [Questions](#questions)
  ## Installation 
  ${data.dependencies}
  ## Usage 
  ${data.utility}
  ## Contribution
  ${data.contribute}
  ${renderLicenseSection(data.license)}
  ## Tests
  ${data.testing}
  ## Questions
  If you have any questions you can email me at ${data.email}\n
  You can see more of my work at [${data.username}](https://github.com/${data.username})`
  ;
}

module.exports = generateMarkdown;
