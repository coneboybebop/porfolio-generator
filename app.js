const commandLineArgs = process.argv.slice(2, process.argv.length);

console.log(commandLineArgs);

const printProfileData = profileDataArr => {

    
    profileDataArr.forEach(profileItem => console.log(profileItem))

};

