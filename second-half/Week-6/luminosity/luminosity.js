var luminosity = 0;

luminosity = 0.2126*process.argv[2]  + 0.7152*process.argv[3] + 0.0722*process.argv[4];

if (luminosity > 155) {
    console.log('light')
    
} else {
    console.log('dark')
}