let determineConfigDir = () => {
   
    if(process.env.CONFIG_DIR === undefined || process.env.CONFIG_DIR == null) { 
        return '.'
    }

    return process.env.CONFIG_DIR
}

let determineEnv = () => {

    const defaultEnv = 'development'

    if(process.env.NODE_ENV === undefined || process.env.NODE_ENV == null) {  
        return defaultEnv
    } else if(process.env.NODE_ENV == 'development') {
        return 'development'
    } else if(process.env.NODE_ENV == 'production') {
        return 'production'
    } else {
        return defaultEnv
    }
}
let determineConfigFile =() => {

    // TODO: Fill in code here to determine the configuration file.
    // This is likely similar to your solution for milestone 1.
}

module.exports = function() {
        
    const configFile = determineConfigFile()
    return require(configFile)
}